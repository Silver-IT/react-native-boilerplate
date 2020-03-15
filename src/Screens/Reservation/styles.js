import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnDetails: {
        alignItems: 'center',
        backgroundColor: '#3179f6',
        padding: 10,
        width: width / 2,
        borderRadius: 5,
    },
});
