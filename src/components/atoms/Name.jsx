import styled from "styled-components";
export function Name({ name }) {
  return <StyledWrapper>{name}</StyledWrapper>;
}
const StyledWrapper = styled("h1")(() => ({
  fontFamily: "Oswald , sans-serif",
}));