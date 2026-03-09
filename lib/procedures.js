export const PROCEDURE_LABELS = {
  consultation: "Бесплатная консультация",
  veneers: "Виниры E-max",
  whitening: "Отбеливание",
  braces: "Брекет-система",
  implant: "Имплантация",
  hygiene: "Профессиональная гигиена",
  crown: "Циркониевая коронка",
  treatment: "Лечение кариеса",
  extraction: "Удаление зуба",
  other: "Другое",
};

export function normalizeProcedureName(rawValue) {
  const value = String(rawValue || "").trim();
  if (!value) return "";

  const normalizedByKey = PROCEDURE_LABELS[value.toLowerCase()];
  if (normalizedByKey) return normalizedByKey;

  const localizedValues = Object.values(PROCEDURE_LABELS);
  const localizedMatch = localizedValues.find(
    (item) => item.toLowerCase() === value.toLowerCase(),
  );

  return localizedMatch || value;
}
