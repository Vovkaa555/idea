import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { IdeaProps,  TypeIdea } from './types';
import { backgroundButton, bulbImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const Idea: React.FC<IdeaProps> = ({ setIdea, setSwitchToSettings, setError }) => {

  async function getIdea() {
    try {
      const response = await axios.get<TypeIdea>(`http://www.boredapi.com/api/activity`, 
        {params: {type: [],
                   },
                  });
      const { data, status } = response;
      setIdea(data);
      setSwitchToSettings(false)
      setError('')
      console.log('response status is: ', status);
      return data; 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message)
        return error.message;
      } else {
        setError('An unexpected error occurred')
        return 'An unexpected error occurred';
      }
    }
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={getIdea}>
        <ImageBackground source={backgroundButton} style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Get idea</Text>
            <Animatable.View animation={'fadeIn'} iterationCount="infinite" duration={2500} style={styles.bulbContainer}>
              <Image source={bulbImage} style={styles.bulbImage}/>
            </Animatable.View>
        </ImageBackground>
      </TouchableOpacity>  
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    width: 350,
    zIndex: 1,
  },

  buttonBackground: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bulbContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  bulbImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  buttonText: {
    fontFamily: 'DeliciousHandrawn',
    fontSize: 50,
    color: '#c5beb4',
    padding: 10
  }
});

export default Idea;
