import {useState, useCallback} from 'react';
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
  console.log('sections', sections);
  return (
    <div className="px-2 py-5 gap-4 relative">
      <div className="self-center w-full max-w-screen-lg gap-4 relative pt-12 px-4 pb-2">
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
        <div className="gap-2">
          <Section setInView={setSectionInView} index={1} className="gap-2">
            <About />
          </Section>
          <Section setInView={setSectionInView} index={2} className="gap-2">
            <Hours />
          </Section>
          <Section setInView={setSectionInView} index={3} className="gap-2">
            <Location />
          </Section>
          <Section setInView={setSectionInView} index={4} className="gap-2">
            <Contact />
          </Section>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
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
          <div>Vendors</div>
        </div>
      </div>
    </div>
  );
}

export default App;
