import React , { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Dimensions,
  Alert,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RoundButton from '../../../assets/components/roundbutton';
import InputField from '../../../assets/components/inputfield';
import MainScr from '../mainscr';
import ReactConn from '../../../dbconn/reactconn';

const {height} = Dimensions.get("window")
const {width} = Dimensions.get("screen")

// const logImg = {
//     // uri: '../../../assets/img/Bar.jpg',
//     source = {require('../')}
// };
interface Values {
  username: string;
  password: string;

  // border: boolean;
  // onPress: any;
}

const users = [
  { id: 1, user: 'Admin', password: 'Parola' },
];

export default function  LogScr({navigation}:{navigation : any}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const verifydb = async (username: string, password: string) => {
    try {
      const response = await fetch('http://192.168.214.167:5000/api/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        // throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Check if the user is verified
      return data.found; // Adjust this based on your API response
    } catch (error) {
      // console.error('Error verifying user credentials:', error);
      return false;
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // very db
  const handleLogin = () => {
    // navigation.navigate('MainScr');
    const user = users.find(u => u.user === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      navigation.navigate('MainScr');
    } else {
      Alert.alert('Error', 'Datele introduse nu sunt valide!');
    }
  };
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  
  // const handleCompare = () => {
  //   if (username == 'user' && password == 'parola') {
  //     navigation.navigate('MainScr');
  //   } else {
  //     Alert.alert('Strings do not match!');
  //     console.log(username, p)
  //   }
  // };
  // // const [value1, setValue1] = useState('');
  // // const [value2, setValue2] = useState('');

  // const handleVerify = async () => {
  //   const isVerified = await verifyData(username, password);

  //   if (isVerified) {
  //     console.log('Values are present in the database');
  //     // Do something if values are present in the database
  //   } else {
  //     console.log('Values are not present in the database');
  //     // Do something if values are not present in the database
  //   }
  // };
  //vry db

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

//   source= {require("../../../assets/img/rest1.jpg")}
  return (
    <SafeAreaView style={styles.container}>
    {/* <View> */}
        {/* <View style={styles.container}> */}
            <ImageBackground style={styles.image} source={require("../../../assets/img/Bar.jpg")} resizeMode="cover" >
            {/* <Text style={styles.text}>Inside</Text> */}
            <View style= {styles.inptxt}>
                <Text style={styles.text}>Welcome</Text>
                <View>

                </View>
                {/* <InputField label = {'User'} secureTextEntry = {false}   onChangeText={setUsername} value = {username}/> */}
                <View style = {styles.inputview}>
        {/* <Text> input aici </Text> */}
        <TextInput 
            style={styles.inptxt} 
            placeholder = {'User'} 
            placeholderTextColor='white'
            // secureTextEntry 
            onChangeText={setUsername}
            value={username}

            />

            
        {/* <TextInput style={styles.inptxt} placeholder= 'Password' /> */}

        {/* <InputFieldComp /> */}
      </View>

      <View style = {styles.inputview}>
        {/* <Text> input aici </Text> */}
        <TextInput 
            style={styles.inptxt} 
            placeholder = {'Parola'} 
            placeholderTextColor='white'
            secureTextEntry 
            onChangeText={setPassword}
            value={password}

            />

            
        {/* <TextInput style={styles.inptxt} placeholder= 'Password' /> */}

        {/* <InputFieldComp /> */}
      </View>
                {/* <InputField label = {'Password'} secureTextEntry = {false} value = {password} onChangeText={setPassword}/> */}
                <View style={styles.buttontxt}>
                    <RoundButton label= {'Login'} border = {false} onPress={handleLogin} />  
                    {/* {handleVerify}/> */}
                    <RoundButton label= {'Sign Up'} border ={true} onPress = {() =>navigation.navigate('SignUp') } />
                </View>
            </View>
            </ImageBackground>
            
        {/* </View> */}
    {/* </View> */}
    </SafeAreaView>
    // <SafeAreaView >

    // </SafeAreaView>
 
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      height : height ,
      width : '100%',
    //   alignContent: 'center',
    //   alignItems: 'center'
    },
   
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    //   backgroundColor: '#000000c0',
    //   position: 'absolute',
    //   justifyContent: 'center',
    //   paddingRight: 50
    },
    buttontxt: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    inputview: {
      borderBottomColor : '#AEB6BF',
      borderBottomWidth: 4,
      // flexDirection: 'row',
      margin: 15
    },
    inptxt: { 
      color: 'white',
      fontSize: 30,
      // flexDirection: 'row',
      width: '100%'
    }


});





// export default LogScr;