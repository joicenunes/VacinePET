import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { pets } from '../../../../providers/mock';
import { MedicalHistory, Pet, Vaccine } from '../../../../interfaces/petInterfaces';
import PetForm from '../../../../components/PetForm';

export default function PetEditScreen() {
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
      return <Text style={styles.auxiliarText}>Histórico médico não disponível.</Text>;
    }

    return medical_history.map((item, index) => (
      <View key={index}>
        <Text style={styles.petHistoryDate}>{item.date}:</Text>
        <Text style={styles.auxiliarText}>{item.description}</Text>
      </View>
    ));
  }

  return (
    <PetForm pet={pet} />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  notFoundContainer: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50, justifyContent: "center", alignItems: "center" },
  petCardWrapper: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  petCard: {
    marginHorizontal: 0,
    marginTop: 10,
    paddingTop: 10,
    paddingHorizontal: 30,
    minHeight: "auto",
    alignItems: "center",
    paddingBottom: 20
  },
  formSubtitle: { fontSize: 18, marginTop: 10, },
  formGroup: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  formField: { width: "47%", marginBottom: 10 },
  formInput: { borderColor: "#FF914D", borderWidth: 1.5, marginTop: 5, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, width: "100%", fontSize: 15 },
  auxiliarText: { color: "#666", fontSize: 16 },
  formSubsection: { width: "100%", marginTop: 8 },
  vaccinesContainer: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 10, paddingBottom: 5 },
  vaccinePending: { borderColor: "#FF914D", borderRadius: 50, paddingVertical: 8, paddingHorizontal: 25, borderWidth: 1.5, boxSizing: "border-box" },
  vaccineDone: { backgroundColor: "#FF914D", borderRadius: 50, padding: 8, paddingVertical: 8, paddingHorizontal: 25 },
  petHistoryDate: { fontSize: 16, color: "#FF914D", fontWeight: "bold", marginTop: 12 },
  menuButton: { backgroundColor: "#FF914D", borderRadius: 7, padding: 8 },
  menuButtonText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "bold" },
});
