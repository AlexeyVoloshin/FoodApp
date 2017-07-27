import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, AppRegistry, ScrollView } from 'react-native';
import FoodItem from '../../components/FoodItem';
import { Actions } from 'react-native-router-flux';
import Like from '../../components/Like';
const StyledTextheader = styled.Text`
  background-color: #ef966a;
  margin-bottom: 30;
  fontSize: 40;
  color: #ffffff;
  text-align: center;
`;
const StyledText = styled.Text`
  fontSize: 25;
  color: #6c6c6c;
  text-align: center;
  margin-top: 0;
`;
const Wrapper = styled.View`
  background-color: papayawhip;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20 ;
`;
const imgUrls = [
  require('../../img/layer9.png'),
  require('../../img/layer10.png'),
  require('../../img/layer-12.png'),
  require('../../img/layer-11.png')
];

export default class Pagestart extends Component {
  render() {
    return (
    <ScrollView>
      <Wrapper>

        <Row>

          <FoodItem
            borderRadius={0}
            source={imgUrls[0]}
            width={180}
            height={212}
            title='Picnic Cupcakes'
            price='5'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sed leo tellus.
            Praesent nec vehicula ligula, non laoreet ligula.
            Maecenas at massa eget orci porttitor semper.
            Sed lobortis magna in faucibus commodo.
            Ut purus odio, gravida sit amet laoreet at, dictum et urna'
          />

          <FoodItem
            borderRadius={0}
            source={imgUrls[1]}
            width={180}
            height={212}
            title='Grilled Barbecue'
            price='25'
            description='Along with lighter fluid, another common grilling sight that pains me to no end is improperly cooked barbecue chicken.
            I do not know how many burnt pieces of chicken need to be eaten until we realize that barbecue sauce is not a marinade.
            Cooking barbecue chicken properly is pretty simple, and produces heavenly results.'
          />
        </Row>
        <Row>
          <FoodItem
            borderRadius={0}
            source={imgUrls[2]}
            width={180}
            height={212}
            title='Healthy Pasta'
            price='5'
          />
          <FoodItem
            borderRadius={0}
            source={imgUrls[3]}
            width={180}
            height={212}
            title='Morning Breakfast'
            price='25'
          />
        </Row>
      </Wrapper>
    </ScrollView>
     );
  }
}
