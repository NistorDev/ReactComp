
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

interface ButtonProps {
  label: string;
  border: boolean;
  onPress: any;
  // onChangetext: any;

}

export default function  RoundButton({label, border = false, onPress}: ButtonProps): React.JSX.Element {


  return (
    <TouchableOpacity onPress={()=> onPress()}>
      <View style = {[styles.button, {backgroundColor: border ? 'white' :'#034ef7'}]}>
        <Text style = {[styles.text, {color: border ? 'black' : 'white' }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 40,
  },

  button : {
    

    borderRightColor: '',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 40,
    width: 100,
    marginLeft: 10,
    // fontSize : 30,
    // color : '#20bfbe' ,
  },

  text : {
        fontSize : 22,
        // color:  'white' ,
        textAlign: 'center',

    // height : height / 2,
    // width : '100%',
    // aspectRatio : 1,
    // alignItems : 'center'
  },


});