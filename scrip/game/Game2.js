import React from "react";
import { View, Text } from "react-native";

export default function Game2({ route }) {
    const { userData } = route.params;

    return (
        <View>
            <Text>Game1</Text>
            <Text>User: {userData.user}</Text>
            <Text>Coin[0]: {userData.coin[1]}</Text>
        </View>
    );
}
