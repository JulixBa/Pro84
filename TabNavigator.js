import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import createMaterialBottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
 return(
   <Drawer.Navigator>
     <Drawer.Screen name ="Tela Inicial" component={TabNavigator}/>
     <Drawer.Screen name ="Perfil" component={Profile}/>
   </Drawer.Navigator>
 );

};

const BottomTabNavigator = () => {
    return(
    <TabNavigator.Navigator>
      screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if(route.name === 'Feed'){
            iconName = focused
               ? 'book'
               : 'book-outline';
        } else if(route.name === 'CreatePost'){
            iconName = focused ? 'create' : 'create-outline';
        }
        return <IonIcons name={iconName} size={size} color={color}/>;
       },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
       <TabNavigator.Screen name="Feed" component={Feed}/>
       <TabNavigator.Screen name="Criar Post" component={CreatePost}/>

    </TabNavigator.Navigator>

    );
}


export default DrawerNavigator;