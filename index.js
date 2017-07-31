import React, {Component} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TextInput, AppRegistry, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Actions} from 'react-native-router-flux';

const customTextButton = (
    <Icon.Button name="facebook" size={30} borderRadius={1} backgroundColor="#3b5998" marginRight={30}>
        <Text style={{fontFamily: 'Arial', fontSize: 25, color: '#ffffff'}}>Facebook</Text>
    </Icon.Button>
);
const Wrapper = styled.View`
          flex: 1;
          background-color: #ef966a;
          `;
const Row = styled.View`
          top: 25;
          `;
const TextOrLog = styled.Text`
          color: #ffffff;
          font-size: 25;
          text-align: center;
          margin-top: 60;
          margin-bottom: 20;
          `;
const TextForgot = styled.Text`
            color: #ffffff;
            font-size: 25;
            text-align: center;
            font-weight: 400;
            margin-top: 10;
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
const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        height: 60,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 30,
        borderWidth:1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 10,
        padding: 10,
        fontSize: 18,
    },
    twit:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    }
})
export default class Login extends Component {
    constructor() {
        super();
        this.state = {username: null, password: null};
    }

    provSostoyaniya() {
        const login = this.state.username;
        const pass = this.state.password;

        if (login.length <= 0 && pass.length <= 0) return false;

        login()
        {
            Action.Pagestart();
        }
        pass()
        {
            Action.Pagestart();
        }
    }



    render() {
        return (

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
                        <TouchableOpacity onPress={this.username}>
                            <TextLogin>Login</TextLogin>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.password}>
                            <TextForgot>Forgot Password?</TextForgot>
                            <TextOrLog> Or Log In with </TextOrLog>
                        </TouchableOpacity>
                        <View style={styles.twit}>
                        <Icon.Button name="facebook" size={30} borderRadius={1}  backgroundColor="#3b5998" >
                            <Text style={{fontFamily: 'Arial', fontSize: 25, color: '#ffffff'}}>Facebook     </Text>
                        </Icon.Button>

                        <Icon.Button name="twitter" size={30} borderRadius={1} backgroundColor="#00acee">
                            <Text style={{fontFamily: 'Arial', fontSize: 25, color: '#ffffff'}}>Twitter      </Text>
                        </Icon.Button>
                        </View>
                    </Row>
                </Row>
            </Wrapper>

        );
    }
};
