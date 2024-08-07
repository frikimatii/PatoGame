import React from "react";
import {View, Text, Button } from "react-native";


export default function DasDoard({ navigation }) {
    const CerrarSeccion = () => {
        navigation.navigate(`Login`)
    }
    return (
        <View>
            <Text>Dashboard</Text>
            <View>
                <Text>Card</Text>
            </View>
            <View>
                <View>
                    <Text>Game</Text>
                </View>
                <View>
                    <Button title="Game-1" onPress={() => navigation.navigate(`Game1`)}/>
                </View>
                <View>
                    <Button title="Game-2" onPress={() => navigation.navigate(`Game2`)}/>
                </View>
                <View>
                    <Button title="Game-3" onPress={() => navigation.navigate(`Game3`)}/>
                </View>
                <View>
                    <Button title="Game-4" onPress={() => navigation.navigate(`Game4`)}/>
                </View>
                <View>
                    <Button title="Game-5" onPress={() => navigation.navigate(`Game5`)}/>
                </View>
            </View>
            <Button title="Cerrar Session" onPress={CerrarSeccion} />
        </View>
    )
}