import './App.css';
import Grid from './components/Grid';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Grid />
    </div>
  );
}

export default App;
