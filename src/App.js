import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainArea from './Components/MainArea/MainArea';

function App() {

  return (
    <div className="container-fluid main-container">
      <div className="container">
        <Header></Header>
        <MainArea></MainArea>
      </div>
    </div>
  );
}

export default App;
