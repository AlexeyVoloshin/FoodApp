import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, AppRegistry } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Like from '../../components/Like';
const StyledTextheader = styled.Text`
  background-color: #ef966a;
  margin-bottom: 30;
  fontSize: 40;
  color: #ffffff;
  text-align: center;

`;
const Description = styled.Text`
  fontSize: 14;
  color: #000;
  text-align: center;

`;
const FoodItemImage = styled.Image`
flex: 1;
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
        <StyledTextheader
        >
        {this.props.title}
        </StyledTextheader>
        <Row>
          <FoodItemImage
            source={this.props.source}
          >
          <Like/>
          </FoodItemImage>
        </Row>
        < Description>
          {this.props.description}
          </Description>
      </Wrapper>
     );
  }
}
