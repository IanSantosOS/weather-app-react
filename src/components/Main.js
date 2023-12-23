import Container from "./Container";

export default (props) => (
  <Container
    padding={15}
    width='87%'
    color={props.color}
    borderColor={props.borderColor}
    borderWidth={5}
    shadowColor={props.borderColor}
    shadowRadius={40}
  >
    {props.children}
  </Container>
);