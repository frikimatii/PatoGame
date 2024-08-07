import React, { useState } from "react";
import { TextInput, View, Text, Button, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import appFIrebase, { database } from "../firebase"; // Asegúrate de que la importación sea correcta

const auth = getAuth(appFIrebase);

export default function Singin({ navigation }) {
  const [id, setId] = useState("0");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const CrearCuenta = async () => {
    console.log(user, email, password);

    // Validaciones
    if (!user || !email || !password || !confirmpassword) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo electrónico no es válido");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert("Error", "La contraseña debe tener al menos 8 caracteres, una letra y un número");
      return;
    }

    if (password !== confirmpassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    try {
      // Crear usuario en Firebase Auth
      await createUserWithEmailAndPassword(auth, email, password);

      // Crear datos en Firestore
      await addDoc(collection(database, "users_game"), {
        id: id,
        user: user,
        email: email,
        password: password, // Nota: Guardar contraseñas en texto plano no es recomendable
        coin: [0, 0, 0, 0, 0],
        date: new Date()
      });

      Alert.alert("Registro exitoso", "Tu cuenta fue creada exitosamente");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="User" value={user} onChangeText={setUser} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />
      <TextInput 
        placeholder="Confirm Password" 
        secureTextEntry 
        value={confirmpassword} 
        onChangeText={setConfirmPassword} 
      />

      <Button title="Crear" onPress={CrearCuenta} />
      <Button title="Volver" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
