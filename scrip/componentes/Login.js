import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import appFirebase from '../firebase'

const auth = getAuth(appFirebase)


export default function Login({ navigation }) {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry)
    }


    const logueo = async () => {
        console.log(email, password)
        if (!email || !password) {
            Alert.alert("Error", "Todos los campos son obligatorios")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Error", "El Correo electronico no es valido")
            return
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Iniciando Session", ("Bienvenido" + email));
            navigation.navigate('Dashboard')
        }catch(error){
            Alert.alert("Error", "Contrase;a Incorrecta o usuario inconrrecto")
        }
    }

    return (
        <View>
            <Text>Log-In</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} />
            <Button title="Iniciar Session" onPress={logueo} />
            <Button title="Crear Cuenta" onPress={() => navigation.navigate(`Singin`)} />
        </View>
    )
} 