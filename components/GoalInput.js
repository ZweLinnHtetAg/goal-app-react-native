import React ,{useState} from 'react';
import { View,TextInput,Button,StyleSheet } from 'react-native';

 const GoalInput = props => {

   const [enterGoal,setEnterGoal]= useState('');


   const enterInputHandler = (enteredText) =>
   {
     setEnterGoal(enteredText)
   }

   return (
     <View style={styles.inputContainer}>
       <TextInput placeHolder="add new goal" style={styles.input} onChangeText={enterInputHandler} value={enterGoal} />
       <Button title="Add Now" onPress={props.onAdd.bind(this,enterGoal)}/>
     </View>
   )
 };

 const styles = StyleSheet.create({
   inputContainer:{
     marginVertical:50,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
   },
   input:{
     borderColor:'black',
     borderWidth:1,
     width:'80%',
     padding:14
   },
 });

export default GoalInput;
