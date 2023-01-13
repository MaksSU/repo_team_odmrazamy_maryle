// import logo from './logo.svg';
import "./App.css";
const name_list = [
  {
    name: "Paweł",
    goal: "Swtworzenia aplikacji do nauki jezyków i zdolności kognitywnych",
    badges: [],
  },

  {
    name: "Bartuś",
    goal: "Czerpać frajde i satysfakcje z procesu nauki Reacta, yo",
    badges: [],
  },

  {
    name: "Max",
    goal: "",
    badges: [],
  },

  // "Makowski Bartosz 'Apocryphen'",
  // "Natalia Szwedo 'Baka'",
];

console.log(name_list[1].name);
console.log(name_list[2].name);

const updateNameBartus = ({ name }) => {
  console.log(name);
  const changeToUpper = name.toLocaleUpperCase();
  return changeToUpper;
};

const updateNameMax = (name) => {
  // console.log(name);
  return name + " ma " + name.length + " znaków";
};

// const updateNameApocryphen = (name) => {
//   //console.log(name);
//   const changeToLower = name.toLocaleLowerCase();
//   return changeToLower;
//};

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
          <div>{updateNameMax(item.name)}</div>
        ))}
      </div>

      {/* <div>
        {name_list.map((item) => (
          <div>{updateNameApocryphen(item)}</div>
        ))}
        </div> */}
    </div>
  );
}

export default App;
