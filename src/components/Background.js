import { ImageBackground } from "react-native";

export default (props) => {
  const src = props.src || require('../../assets/fundo-app.jpg');

  return (
    <ImageBackground
      source={src}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover'
      }}
    >
      {props.children}
    </ImageBackground>
  );
}