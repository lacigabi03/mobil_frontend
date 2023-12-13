import * as React from 'react';
import { Button, View, ImageBackground,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import Proba from './Proba'
import Orszag from './Orszag'
import Varos from './Varos'
import Felvitel from './Felvitel'
import Lenyilo from './Lenyilo'
import KozosScreen from './KozosScreen'
import Ujlap from './Ujlap'



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
      <Button
        onPress={() => navigation.navigate('Proba')}
        title="Próba screen meghívása"
      />

        
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

function Root({ navigation }) {
  return (
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
        <Drawer.Screen name="KözösScreen" component={KozosScreen}  />     
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}



{/*

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

*/}