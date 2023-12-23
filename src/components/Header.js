import { Text } from "react-native";

export default (props) => (
    <Text style={{
        fontWeight: props.fontWeight || 'bold',
        fontSize: props.fontSize || 40,
        color: props.color || '#000',
        marginBottom: 10
    }}>
        {props.title || ''}
    </Text>
);