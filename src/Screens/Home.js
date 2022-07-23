import { useState } from 'react';
import { Button,IconButton, useTheme} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { 
    View ,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

import biscoito from '../Images/biscoito.png';
import biscoitoAberto from '../Images/biscoitoAberto.png';

export function Home() {

    const [textoFrase,settextoFrase] = useState('');
    const [imgBisc,setImg] = useState(biscoito);
    const theme = useTheme();

    const frases = [
        "Siga os bons e aprenda com eles.",
        'O bom-senso vale mais do que muito conhecimento.',
        'O rito é a menor distancia entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pensa no improvável e conquiste o impossivel.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o meod do fracasso.'
    ];

    function quebraBiscoito(){
        let numAleatorio = Math.floor(Math.random() * frases.length);
        settextoFrase(' " ' + frases[numAleatorio] + ' " ');
    }
    function restart(){
        settextoFrase('');
    }

  return (
    <View style={styles.container}>
        <Image
            source={textoFrase === '' ? biscoito : biscoitoAberto}
            style={styles.img}
        />
        <Text style={styles.textoFrase}>{textoFrase}</Text>


        <Button
        borderWidth={3}
        borderColor='#dd7b22'
        borderRadius={15}
        bg='transparent'
        _text={{color: '#dd7b22', fontSize: 25}}
        _pressed={{ bg:'gray.100'}}
         onPress={quebraBiscoito}>
            Quebrar Biscoito
        </Button>
        <Button
            borderRadius={15}
            borderWidth={3}
            bg='transparent'
            borderColor='#dd7b22'
            marginTop={10}
            _pressed = {{bg: 'gray.100'}}
            onPress={restart}
        >
            <Ionicons 
            name="refresh-outline" 
            size={24} 
            color="black"
            />
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: 250,
        height: 250
    },
    textoFrase:{
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao:{
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
    },
    btnArea:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
})