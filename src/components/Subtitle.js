import Header from "./Header";

export default (props) => (
  <Header
    title={props.text}
    opacity={props.opacity || .65}
    size={props.size || 20}
    weight='normal'
    color='#fff'
  />
)