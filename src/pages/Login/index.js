import React, {Component} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styleLogin.js"; 
import { colors } from "../../styles/colors"; 

export default class Login extends Component{
  constructor(props){
 super(props);
 this.irHome = this.irHome.bind(this) // Impede que a splash screen desapareça automaticamente
}

irHome() {
 this.props.navigation.navigate('Home');
}

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="mari-mari@gmail.com"
          // value={email}
          // onChangeText={setEmail}
          placeholderTextColor={colors.gray[400]}
          // keyboardType="email-address"
          // autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          // secureTextEntry
          // value={password}
          // onChangeText={setPassword}
          placeholderTextColor={colors.gray[400]}
        />

        <TouchableOpacity onPress={this.irHome}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={styles.loginButton} 
         onPress={this.irHome}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={styles.createAccountLink}
         onPress={this.irHome}
        >
          <Text style={styles.createAccountText}>Não tem conta ainda?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
