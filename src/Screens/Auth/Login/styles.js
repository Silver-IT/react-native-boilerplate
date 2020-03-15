import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        width: width / 5 * 3 - 30,
        paddingHorizontal: 10,
    },
    inline: {
        width: width / 5 * 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#3179f6',
        padding: 10,
        width: width / 2,
        borderRadius: 5,
    },
    btnRegister: {
        alignItems: 'center',
        padding: 10,
        width: width / 2,
        marginBottom: 10,
    },
    textGroup: {
        flex: 1,
        paddingBottom: 50,
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        marginTop: 50,
        width: width / 3 * 2,
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
});
