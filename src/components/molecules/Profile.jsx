import { Badges } from "../atoms/Badges";
import { Goal } from "../atoms/Goal";
import { Name } from "../atoms/Name";
import styled from "styled-components";

export function Profile({ user }) {
  return (
    <StyledWrapper>
      <Name name={user.name} />
      <Goal goal={user.goal} />
      <Badges badges={user.badges} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled("div")(() => ({

  width: "50%",
  boxShadow: "2px 2px 5px #888888, -2px -2px 5px #888888",
  padding: "20px",
  borderRadius: "30px",
  [":hover"]: {
    boxShadow: "2px 2px 5px #666666, -2px -2px 5px #666666",
    cursor: "pointer"
    
  }

}));
