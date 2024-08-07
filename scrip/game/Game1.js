import React from "react";
import { View, Text } from "react-native";

export default function Game1({ route }) {
    const { userData } = route.params;

    return (
        <View>
            <Text>Game1</Text>
            <Text>User: {userData.user}</Text>
            <Text>Coin[0]: {userData.coin[0]}</Text>
        </View>
    );
}
