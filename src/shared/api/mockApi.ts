export const fetchResorts = (country: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: Record<string, string[]> = {
        Италия: ["Рим", "Венеция"],
        Греция: ["Афины"],
        Таиланд: ["Пхукет", "Бангкок"],
      };

      resolve(data[country] || []);
    }, 1000);
  });
};

export const fetchPrograms = (resort: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: Record<string, string[]> = {
        Рим: ["Эконом", "Комфорт"],
        Венеция: ["Знакомство с городом", "VIP-тур"],
        Афины: ["Исторический", "Пляжный", "Комбинированный"],
        Пхукет: ["Пляжный релакс", "Дайвинг"],
        Бангкок: ["Городской тур", "Шопинг", "Экзотика"],
      };

      resolve(data[resort] || []);
    }, 1000);
  });
};