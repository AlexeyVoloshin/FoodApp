import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst} from 'react-native-router-flux';
import Pagestart from './containers/main';
import ProductDetails  from './containers/ProductDetails';
import Popular from './containers/Popular';

import Login  from './containers/Login';
const TabIcon = ({ selected, title}) =>{
    return(
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};
const StyleBar = styled.Text`
  color:'#ffffff';
  fontSize: 25;
  flex:1;
  flexDirection:'row';
  alignItems:'center';
  alignSelf:'center';
  `;
export default class Main extends Component {
  render() {
    return (
      <Router>


        <Scene navigationBarStyle={{backgroundColor: '#ef966a' , height: 40, }}
            key="root"
            title="Shop"
            titleStyle={{color:'#ffffff', fontSize: 25, flex:1, flexDirection:'row', alignItems:'center', alignSelf:'center', }}
        >
        <Scene
          key="Login"
          titleStyle={{color:'#ffffff', fontSize: 18, flexDirection:'row', alignItems:'center', alignSelf:'center',  }}
          component={Login}
          title="Login"
          initial={true}
        />
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{backgroundColor: '#ef966a',  height: 40 }}
        >
          <Scene
             key="Latest"
             title="Latest"
             icon={TabIcon}
          >
          <Scene
            key="Pagestart"
            titleStyle={{color:'#ffffff', fontSize: 18, flexDirection:'row', alignItems:'center', alignSelf:'center',  }}
            component={Pagestart}
            title="FoodItem"
          />
          <Scene
            titleStyle={{ fontSize: 20, }}
            key="ProductDetails"
            component={ProductDetails}
            title="Details"
          />
          </Scene>
          <Scene
               key="Popular"
               title="Popular"
               icon={TabIcon}>
            <Scene
              key="Popular"
              titleStyle={{color:'#ffffff', fontSize: 18, flexDirection:'row', alignItems:'center', alignSelf:'center',}}
              component={Popular}
              title="FoodItem"

            />
          </Scene>
         </Scene>
        </Scene>
      </Router>
    );
  }
}
