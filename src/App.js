import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router, Link,Routes, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/register' element={<Home />}/>
        </Routes> 
      </Router>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
