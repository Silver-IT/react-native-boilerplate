import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#3179f6',
        padding: 10,
        width: width / 2,
        marginTop: 10,
        borderRadius: 5,
    },
    imageBackground: {
        flex: 1,
    }
});
