import React, {useState} from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmitLog = () => {
        if (verificar()) {
            navigation.navigate('WeatherApp');
        }
    }

    const verificar = () => {
        if (email.trim() === '') {
            alert('O campo de email está vazio!');
            return false;
        }
        else if (senha.trim() === '') {
            alert('O campo de senha está vazio!');
            return false;
        }
        return true;
    }

    return (
        <View style={style.geral}>
            <Container
                padding={15}
                width="80%"
            >
                <Header title="Conta" fontSize={30}/>
                <Input
                    value={email}
                    marginVertical={5}
                    placeholder="Email"
                    keyboardType="email-address"
                    paddingVertical={4}
                    paddingHorizontal={10}
                    placeholderColor="#999"
                    onChangeText={(texto) => setEmail(texto)}
                    />
                <Input
                    password
                    value={senha}
                    placeholder="Senha"
                    marginVertical={5}
                    paddingVertical={4}
                    paddingHorizontal={10}
                    placeholderColor="#999"
                    onChangeText={(texto) => setSenha(texto)}
                />
                <Container
                    marginTop={10}
                    gap={5}
                    flexDirection="row"
                    justifyContent="start"
                >
                    <Button
                        title="Entrar"
                        onPress={handleSubmitLog}
                        style={style.btn}
                    />
                    <Button title="Cadastro"/>
                </Container>
            </Container>
        </View>
    );
}

const style = StyleSheet.create({
    geral: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    }
});