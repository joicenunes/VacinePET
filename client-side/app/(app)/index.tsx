import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

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

export default function HomeScreen() {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [today, setToday] = useState<number>(-1);
  
  function setCurrentWeekDays() {
    const daysOfWeek = [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
    ];
    
    const todayAux = new Date();
    const currentDayIndex = todayAux.getDay();
    setToday(currentDayIndex);
    const currentWeek = [];
    
    for (let i = 0; i < 7; i++) {
        const day = new Date();
        day.setDate(todayAux.getDate() - currentDayIndex + i);
        currentWeek.push(`${day.getDate()} ${daysOfWeek[day.getDay()]}`);
    }
    
    setWeekDays(currentWeek);
  }

  useEffect(() => {
    setCurrentWeekDays();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Image
            source={{ uri: "https://example.com/profile.jpg" }}
            style={styles.profileImage}
          />
          <Text style={styles.greetingText}>Olá, Sarah</Text>
        </View>
        <TouchableOpacity onPress={() => {
          router.push("/(app)/notifications")
        }}>
          <Feather name="bell" color="#333" size={20} />
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.calendar}
      >
        {weekDays.map((date, i) => (
          <View
            key={i}
            style={[styles.dateItem, i === today && styles.selectedDate]}
          >
            <Text style={[styles.dateText, i === today && styles.selectedDateText]}>
              {date}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Vaccination Card */}
      <View style={styles.vaccinationCard}>
        <Text style={styles.vaccinationText}>Vacina: Raiva → Salsicha</Text>
        <Text style={styles.vaccinationDetails}>25 de Março | 12h00</Text>
      </View>

      {/* Pet Cards */}
      <Text style={styles.sectionTitle}>Meus Pets</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", paddingTop: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greetingContainer: { flexDirection: "row", alignItems: "center" },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  greetingText: { fontSize: 18, fontWeight: "600" },
  calendar: { flexDirection: "row", marginHorizontal: 20, marginBottom: 10 },
  dateItem: { padding: 10, alignItems: "center" },
  selectedDate: { backgroundColor: "#FF914D", borderRadius: 10 },
  dateText: { color: "#666" },
  selectedDateText: { color: "#FFF" },
  vaccinationCard: {
    backgroundColor: "#FF914D",
    padding: 15,
    margin: 20,
    borderRadius: 10,
  },
  vaccinationText: { color: "#FFF", fontWeight: "bold" },
  vaccinationDetails: { color: "#FFF" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
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
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#DDD",
  },
  navItem: { alignItems: "center" },
  navText: { color: "#999" },
  navTextActive: { color: "#FF914D", fontWeight: "600" },
});
