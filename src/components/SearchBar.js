import { FontAwesome } from '@expo/vector-icons';
import Input from './Input';
import Container from './Container';

export default ({ value, placeholder, onChange, searchFunc, clearFunc }) => (
  <Container width='100%'>
    <Input
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      color='#ddd'
      backgroundColor='#2b3035'
      onKeyPress={(e) => {
        if (e.key !== 'Enter') return;
        searchFunc();
      }}
    />
    <Container flexDirection='row' alignItems='center' gap={10} width='100%'>
      <FontAwesome.Button name='close' backgroundColor='#2b3035' color='#fff' size={24} onPress={clearFunc}>Limpar</FontAwesome.Button>
      <FontAwesome.Button name='search' backgroundColor='#2b3035' color='#fff' size={24} onPress={searchFunc}>Pesquisar</FontAwesome.Button>
    </Container>
  </Container>
)