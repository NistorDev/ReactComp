
import React from 'react';
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
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {height} = Dimensions.get("window")
const {width} = Dimensions.get("screen")

interface InputProps {
  label: string;
//   keyboardType: string;
  secureTextEntry: boolean;
  onChangeText: any;
  value:string;
}

export default function InputField({label, secureTextEntry = false,onChangeText,value}:InputProps): React.JSX.Element {


  return (
    // <TouchableOpacity onPress={()=> onPress()}>
      <View style = {styles.inputview}>
        {/* <Text> input aici </Text> */}
        <TextInput 
            style={styles.inptxt} 
            placeholder = {label} 
            placeholderTextColor='white'
            secureTextEntry = {secureTextEntry} 
            
            // value={value}

            />
        {/* <TextInput style={styles.inptxt} placeholder= 'Password' /> */}

        {/* <InputFieldComp /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 40,
  },
  inputview: {
    borderBottomColor : '#AEB6BF',
    borderBottomWidth: 4,
    flexDirection: 'row',
    margin: 15
  },
  inptxt: { 
    color: 'white',
    fontSize: 30,
    flexDirection: 'row',
    width: '100%'
  }
});