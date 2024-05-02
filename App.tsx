import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import React, { useState } from 'react';

import ErrField from './components/errbtn';


export default function App() {

  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('')

  const handleInputChange = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setValue(value);
    }
  }

  const [passwd, setParola] = useState('');
  const [repasswd, setReparola] = useState('');


  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState(false);

  const handleSign = () => {

    if (email === '') {
      setIsError(true);
      setErrorMessage('campul este obligatoriu')
    }  else {
      if (email != 'rares@test.ro') {

        setIsError(true);
        setErrorMessage('Mailul Trebuie sa fie Rares')
      
      } else {
        setIsError(false);
        setErrorMessage('')}
      
    }
    // if (passwd === repasswd) {
    //   Alert.alert('parola confirmata');
    // } else {
    //   Alert.alert('parola introdusa gresit');
    // }
  }




  const handleTextInputChange = (text: string) => {
    setEmail(text);
    setIsError(false);
    setErrorMessage('') 
  }

  

  // const [passwd, setParola] = useState('')
  // const [repasswd, setReparola] = useState('')

  // const handleSign = (passwd: string, repasswd:string ) =>{
  //   if (passwd === repasswd){
  //     alert('parola confirmata')
  //   } else {
  //     alert('parola gresita')
  //   }
  // }




  // const onNume = (value: string) => {
  //   // console.log('Input value: ', value);

  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setNume(value);
  //   }
  // }

  // const onPrenume = (value: string) => {
  //   // console.log('Input value: ', value);

  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setPrenume(value);
  //   }
  // }


 
  // const [text, setText] = useState('');

  // const onInputChange = (value) => {
  //   // Check if the value contains only letters (no numbers)
  //   if (/^[a-zA-Z]*$/.test(value) || value === '') {
  //     setText(value);
  //   }
  // };

//</View>value={text}  onChange={onInputChange}>

  return (
    <SafeAreaView style = {styles.container}>
    <View style = {styles.blue} >

      <View style = {styles.screen}>
        
        <Text style ={styles.txtcont}>Creeaza cont</Text>

        {/* <View style = {styles.txtinput}> */}
        
        <ErrField isInError = {isError} errorMesage = {errorMessage} placeholder = {'Email'}    onCustomChange={ handleTextInputChange} value = {email} styleInput={styles.txtinput} styleText = {styles.errText}/>
        {/* errorMessage='oops eroare' */}
        {/* <ErrField  placeholder={'Email'} border = {false} onChangeText={ () => handleInputChange} /> */}
        {/* <TextInput  style = {styles.txtinput} placeholder='E-mail' placeholderTextColor={'#B1AFAF'} >
          
        </TextInput> */}

        {/* </View> */}
        {/* <View style = {styles.txtinput}> */}
        <TextInput style = {styles.txtinput} placeholder='Nume' placeholderTextColor={'#B1AFAF'}  value={nume}  onChangeText= {(value)=>{handleInputChange(value, setNume)}} /> 
          
        {/* </TextInput> */}
        {/* </View> */}
        {/* <View style = {styles.txtinput}> */}
        <TextInput style = {styles.txtinput} placeholder='Prenume' placeholderTextColor={'#B1AFAF'}  value={prenume}  onChangeText= {(value)=>{handleInputChange(value, setPrenume)}} >

        </TextInput>
        {/* </View> */}
        {/* <View style = {styles.txtinput}> */}
        <TextInput style = {styles.txtinput} placeholder='Oras' placeholderTextColor={'#B1AFAF'} >

        </TextInput>
        {/* </View> */}
        {/* <View style = {styles.txtinput}> */}
        <TextInput style = {styles.txtinput} placeholder='Parola' placeholderTextColor={'#B1AFAF'} value = {passwd} onChangeText={setParola} >

        </TextInput>
        {/* </View> */}
        {/* <View style = {styles.txtinput}> */}
        <TextInput style = {styles.txtinput} placeholder='Confirmati parola' placeholderTextColor={'#B1AFAF'} value ={repasswd} onChangeText={setReparola}>
          
        </TextInput>
        {/* </View> */}
        <View>
          <TouchableOpacity style = {styles.btnsign} onPress={handleSign}>
            <Text style = {styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.account}>

        <View>
          <TouchableOpacity style = {styles.btnsign}>
            <Text style = {styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style = {styles.btnsign}>
            <Text style = {styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style = {styles.btnsign}>
            <Text style = {styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        </View>

      </View>
      
    </View>

    
    </SafeAreaView>
  );
}

{/* <StatusBar style="auto" /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    flex:1,
    backgroundColor: '#20B2F7',
    // marginTop: 20,
    
  },
  screen: {
    height: '75%',
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    bottom : 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    // marginTop: ''
    // alignSelf: 'baseline'
  },
  txtcont:{
    marginTop: '5%',
    fontSize: 30,
    marginLeft: '10%',
    fontWeight: 'bold',
    color: '#20B2F7',
    marginBottom: '1%',
    // fontStyle: ''
    // textAlign: 'center'
  },
  txtinput: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 10,
    height: 42,
    paddingLeft: 20,
    backgroundColor : 'white',
    // alignItems: 'center',
    justifyContent:'center',
    shadowColor: "#3b3b3b",
    width: '75%',
    alignSelf: 'center',
    marginTop: '5%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:0.5,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  errText:{
    marginLeft:50,
    color: 'red',
  },
  btnsign:{
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 10,
    height: 57,
    // paddingLeft: 20,
    justifyContent:'center',
    // alignContent: 'center',
    textAlign: 'center',
    backgroundColor : '#20B2F7',
    alignItems: 'center',
    // justifyContent:'center',
    shadowColor: "#3b3b3b",
    width: '75%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  btntext: {
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    fontSize: 20,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  btnaccount: {

  }
  // txtinput: {
  //   // // borderBottomWidth: '100%',
  //   // // backgroundColor: '#20B2F7',
  //   // // borderBottomColor: 'black',
  //   // // height: '100%',
  //   // width: '75%',
  //   // alignSelf: 'center',
  //   // marginTop: '6%',
  //   // borderWidth: 1,
  //   // borderRadius: 10,
  //   // height: 40,
  //   // paddingLeft: 20,
  //   // borderColor: '#C1C4C7',
  //   // shadowColor: 'grey',
  //   // backgroundColor: 'transparent',
  //   // // padding:60
  //   // // // shadowColor: '#000',
  //   // // shadowRadius
  //   // // shadowOffset: { width: 30, height: 50 },
  //   // shadowOpacity: 1,
  //   // // shadowRadius: 3,
  //   // elevation: 40,
  //   // shadowColor: "#000",
  //   // shadowOffset: {
  //   //   width: 0,
  //   //   height: 5,
  //   // },
  //   // shadowOpacity: 0.22,
  //   // shadowRadius: 2.22,
    
  //   // elevation: 30,
    
  //   // shadowRadius: 20,
  //   // shadowOpacity: 100,
  //   // placeholder: 'E-mail',
    
  //   // borderWidth: 10,
  // },
  
});

