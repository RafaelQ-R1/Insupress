/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import ConfigScreen from './pages/Config';
import InsulinApplication from './pages/InsulinRegister';
import AboutInsulim from './pages/AboutInsulim';
import Pressure from './pages/PressureRegister';
import Historics from './pages/Historics';
import HistoricPressures from './pages/HitoricPressures';
import HistoricsInsulin from './pages/HistoricInsulin';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="Insluina"
        component={InsulinApplication}
        options={{
          title: 'Registrar Insulina',
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="Histórico"
        component={Historics}
        options={{
          title: 'Históricos',
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="Sobre a Insulina"
        component={AboutInsulim}
        options={{
          title: 'Sobre a Glicose',
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="Pressão"
        component={Pressure}
        options={{
          title: 'Registrar Pressão',
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="HistoricPressure"
        component={HistoricPressures}
        options={{
          title: 'Histórico de pressão',
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="HistoricInsulin"
        component={HistoricsInsulin}
        options={{
          title: 'Histórico de glicose',
          headerStyle: {
            backgroundColor: '#5a9afa',
            height: 40,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="black"
        inactiveColor="white"
        barStyle={{
          backgroundColor: 'rgba(0, 100, 250, 0.4)',
          height: 50,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, type}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              type = 'font-awesome';
              color = 'blue';
            } else if (route.name === 'Configurações') {
              iconName = 'setting';
              type = 'ant-design';
              color = 'blue';
            }

            return <Icon name={iconName} size={22} type={type} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Configurações" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
