import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button, Image} from 'react-native';
import Ipcim from './Ipcim';

const KozosScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+"Orszag");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    
  };

  

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24,}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
            <Text style={{fontWeight:'bold', color: 'blue', fontSize: 25, textAlign: 'center'}}>
              {item.Orszag_id} {item.Orszag_nev}
            </Text>
            <Image source={{uri:Ipcim.Ipcim+item.Orszag_zaszlo}} style={{width:224,height:160, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto'}}   />
            

                            {/* Gomb átugrik az " Ujlap.js "-re */}
              <View style={{color:'#800000',
                        paddingTop: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize:20,
                        height:45,
                        overflow:'hidden',
                        borderRadius:10,
                        backgroundColor:'#F0E68C',
                        borderRadius:20
                        }}>              
            <Button
            
            
                        onPress=
                        {() => navigation.navigate('Ujlap', 
                        {
                            atkuld1:item.Orszag_id, 
                            atkuld2:item.Orszag_nev, 
                            atkuld3:item.Orszag_szoveg, 
                            atkuld4:item.Orszag_zaszlo
                        }
                        )
                    }
                        title="Részletek"
                        color="#800000"
                        padding= '10'
                        fontSize='20'
                        height='45'
                        overflow='hidden'
                        
                        
                        
                        
                        />
                        
                        </View>
            </View>
          )}
        />
      )}
    </View>
  );
};


export default KozosScreen;