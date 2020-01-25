import React,{useState,useEffect} from 'react';
import {Text, StyleSheet, ScrollView, View,FlatList,Image} from 'react-native';
import zomato from "../api/zomato";

const ResultsShowScreen =({navigation}) =>{
    const [result,setResult] = useState(null);
    const id=navigation.getParam('id');
    console.log(result);
    // console.log(id);

    const getResult =  async (id) => {
        const response=await zomato.get(`/restaurant?res_id=${id}`);
        response.data;
        setResult(response.data);
    };

    useEffect(()=>{
        getResult(id);
    },[]);

    //error handling
    if(!result){
        return null;
    }

    return (
        <View>
            <ScrollView>
                <Image style={styles.image} source={{uri:result.thumb}}/>
                <Text> {result.name} </Text>
                <FlatList
                data={result.highlights}
                keyExtractor={item => item}
                renderItem={({item}) => {
                    return <Text>
                        {item}
                    </Text>
                }}
                />
            </ScrollView>
    </View>
    );
};

const styles=StyleSheet.create({
image:{
    height:200,
    width:300
}
});
export default ResultsShowScreen;