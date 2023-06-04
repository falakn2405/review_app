import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 20
    },
    titleText: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: `#48d1cc`,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 8
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
});