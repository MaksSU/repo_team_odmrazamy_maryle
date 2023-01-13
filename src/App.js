// import logo from './logo.svg';
import "./App.css";
const name_list = [
  {
    name: "Paweł",
    goal: "Swtworzenia aplikacji do nauki jezyków i zdolności gognitywnych",
    badges: [],
  },

  // "Maksymilian Dygasiewicz 'MakSU'",
  // "Makowski Bartosz 'Apocryphen'",
  // "Natalia Szwedo 'Baka'",

  {
    name: "Bartuś",
    goal: "Tak",
    badges: [],
  },
];

console.log(name_list[1].name);

const updateNameBartus = ({ name }) => {
  console.log(name);
  const changeToUpper = name.toLocaleUpperCase();
  return changeToUpper;
};

const updateNameMax = (name) => {
  // console.log(name);
  return name + " ma " + name.length + " znaków";
};

const updateNameApocryphen = (name) => {
  //console.log(name);
  const changeToLower = name.toLocaleLowerCase();
  return changeToLower;
};

function App() {
  return (
    <div className="App">
      <div>
        {name_list.map((item) => (
          <div>{updateNameBartus(item)}</div>
        ))}
      </div>

      {/* <div>
        {name_list.map((item) => (
          <div>{updateNameMax(item)}</div>
        ))}
      </div>

      <div>
        {name_list.map((item) => (
          <div>{updateNameApocryphen(item)}</div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
