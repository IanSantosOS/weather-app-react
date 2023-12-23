import { Text } from "react-native";

export default function Titulo(props) {
  return (
    <Text style={{
      opacity: props.opacity || 1,
      fontWeight: props.weight || 'bold',
      fontSize: props.size || 40,
      color: props.color || '#000',
      marginBottom: 10
    }}>
      {props.title || ''}
    </Text>
  );
}
