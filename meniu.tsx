// import React, { useState, useEffect, PropsWithChildren } from 'react';
// import { View, Text, Button, TextInput, FlatList, StyleSheet, useColorScheme,Dimensions, TouchableOpacity } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import BtnMese from './btnmese'
// // import ReactTest from '../../src/screens/test';
// import { NavigationContainer } from '@react-navigation/native';


// const {height} = Dimensions.get("window")


// interface DataItem {
//   id: number;
//   column1: string;
//   column2: string;
// }


// export default function  Nom_Meniu({navigation}:{navigation : any}): React.JSX.Element {

// // const Nom_Meniu = ({navigation}:{navigation : any}) => {

//   const [data1, setData1] = useState<DataItem[]>([]);

//   const handlePress = ({item} :any) => {
//     // this.props.navigation.navigate('ReactTest', { item });
//     navigation.navigate('ReactTest')
//   };

// useEffect(() => {
//   fetchTest();
// }, []);

//   // const fetchTest = async () => {
//   //   try {
//   //     const response = await fetch('http://192.168.58.41:5000/api/meniu');
//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }
//   //     const jsonData = await response.json();
//   //     setData1(jsonData);
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //   }
//   // };
//   const fetchTest = async () => {
//     try {
//       const response = await fetch('http://192.168.2.163:5000/api/mese');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const jsonData = await response.json();
//       setData1(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };



//   return (
//     <View>
//       {/* test  */}
//       {/* <Text style = {styles.text}>Date din users:</Text>
//       <FlatList
//       data={data1}
//       renderItem={({ item }) => <Text>{item.column1} </Text>}  
//       // - {item.column2}
//       keyExtractor={item => item.id.toString()}
//     /> */}

//     <Text style = {styles.text}>Date din users:</Text>
//       <FlatList
//       data={data1}
//       renderItem={({ item }) => (
//         <TouchableOpacity onPress={() => handlePress(item)}>
//           <Text>{item.column1}</Text>
//         </TouchableOpacity>
//   )}  
//       // - {item.column2}
//       keyExtractor={item => item.id.toString()}
//     />

    

//       {/* test  */}
//       {/* <BtnMese  border = {false} onPress = {() =>navigation.navigate('ReactTest')} /> */}

//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center'
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//     height : height ,
//     width : '100%',
//   //   alignContent: 'center',
//   //   alignItems: 'center'
//   },
//   inptxt: {
//       // justifyContent: 'center',
//       // padding : 100,
//       // backgroundColor: '#000000c0',

//       // paddingRight: 50
//   }, 
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   //   backgroundColor: '#000000c0',
//   //   position: 'absolute',
//   //   justifyContent: 'center',
//   //   paddingRight: 50
//   },
//   buttontxt: {
//       flexDirection: 'row',
//       marginTop: 20,
//       justifyContent: 'center',
//   },


// });

// // export default Nom_Meniu;
