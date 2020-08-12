import { StyleSheet} from 'react-native';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';


const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 20
    },
    content:{
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },
    description:{
        marginTop: 42,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },
    okButton:{
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText:{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
});

export default styles;