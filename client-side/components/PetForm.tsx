

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Pet, Vaccine } from '../interfaces/petInterfaces';
import Header from './headers/WhiteHeader';

export default function PetForm({ pet }: { pet: Pet | undefined }) {
  const id = pet ? pet.id : 0;
  const leftIcon = {
    url: pet ? `/pet/${id}` : "/my-pets",
    iconProps: {
      name: "chevron-left"
    }
  };

  const [title, setTitle] = useState('Cadastro do Pet');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [sexo, setSexo] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [textarea, setTextarea] = useState('');

  useEffect(() => {
    setTitle(pet ? `Edição do Pet` : 'Cadastro do Pet');
    setNome(pet?.name ?? '');
    setIdade(pet?.age ?? '');
    setPeso(pet?.weight ?? '');
    setSexo(pet?.gender ?? '');
    setEspecie(pet?.type ?? '');
    setRaca(pet?.breed ?? '');
    setTextarea(pet?.description ?? '');
  }, [pet]);

  function renderVaccines(vaccines: Vaccine[]): React.ReactNode {
    if (!vaccines || vaccines.length === 0) {
      return <Text style={styles.auxiliarText}>Nenhuma vacina registrada.</Text>;
    }

    const possibleStyles = [styles.vaccinePending, styles.vaccineDone];

    return vaccines.map((item, index) => (
      <View style={[possibleStyles[item.status], item.status ? { flexDirection: "row", alignItems: "center" } : null]} key={index}>
        <Text style={[styles.auxiliarText, item.status === 1 ? { color: "white", marginRight: 8 } : { color: "black" }]}>
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
      <Header pageTitle={title} leftIcon={leftIcon}></Header>

      {/* Pet Info */}
      <View style={styles.petCardWrapper}>
        <ScrollView contentContainerStyle={styles.petCard}>
          <View style={styles.formSubsection}>
            <Text style={styles.formSubtitle}>
              Dados
            </Text>
            <View style={styles.formGroup}>
              <View style={styles.formField}>
                <Text style={styles.auxiliarText}>
                  Nome
                </Text>
                <TextInput
                  onChange={(e) => setNome(e.nativeEvent.text)}
                  value={nome} style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.auxiliarText}>
                  Idade
                </Text>
                <TextInput
                  onChange={(e) => setIdade(e.nativeEvent.text)}
                  value={idade} style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.auxiliarText}>
                  Peso
                </Text>
                <TextInput
                  onChange={(e) => setPeso(e.nativeEvent.text)}
                  value={peso} style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.auxiliarText}>
                  Sexo
                </Text>
                <TextInput
                  onChange={(e) => setSexo(e.nativeEvent.text)}
                  value={sexo} style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.auxiliarText}>
                  Espécie
                </Text>
                <TextInput
                  onChange={(e) => setEspecie(e.nativeEvent.text)}
                  value={especie} style={styles.formInput} />
              </View>
              <View style={styles.formField}>
                <Text style={styles.auxiliarText}>
                  Raça
                </Text>
                <TextInput
                  onChange={(e) => setRaca(e.nativeEvent.text)}
                  value={raca} style={styles.formInput} />
              </View>
            </View>
          </View>
          <View style={styles.formSubsection}>
            <Text style={styles.formSubtitle}>
              Vacinas
            </Text>
            {
              pet?.vaccines?.length ?
                <View style={styles.vaccinesContainer}>
                  { pet?.vaccines && renderVaccines(pet?.vaccines) }
                </View> :
                <Text style={styles.auxiliarText}>Não há vacinas registradas para esse pet?.</Text>
            }
          </View>
          <View style={styles.formSubsection}>
            <Text style={styles.formSubtitle}>
              Histórico Médico
            </Text>
            <TextInput
              onChange={(e) => setTextarea(e.nativeEvent.text)}
              value={textarea}
              style={styles.formInput}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.formSubsection}>
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
