import React, { useState } from 'react';
import { Button } from 'react-native';

import Background from '../components/Background';
import Main from '../components/Main';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmitLog = () => {
    if (verificar()) {
      navigation.navigate('Weather App');
    }
  }

  const verificar = () => {
    if (email.trim() === '') {
      alert('Insira um Valor Válido no Campo de Email!');
      return false;
    }
    else if (senha.trim() === '') {
      alert('Insira um Valor Válido no Campo de Senha!');
      return false;
    }
    return true;
  }

  return (
    <Background src={require('../../assets/fundo-login.jpg')}>
      <Main color='#fff' borderColor='#333'>
        <Header title="Conta" fontSize={30} />
        <Input
          value={email}
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={setEmail}
        />
        <Input
          password
          value={senha}
          placeholder='Senha'
          onChangeText={setSenha}
        />
        <Container
          marginTop={10}
          gap={5}
          flexDirection='row'
          justifyContent='start'
        >
          <Button
            title='Entrar'
            onPress={handleSubmitLog}
          />
          <Button title='Cadastro' />
        </Container>
      </Main>
    </Background>
  );
}