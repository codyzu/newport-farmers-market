import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {Link} from '@tanstack/react-router';
import {useTranslation} from 'react-i18next';
import flowers from './assets/flowers.webp';
import strawberries from './assets/strawberries.webp';
import vegetables1 from './assets/vegetables-1.webp';
import vegetables2 from './assets/vegetables-2.webp';
import About from './About';
import Location from './Location';
import Contact from './Contact';
import News from './News';
import Market from './Market';
import rooster from './assets/rooster.svg';
import rainyDay from './assets/rainy-day.webp';
import Hours from './Hours';
import seedling from './assets/seedling.svg';
import tomato from './assets/tomato.svg';
// Import Vendors from './Vendors';

function App() {
  const {t, i18n} = useTranslation();
  return (
    <div className="h-100dvh w-100dvw relative overflow-hidden">
      <Parallax pages={13}>
        <ParallaxLayer
          offset={0}
          speed={0}
          className="justify-center items-center gap-4 px-4 pb-4"
        >
          <div className="max-w-screen-md h-full w-full gap-1">
            <button
              type="button"
              className="button font-normal text-xs p-1 self-end rounded-t-none"
              onClick={() => {
                void i18n.changeLanguage(
                  i18n.resolvedLanguage === 'en' ? 'es' : 'en',
                );
              }}
            >
              {i18n.resolvedLanguage === 'en' ? 'Español' : 'English'}
            </button>
            <News />
            <div className="flex-grow justify-center items-center gap-4">
              <img
                src={rooster}
                className="h-40dvh w-40dvh object-contain fill-current animate-fade-in animate-duration-4000"
              />
              <div className="p2 text-4xl font-bold border-y-4 border-green-8 text-center">
                <h1>{t('title')}</h1>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="justify-center items-center">
          <div className="max-w-screen-md gap-2 mx-4">
            <Market />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} factor={2} className="">
          <div className="w-full h-full bg-[url(/bridge-vertical.webp)] bg-cover bg-center" />
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
          {/* <div className="text-3xl font-bold text-center h-2.25rem" /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={5} className="justify-center items-center gap-4">
          <div className="grid w-full max-w-screen-lg grid-cols-2 p-4 gap-8">
            <img className="image-thumb col-start-2" src={vegetables1} />
          </div>
          {/* <div className="text-3xl font-bold text-center h-2.25rem" /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={7} className="justify-center items-center gap-4">
          <div className="grid w-full max-w-screen-lg grid-cols-2 p-4 gap-8">
            <img className="image-thumb col-start-2" src={flowers} />
          </div>
          {/* <div className="text-3xl font-bold text-center h-2.25rem" /> */}
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
          {/* <div className="text-3xl font-bold text-center h-2.25rem" /> */}
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{start: 4, end: 8}}
          className="justify-center items-center gap-4 p-2 z-1"
        >
          <div className="text-section gap-4">
            <div className="text-3xl font-bold text-center">
              Local farmers, craftsmen, artisans, & vendors
            </div>
            <Link className="button self-center" to="/vendors">
              View All Vendors
            </Link>
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
          <div className="justify-center items-center flex-grow gap-4">
            <div className="w-65dvw aspect-square max-w-65dvh">
              <img className="image-thumb" src={rainyDay} />
            </div>
            <div className="section-header">
              See you Saturday at the market!
            </div>
          </div>
          <div className="text-xs">
            <div className="justify-self-end flex-row justify-center items-center gap-1">
              <div>&copy; {new Date().getFullYear()}</div>
              <div>made with</div>
              <div className="i-uil-heart" />
              <div>by Cody Zuschlag</div>
            </div>
            <a
              href="https://github.com/codyzu/newport-farmers-market"
              className="justify-self-end flex flex-row justify-center items-center gap-1"
            >
              <div className="i-uil-github" />
              <div className="underline">Open Source Software</div>
            </a>
          </div>
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
