import React, { useState } from "react";
import { TextInput, View, Text, Button, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirstore, doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import appFIrebase from "../firebase"

const auth = getAuth(appFIrebase)



export default function Singin({ navigation }) {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");



    const CrearCuenta = async () => {
        console.log(user, email, password)

        if (!user || !email || !password || !confirmpassword) {
            Alert.alert("Error", "Todos los campos Son Obligatorios")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Error", "EL Correo Electronico no es valido")
            return
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            Alert.alert("Error", "La contrasel;a debe tenes al menos 8 caracteres, una letra y un numero")
            return
        }

        if (password !== confirmpassword) {
            Alert.alert("Error", "La Contrase;a no coiciden ")
            return
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Registro exitoso", "Tu Cuenta fue Creada Exitosamente");
            navigation.navigate("Login");
        } catch (error) {
            Alert.alert("Error", error.massege)
        }

    }
    return (
        <View>
            <Text>Sing UP</Text>
            <TextInput placeholder="User" value={user} onChangeText={setUser} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Passwoard" value={password} onChangeText={setPassword} />
            <TextInput placeholder="Confir Passwoard" value={confirmpassword} onChangeText={setConfirmPassword} />

            <Button title="Crear" onPress={CrearCuenta} />
            <Button title="Volver" onPress={() => navigation.navigate(`Login`)} />

        </View>
    )
} 3