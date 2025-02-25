import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { pets } from '../../../providers/mock';
import { MedicalHistory, Pet, Vaccine } from '../../../interfaces/petInterfaces';
import Header from '../../../components/headers/OrangeHeader';
import { Feather } from '@expo/vector-icons';

export default function PetProfileScreen() {
  const { id } = useLocalSearchParams();
  const leftIcon = {
    url: "/my-pets",
    iconProps: {
      name: "arrow-left",
      color: "black"
    }
  };
  const rightIcon = {
    url: "/",
    iconProps: {
      name: "edit",
      color: "black"
    }
  };

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

    return medical_history.map((item, index) => (
      <View key={index}>
        <Text style={styles.petHistoryDate}>{item.date}:</Text>
        <Text style={styles.petDetails}>{item.description}</Text>
      </View>
    ));
  }

  function renderVaccines(vaccines: Vaccine[]): React.ReactNode {
    if (!vaccines || vaccines.length === 0) {
      return <Text style={styles.petDetails}>Nenhuma vacina registrada.</Text>;
    }

    const possibleStyles = [styles.vaccinePending, styles.vaccineDone];

    return vaccines.map((item, index) => (
      <View style={[possibleStyles[item.status], item.status ? { flexDirection: "row", alignItems: "center" } : null]} key={index}>
        <Text style={[styles.petDetails, item.status === 1 ? { color: "white", marginRight: 8 } : { color: "black" }]}>
          {item.vaccine_name}
        </Text>
        { item.status === 1 ? 
          <Feather name="check" size={20} color="white" /> : "" }
      </View>
    ));
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header pageTitle={pet.name} leftIcon={leftIcon} rightIcon={rightIcon}></Header>

      {/* Pet Image */}
      <View style={styles.petImageContainer}>
        <ImageBackground source={{ uri: pet.image }} style={styles.petImage} resizeMode='cover' />
      </View>

      {/* Pet Info */}
      <View style={styles.petCardWrapper}>
        <ScrollView contentContainerStyle={styles.petCard}>
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
            { pet.vaccines?.length ?
              <ScrollView contentContainerStyle={styles.vaccinesContainer} horizontal={true}>
                { renderVaccines(pet.vaccines) }
              </ScrollView> :
              <Text>Não há vacinas registradas paara esse pet.</Text>
            }
          </View>
          <View style={styles.petSubsection}>
            <Text style={styles.petSubtitle}>Histórico Médico</Text>
            { renderMedicalHistory(pet.medical_history) }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50 },
  notFoundContainer: { flex: 1, backgroundColor: "#FF914D", paddingTop: 50, justifyContent: "center", alignItems: "center" },
  petImageContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DDD",
    maxHeight: 150,
    marginHorizontal: 40,
    marginVertical: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
  petImage: { flex: 1 },
  petCardWrapper: {
    flex: 1,
    backgroundColor: "#FFF",
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
  petTitle: { width: '100%', marginTop: 10 },
  petInfoContainer: { flex: 1, flexDirection: 'row', height: 75, maxHeight: 75, marginVertical: 20, justifyContent: "space-between", gap: 15 },
  petInfo: { flex: 1, padding: 15, boxShadow: "0 8px 12px #DDD", borderRadius: 10 },
  petInfoTitle: { color: "#666", fontSize: 16 },
  petInfoData: { fontSize: 18, color: "#FF914D", fontWeight: "bold" },
  petDetails: { color: "#666", fontSize: 18 },
  petName: { fontWeight: "600", fontSize: 24 },
  petSubsection: { width: "100%", marginTop: 16 },
  petSubtitle: { fontSize: 20, fontWeight: "bold", marginTop: 10, },
  vaccinesContainer: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 10, paddingBottom: 5 },
  vaccinePending: { borderColor: "#FF914D", borderRadius: 50, paddingVertical: 8, paddingHorizontal: 25, borderWidth: 1.5, boxSizing: "border-box" },
  vaccineDone: { backgroundColor: "#FF914D", borderRadius: 50, padding: 8, paddingVertical: 8, paddingHorizontal: 25 },
  petHistoryDate: { fontSize: 16, color: "#FF914D", fontWeight: "bold", marginTop: 12 },
  moreButton: { backgroundColor: "#FF914D", borderRadius: 5, padding: 5 },
  moreButtonText: { color: "#FFF", textAlign: "center" },
});
