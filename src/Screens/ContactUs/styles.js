import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSubmit: {
        alignItems: 'center',
        backgroundColor: '#f3236a',
        padding: 10,
        width: width / 2,
        borderRadius: 5,
    },
});
