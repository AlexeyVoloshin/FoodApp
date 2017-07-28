import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, AppRegistry, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';
      const customTextButton = (
          <Icon.Button name="facebook" size={30} borderRadius={1} backgroundColor="#3b5998" marginRight={30}>
          <Text style={{fontFamily: 'Arial', fontSize: 25,color:'#ffffff'}}>Facebook</Text>
          </Icon.Button>
          );
       const ViewFacebook = styled.Text`
           marginHorizontal: 30;
           `;
       const Wrapper = styled.View`
          flex: 1;
          background-color: #ef966a;
          `;
       const Row = styled.View`
          top: 30;
          `;
        const TextOrLog = styled.Text`
          color: #ffffff;
          font-size: 25;
          text-align: center;
          `;
        const TextForgot = styled.Text`
            color: #ffffff;
            font-size: 25;
            text-align: center;
            font-weight: 400;
            `;
        const TextSign = styled.Text`
          color: #ffffff;
          font-size: 70 ;
          text-align: center;
          font-style: italic;
          font-weight: 100;
          `;
        const TextApp = styled.Text`
          color: #ffbf25;
          font-size: 40;
          text-align: center;
          `;
        const TextLogin = styled.Text`
          background-color: #ffbf25;
          height: 60;
          font-size: 30;
          text-align: center;
          color: #ffffff;
          marginHorizontal: 30;
          font-weight: 700;
        `;
        const styles= StyleSheet.create({
          container: {
            paddingTop: 23
          },
          input:{
            height: 60,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            marginHorizontal: 30,
            borderWidth: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            margin: 10,
            padding: 10,
          }
        })
export default class Login extends Component {
        constructor() {
          super();
          this.state = { username: null, password: null};
        }
        userSignup() {
          Actions.Pagestart();
        }

        userLogin() {
          Actions.Pagestart();
        }
        render(){
          return(

          <Wrapper>
              <Row>
                 <TextSign>Sign In</TextSign>
                 <TextApp>App UI Kit</TextApp>
              <Row>
                 <TextInput style={styles.input}
                  editable={true}
                  onChangeText={(username) => this.setState({username})}
                  placeholder='Username'
                  ref='username'
                  returnKeyType='next'
                  value={this.state.username}
                />
                 <TextInput style={styles.input}
                    editable={true}
                    onChangeText={(password) => this.setState({password})}
                    placeholder='Password'
                    ref='password'
                    returnKeyType='next'
                    secureTextEntry={true}
                    value={this.state.password}
                 />
                  <TouchableOpacity  onPress={this.userLogin.bind(this)}>
                    <TextLogin>Login</TextLogin>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={this.userSignup.bind(this)}>
                     <TextForgot>Forgot Password?</TextForgot>
                     <TextOrLog> Or Log In with </TextOrLog>
                  </TouchableOpacity>
                </Row>
              </Row>

          </Wrapper>

    );
  }
}
