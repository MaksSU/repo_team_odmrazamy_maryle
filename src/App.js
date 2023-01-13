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

// console.log(name_list[1].name);
console.log(name_list[2].name);

// const updateNameBartus = ({ name }) => {
//   console.log(name);
//   const changeToUpper = name.toLocaleUpperCase();
//   return changeToUpper;
// };

//Tworze tutaj funkcje która tworzy komponenty, w propsach używam {name} co ma odnosić się do danej wartości name w naszym obiekcie w liście name_list.
function NameComponentBartus({ name }) {
  return <h1>{name}</h1>;
}

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
      {/* <div>
        {name_list.map((item) => (
          <div>{updateNameBartus(item)}</div>
        ))}
      </div> */}

      {/* Tutaj ją wywołuje: nazwaFunkcji toCoPrzesyłamDoFunkcji={naszaLista[element].toCoChcemyWydobyć } */}
      <div>
        <NameComponentBartus name={name_list[1].name} />
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
