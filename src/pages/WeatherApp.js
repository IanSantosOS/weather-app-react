import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard } from 'react-native';

// Replace this with your actual API key
const apiWeatherKey = "c06d17ba99219c0efb01f7f9a77032fd";

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherByAPI = async () => {
        if (city.trim() === '') {
            alert('Digite um local!');
            return;
        }
        const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeatherKey}&limit=5&lang=pt_br&units=metric`;

        try {
            const response = await fetch(apiWeatherUrl);
            const data = await response.json();

            // Process data and update state
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
        Keyboard.dismiss();
    };

    const clearInputs = () => {
        setCity('');
        setWeatherData(null);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Header content */}
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    value={city}
                    onChangeText={setCity}
                    onSubmitEditing={getWeatherByAPI}
                />
                <TouchableOpacity style={styles.button} onPress={getWeatherByAPI}>
                    <Text style={styles.buttonText}>Pesquisar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={clearInputs}>
                    <Text style={styles.buttonText}>Limpar</Text>
                </TouchableOpacity>
            </View>

            {weatherData && (
                <View style={styles.weatherResult}>
                    <Text>{weatherData.name}</Text>
                    <Text>{weatherData.sys.country}</Text>
                    <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png` }} style={styles.weatherIcon} />
                    <Text>{weatherData.main.temp}°C</Text>
                    <Text>{weatherData.weather[0].description}</Text>
                    {/* Add more weather details as needed */}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#800080',
    },
    header: {
        backgroundColor: '#ffff00',
        padding: 15,
    },
    inputContainer: {
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
    },
    weatherResult: {
        marginTop: 20,
        alignItems: 'center',
    },
    weatherIcon: {
        width: 50,
        height: 50,
    },
    // Add more styles as needed for additional weather details
});

export default WeatherApp;