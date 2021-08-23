
import './App.css';

import Routes from './Routes/Routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Routes/>
      
    </div>
  );
}

export default App;
