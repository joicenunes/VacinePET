import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ListRenderItem, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { pets } from '../../providers/mock';
import { Pet } from '../../interfaces/petInterfaces';
import Header from '../../components/headers/OrangeHeader';

export default function MyPetsScreen() {
  const leftIcon = {
    url: '/',
    iconProps: {
      name: 'chevron-left'
    }
  }
  const rightIcon = {
    url: '/',
    iconProps: {
      name: 'plus'
    }
  };

  const renderPetCard: ListRenderItem<Pet> = ({ item }) => (
    <TouchableOpacity onPress={() => {
      router.push(`/pet/${item.id}`)
    }}>
      <View style={styles.petCard}>
        <ImageBackground source={{ uri: item.image }} style={styles.flex} resizeMode='cover'>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.petInfo}>
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petDetails}>
              {item.type}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header pageTitle='Meus pets' leftIcon={leftIcon} rightIcon={rightIcon}></Header>
      
      {/* Pets List */}
      <FlatList
        data={pets}
        renderItem={(item) => renderPetCard(item)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50 },
  listContent: { paddingHorizontal: 16, paddingVertical: 8 },  
  petCard: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    height: 150,
    marginHorizontal: 20,
    marginVertical: 25,
    borderRadius: 10,
    overflow: "hidden",
  },
  flex: { flex: 1 },
  petInfo: {flex: 1, justifyContent: "center", paddingHorizontal: 30 },
  petName: { color: "#FFF", fontWeight: "600", fontSize: 22 },
  petDetails: { color: "#FF914D", fontSize: 16 },
});
