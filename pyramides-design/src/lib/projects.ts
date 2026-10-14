export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  image: string;
  text: string;
};

export const projects: Project[] = [
  {
    slug: "appartement-salon",
    title: "Rénovation d'un appartement",
    location: "Paris",
    type: "Rénovation",
    image: "/images/living-room-prestige.png",
    text: "Ouverture du séjour sur la cuisine, faux plafond avec éclairage indirect, sols et peintures refaits.",
  },
  {
    slug: "villa-contemporaine",
    title: "Villa contemporaine",
    location: "Côte d'Azur",
    type: "Construction",
    image: "/images/villa-prestige.jpg",
    text: "Construction neuve avec grandes baies vitrées, terrasse en pierre et piscine.",
  },
  {
    slug: "salle-de-bain-marbre",
    title: "Salle de bain en marbre",
    location: "Neuilly-sur-Seine",
    type: "Rénovation",
    image: "/images/bathroom-suite.jpg",
    text: "Habillage marbre, baignoire îlot, meuble vasque en chêne sur mesure.",
  },
  {
    slug: "cuisine-penthouse",
    title: "Cuisine et séjour",
    location: "Paris",
    type: "Aménagement",
    image: "/images/kitchen-penthouse.jpg",
    text: "Cuisine sur mesure en bois foncé, îlot central en marbre noir, béton ciré au sol.",
  },
];
