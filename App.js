import * as React from 'react';
import { Button, View, ImageBackground,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import Proba from './Proba'
import Orszag from './Orszag'
import Varos from './Varos'
import Felvitel from './Felvitel'
import Lenyilo from './Lenyilo'


function HomeScreen({ navigation }) {
  return (
    <ImageBackground  source={require('./bg.png')}
                      style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      
      <View /*</ImageBackground>style={{backgroundColor:"black"}}*/>
        <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Ugrás a notifications-hoz"
        color="red"        
      />

</View>
<View /*</ImageBackground>style={{backgroundColor:"black"}}*/>
      <Button
      onPress={() => navigation.navigate('Próba')}
      title="Ugrás a próbához"
      color="green"
      />

</View>
<View /*</ImageBackground>style={{backgroundColor:"black"}}*/>
      <Button
      onPress={() => navigation.navigate('Országok')}
      title="Ugrás az országokhoz"
      color="brown"
      />

</View>
<View /*</ImageBackground>style={{backgroundColor:"black"}}*/>
      <Button
      onPress={() => navigation.navigate('Városok')}
      title="Ugrás a városokhoz"
      color="yellow"
      />

        
      </View>
      <View /*</ImageBackground>style={{backgroundColor:"black"}}*/>
      <Button
      onPress={() => navigation.navigate('Felvitel')}
      title="Ugrás a felvitelhez"
      color="lime"
        />

      <View /*</ImageBackground>style={{backgroundColor:"black"}}*/>
      <Button
      onPress={() => navigation.navigate('Lenyilo')}
      title="Ugrás a lenyilóhoz"
      color="white"
      />
      </View>

        
      </View>
  
      
    </ImageBackground>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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





const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
        drawerStyle:{
          backgroundColor:'lightgreen'
        }
      }}
      initialRouteName="Főoldal" >
        <Drawer.Screen name="Főoldal" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Próba" component={Proba_megjelenites} />
        <Drawer.Screen name="Országok" component={Orszag_megjelenites} />
        <Drawer.Screen name="Városok" component={Varos_megjelenites} />
        <Drawer.Screen name="Felvitel" component={Felvitel} />   
        <Drawer.Screen name="Lenyilo" component={Lenyilo} />      
      </Drawer.Navigator>
    </NavigationContainer>
  );
}