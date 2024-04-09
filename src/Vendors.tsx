import {Link} from '@tanstack/react-router';
import {useEffect, useState} from 'react';

type Vendor = {name: string; website: string; email: string; id: number};

export default function Vendors() {
  const [vendors, setVendors] = useState<Vendor[]>();
  useEffect(() => {
    async function fetchVendorData() {
      const result = await fetch(
        'https://docs.google.com/spreadsheets/d/16bUypAq6vakaXLdMifvuMrVohRn9WOAkMxpgCEQVHkQ/gviz/tq?tqx=out:csv&sheet=vendors',
        {
          headers: new Headers({'Content-Type': 'text/csv'}),
        },
      );

      const vendorCsvData = await result.text();

      if (cancel) {
        return;
      }

      const nextVendors = vendorCsvData
        .split('\n')
        .slice(2)
        .map((vendorCsvLine, vendorIndex) => {
          const vendorCsvTokens = vendorCsvLine.split(',');
          const vendor: Vendor = {
            name: vendorCsvTokens.at(0)?.slice(1, -1) ?? '',
            website: vendorCsvTokens.at(1)?.slice(1, -1) ?? '',
            email: vendorCsvTokens.at(2)?.slice(1, -1) ?? '',
            id: vendorIndex,
          };
          return vendor;
        });

      setVendors(nextVendors);
    }

    let cancel = false;
    void fetchVendorData();
    return () => {
      cancel = true;
    };
  }, []);

  if (vendors === undefined) {
    return (
      <div className="justify-center h-100dvh w-100dvw items-center">
        <div className="h-30 w-30 i-svg-spinners-3-dots-move" />
      </div>
    );
  }

  return (
    <div className="gap-6 w-full max-w-screen-md p4 mx-auto">
      <Link className="button self-start" to="/">
        <div className="flex-row items-center">
          <div className="i-uil-angle-left h-2rem w-2rem ml--0.75rem" />
          <div>Home</div>
        </div>
      </Link>
      <div className="gap-4 flex-row flex-wrap justify-center">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="border-2 border-green-8 rounded-lg p4 max-w-full shadow shadow-lg bg-green-1"
          >
            <div className="font-bold text-lg overflow-hidden">
              {vendor.name}
            </div>
            <div className="overflow-hidden">
              <a
                className="underline"
                href={
                  vendor.website.toLowerCase().startsWith('http')
                    ? vendor.website
                    : `http://${vendor.website}`
                }
              >
                {vendor.website}
              </a>
            </div>
            <div className="overflow-hidden">
              <a className="underline" href={`mailto:${vendor.email}`}>
                {vendor.email}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="items-center gap-4 justify-center flex-wrap flex-row text-lg">
        <a
          className="flex flex-row items-center"
          href="https://docs.google.com/forms/d/e/1FAIpQLScW2b5tIJq5WzAjHLjk9cTlqT93gJx-y7-sl89hDb4YbHQaFw/viewform?usp=sf_link"
        >
          <div className="i-uil-file-question-alt h-2rem w-2rem" />
          <div className="underline">Become a Vendor</div>
        </a>
        <a
          className="flex flex-row"
          href="https://drive.google.com/drive/folders/1foZn0lQcxg2cO0QywMBbYyIXPIzxjzak?usp=sharing"
        >
          <div className="i-uil-folder-info h-2rem w-2rem" />
          <div className="underline">Vendor & Entertainment Resources</div>
        </a>
      </div>
    </div>
  );
}
