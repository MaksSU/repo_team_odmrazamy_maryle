import styled from "styled-components";

export function Goal({ goal }) {
  return <StyledWrapper>{goal}</StyledWrapper>;
}

const StyledWrapper = styled("a")(() => ({
  color: "#023E8A",
  fontWeight: "bold",
}));
