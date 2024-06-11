import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListHeader from './ListHeader';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('toto');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erreur', 'Veuillez entrer votre email et mot de passe.');
            return;
        }

        try {
            const response = await fetch('https://website-checker.boreales-creations.fr/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.status === 200) {
                const data = await response.json();
                await AsyncStorage.setItem('userToken', data.token);
                navigation.navigate('Liste'); // Naviguer vers la page d'accueil ou une autre page
            } else {
                console.log(response);
                Alert.alert('Erreur', 'Email ou mot de passe incorrect.');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite. Veuillez rÃ©essayer.');
        }
    };

    return (
        <View>
            <ListHeader />
            <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#E6D0E6',
    },
    title: {
        fontSize: 24,
        color: '#340834',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B06CB0',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#340834',
    },
    button: {
        backgroundColor: "#B06CB0",
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: "#e2f6c3",
        fontSize: 18,
        fontWeight: 'semi-bold',
    },
});

export default LoginPage;