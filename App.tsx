import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useCallback, useState} from 'react';
import Idea from './components/Idea'
import { backgroundImage, gearImage } from './assets';
import { TypeIdea } from './components/types';
import { useFonts } from 'expo-font';
import Settings from './components/Settings';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App:React.FC = () => {
  const [idea, setIdea] = useState<TypeIdea>({
    activity: '',
    accessibility: 0,
    type: '',
    participants: 0,
    price: 0,
    key: '',
  });
  const [error, setError] = useState<string>('');
  const [switchToSettings, setSwitchToSettings] = useState<boolean>(false)
  

  const settings = () => {
    setSwitchToSettings((value)=> !value)
  }
  console.log(switchToSettings)
  const [fontsLoaded] = useFonts({
    DeliciousHandrawn: require('./assets/fonts/DeliciousHandrawn-Regular.ttf'),
    Nanum: require('./assets/fonts/NanumPenScript-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
          {/*<Pressable style={styles.settingsIconContainer} onPress={settings}>
            <ImageBackground source={gearImage} style={styles.settingsIcon}/>
          </Pressable>*}
          {/*switchToSettings ? 
            <View style={styles.settings}>
              <Settings/>
            </View>
            : 
            <View style={styles.responseContainer}>
              <Text style={styles.responseText}>{idea.activity}</Text>
          </View>*/}
          <View style={styles.responseContainer}>
              {error ? <Text style={styles.responseText}>{error}</Text> : <Text style={styles.responseText}>{idea.activity}</Text>}
          </View>
          <View style={styles.buttonContainer}>
            <Idea setIdea={setIdea} setSwitchToSettings={setSwitchToSettings} setError={setError}/>
          </View>
        </ImageBackground>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#d3ceca'
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    zIndex: 1,
    position: 'absolute',
    top: 55,
    right: 20
  },
  settingsIcon: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '30%',
    position: 'absolute',
    top: 130,
  },
  responseContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  responseText: {
    fontFamily: 'DeliciousHandrawn',
    fontSize: 60
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    bottom: 10,
  }
});

export default App;
