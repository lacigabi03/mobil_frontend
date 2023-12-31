import React from 'react';
import {StyleSheet, View, Text,Image, ScrollView} from 'react-native';
import Ipcim from './Ipcim';
import { WebView } from 'react-native-webview';

const Ujlap = ({route}) => {
    const {atkuld1,atkuld2,atkuld3,atkuld4,atkuld5} = route.params

    return (
        
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}> 
            <Text 
            style=
            {
                {
                    textAlign: 'center',
                    fontSize: 100,
                    fontFamily: 'Savoye LET'
                }
            }
            >
                
                {atkuld2}
            </Text>

            
            <Image source={{uri:Ipcim.Ipcim+atkuld4}} style={{width:224,height:160, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto'}}   />


            <Text
            style=
            {
                styles.valamiszoveg
               
            }
            >
                {atkuld3}
            </Text>
            


            
                
        <WebView source={{ uri:atkuld5}} style={{ flex: 1 }} />
            
        </ScrollView>
        </View>
        
    );
};


//                                                                                                    S     T     Y     L    E
//                                                 S     T     Y     L    E
//        S     T     Y     L    E

const styles =StyleSheet.create({
    container: {
        alginItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
        
    },
    valamiszoveg: {
        fontSize: 30,
        fontFamily: 'Avenir Next Condensed',
        paddingTop: 35,
        marginLeft: 10,
        marginRight: 10
    }
});

export default Ujlap;
