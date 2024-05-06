import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import Task from './Components/Task';


export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks]= useState([]);

  const addToList = () => {
    if (inputValue === "") {
      Alert.alert("Oops", 'Input is Empty', [
        {
          text: 'Ok.',
        }
      ]);
      return;
    }
    const newItem = {
      id: uuid.v4(),
      item: inputValue,
    };

    setTasks([newItem, ...tasks]);
    setInputValue("");
    Keyboard.dismiss();
  };

  const deleteFromList=(id)=>{
    setTasks(tasks.filter((task)=> task.id!=id))
  };

  return (
    <View style={styles.container}>
      <View style ={styles.taskWrapper}>

      <Text style={styles.sectionTitle}>Work Finder</Text>
      <Text>Welcome to the App!</Text>
      
       <TextInput
        value = {inputValue}
        style={styles.input}
        placeholder={"Add a Task...."}
        onChangeText={(text) => setInputValue(text)}
      /> 
      <TouchableOpacity onPress={addToList}>
        <View style={styles.btn}>
          <Text style={{color:"white"}}>Add</Text>

          <MaterialIcons 
          style={{marginLeft:4, color: 'white'}} 
          name='add-box' 
          size={24}
          />
        </View>
      </TouchableOpacity>

      <View>
        <FlatList 
        keyExtractor={(item)=>item.id}
        data={tasks}
        renderItem={({item})=>(          
          <Task task={item} deleteFromList={deleteFromList}/>
        )}
        />
      </View>
      </View>
      <StatusBar style="auto" />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#E8EAED',       
  },

  taskWrapper: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  input:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,  
    marginTop: 10,  
  },

  sectionTitle:{
    fontWeight: 'bold',
    fontSize: 24,
  },

  btn:{
   padding: 10,
   borderRadius:5,
   alignItems: "center",
   backgroundColor:"#72bcd4",
   marginTop: 10,
   flexDirection:"row",
   justifyContent: "center",
   marginBottom: 10,
  },

});
