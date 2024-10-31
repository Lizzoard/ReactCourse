import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreConcept
              title="Components"
              description="The core ui building block"
              image={componentsImg}
            /> */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          
        </section>
      </main>
    </div>
  );
}

export default App;
