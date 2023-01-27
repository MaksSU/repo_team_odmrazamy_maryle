// import logo from './logo.svg';
import "./App.css";
import { Badges } from "./components/atoms/Badges";
import { Name } from "./components/atoms/Name";
import { Goal } from "./components/atoms/Goal";
import { Profile } from "./components/molecules/Profile";
import { NameLength } from "./components/atoms/NameLength";
import { users } from "./data/users";

/* Plan działania
  - div na profil (jakiś prostokąt, ładnie ostylizować)
  - środek profilu ostylować
  - pobawić sie backgroundem
  - wyśrodkować profile
  - mechanika ruchu prawo/lewo
*/

function App() {
  return (
    <>
      <div>
        {users.map((item) => (
          <Profile user={item} />
        ))}
      </div>
    </>
  );
}

export default App;
