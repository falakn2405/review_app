import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/global";

const Card = (props) => {
    return (
        <View style={globalStyles.card}>
            {/* Outer container for the card */}
            <View style={globalStyles.cardContent}>
                {/* Inner container for the card content */}
                { props.children }
                {/* Content rendered inside the card */}
            </View>
        </View>
    );
};

export default Card;
