import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams, Link } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { pets } from '../../../providers/mock';
import { MedicalHistory, Pet } from '../../../interfaces/petInterfaces';

export default function PetProfileScreen() {
  const { id } = useLocalSearchParams();

  const [pet, setPet] = useState<Pet | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const petFound = pets.find((pet) => pet.id === id);
    setPet(petFound ?? null);
    setLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (!pet) {
    return (
      <View style={styles.notFoundContainer}>
        <ThemedText type="title">Pet não encontrado</ThemedText>
        <Link href="/my-pets">
          <ThemedText type="link">Voltar para meus pets</ThemedText>
        </Link>
      </View>
    );
  }

  function renderMedicalHistory(medical_history: MedicalHistory[] | undefined): React.ReactNode {
    if (!medical_history || medical_history.length === 0) {
      return <Text style={styles.petDetails}>Histórico médico não disponível.</Text>;
    }

    return medical_history.map((entry, index) => (
      <View key={index}>
        <Text style={styles.petHistoryDate}>{entry.date}:</Text>
        <Text style={styles.petDetails}>{entry.description}</Text>
      </View>
    ));
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          router.push("/")
        }}>
          <Feather name="arrow-left" size={24} color="black" />
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
            {pet.type} | {pet.breed}
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
          <Text style={styles.petDetails}>{pet.description}.</Text>
        </View>
        <View style={styles.petSubsection}>
          <Text style={styles.petSubtitle}>Vacinas</Text>
        </View>
        <View style={styles.petSubsection}>
          <Text style={styles.petSubtitle}>Histórico Médico</Text>
          { renderMedicalHistory(pet.medical_history) }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50 },
  notFoundContainer: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50, justifyContent: "center", alignItems: "center" },
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
  petInfoContainer: { flex: 1, flexDirection: 'row', maxHeight: 75, marginVertical: 10 },
  petInfo: { flex: 1, marginHorizontal: 15, padding: 15, boxShadow: "0 8px 12px #DDD", borderRadius: 10 },
  petInfoTitle: { color: "#666", fontSize: 16 },
  petInfoData: { fontSize: 18, color: "#FF914D", fontWeight: "bold" },
  petDetails: { color: "#666", fontSize: 18, marginVertical: 5 },
  petName: { fontWeight: "600", fontSize: 24 },
  petSubsection: { width: "100%", paddingHorizontal: 14 },
  petSubtitle: { fontSize: 20, fontWeight: "bold", marginTop: 10, marginHorizontal: 8 },
  petHistoryDate: { fontSize: 16, color: "#FF914D", fontWeight: "bold", marginTop: 12 },
  moreButton: { backgroundColor: "#FF914D", borderRadius: 5, padding: 5 },
  moreButtonText: { color: "#FFF", textAlign: "center" },
});
