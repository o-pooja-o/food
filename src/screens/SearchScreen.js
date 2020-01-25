import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import UseResults from '../hooks/UseResults';
import ResultsList from "../components/ResultsList";



const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results,errorMessage] = UseResults(); //trick for resusable hooks
//console.log(results);//  whole long data with lots of properties
    const filterResultsByPrice = ( price) => {
        // price === '$' || '$$' || '$$$' property of results
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    };
    //flex mostly apply to most parent view
            return (
              <View style={{flex:1}}>
            <SearchBar term={term}
                        onStringChange={ newString=>setTerm(newString)}//{setString} also valid
                       onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ?  <Text> {errorMessage}</Text> : null}
            <ScrollView>
            <Text style={styles.title}> we found {results.length} results</Text>
                  <ResultsList results={filterResultsByPrice(2)} title="Cost effective!"/>
                  <ResultsList  results={filterResultsByPrice(3) }title="Bit pricer!!"/>
                  <ResultsList  results={filterResultsByPrice(4)} title="Big spender!!!"/>
            </ScrollView>
                </View>
    );

};

const styles=StyleSheet.create({
    title:{
        marginBottom:15
    }
});

export default SearchScreen;