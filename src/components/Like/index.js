import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, AppRegistry, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
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
const Container = styled.View`


`;

//в конструкторе передали props состояние False (картинка пустая)
export default class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {like: false};
  }
//выполняем проверку состояния Tru, False
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
        <HeartIcon source={icon}/>
      </HeartIconTouch>
    );
  }
  render() {
    const renderHeart = this.renderHeart();
    return (
      <Container>
          {renderHeart}
      </Container>
     );
  }
}
