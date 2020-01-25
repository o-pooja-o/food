import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term,onStringChange,onTermSubmit}) => {

    return (
        <View style={styles.backGroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput placeholder="Search" style={styles.inputStyle}
            value={term} onChangeText={(newstring)=>onStringChange(newstring)}
                       onEndEditing={()=>onTermSubmit()}//when ok button is hit to know text is ended

            />
        </View>
    );

};

const styles=StyleSheet.create({
    backGroundStyle: {
        height:50,
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row",
        marginTop:10


    },
    inputStyle: {

flex:1,
fontSize:18

    },
    iconStyle:{
fontSize:33,
alignSelf:'center',
marginHorizontal:15

    }

});

export default SearchBar;