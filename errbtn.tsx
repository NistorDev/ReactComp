import React, { CSSProperties, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


type btnProps = {
  isInError: boolean;
  errorMesage: string;
  placeholder: string;
  onCustomChange: any;
  value: string;
  styleInput?: any; 
  styleText?:any;

}


const ErrField= ({isInError,errorMesage,placeholder,onCustomChange,value,styleInput,styleText} : btnProps) => {

  let errorMessageComponent = null;
  if (isInError) {
    errorMessageComponent = <Text style={styles.errorText}>{errorMesage}</Text>;
  }

  return (
    <View >
      <TextInput style={[styleInput,{borderColor: isInError ? 'red' :  '#D3D3D3' }]}
        placeholder={placeholder}
        
        placeholderTextColor='#B1AFAF'
        onChangeText={onCustomChange}
        value = {value}
        
      />
       {isInError? <Text style={styleText}>{errorMesage}</Text>: ''}
      </ View>
  );
};

// {[{style}, {borderColor: isInError ? 'red' :  '#D3D3D3' }]}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
   // marginLeft: 10
  },
  test : {

  }
});

export default ErrField;

