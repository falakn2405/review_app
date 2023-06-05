import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const FlatButton = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            {/* Touchable area that triggers the onPress function */}
            <View style={styles.button}>
                {/* View container for the button */}
                <Text style={styles.buttonText}>{ text }</Text>
                {/* Text inside the button */}
            </View>
        </TouchableOpacity> 
    );
}

export default FlatButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: "center",
    }
})
