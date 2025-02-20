import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type GreetingsStyles = {
  greetingContainer: ViewStyle;
  profileImage: ImageStyle;
  greetingText: TextStyle;
};

export const greetings: GreetingsStyles = {
  greetingContainer: { flexDirection: "row", alignItems: "center" },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  greetingText: { fontSize: 18, fontWeight: "600" }
};

type CalendarStyles = {
  calendar: ViewStyle;
  dateItem: ViewStyle;
  dayText: TextStyle;
  dayOfWeekText: TextStyle;
  selectedDayText: TextStyle;
}

export const calendar: CalendarStyles = {
  calendar: { width: "100%", flexDirection: "row", paddingHorizontal: 15, justifyContent: "space-between" },
  dateItem: { padding: 10, alignItems: "center" },
  dayText: { color: "#333", fontWeight: "bold", fontSize: 20 },
  dayOfWeekText: { color: "#888"},
  selectedDayText: { color: "#FF914D" }
};

type PetCard = {
  petCard: ViewStyle,
  petImage: ImageStyle,
  petInfo: ViewStyle,
  petName: TextStyle,
  petDetails: TextStyle,
  additionalInfo: ViewStyle,
  additionalInfoItem: ViewStyle,
  additionalInfoItemIcon: ViewStyle
  moreButton: ViewStyle,
  moreButtonText: TextStyle,
}

const petSection: PetCard = {
  petCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  petImage: { width: 100, height: 100, borderRadius: 10, marginRight: 24 },
  petInfo: { flex: 1 },
  additionalInfo: { flexDirection: "row", alignItems: "center", marginVertical: 5, flex: 1, width: "100%", gap: 15 },
  additionalInfoItem: { flexDirection: "row", alignItems: "center" },
  additionalInfoItemIcon: { marginRight: 5 },
  petName: { fontWeight: "600", fontSize: 16 },
  petDetails: { color: "#666", marginVertical: 5 },
  moreButton: { backgroundColor: "#FF914D", borderRadius: 5, padding: 5 },
  moreButtonText: { color: "#FFF", textAlign: "center" },
}

const indexStyles = {
  ...greetings,
  ...calendar,
  ...petSection
};

export default indexStyles;