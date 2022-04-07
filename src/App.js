import './App.css';
import { BrowserRouter, 
  Link, 
  Route, 
  Routes, 
  useLocation 
} from 'react-router-dom';
import { Inputs } from './components/inputs/inputs'

function App() {
  const currentRoute = useLocation().pathname.toLowerCase();
  return (
    <div className="app">
      <header className="app-header">
        <div className="nav-bar">
          <Link to="/" className="mui-examples">MUI-Examples</Link>
          <Link to="/inputs" className={currentRoute.includes("/inputs") ? 
          "tab-active" : "tab"}>Inputs</Link>
          <Link to="/button" className={currentRoute.includes("button") ? 
          "tab-active" : "tab"}>Button</Link>
          <Link to="/button" className={currentRoute.includes("button") ? 
          "tab-active" : "tab"}>ghtyyyy</Link>
        </div>
        <Routes>
          <Route path="/" />
          <Route path="/button" />
          <Route path="/inputs" element={<Inputs />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
