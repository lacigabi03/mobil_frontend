import * as React from 'react';
import { Button, View, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';




//--------   Hivatkozások   --------\\
import Proba from './Proba'
import Orszag from './Orszag'
import Varos from './Varos'
import Felvitel from './Felvitel'
import Lenyilo from './Lenyilo'
import KozosScreen from './KozosScreen'
import Ujlap from './Ujlap'
import Video from './Video'
import Nevjegy from './Nevjegy'
import Rejtveny from './Rejtvény'
import KeresesSzoveg from './KeresesSzoveg'
import Nevezetessegek from './Nevezetessegek'
import HomeScreen from './HomeScreen';

{/*  2024.01.19  */}



function Folap({ navigation }) {
  return (
        
    <ImageBackground  
      source={require('./HomeScreenHatter.jpg')}
      style=
      {
        {
          flex: 1, 
          alignItems: 'left', 
          justifyContent: 'center',
          
        }
      }
    >
      <View style={styles.HomeScreenView}>
        <Text style={styles.HomeSreen}>
          Utazásmód
        </Text>
      
      
        <TouchableOpacity
          style={styles.HomeScreenTouchableOpacity}
          onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text>Kezdés</Text>
          </TouchableOpacity>
        </View>
        
      
      <View 
        style={styles.fooldal}
      >
        {/*
        <Text  style={styles.szoveg1}>
          Országok
        </Text>
      </View> 



      <View style={styles.fooldal}>
      <Text style={styles.szoveg1}>
          Egyébb érdekességek 
        </Text>
      </View> 


      <View 
        style={styles.fooldal}
      >
        <Text  style={styles.szoveg1}>
          dfgdfgd
        </Text>
      </View>

      <View 
        style={styles.fooldal}
      >
        <Text  style={styles.szoveg1}>
          Országok
        </Text>
      </View> 

      <View 
        style={styles.fooldal}
      >
        <Text  style={styles.szoveg1}>
          Országok
        </Text>
    */}
      </View> 
       
      
    </ImageBackground>
    
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View 
      style={styles.notificationsscreen}
    >
      <Button onPress={() => navigation.goBack()} title="Vissza a főoldalra" />
    </View>
  );
}
   
function Proba_megjelenites({ navigation }) {
  return (
    
    <Proba />
    
       
  );
}

function Orszag_megjelenites({ navigation }) {
  return (
    
    <Orszag />
    
  );
}

function Varos_megjelenites({ navigation })
{
  return(
    <Varos />
  );
}

function Root({ navigation }) {
  return (
    <Drawer.Navigator 
      screenOptions=
      {
        {
          drawerStyle:
          {
            backgroundColor:'lightgreen'          
          },
          headerShown:true
        }
      }
      initialRouteName="Főoldal" >
        
        <Drawer.Screen name="Főoldal" component={Folap} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Próba" component={Proba_megjelenites} />
        <Drawer.Screen name="Országok" component={Orszag_megjelenites} />
        <Drawer.Screen name="Városok" component={Varos_megjelenites} />
        <Drawer.Screen name="Felvitel" component={Felvitel} />   
        <Drawer.Screen name="Lenyilo" component={Lenyilo} /> 
        <Drawer.Screen name="KözösScreen" component={KozosScreen}  />  
        <Drawer.Screen name="Videó" component={Video}  />
        <Drawer.Screen name="Névjegy" component={Nevjegy}  />
        <Drawer.Screen name="Rejtvény" component={Rejtveny}  />
        <Drawer.Screen name="Ország keresés" component={KeresesSzoveg}  />
        
      
          
      </Drawer.Navigator>

  );
}





const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator >
        <Stack.Screen name="Vissza" component={Root} options={{headerShown:false}} />
        <Stack.Screen name="Proba" component={Proba}  />  
        <Stack.Screen name ="Ujlap" component={Ujlap} />
        <Stack.Screen name ="Nevezetessegek" component={Nevezetessegek} />
      </Stack.Navigator>
    
    </NavigationContainer>

    
  );
}




const styles =StyleSheet.create({
  fooldal: 
  {
      alginItems: 'left',
      justifyContent: 'center',
      padding: 'auto', 
      backgroundColor: '#D1F2EB',
      marginTop: 1,
      marginBottom: 120,
      borderRadius: 10,
      marginLeft: 10  
  },
  notificationsscreen :
  {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  szoveg1 : 
  {
    fontSize: 40,
    fontFamily: 'HiraMinProN-W3',
    paddingBottom: 2 
  },
  HomeScreenView :
  {
    textAlign: 'center'
  },
  HomeSreen :
  {
    textAlign: 'center',
    fontSize: 60,
    paddingLeft: 80,
    paddingBottom: 180,
    color: 'green',


    //Szöveg árnyék
    textShadowColor: '#27E3EA',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 6
  },
  HomeScreenButton:
  {
    textAlign: 'center',
    marginLeft: 60,
    fontSize: 40,
    
    
  }
});







{/*
  
    
  
  <Button
  onPress={() => navigation.navigate('Notifications')}
  title="Ugrás a notifications-hoz"
  color="red"        
  />

  </View>
  
  <Button
  onPress={() => navigation.navigate('Próba')}
  title="Ugrás a próbához"
  color="green"
  />

  </View>
  
  <Button
  onPress={() => navigation.navigate('Országok')}
  title="Ugrás az országokhoz"
  color="brown"
  />

  </View>
  
  <Button
  onPress={() => navigation.navigate('Városok')}
  title="Ugrás a városokhoz"
  color="yellow"
  />

  
  </View>
  
  <Button
  onPress={() => navigation.navigate('Felvitel')}
  title="Ugrás a felvitelhez"
  color="lime"
  />

  
  <Button
  onPress={() => navigation.navigate('Lenyilo')}
  title="Ugrás a lenyilóhoz"
  color="white"
  />
  </View>
  <Button
  onPress={() => navigation.navigate('Proba')}
  title="Próba screen meghívása"
  />

  
  </View>

*/}