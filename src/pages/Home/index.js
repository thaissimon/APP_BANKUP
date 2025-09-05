import React, { Component } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styleHome";

export default function Home() {
  // irBarraLateralNavigation(){
  //  this.props.navigation.navigate('BarraLateralNavigation');
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color="#fff"
            // onPress={this.irBarraLateralNavigation}
          />
        </TouchableOpacity>
        <Text style={styles.logo} >BankUp</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.welcomeText}>Bem-vindo</Text>
        <Text style={styles.subText}>
          Sua cobrança automatizada, começa
          <Text style={styles.highlightText}> AGORA!</Text>
        </Text>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.activeIcon}>
          <FontAwesome name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="dollar" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
