import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ListRenderItem } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

// Define Notification Type
type Notification = {
  date: string;
  messages: string[];
};

const notifications: Notification[] = [
  { date: "Hoje", messages: ["Não esqueça de levar o Salsicha para passear 🐕", "Seu lembrete para vacinação foi criado com sucesso."] },
  { date: "15 de Março", messages: ["Já colocou a ração hoje?", "Vacinação para a raiva é essencial para seu cachorro."] },
  { date: "20 de Fevereiro", messages: ["Sabia que Calopsitas amam bolas?", "Feliz aniversário, Luna! 🎂"] },
];

export default function NotificationsScreen() {
  // Define the type of item in FlatList
  const renderNotificationCard: ListRenderItem<Notification> = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      {item.messages.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
          <MaterialIcons name="check-circle" size={24} color="#F7A456" />
          <Text style={styles.messageText}>{message}</Text>
        </View>
      ))}
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
        <Text style={styles.headerTitle}>Notificações</Text>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderNotificationCard}
        keyExtractor={(item) => item.date}
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
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  date: { fontWeight: "bold", marginBottom: 8, color: "#F7A456" },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  messageText: { marginLeft: 8, color: "#333", fontSize: 14 },
});
