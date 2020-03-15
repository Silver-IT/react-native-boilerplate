import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: width / 3 * 2,
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#3179f6',
        padding: 10,
        width: width / 2,
        marginTop: 100,
        borderRadius: 5,
    },
    btnRegister: {
        alignItems: 'center',
        padding: 10,
        width: width / 2,
        marginTop: 20,
        borderColor: '#3179f6',
        borderWidth: 1,
        borderRadius: 5,
    },
});
