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
    },
    reviewt: { 
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    reviewb: { 
        fontSize: 15,
        paddingTop: 16,
        paddingBottom: 16
    },
    input: { 
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: { 
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
});

export const images = {
    rating: { 
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
};
