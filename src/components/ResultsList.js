import React from 'react';
import {View,Text,StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title,results,navigation}) => {
    if(!results.length)
    {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}> {title}</Text>
            <FlatList
                horizontal  //horizontal={true}
                  showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result=> result.restaurant.id}

                renderItem={({item})=>{
                    //  return <Text> {item.restaurant.name}</Text>;
                  return (
                    <TouchableOpacity onPress={ ()=> navigation.navigate('ResultsShow' ,{id: item.restaurant.id})}>
                      <ResultsDetail result={item.restaurant}/>

                    </TouchableOpacity>
                    )
                }}
            />
        </View>
                  )
};

const styles= StyleSheet.create(
    {
titleStyle:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:8
},
        container:
            {
                marginVertical:5,
                marginLeft:15
            }
    }
);
export default withNavigation(ResultsList);
//returns special object of resultlist with extra features

                   // result=item.restaurant;
                    //name=item.restaurant.name=result.name