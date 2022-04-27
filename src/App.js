
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
