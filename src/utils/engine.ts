import type { MealOption } from '../data/meals';
import { mealOptions } from '../data/meals';

/**
 * Calculates the best meal recommendation based on user biometric state.
 * Uses a linear scan rendering an O(n) complexity.
 * 
 * @param energy - User's current energy (0-100)
 * @param hunger - User's current hunger (0-100)
 * @param time - User's available time (0-100)
 * @returns The optimal MealOption based on minimal squared distance
 */
export function getBestMeal(energy: number, hunger: number, time: number): MealOption {
  let bestMatch = mealOptions[0];
  let minDistance = Infinity;

  // Single pass through possibilities O(n)
  for (let i = 0; i < mealOptions.length; i++) {
    const meal = mealOptions[i];
    
    const distance = 
      Math.pow(meal.energyTarget - energy, 2) + 
      Math.pow(meal.hungerTarget - hunger, 2) + 
      Math.pow(meal.timeTarget - time, 2);
      
    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = meal;
    }
  }

  return bestMatch;
}
