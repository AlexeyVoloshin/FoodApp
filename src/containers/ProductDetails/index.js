import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, AppRegistry } from 'react-native';
import {Actions} from 'react-native-router-flux';

const Description = styled.Text`
  fontSize: 14;
  color: #000;
  text-align: center;
`;
const FoodItemImage = styled.Image`
flex: 1;
width: 340;
height: 280;
`;
const Wrapper = styled.View`
  background-color: papayawhip;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20 ;
`;
export default class ProductDetails extends Component {
  render() {
    console.log('PROPS PRODUCT DATAILS', this.props);
    return (
      <Wrapper>

        <Row>
          <FoodItemImage
            source={this.props.source}
          />
        </Row>
          <Description>
          {this.props.description}
          </Description>
      </Wrapper>
     );
  }
}
