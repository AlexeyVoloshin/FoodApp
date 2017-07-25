import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, AppRegistry, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
const NameItem = styled.Text`
  font-weight: bold;
  font-size: 18;
  color: #000;
  text-align: center;
`;
const PriceGeneral = styled.Text`
  fontSize: 15;
  color: #6c6c6c;
  text-align: center;
`;
const Price = styled.Text`
  fontSize: 15;
  color: #ef135b;
  text-align: center;
`;
const StyledFavorite = styled.Text`
  top: 10;
  right: 10;
  position: absolute;
`;
const Container = styled.View`
  padding-left: 10;
  padding-right: 10;
`;
const FoodItemImage = styled.Image`
  width: ${(props) => props.width ? props.width : 100 };
  height: ${(props) => props.height ? props.height : 100 };
`;

const HeartIconTouch = styled.TouchableOpacity`
`;

const HeartIcon = styled.Image`
  width: 30;
  height: 30;
  margin-left: 140;

`;

const heartIcons = {
  'noActive': require('../../img/like.png'),
  'active': require('../../img/like-active.png')
};


//в конструкторе передали props состояние False (картинка пустая)
export default class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {like: false};
  }
//выполняем проверку состояния Tru, fols
  handleLikeClick(){
    this.setState(
      { like: !this.state.like }
    );
  }
//описали условие
  renderHeart(){
    const isLike = this.state.like;
    let icon = null;
    if(isLike)
      icon = heartIcons.active;
    else
      icon = heartIcons.noActive;
    return(
      <HeartIconTouch
        onPress={()=>this.handleLikeClick()}
      >
        <HeartIcon source={icon} />
      </HeartIconTouch>
    );
  }
//принимаем данные из main
  render() {
    const {borderRadius, source, width, height, title, price, description } = this.props;
    const renderHeart = this.renderHeart();
    return (
      <Container>
        <FoodItemImage
          borderRadius={borderRadius}
          source={source}
          width={width}
          height={height}
        >
          {renderHeart}
        </FoodItemImage>
        <NameItem onPress={
          () => {Actions.ProductDetails({
            title: title,
            price: price,
            source: source,
            description: description})
          }}
        >
          {title}
        </NameItem>
        <PriceGeneral>Price:<Price>${price}</Price></PriceGeneral>
      </Container>
     );
  }
}
