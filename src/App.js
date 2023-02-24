// import logo from './logo.svg';
import "./App.css";
import { Badges } from "./components/atoms/Badges";
import { Name } from "./components/atoms/Name";
import { Goal } from "./components/atoms/Goal";
import { Profile } from "./components/molecules/Profile";
import { NameLength } from "./components/atoms/NameLength";
import { users } from "./data/users";
import styled from "styled-components";
import { Button } from "./components/atoms/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
      <StyledWrapper>
        <Button img={<ArrowBackIosNewIcon />} />
        <Profile user={users[2]} />
        <Button img={<ArrowForwardIosIcon />} />
      </StyledWrapper>
    </>
  );
}

export default App;

const StyledWrapper = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));
