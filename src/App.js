import {
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components.js/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="mx-5 mt-3">
      <Header />
    </div>
    <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
