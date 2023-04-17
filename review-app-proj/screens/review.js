import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Review() {
    return (
        <View style={styles.container}>
            <Text>Revie Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});