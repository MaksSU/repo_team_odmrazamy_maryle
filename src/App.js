// import logo from './logo.svg';
import "./App.css";
import { Badges } from "./components/Badges";
import { Name } from "./components/Name";
import { Goal } from "./components/Goal";
import { Profile } from "./components/Profile";
import { NameLength } from "./components/NameLength";
import { users } from "./data/users";



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
          {users.map((item) => (
            <Profile user={item} />
          ))}
        </div>

        <div>
          <Name name={users[1].name} />
        </div>

        <div>
          {users.map((item) => (
            <div><NameLength name = {item.name} /></div>
          ))}
        </div>
        <div>
        <Goal goal={users[3].goal} />
      </div>

        <div>
          {users.map((item) => (
            <div>{updateNameApocryphen(item.name)}</div>
          ))}
        </div>
        <div>
          {users.map((item) => (
            <div>{updateNameBabka(item.name)}</div>
          ))}
        </div>
      </div>
      <div>
        <Badges badges={users[3].badges} />
      </div>
    </>
  );
}

export default App;
