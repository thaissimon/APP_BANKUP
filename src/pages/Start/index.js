// A tela de boas-vindas deve apenas navegar, não fazer o login
import React, {Component} from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styleStart } from "./StyleStart.js";

export default class Start extends Component{

  constructor(props){
    super(props);
    this.irLogin = this.irLogin.bind(this) // Impede que a splash screen desapareça automaticamente
  }

  irLogin() {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={styleStart.container}>
        <Image 
          style={styleStart.logo}
          source={require("../../../assets/images/bankup-branco.png")}
        />

        <View style={styleStart.conteudo}>
          <Image
            source={require("../../../assets/images/grafico.png")}
            style={styleStart.image}
            resizeMode="contain"
          />

          <Text style={styleStart.description}>
            Automatize sua cobrança. Receba sem pedir, lembre sem insistir.
          </Text>
        </View>

        <View style={styleStart.btns}>
            <TouchableOpacity 
            style={styleStart.button}
            onPress={this.irLogin}
            >
              <Text style={styleStart.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             style={styleStart.buttonCadastrar}
             onPress={this.irLogin}
            >
              <Text style={styleStart.buttonTextCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}