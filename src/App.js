import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      {/* <Greet name='luffy' heroName ='king of pirates'>
        <p>This is you pro</p>
      </Greet>
      <Greet name="zoro" heroName = 'king of hell'>
        <button>Action</button>
      </Greet>
      <Welcome name='sanji' heroName ='BlackLeg '></Welcome> */}
      <Message></Message>
    </div>
  );
}

export default App;
