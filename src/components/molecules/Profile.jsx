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
  border: "1px solid black",
  width: "50%",
}));
