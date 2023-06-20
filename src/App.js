import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name='luffy' heroName ='king of pirates'>
        <p>This is you pro</p>
      </Greet>
      <Greet name="zoro" heroName = 'king of hell'>
        <button>Action</button>
      </Greet>
      <Welcome name='sanji' heroName ='BlackLeg '></Welcome>
    </div>
  );
}

export default App;
