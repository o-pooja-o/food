import React from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';

const ResultsDetail = ({result})=>{
return (
    <View>
        <Image style={styles.imageStyle}source={{uri: result.thumb}}/>
    <Text style={styles.textStyle}> {result.name}</Text>
        <Text style={{color:'gray'}}>{result.user_rating.aggregate_rating} Stars, {result.all_reviews_count} Reviews </Text>
    </View>
);
}

const styles= StyleSheet.create({
imageStyle:{
    height:150,
    width:250,
    marginHorizontal:5,
    borderRadius:7

},
    textStyle:{
    fontSize:15,
        marginTop:4
        //fontWeight:'bold'
    }
});

export default ResultsDetail;