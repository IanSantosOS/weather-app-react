import { TextInput } from "react-native-gesture-handler";

export default (props) => (
    <TextInput
        value={props.value ?? ''}
        placeholder={props.placeholder ?? ""}
        onChangeText={props.onChangeText ?? undefined}
        secureTextEntry={props.password ?? false}
        keyboardType={props.keyboardType ?? "default"}
        placeholderTextColor={props.placeholderColor || '#000'}

        style={{
            marginTop: props.marginVertical || 0,
            marginBottom: props.marginVertical || 0,
            borderWidth: 1,
            borderRadius: 7,
            borderColor: '#aaa',
            paddingVertical: props.paddingVertical ?? 0,
            paddingHorizontal: props.paddingHorizontal ?? 0,
        }}
    />
);