import {useState, useCallback, useRef, useEffect} from 'react';
import {Parallax, ParallaxLayer, type IParallax} from '@react-spring/parallax';
import flowers from './assets/flowers.png';
import strawberries from './assets/strawberries.png';
import vegetables1 from './assets/vegetables-1.png';
import vegetables2 from './assets/vegetables-2.png';
import tomatoes from './assets/tomatoes.jpg';
import About from './About';
import Hours from './Hours';
import Location from './Location';
import Contact from './Contact';
import News from './News';
import Market from './Market';
import NavigationItem from './NavigationItem';
import Section from './Section';
import rooster from './assets/rooster.svg';
import bridge from './assets/bridge-vertical.jpg';
import rainyDay from './assets/rainy-day.jpg';

function App() {
  const [sections, setSections] = useState([false, false, false, false, false]);

  const setSectionInView = useCallback(
    (inView: boolean, index: number) => {
      setSections((currentSections) => {
        const nextSections = [...currentSections];
        nextSections[index] = inView;
        return nextSections;
      });
    },
    [setSections],
  );
  // Const setInView = useCallback(
  //   (inView: boolean) => {
  //     console.log('set count', inView);
  //     setCount((count) => count + (inView ? 1 : -1));
  //   },
  //   [setCount],
  // );
  const parallaxReference = useRef<IParallax>(null);
  console.log('r', parallaxReference.current);

  useEffect(() => {
    function handleScroll() {
      console.log('p', parallaxReference.current);
      // If (parallaxRef.current) {
      //   const nextPage =
      //     Math.round(
      //       (parallaxRef.current.current * 10) / parallaxRef.current.space,
      //     ) / 10;

      //   if (nextPage !== page) {
      //     console.log('p', page, 'next', nextPage);
      //     setScrollDown(nextPage > page);
      //   }

      //   setPage(nextPage);

      //   if (nextPage >= 0.5) {
      //     setM1Shown(true);
      //   }

      //   if (nextPage >= 1) {
      //     setM2Shown(true);
      //   }
      // }
    }

    const current = parallaxReference.current?.container?.current as
      | HTMLDivElement
      | undefined;

    current?.addEventListener('scroll', handleScroll);

    return () => {
      current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Console.log('sections', sections);
  return (
    <div className="h-100dvh w-100dvw">
      {/* <div className="self-center w-full max-w-screen-lg gap-4 relative pt-12 px-4 pb-2"> */}
      <Parallax ref={parallaxReference} pages={13}>
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
          {/* <svg className="h-40dvh w-40dvh object-contain fill-current">
            <use xlinkHref={`${rooster}#img`} href={`${rooster}#img`} />
          </svg> */}
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
          {/* <img src={bridge} className="h-full w-full object-cover" /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} factor={2} className="">
          <div className="w-full h-full bg-[url(/bridge-vertical.jpg)] bg-cover bg-center" />
          <div className="w-full h-full bg-white bg-opacity-70 top-0 left-0 absolute" />
          {/* <img src={bridge} className="h-full w-full object-cover" /> */}
        </ParallaxLayer>
        <ParallaxLayer
          // Offset={1}
          // speed={-2}
          speed={2}
          sticky={{start: 2.5, end: 3.5}}
          className="justify-center items-center p4"
        >
          <div className="h-32dvh w-32dvh i-uil-cloud-sun-rain animate-bounce" />
          <div className="section-header items-center gap-2">
            <div>Rain or Shine</div>
            <div>Every Saturday from April to December</div>
            <div>9am - 1pm</div>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={2} className="items-center justify-center">
          <div className="aspect-square w-100dvw max-w-100dvh bg-red">
            hello
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          sticky={{start: 4, end: 6}}
          className="justify-center items-center mix-blend-lighten gap-4"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-80dvw aspect-square max-w-80dvh" />
          <img
            className="rounded-lg shadow-md shadow-black object-cover w-full h-full row-start-2"
            src={strawberries}
          />

          <div className="text-2xl font-bold text-center">
            Local farmers, craftsmen, artisans, vendors
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={5}
          // Speed={0.5}
          className="justify-center items-center gap-4"
        >
          <div className="w-50dvw aspect-square max-w-50dvh">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={strawberries}
            />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.75}
          // Speed={0.5}
          className="justify-center items-center gap-4"
        >
          <div className="w-50dvw aspect-square max-w-50dvh">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={vegetables1}
            />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.5}
          // Speed={0.5}
          className="justify-center items-center gap-4"
        >
          <div className="w-50dvw aspect-square max-w-50dvh">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={flowers}
            />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.25}
          // Speed={0.5}
          className="justify-center items-center gap-4"
        >
          <div className="w-50dvw aspect-square max-w-50dvh">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={vegetables2}
            />
          </div>
          <div className="text-3xl font-bold text-center h-2.25rem" />
        </ParallaxLayer>
        <ParallaxLayer
          // Speed={0.5}
          sticky={{start: 4, end: 8}}
          className="justify-center items-center gap-4"
        >
          <div className="w-60dvw aspect-square max-w-60dvh" />
          <div className="text-3xl font-bold text-center px-2 py-4 self-stretch bg-white bg-opacity-80">
            Local farmers, craftsmen, artisans, & vendors
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          className="justify-center items-center gap-2 p-4"
        >
          <Location />
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          className="justify-center items-center gap-2 p-4"
        >
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          className="justify-center items-center gap-2 p-4"
        >
          <div className="max-w-screen-md gap-2 mx-4">
            <About />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          className="justify-center items-center p-4 gap-4"
        >
          <div className="w-65dvw aspect-square max-w-65dvh">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={rainyDay}
            />
          </div>
          <div className="section-header">See you next Saturday!</div>
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={5}
          speed={1}
          className="justify-center items-center mix-blend-lighten gap-4"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-80dvw aspect-square max-w-80dvh">
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full row-start-2"
              src={strawberries}
            />
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full row-start-1 col-start-2"
              src={vegetables1}
            /> */}
        {/* <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={flowers}
            />
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={tomatoes}
            /> */}
        {/* </div>
          <div className="text-2xl font-bold text-center">
            Local farmers, craftsmen, artisans, vendors
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer horizontal offset={1}>
          Hello
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={5}
          speed={-2}
          className="justify-center items-center mix-blend-lighten gap-4"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-80dvw aspect-square max-w-80dvh"> */}
        {/* <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={strawberries}
            />
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={vegetables1}
            /> */}
        {/* <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full"
              src={flowers}
            />
            <img
              className="rounded-lg shadow-md shadow-black object-cover w-full h-full row-start-2 col-start-2"
              src={tomatoes}
            />
          </div>
          <div className="text-2xl font-bold content-empty h-2rem" />
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={5} className="justify-center items-center">
          Hi
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={0} className="max-w-screen-lg w-full mx-auto">
          <Section setInView={setSectionInView} index={0} className="gap-4">
            <News />
            <div className="p2 text-4xl font-bold self-center border-y-2 border-green-8">
              <h1>Newport Farmers Market</h1>
            </div>
            <div className="flex-row gap-2 flex-wrap justify-center">
              <img
                className="rounded-lg shadow-md shadow-black w-60 h-60 object-cover"
                src={flowers}
              />
              <img
                className="rounded-lg shadow-md shadow-black w-60 h-60 object-cover"
                src={strawberries}
              />
              <img
                className="rounded-lg shadow-md shadow-black w-60 h-60 object-cover"
                src={vegetables1}
              />
              <img
                className="rounded-lg shadow-md shadow-black w-60 h-60 object-cover"
                src={vegetables2}
              />
              <img
                className="rounded-lg shadow-md shadow-black w-60 h-60 object-cover"
                src={tomatoes}
              />
            </div>
            <Market />
          </Section>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1} className="max-w-screen-lg w-full mx-auto">
          <Section setInView={setSectionInView} index={1} className="gap-2">
            <About />
          </Section>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={2}>
          <Section setInView={setSectionInView} index={2} className="gap-2">
            <Hours />
          </Section>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Section setInView={setSectionInView} index={3} className="gap-2">
            <Location />
          </Section>
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <Section setInView={setSectionInView} index={4} className="gap-2">
            <Contact />
          </Section>
        </ParallaxLayer> */}
      </Parallax>
      {/* </div> */}
      {/* <div className="fixed top-0 left-0 w-full">
        <div className="self-center w-full max-w-screen-lg flex-row gap-8 rounded p-4 backdrop-blur bg-opacity-40 bg-green">
          <NavigationItem highlight={sections[0]}>Market</NavigationItem>
          <NavigationItem highlight={sections[1] && !sections[0]}>
            About
          </NavigationItem>
          <NavigationItem highlight={sections[2] && !sections[1]}>
            Hours
          </NavigationItem>
          <NavigationItem highlight={sections[3] && !sections[2]}>
            Location
          </NavigationItem>
          <NavigationItem highlight={sections[4] && !sections[3]}>
            Contact
          </NavigationItem>
        </div>
      </div> */}
    </div>
  );
}

export default App;
