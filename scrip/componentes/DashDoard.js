import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../firebase";

export default function Dashboard({ navigation }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                console.log("Authenticated user:", user.email); // Verifica que el usuario esté autenticado
                try {
                    const q = query(collection(database, 'users_game'), where('email', '==', user.email));
                    const querySnapshot = await getDocs(q);
                    if (!querySnapshot.empty) {
                        const userDoc = querySnapshot.docs[0].data();
                        console.log("User data:", userDoc); // Verifica los datos obtenidos
                        setUserData(userDoc);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                console.log("No authenticated user found.");
                navigation.navigate("Login");
            }
        };

        fetchUserData();
    }, [auth, navigation]);

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.navigate("Login");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!userData) {
        return <Text>No user data found</Text>;
    }

    return (
        <View>
            <Text>Dashboard</Text>
            <View>
                <Text>Card</Text>
                <Text>User: {userData.user}</Text>
                <Text>Email: {userData.email}</Text>
            </View>
            <View>
                <Text>Games</Text>
                <Button title="Game-1" onPress={() => navigation.navigate("Game1", { userData })} />
                <Button title="Game-2" onPress={() => navigation.navigate("Game2", { userData })} />
                <Button title="Game-3" onPress={() => navigation.navigate("Game3", { userData })} />
                <Button title="Game-4" onPress={() => navigation.navigate("Game4", { userData })} />
                <Button title="Game-5" onPress={() => navigation.navigate("Game5", { userData })} />
            </View>
            <Button title="Cerrar Sesión" onPress={handleSignOut} />
        </View>
    );
}
