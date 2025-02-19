import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const pet = {
  id: "1",
  name: "Salsicha",
  type: "Cachorro | Dachshund",
  age: "5 anos",
  weight: "6,5kg",
  image: "https://example.com/dog.jpg",
  gender: "Macho"
};

export default function SalsichaScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          router.push("/")
        }}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Salsicha</Text>
      </View>

      {/* Pet Info */}
      <View style={styles.petImageContainer}>
        <Image source={{ uri: pet.image }} style={styles.petImage} />
      </View>
      <View style={styles.petCard}>
        <View style={styles.petTitle}>
          <Text style={styles.petName}>{pet.name}</Text>
          <Text style={styles.petDetails}>
            {pet.type}
          </Text>
        </View>
        <View style={styles.petInfoContainer}>
          <View style={styles.petInfo}>
            <Text style={styles.petInfoTitle}>Idade</Text>
            <Text style={styles.petInfoData}>{pet.age}</Text>
          </View>
          <View style={styles.petInfo}>
            <Text style={styles.petInfoTitle}>Peso</Text>
            <Text style={styles.petInfoData}>{pet.weight}</Text>
          </View>
          <View style={styles.petInfo}>
            <Text style={styles.petInfoTitle}>Sexo</Text>
            <Text style={styles.petInfoData}>{pet.gender}</Text>
          </View>
        </View>
        <View style={styles.petSubsection}>
          <Text style={styles.petSubtitle}>Sobre</Text>
          <Text style={styles.petDetails}>Salsicha é um cachorro muito amigável e brincalhão.</Text>
        </View>
        <View style={styles.petSubsection}>
          <Text style={styles.petSubtitle}>Vacinas</Text>
        </View>
        <View style={styles.petSubsection}>
          <Text style={styles.petSubtitle}>Histórico Médico</Text>
          <View>
            <Text style={styles.petHistoryDate}>24/02/2024:</Text>
            <Text style={styles.petDetails}>Aplicação das vacinas V10 e Antirrábica.</Text>
          </View>
          <View>
            <Text style={styles.petHistoryDate}>15/12/2023:</Text>
            <Text style={styles.petDetails}>Tratamento de uma leve alergia alimentar.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 12 },
  listContent: { paddingHorizontal: 16, paddingVertical: 8 },  
  petCard: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 30,
    padding: 10,
    height: 600,
    alignItems: "center",
  }, 
  petImageContainer: {
    flexDirection: "row",
    backgroundColor: "#DDD",
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  petImage: { width: 'auto', height: 150, borderRadius: 10, marginRight: 10 },
  petTitle: { width: '100%', marginTop: 10, paddingHorizontal: 20 },
  petInfoContainer: { flex: 1, flexDirection: 'row', maxHeight: 85, marginVertical: 10 },
  petInfo: { flex: 1, marginHorizontal: 15, borderStyle: "solid", borderColor: "#DDD", borderWidth: 1, padding: 15 },
  petInfoTitle: { color: "#666", fontSize: 16 },
  petInfoData: { fontSize: 20, color: "#FF914D", fontWeight: "bold" },
  petDetails: { color: "#666", fontSize: 18, marginVertical: 5 },
  petName: { fontWeight: "600", fontSize: 24 },
  petSubsection: { width: "100%", paddingHorizontal: 14 },
  petSubtitle: { fontSize: 20, fontWeight: "bold", marginTop: 10, marginHorizontal: 8 },
  petHistoryDate: { fontSize: 16, color: "#FF914D", fontWeight: "bold", marginTop: 12 },
  moreButton: { backgroundColor: "#FF914D", borderRadius: 5, padding: 5 },
  moreButtonText: { color: "#FFF", textAlign: "center" },
});
