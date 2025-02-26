import { Pet } from '../interfaces/petInterfaces';

export const pets: Pet[] = [
  {
    id: "1",
    name: "Salsicha",
    type: "Cachorro",
    age: "5 anos",
    breed: "Dachshund",
    weight: "6,5kg",
    image: "https://protoanimal.com.br/wp-content/uploads/2023/12/proto-animal-brasil-Dachshund-Tudo-sobre-a-raca-do-cachorro-salsicha-2.jpg",
    gender: "Macho",
    description: "Salsicha é um cachorro muito brincalhão e adora correr no parque.",
    vaccines: [{
      vaccine_name: "Gripe",
      status: 0
    }, {
      vaccine_name: "Antirrábica",
      status: 1
    }, {
      vaccine_name: "V10",
      status: 1
    }, {
      vaccine_name: "Giardia",
      status: 0
    }, {
      vaccine_name: "Leishmaniose",
      status: 0
    }, {
      vaccine_name: "V8",
      status: 0
    }, {
      vaccine_name: "Coronavirus",
      status: 1
    }],
    medical_history: [
      { date: "24/02/2024", description: "Aplicação das vacinas V10 e Antirrábica." },
      { date: "24/02/2023", description: "Aplicação das vacinas V10 e Antirrábica" },
      { date: "24/02/2023", description: "Aplicação das vacinas V10 e Antirrábica" },
      { date: "24/02/2023", description: "Aplicação das vacinas V10 e Antirrábica" },
      { date: "24/02/2023", description: "Aplicação das vacinas V10 e Antirrábica" }
    ]
  },
  {
    id: "2",
    name: "Luna",
    type: "Gato",
    age: "3 anos",
    breed: "Siamês",
    weight: "4,5kg",
    image: "https://www.zooplus.pt/magazine/wp-content/uploads/2018/06/siamkatze-768x512.jpeg",
    gender: "Fêmea",
    description: "Luna é uma gata muito carinhosa e adora brincar com bolinhas de lã."
  },
  {
    id: "3",
    name: "Pepe",
    type: "Pássaro",
    breed: "Calopsita",
    age: "2 anos",
    weight: "200g",
    image: "https://jpimg.com.br/uploads/2023/10/7-tipos-de-calopsitas-para-voce-conhecer.jpg",
    gender: "Macho",
    description: "Pepe é um pássaro muito cantor e adora ficar na janela observando a rua."
  },
];