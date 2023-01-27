// import logo from './logo.svg';
import "./App.css";
import { Badges } from "./components/Badges";
import { Name } from "./components/Name";
import { Goal } from "./components/Goal";
import { Profile } from "./components/Profile";
import { NameLength } from "./components/NameLength";

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
    goal: "Nauka Reacta",
    badges: ["tablica"],
  },

  {
    name: "Bartek",
    goal: "DO something",
    badges: ["setapowiec", "zmiennik"],
  },

   {
    name: "Natalia",
    goal: "Nauczyć się czegoś nowego UwU",
    badges: [],
  }
];

// console.log(name_list[1].name);
console.log(name_list[2].name);

// const updateNameBartus = ({ name }) => {
//   console.log(name);
//   const changeToUpper = name.toLocaleUpperCase();
//   return changeToUpper;
// };


const updateNameApocryphen = (name) => {
  //console.log(name);
  const changeToLower = name.toLocaleLowerCase();
  return changeToLower;
};

const updateNameBabka = (name) => {
  // console.log(name);
  return name.slice(0,3);
};

function App() {
  return (
    <>
      <div className="App">
        <div>
          {name_list.map((item) => (
            <Profile user={item} />
          ))}
        </div>

        <div>
          <Name name={name_list[1].name} />
        </div>

        <div>
          {name_list.map((item) => (
            <div><NameLength name = {item.name} /></div>
          ))}
        </div>
        <div>
        <Goal goal={name_list[3].goal} />
      </div>

        <div>
          {name_list.map((item) => (
            <div>{updateNameApocryphen(item.name)}</div>
          ))}
        </div>
        <div>
          {name_list.map((item) => (
            <div>{updateNameBabka(item.name)}</div>
          ))}
        </div>
      </div>
      <div>
        <Badges badges={name_list[3].badges} />
      </div>
    </>
  );
}

export default App;
