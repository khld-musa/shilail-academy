import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
    
      <Route path="/" exact component={Home}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
   
 </Router>
    </div>
  );
}

export default App;

