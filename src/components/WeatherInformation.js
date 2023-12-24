import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import Container from './Container';
import Header from './Header';
import InfoDeck from './InfoDeck';
import Subtitle from './Subtitle';

export default ({ weatherData }) => {
  const infoIconStyle = { color: '#fff', size: 36 };
  const [countryName, setCountryName] = useState('');

  const getCountryName = async () => {
    const apiCountryUrl = `https://servicodados.ibge.gov.br/api/v1/paises/${weatherData.sys.country}`;

    try {
        const response = await fetch(apiCountryUrl);
        const data = await response.json();
        const country = data[0].nome.abreviado;
        setCountryName(country)
    } catch (error) {
        throw error;
    }
  }

  getCountryName();

  return (
    <Container marginTop={10} width='100%' alignItems='center'>
      <Header color='#fff' size={27} weight='500' title={weatherData.name} />
      <Subtitle text={countryName} size={15}/>

      <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png` }} style={style.climaIcon} />

      <View style={{ flexDirection: 'row' }}>
        <Header title={`${Math.round(weatherData.main.temp)}`} color='#fff' size={64} marginBottom={5}/>
        <Text style={style.celsius}>ºC</Text>
      </View>

      <Text style={style.description}>
        {weatherData.weather[0].description}
      </Text>

      <View style={style.infoContainer}>
        <View style={style.info}>
          <InfoDeck
            icon={<FontAwesome name='thermometer-3' {...infoIconStyle} />}
            subtitle='Sensação Térmica'
            info={`${Math.round(weatherData.main.feels_like)} °C`}
          />
          <InfoDeck
            icon={<FontAwesome5 name='tint' {...infoIconStyle} />}
            subtitle='Umidade'
            info={`${weatherData.main.humidity}%`}
          />
        </View>
        <View style={style.info}>
          <InfoDeck
            icon={<FontAwesome5 name='cloud' {...infoIconStyle} />}
            subtitle='Nuvem'
            info={`${weatherData.clouds.all}%`}
          />
          <InfoDeck
            icon={<FontAwesome5 name='wind' {...infoIconStyle} />}
            subtitle='Vento'
            info={`${weatherData.wind.speed} m/s`}
          />
        </View>
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  pais: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  climaIcon: {
    width: 150,
    height: 100
  },
  celsius: {
    position: 'absolute',
    top: 8,
    right: -23,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 30,
    textTransform: 'capitalize'
  },
  info: {
    textAlign: 'left',
    gap: 5
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});