// import logo from './logo.svg';
import "./App.css";
import { Badges } from "./components/Badges";
import { Name } from "./components/Name";
import { Profile } from "./components/Profile";

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

  {
    name: "Bartek",
    goal: "DO something",
    badges: ["setapowiec", "zmiennik"],
  },

  // "Natalia Szwedo 'Baka'",
];

// console.log(name_list[1].name);
console.log(name_list[2].name);

// const updateNameBartus = ({ name }) => {
//   console.log(name);
//   const changeToUpper = name.toLocaleUpperCase();
//   return changeToUpper;
// };

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
            <div>{updateNameMax(item.name)}</div>
          ))}
        </div>

        <div>
          {name_list.map((item) => (
            <div>{updateNameApocryphen(item.name)}</div>
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
