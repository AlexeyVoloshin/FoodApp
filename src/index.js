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
import Latest  from './containers/Latest';

const TabIcon = ({ selected, title}) =>{
    return(
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};


const StyledTextheader = styled.Text`
  background-color: #ef966a;
  margin-bottom: 30;
  fontSize: 100;
  color: #ffffff;
  text-align: center;`



export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene navigationBarStyle={{backgroundColor: '#ef966a'}}
            key="root"
        >
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{backgroundColor: '#000'}}
        >
          <Scene
             key="Latest"
             title="Latest"
             icon={TabIcon}>
          <Scene
            key="Pagestart"
            titleStyle={{color:'#ffffff', fontSize: 30, }}
            component={Pagestart}
            title="Shop"
            initial={true}
          />
          <Scene
            titleStyle={{color:'#ffffff', fontSize: 30, }}
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
            key="Pagestart"
            titleStyle={{color:'#ffffff', fontSize: 30, }}
            component={Pagestart}
            title="Shop"
            initial={true}
          />
          <Scene
            titleStyle={{color:'#ffffff', fontSize: 30, }}
            key="ProductDetails"
            component={ProductDetails}
            title="Details"
          />
          </Scene>
         </Scene>
        </Scene>
      </Router>
    );
  }
}
