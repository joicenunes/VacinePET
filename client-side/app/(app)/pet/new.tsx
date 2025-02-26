import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PetForm from '../../../components/PetForm';

export default function PetEditScreen() {
  return (
    <PetForm pet={undefined} />
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
