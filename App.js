// // import React, { useState } from 'react';
// import { useState } from 'react';
// import {Text, View, Button, StyleSheet } from 'react-native';
// import ExStyles from './components/style'
// // import Userf from '.Cdata/components/Cdata';

// const App = () => {
//   // const fruit = () => {
//   //   console.warn("function called")
//   // }
//   // const [name,setname]=useState("ali")
//   // function testName(){
//   //   setname("qwertff")
//   // }
//   // let name ="asdf";
//   const [name,setName] =useState("asw")
//   const [age,setAge] =useState(["454"])
//   return (
//     <View>
//        <Text style={Styles.textBox}> props </Text>
//        {/* <User name={name} age={[25]} /> */}
//       {/* <Text style={{fontSize:30}}>{name}</Text>
//       <Button title='update' onPress={testName}></Button> */}
//       {/* <Button title="press here" onPress={()=>fruit()} color={'green'}></Button> */}
//       <Text style={{fontSize:30,color:'red',backgroundColor:'green'}}>style in nativ</Text>
//       <Text style={Styles.textBox}>style in nativ</Text>
//       <Text style={ExStyles.textBox}>style in nativ</Text>
//     </View>
//   );
// };

// const Styles=StyleSheet.create({
//   textBox:{
//     color:'#fff',
//     fontSize:30,
//     backgroundColor:'lightblue',
//     marginBottom:10,
//     padding:10,
//     borderRadius:15,
//     height:100,
//     textAlignVertical:'center',
//     textAlign:'center',
//     borderColor:'red',
//     borderWidth:2,
//   }
// })
// // const User=(props)=>{
// //   return(
// //     <View  style={{backgroundColor:'green', padding:5}}>
// //       <Text sryle={{ fontSize: 30}}>name :{props.name}</Text>
// //       <Text sryle={{ fontSize: 30}}>Age :{props.age}</Text>
// //     </View>
// //   );
// // }
// //components example
// // const UserData = () => {
// //   return(
// //     <View>
// //      <Text style={{ fontSize: 20 }}> Name: ali</Text>
// //      <Text style={{ fontSize: 20 }}> age: 77</Text>
// //      <Text style={{ fontSize: 20 }}> email: jkj@gmail.com</Text>
// //     </View>
// //   )
// // }
// export default App;

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const App = () =>{

  const [name,setName]=useState("");
  return(
    <View>
      <Text style={{ fontSize: 30 }}>Handle text input</Text>
      <Text style={{ fontSize: 30 }}>your name {name}</Text>
      <TextInput style={style.TextInput}
      placeholder='enter your'
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      <Button title='clear' onPress={()=>setName('')}/>
    </View>
  );
};

const style =StyleSheet.create({
  TextInput:{ fontSize:18 ,
             borderWidth:2,
             borderColor:'red',
              margin:14}
})
export default App;