export interface Formatge {
  id: string;
  nom: string;
  pais_procedencia: string;
  tipus_llet: string;
  tipus_fermentacio: string;
  temps_maduracio: string;
  descripcio: string;
  imatge?: string; // Optional property for image URL
}
