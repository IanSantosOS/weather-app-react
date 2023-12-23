import { TextInput } from "react-native";

export default (props) => (
  <TextInput
    value={props.value ?? ''}
    placeholder={props.placeholder ?? ""}
    onChangeText={props.onChangeText ?? undefined}
    secureTextEntry={props.password ?? false}
    keyboardType={props.keyboardType ?? "default"}
    placeholderTextColor='#999'

    style={{
      width: '100%',
      marginTop: 7,
      marginBottom: 7,
      paddingTop: 7,
      paddingBottom: 7,
      paddingLeft: 15,
      paddingRight: 13,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: '#aaa'
    }}
  />
);