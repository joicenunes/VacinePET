export interface Pet {
  id: string;
  image: string;
  name: string;
  type: string;
  age?: string;
  breed?: string;
  description?: string;
  gender?: string;
  medical_history?: MedicalHistory[];
  weight?: string;
}

export interface MedicalHistory {
  date: string;
  description: string;
}