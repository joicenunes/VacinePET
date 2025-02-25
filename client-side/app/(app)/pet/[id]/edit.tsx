import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { pets } from '../../../../providers/mock';
import { MedicalHistory, Pet, Vaccine } from '../../../../interfaces/petInterfaces';
import Header from '../../../../components/headers/WhiteHeader';
import { Feather } from '@expo/vector-icons';

export default function PetEditScreen() {
  const { id } = useLocalSearchParams();
  const leftIcon = {
    url: `/pet/${id}`,
    iconProps: {
      name: "chevron-left"
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
        <Feather name="check" size={20} color="white" /> : null }
      </View>
    ));
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header pageTitle={`Editar ${pet.name}`} leftIcon={leftIcon}></Header>

      {/* Pet Info */}
      <View style={styles.petCardWrapper}>
        <ScrollView contentContainerStyle={styles.petCard}>
          <View style={styles.petSubsection}>
            <Text style={styles.formSubtitle}>
              Dados
            </Text>
            <View style={styles.formGroup}>
              <View style={styles.formField}>
                <Text style={styles.petDetails}>
                  Nome
                </Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.petDetails}>
                  Idade
                </Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.petDetails}>
                  Peso
                </Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.petDetails}>
                  Sexo
                </Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.petDetails}>
                  Espécie
                </Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.petDetails}>
                  Raça
                </Text>
                <TextInput style={styles.formInput} />
              </View>
            </View>
          </View>
          <View style={styles.petSubsection}>
            <Text style={styles.formSubtitle}>
              Vacinas
            </Text>
            {
              pet.vaccines?.length ?
                <View style={styles.vaccinesContainer}>
                  { pet.vaccines && renderVaccines(pet.vaccines) }
                </View> :
                <Text style={styles.petDetails}>Não há vacinas registradas para esse pet.</Text>
            }
          </View>
          <View style={styles.petSubsection}>
            <Text style={styles.formSubtitle}>
              Histórico Médico
            </Text>
            <TextInput
              style={styles.formInput}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.petSubsection}>
            <TouchableOpacity>
              <View style={styles.menuButton}>
                <Text style={styles.menuButtonText}>Salvar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
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
  formGroup: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  formField: { width: "47%", marginBottom: 10 },
  formInput: { borderColor: "#FF914D", borderWidth: 1.5, marginTop: 5, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, width: "100%", fontSize: 15 },
  petTitle: { width: '100%', marginTop: 10 },
  petInfoContainer: { flex: 1, flexDirection: 'row', height: 75, maxHeight: 75, marginVertical: 20, justifyContent: "space-between", gap: 15 },
  petInfo: { flex: 1, padding: 15, boxShadow: "0 8px 12px #DDD", borderRadius: 10 },
  petInfoTitle: { color: "#666", fontSize: 16 },
  petInfoData: { fontSize: 18, color: "#FF914D", fontWeight: "bold" },
  petDetails: { color: "#666", fontSize: 16 },
  petName: { fontWeight: "600", fontSize: 24 },
  petSubsection: { width: "100%", marginTop: 8 },
  formSubtitle: { fontSize: 18, marginTop: 10, },
  vaccinesContainer: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 10, paddingBottom: 5 },
  vaccinePending: { borderColor: "#FF914D", borderRadius: 50, paddingVertical: 8, paddingHorizontal: 25, borderWidth: 1.5, boxSizing: "border-box" },
  vaccineDone: { backgroundColor: "#FF914D", borderRadius: 50, padding: 8, paddingVertical: 8, paddingHorizontal: 25 },
  petHistoryDate: { fontSize: 16, color: "#FF914D", fontWeight: "bold", marginTop: 12 },
  menuButton: { backgroundColor: "#FF914D", borderRadius: 7, padding: 8 },
  menuButtonText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "bold" },
});
