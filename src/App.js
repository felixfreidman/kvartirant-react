import './App.css';
import { GreetingSection } from './Components/Sections/GreetingSection/GreetingSection';
import Header from './Components/Sections/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <GreetingSection />
    </div>
  );
}

export default App;
