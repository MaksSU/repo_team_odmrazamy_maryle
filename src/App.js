// import logo from './logo.svg';
import "./App.css";
const name_list = [
  "Maksymilian Dygasiewicz 'MakSU'",
  "Makowski Bartosz 'Apocryphen'",
  "Natalia Szwedo 'Baka'",
  "Bartosz Godek 'bartus'",
];

const updateNameBartus = (name) => {
  // console.log(name);
  const changeToUpper = name.toLocaleUpperCase();
  return changeToUpper;
};

const updateNameMax = (name) => {
  // console.log(name);
  return name + " coś innego";
};

function App() {
  return (
    <div className="App">
      <div>
        {name_list.map((item) => (
          <div>{updateNameBartus(item)}</div>
        ))}
      </div>

      <div>
        {name_list.map((item) => (
          <div>{updateNameMax(item)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
