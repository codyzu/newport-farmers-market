import {useEffect, useState} from 'react';

export default function News() {
  const [news, setNews] = useState<string[]>();
  useEffect(() => {
    async function fetchVendorData() {
      const result = await fetch(
        'https://docs.google.com/spreadsheets/d/16bUypAq6vakaXLdMifvuMrVohRn9WOAkMxpgCEQVHkQ/gviz/tq?tqx=out:csv&sheet=news',
        {
          headers: new Headers({'Content-Type': 'text/csv'}),
        },
      );

      const newsCsvData = await result.text();

      if (cancel) {
        return;
      }

      const now = new Date();

      const nextNews = newsCsvData
        .split('\n')
        .slice(1) // Oddly, once there are dates in the CSV all text lines are merged into row 1
        .map((newsCsvLine, newsIndex) => {
          const newsCsvTokens = newsCsvLine.split(',');
          const newsReport = {
            from: new Date(newsCsvTokens.at(0)?.slice(1, -1) ?? '2000-01-01'),
            to: new Date(newsCsvTokens.at(1)?.slice(1, -1) ?? '2000-01-01'),
            text: newsCsvTokens.at(2)?.slice(1, -1) ?? '',
            id: newsIndex,
          };
          return newsReport;
        })
        .filter((newsReport) => newsReport.from <= now && newsReport.to >= now)
        .map((newsReport) => newsReport.text);

      setNews(nextNews);
    }

    let cancel = false;
    void fetchVendorData();
    return () => {
      cancel = true;
    };
  }, []);

  if (news === undefined) {
    return null;
  }

  return (
    <div className="gap-2">
      {news.map((newsReport, index) => (
        <div key={index} className="bg-red-8 text-white rounded-lg p-4">
          <div className="text-lg font-bold">News</div>
          <div>{newsReport}</div>
        </div>
      ))}
    </div>
  );
}
