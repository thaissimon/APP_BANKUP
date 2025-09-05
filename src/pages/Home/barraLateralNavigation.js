// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
// const Drawer = createDrawerNavigator();

// function CustomDrawerContent() {
//   return (
//     <View style={styles.drawerContainer}>
//       <Text style={styles.drawerHeader}>BankUp</Text>
      
//       {/* Itens de navegação */}
//       <View style={styles.drawerItem}>
//         <FontAwesome name="home" size={24} color="#fff" />
//         <Text style={styles.drawerItemText}>Casa</Text>
//       </View>

//       <View style={styles.drawerItem}>
//         <MaterialCommunityIcons name="bell-outline" size={24} color="#fff" />
//         <Text style={styles.drawerItemText}>Notificações</Text>
//       </View>
      
//       {/* ... continue adicionando os outros itens */}
      
//       {/* Divisor */}
//       <Text style={styles.drawerDivider}>Estatísticas</Text>

//     </View>
//   );
// }

// export default function Appp() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator 
//         initialRouteName="Home"
//         screenOptions={{
//           headerShown: false, // Oculta o header padrão
//           drawerStyle: {
//             backgroundColor: '#1c1c1c', // Cor de fundo do menu
//             width: 240, // Largura do menu
//           },
//         }}
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="YourPlan" component={YourPlanScreen} />
//         {/* Adicione aqui as outras telas */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   // Estilos para o menu lateral
//   drawerContainer: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 50,
//   },
//   drawerHeader: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     marginLeft: 20,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//   },
//   drawerItemText: {
//     color: '#fff',
//     fontSize: 16,
//     marginLeft: 15,
//   },
//   drawerDivider: {
//     color: '#888',
//     fontSize: 14,
//     marginTop: 20,
//     marginBottom: 10,
//     marginLeft: 20,
//   },
// });