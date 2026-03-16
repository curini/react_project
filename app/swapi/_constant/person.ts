export type Person = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  films: string[];
  hair_color: string;
  height: string;
  homeworld: string;
  vehicles: string[];
};

export const attributeToShow: (keyof Person)[] = [
  "birth_year",
  "gender",
  "eye_color",
  "hair_color",
  "height",
];

export const cleanProperty = (property: string) => {
  return property.replace("_", " ");
};
