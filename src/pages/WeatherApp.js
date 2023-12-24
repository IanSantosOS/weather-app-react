import React, { useState } from 'react';

import Main from '../components/Main';
import Background from '../components/Background';
import WeatherInformation from '../components/WeatherInformation';
import SearchBar from '../components/SearchBar';
import { Keyboard } from 'react-native';

const APIKEY = 'c06d17ba99219c0efb01f7f9a77032fd';

export default function WeatherApp() {
  const baseData = {
    name: 'Cidade',
    weather: [{
      icon: '01d',
      description: 'Nublado'
    }],
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0
    },
    sys: { country: 'br' },
    clouds: { all: 0 },
    wind: { speed: 0 }
  };

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(baseData);

  const searchCity = async () => {
    if (city.trim() === '') {
      alert('Insira uma Cidade');
      return;
    }

    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${APIKEY}&limit=5&lang=pt_br&units=metric`

    try {
      const response = await fetch(APIURL);
      const data = await response.json();
      if (data.message === "city not found") {
        clearData()
        alert("Cidade não encontrada")
      }
      else {
        setWeatherData(data);
      }
    }
    catch(error) {
      throw error;
    }
    Keyboard.dismiss();
  }

  const clearData = () => {
    setCity('');
    setWeatherData(baseData);
  }

  return (
    <Background src={require('../../assets/fundo-app.jpg')}>
      <Main color='#800080' borderColor='#d10fd1'>
        <SearchBar
          value={city}
          onChange={setCity}
          placeholder='Cidade'
          searchFunc={searchCity}
          clearFunc={clearData}
        />
        <WeatherInformation weatherData={weatherData} />
      </Main>
    </Background>
  )
}