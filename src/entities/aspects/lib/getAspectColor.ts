import type { AspectType } from "@types";

/**
 * Возвращает цвет аспекта на основе его типа
 * - Логика (logic, business) - розовый
 * - Этика (people, emotions) - зеленый  
 * - Интуиция (ideas, time) - бирюзовый
 * - Сенсорика (will, comfort) - желтый
 */
export const getAspectColor = (aspect: AspectType): string => {
  switch (aspect) {
    // Логика - розовый
    case "logic":
    case "business":
      return "aspect-logic";
    
    // Этика - зеленый
    case "people":
    case "emotions":
      return "aspect-ethics";
    
    // Интуиция - бирюзовый
    case "ideas":
    case "time":
      return "aspect-intuition";
    
    // Сенсорика - желтый
    case "will":
    case "comfort":
      return "aspect-sensory";
    
    default:
      return "quadra"; // fallback
  }
};

/**
 * Возвращает темный цвет аспекта на основе его типа (75% opacity)
 */
export const getAspectColorDark = (aspect: AspectType): string => {
  switch (aspect) {
    // Логика - розовый
    case "logic":
    case "business":
      return "aspect-logic-dark";
    
    // Этика - зеленый
    case "people":
    case "emotions":
      return "aspect-ethics-dark";
    
    // Интуиция - бирюзовый
    case "ideas":
    case "time":
      return "aspect-intuition-dark";
    
    // Сенсорика - желтый
    case "will":
    case "comfort":
      return "aspect-sensory-dark";
    
    default:
      return "quadra-dark"; // fallback
  }
};

export default getAspectColor;
