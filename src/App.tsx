import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import flowers from './assets/flowers.png';
import strawberries from './assets/strawberries.png';
import vegetables1 from './assets/vegetables-1.png';
import vegetables2 from './assets/vegetables-2.png';
import About from './About';
import Location from './Location';
import Contact from './Contact';
import News from './News';
import Market from './Market';
import rooster from './assets/rooster.svg';
import rainyDay from './assets/rainy-day.jpg';
import Hours from './Hours';
import seedling from './assets/seedling.svg';
import tomato from './assets/tomato.svg';

function App() {
  return (
    <div className="h-100dvh w-100dvw relative overflow-hidden">
      <Parallax pages={13}>
        <ParallaxLayer offset={0} speed={0} className="items-center">
          <div className="w-full max-w-screen-lg px-4 pt-4">
            <News />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          className="justify-center items-center gap-4 p4"
        >
          <img
            src={rooster}
            className="h-40dvh w-40dvh object-contain fill-current animate-fade-in animate-duration-4000"
          />
          <div className="p2 text-4xl font-bold border-y-4 border-green-8 text-center">
            <h1>Newport Farmers Market</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="justify-center items-center">
          <div className="max-w-screen-md gap-2 mx-4">
            <Market />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} factor={2} className="">
          <div className="w-full h-full bg-[url(/bridge-vertical.jpg)] bg-cover bg-center" />
          <div className="w-full h-full bg-white bg-opacity-70 top-0 left-0 absolute" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={2}
          sticky={{start: 2.5, end: 3.5}}
          className="justify-center items-center p4"
        >
          <div className="h-32dvh w-32dvh i-uil-cloud-sun-rain animate-bounce" />
          <Hours />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{start: 8, end: 11}}
          className="items-start justify-center z--1"
        >
          <img src={tomato} className="w-40 aspect-square ml--15 relative" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={-2}
          className="justify-center items-center gap-4"
        >
          <div className="grid w-full max-w-screen-lg grid-cols-2 p-4 gap-8">
            <img className="image-thumb" src={strawberries} />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer offset={5} className="justify-center items-center gap-4">
          <div className="grid w-full max-w-screen-lg grid-cols-2 p-4 gap-8">
            <img className="image-thumb col-start-2" src={vegetables1} />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer offset={7} className="justify-center items-center gap-4">
          <div className="grid w-full max-w-screen-lg grid-cols-2 p-4 gap-8">
            <img className="image-thumb col-start-2" src={flowers} />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          speed={-2}
          className="justify-center items-center gap-4"
        >
          <div className="grid w-full max-w-screen-lg grid-cols-2 p-4 gap-8">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full aspect-square"
              src={vegetables2}
            />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{start: 4, end: 8}}
          className="justify-center items-center gap-4 p-2 z-1"
        >
          <div className="w-60dvw aspect-square max-w-60dvh" />
          <div className="text-3xl font-bold text-center text-section">
            Local farmers, craftsmen, artisans, & vendors
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          // Speed={0.8}
          className="justify-center items-center gap-2 p-2 z-1"
        >
          <div className="text-section">
            <Location />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          // Speed={0.2}
          className="justify-center items-center gap-2 p-2 z-1"
        >
          <div className="text-section">
            <Contact />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          className="justify-center items-center gap-2 p-2 z-1"
        >
          <div className="text-section">
            <About />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          className="justify-center items-center p-4 gap-4"
        >
          <div className="w-65dvw aspect-square max-w-65dvh">
            <img className="image-thumb" src={rainyDay} />
          </div>
          <div className="section-header">See you Saturday!</div>
        </ParallaxLayer>
      </Parallax>
      <div className="absolute bottom-0 w-full items-end pointer-events-none">
        <div className="animate-slide-in-up">
          <img
            src={seedling}
            className="w-20dvw max-w-120px mr-4dvw animate-wobbles"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
