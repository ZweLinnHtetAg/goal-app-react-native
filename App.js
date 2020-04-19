import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView , FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals,setCourseGoals]= useState([]);

  const addGoalHandler = goalTitle =>{
      setCourseGoals([...courseGoals,
      {id:Math.random().toString(),value:goalTitle} ]);
  }

  const goalDeleteHandler = goalID => {
    return (
      setCourseGoals(currentGoals=>{
        return currentGoals.filter((goal)=>goal.id !== goalID);
      })
    )
  }

  return (

    <ScrollView style={styles.screen}>
    <GoalInput onAdd={addGoalHandler} />

    <FlatList
      keyExtractor={(item,index)=>item.id}
      data={courseGoals}
      renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={goalDeleteHandler} />}
    />


  </ScrollView>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding:10,
  },

  inputContainer: {
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

  listItem: {
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
    marginVertical:10,
  }

});
