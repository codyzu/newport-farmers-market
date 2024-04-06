function App() {
  return (
    <div className="px-2 py-5 gap-4 relative">
      <div className="self-center w-full max-w-screen-lg gap-4 relative pt-12 px-4 pb-2">
        <div className="bg-red-8 text-white rounded-lg p-4">
          <div className="text-lg font-bold">News</div>
          <div>The 2024 Market starts March30th!</div>
        </div>
        <div className="p2 text-4xl font-bold self-center">
          Newport Farmers Market
        </div>
        <div className="text-xl">
          The Newport Farmer&apos;s Market has been an important anchor in our
          vibrant coastal community since 1978!
        </div>
        <div>
          Come visit us on Saturdays throughout the year-long growing season and
          you will see we have something for everyone. Rain or Shine! Our
          farmers offer diverse, high-quality, seasonal & locally grown produce,
          meat, eggs, and honey. Meet our local farmers, eat some delicious
          prepared food, buy one-of-a-kind handcrafted items, chat with Master
          Gardeners, listen to local musicians, and catch up with friends and
          neighbors while stocking up on fresh produce. Experience our local
          coastal flavor and see what makes us one of the great events Newport
          has to offer. Supporting your local farmers and artisans strengthens
          the community!
        </div>
        <div className="gap-2">
          <div className="text-lg font-bold">About</div>
          <div>It All Starts With a Seed</div>
          <div>
            A stalk of corn waiting for harvest started as a seed; our
            community&apos;s the same. We&apos;re planting the seed of brighter
            tomorrows today. The Newport Farmers&apos; Market gives local
            vendors and farmers a place to come together and celebrate good,
            hard, honest work - the work done by the hands of our neighbors.
            Come out and help us grow!
          </div>
          <div>History</div>
          <div>
            In 1978 the Farmer-to-Consumer Direct Marketing Act directed the
            Cooperative Extension Service to become involved in farm-direct
            marketing by helping to organize local farmers markets. Newport
            Farmers Market opened that year, one of the first in the state to do
            so. A handful of local farmers gathered at the Fairgrounds and sold
            out all of their produce in two hours! The Lincoln County Small
            Farmers Association (LCSFA), which operates the Newport Farmers
            Market, was formed the following year with the help of the Oregon
            State University Extension Service and by the second season included
            40 memberships. Today the LCSFA has an active membership of
            approximately 60 vendors.
          </div>
        </div>
        <div className="gap-2">
          <div className="text-lg font-bold">Hours</div>
          <div>Spring, Summer, Fall (March - December)</div>
          <div>Every Saturday, 9am - 1pm</div>
          <div>Winter (January - February)</div>
          <div>Closed</div>
        </div>
        <div className="gap-2">
          <div className="text-lg font-bold">Location</div>
          <div>Hwy 101 and Angle Street</div>
          <div className="">
            <iframe
              sandbox="allow-scripts"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5678.338467460222!2d-124.05433600000002!3d44.634458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c1d7ca7900a5a5%3A0xbd38e3923f2d0214!2sUS-101%20%26%20SW%20Angle%20St%2C%20Newport%2C%20OR%2097365!5e0!3m2!1sen!2sus!4v1712427764935!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{border: '0'}}
              // AllowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="gap-2">
          <div className="text-lg font-bold">Contact</div>

          <div>Newport Farmers Market 541-961-8236</div>
          <div>P.O. Box 1633</div>
          <div>Newport OR 97365</div>
          <div>541-961-8236</div>
          <div>abc@efg.com</div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
        <div className="self-center w-full max-w-screen-lg flex-row gap-8 rounded p-4 backdrop-blur bg-opacity-40 bg-green">
          <div>Market</div>
          <div>News</div>
          <div>About</div>
          <div>Hours</div>
          <div>Location</div>
          <div>Vendors</div>
        </div>
      </div>
    </div>
  );
}

export default App;
