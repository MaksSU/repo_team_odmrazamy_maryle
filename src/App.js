// import logo from './logo.svg';
import './App.css';
const name_list = ["Maksymilian Dygasiewicz 'MakSU'","Makowski Bartosz 'Apocryphen'","Natalia Szwedo 'Baka'"]

function App() {
  return (
    <div className="App">
      <div>
        {name_list.map((item) => <div>{item}</div>)}
      </div>
      
    </div>
  );
}

export default App;
