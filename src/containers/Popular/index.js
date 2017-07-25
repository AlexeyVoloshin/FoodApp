import React, {Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Action } from 'react-native-router-flux';
import styled from 'styled-components/native';

const Container = styled.View`
  flax: 1,
  justify-content: 'center',
  align-items: 'center',
  background-color: '#ef135b',
`;
const StyledText = styled.Text`
  fontSize: 25;
  color: #6c6c6c;
  margin-top: 0;
`;
const Latest = () => {
  return (
    <Container>
    <StyledText
     onPress={()=> Action.read()}
    >
     Latest
    </StyledText>
   </Container>
 );
}
