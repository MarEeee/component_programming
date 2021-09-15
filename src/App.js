import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock/Clock';
import ColorPicker from './components/Clock/ColorPicker';

function App() {
  return(<div className = "wrapper">
    <ColorPicker/>
    <Clock />
  </div>)
}

export default App;
