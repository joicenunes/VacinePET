import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ListRenderItem } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const pets = [
  {
    id: "1",
    name: "Salsicha",
    type: "Cachorro | Dachshund",
    age: "5 anos",
    weight: "6,5kg",
    image: "https://example.com/dog.jpg",
  },
  {
    id: "2",
    name: "Luna",
    type: "Gato | Siamês",
    age: "3 anos",
    weight: "4,5kg",
    image: "https://example.com/cat.jpg",
  },
  {
    id: "3",
    name: "Pepe",
    type: "Pássaro | Calopsita",
    age: "2 anos",
    weight: "200g",
    image: "https://example.com/bird.jpg",
  },
];

export default function NotificationsScreen() {
  // Define the type of item in FlatList
  const renderNotificationCard: ListRenderItem<any> = ({ item }) => (
    <View style={styles.petCard}>
      <Image source={{ uri: item.image }} style={styles.petImage} />
      <View style={styles.petInfo}>
        <Text style={styles.petName}>{item.name}</Text>
        <Text style={styles.petDetails}>
          {item.type} | {item.age} | {item.weight}
        </Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          router.push("/")
        }}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meus pets</Text>
      </View>

      {/* Notifications List */}
      <FlatList
        data={pets}
        renderItem={(item) => renderNotificationCard(item)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", paddingTop: 50 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 12 },
  listContent: { paddingHorizontal: 16, paddingVertical: 8 },  
  petCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  petImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  petInfo: { flex: 1 },
  petName: { fontWeight: "600", fontSize: 16 },
  petDetails: { color: "#666", marginVertical: 5 },
  moreButton: { backgroundColor: "#FF914D", borderRadius: 5, padding: 5 },
  moreButtonText: { color: "#FFF", textAlign: "center" },
});
