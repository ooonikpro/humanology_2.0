import type { AspectType } from "@types";

export const ASPECTS: Record<AspectType, string> = {
  ideas: "Мысль",
  time: "Чутьё",
  logic: "Знание",
  business: "Действие",
  people: "Чувство",
  emotions: "Желание",
  will: "Намерение",
  comfort: "Ощущение",
} as const;

export const ASPECTS_LABEL: Record<AspectType, string> = {
  ideas: "Интуиция возможностей",
  time: "Интуиция времени",
  logic: "Структурная логика",
  business: "Деловая логика",
  people: "Этика отношений",
  emotions: "Этика эмоций",
  will: "Волевая сенсорика",
  comfort: "Сенсорика ощущений",
} as const;

export const ASPECTS_TAGS: Record<AspectType, string[]> = {
  ideas: [
    "Возможность", 
    "Потенциал", 
    "Варианты",
    "Суть",
    "Смысл",
    "Способности",
    "Талант",
    "Идея",
    "Оригинальность",
    "Перспектива",
    "Банальность",
    "Интерес",
    "Незаурядность",
  ],
  time: [
    "Событие", 
    "Изменение", 
    "Перемена",
    "Опоздание",
    "Тенденция",
    "Предсказание",
    "Цикличность",
    "Прогноз",
    "Прошлое",
    "Будущее",
    "Цикл",
    "Этап",
  ],
  logic: [
    "Логичность", 
    "Статус", 
    "Система",
    "Классификация",
    "Закон",
    "Структура",
    "Вид",
    "Критерий",
    "Анализ",
    "График",
    "Сравнение",
    "Формула",
    "Порядок",
  ],
  business: [
    "Работа", 
    "Деятельность", 
    "Выгода",
    "Результат",
    "Цель",
    "Эффективность",
    "Метод",
    "Дело",
    "Бизнес",
    "Рынок",
    "Цены",
  ],
  people: [
    "Отношения", 
    "Любовь", 
    "Ненависть",
    "Симпатия",
    "Антипатия",
    "Душевность",
    "Сочувствие",
    "Привязанность",
    "Дружба",
    "Вражда",
    "Открытость",
    "Уважение",
    "Родина",
  ],
  emotions: [
    "Страсть", 
    "Эмоция", 
    "Восторг",
    "Ликование",
    "Агрессия",
    "Атмосфера",
    "Страсть",
    "Настроение",
    "Печаль",
    "Депрессия",
    "Вдохновение",
    "Страдание",
    "Влюбленность",
    "Обожание",
  ],
  will: [
    "Характер", 
    "Сопротивление", 
    "Сила",
    "Физическая сила",
    "Власть",
    "Управление",
    "Территория",
    "Пространство",
    "Конкуренция",
    "Захват",
    "Союз",
    "Соратник",
    "Охрана границ",
  ],
  comfort: [
    "Комфорт", 
    "Уют", 
    "Тепло",
    "Холод",
    "Вкус",
    "Отдых",
    "Наслаждение",
    "Удовольствие",
    "Жажда",
    "Голод",
    "Текстура",
    "Материал",
    "Расслабленность",
    "Напряженность",
  ], 
} as const;
