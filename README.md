# Weather App React
Previsão do tempo de cidades, agora em React Native.

## Projeto

Criar um aplicativo React Native que permite ao usuário pesquisar a previsão do tempo para uma cidade específica usando uma API de previsão do tempo e com duas páginas uma da visualização da Api e seleção do local e outra com página de login usando react navigation stack.

- Aparência (2,0): O aplicativo deverá conter uma imagem que mescle com o tema selecionado por você (cor), dois Textinput, botão de entrar e outro de cadastro (não precisa criar página de cadastro)

- Funcionalidade (2,0): o aplicativo deverá abrir a página da api quando o botão entrar for pressionado (pode usar um if e else para a autenticação).

- Teste de entrada (2,0): Caso o aplicativo não receba nenhuma entrada nos alertas deverá imprimir um alerta ao usuário informando: "Digite um local!".

- Teste do resultado (2,0): O resultado deve aparecer quando o usuário colocar o texto com o nome do local e apertar procurar.

- Teste dos input/teclado (2,0): Ao pressionar o botão 'pesquisar', o app deve baixar o teclado e manter os dados do input e ao apertar o botão "Limpar" os inputs devem ser "limpos"!


## Docs

[Expo](https://docs.expo.dev/)

[React Native](https://reactnative.dev/)

[React Navigation](https://reactnavigation.org/)

[Open Weather API](https://openweathermap.org/current)

## Icons

https://docs.expo.dev/guides/icons/#expovector-icons/

https://icons.expo.fyi/Index

## Comandos

    npx create-expo-app weather-app-react
###
    code weather-app-react
###
    npm install @react-navigation/native
###
    npx expo install react-native-screens react-native-safe-area-context
###
    npm install @react-navigation/stack
###
    npx expo install react-native-reanimated
###
    npx expo install react-native-gesture-handler
###
    npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0