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
} from "react-native";
import { pets } from '../../providers/mock';
import indexStyles from '../../styles';

interface CalendarDay {
  day: number;
  dayOfWeek: string;
}

export default function HomeScreen() {
  const [weekDays, setWeekDays] = useState<CalendarDay[]>([]);
  const [today, setToday] = useState<number>(-1);
  
  function setCurrentWeekDays() {
    const daysOfWeek = [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
    ];
    
    const todayAux = new Date();
    const currentDayIndex = todayAux.getDay();
    setToday(currentDayIndex);
    const currentWeek: CalendarDay[] = [];
    
    for (let i = 0; i < 7; i++) {
        const day = new Date();
        day.setDate(todayAux.getDate() - currentDayIndex + i);
        currentWeek.push({
          day: day.getDate(),
          dayOfWeek: daysOfWeek[day.getDay()],
        });
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
      <View
        style={styles.calendar}
      >
        {weekDays.map((date, i) => (
          <View
            key={i}
            style={[styles.dateItem]}
          >
            <Text style={[styles.dayText, i === today && styles.selectedDayText]}>
              {date.day}
            </Text>
            <Text style={[styles.dayOfWeekText, i === today && styles.selectedDayText]}>
              {date.dayOfWeek}
            </Text>
          </View>
        ))}
      </View>

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
                {item.type} | {item.breed}
              </Text>
              <View style={styles.additionalInfo}>	
                <View style={styles.additionalInfoItem}>
                  <View style={styles.additionalInfoItemIcon}>
                    <Feather name="activity" size={18} color="#FF914D" />
                  </View>
                  <Text style={styles.petDetails}>
                    {item.age}
                  </Text>
                </View>
                <View style={styles.additionalInfoItem}>
                  <View style={styles.additionalInfoItemIcon}>
                    <Feather name="bookmark" size={18} color="#FF914D" />
                  </View>
                  <Text style={styles.petDetails}>
                  {item.weight}
                  </Text>
                </View>
              </View>
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
  ...indexStyles,
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
  navTextActive: { color: "#FF914D", fontWeight: "600" }
});
