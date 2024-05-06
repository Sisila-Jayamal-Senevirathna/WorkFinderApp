import React from "react";
import{View,Text,StyleSheet} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

const Task =({task:{id,item}, deleteFromList})=>{
    return (
        <View style={styles.item}>
            <View>
                <View></View>
                    <Text>{item}</Text>
                </View>
            <MaterialIcons 
            onPress={()=>deleteFromList(id)} 
            name='delete' 
            size={20}
            color= 'red'
            />
        </View>
    );
};
export default Task;

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
    },
});

