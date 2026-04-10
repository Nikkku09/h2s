export interface MealOption {
  id: string;
  name: string;
  energyTarget: number; 
  hungerTarget: number; 
  timeTarget: number; 
  whyThis: string;
  calories: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

export const mealOptions: MealOption[] = [
  {
    id: "m1",
    name: "Greek Yogurt & Almonds",
    energyTarget: 20,
    hungerTarget: 20,
    timeTarget: 10,
    whyThis: "High Magnesium for focus. Quick source of protein with zero prep time.",
    calories: 250,
    imageUrl: "https://images.unsplash.com/photo-1574677761005-cb668eb76e19?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
    reviews: 120
  },
  {
    id: "m2",
    name: "Quinoa Power Bowl",
    energyTarget: 80,
    hungerTarget: 90,
    timeTarget: 80,
    whyThis: "Complex carbs for sustained energy and high fiber to fully satiate hunger.",
    calories: 650,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    reviews: 350
  },
  {
    id: "m3",
    name: "Avocado Toast & Egg",
    energyTarget: 50,
    hungerTarget: 50,
    timeTarget: 40,
    whyThis: "Healthy fats for brain function, combined with highly bioavailable protein.",
    calories: 400,
    imageUrl: "https://images.unsplash.com/photo-1525351484163-e14500b8c178?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
    reviews: 215
  },
  {
    id: "m4",
    name: "Protein Shake & Banana",
    energyTarget: 30,
    hungerTarget: 60,
    timeTarget: 15,
    whyThis: "Rapid carb reload (potassium) plus whey protein for immediate satiety.",
    calories: 320,
    imageUrl: "https://images.unsplash.com/photo-1577905892552-3d6118d6a8a3?q=80&w=400&auto=format&fit=crop",
    rating: 4.5,
    reviews: 88
  },
  {
    id: "m5",
    name: "Grilled Salmon Salad",
    energyTarget: 60,
    hungerTarget: 70,
    timeTarget: 70,
    whyThis: "Omega-3 fatty acids for cognitive clarity minus the heavy carb lethargy.",
    calories: 550,
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    reviews: 420
  },
  {
    id: "m6",
    name: "Oatmeal with Blueberries",
    energyTarget: 90, 
    hungerTarget: 40,
    timeTarget: 30,
    whyThis: "Slow-release complex carbohydrates with powerful antioxidants.",
    calories: 350,
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=400&auto=format&fit=crop",
    rating: 4.6,
    reviews: 156
  },
  {
    id: "m7",
    name: "Rice Cakes & PB",
    energyTarget: 40,
    hungerTarget: 30,
    timeTarget: 5,
    whyThis: "Instant carb crunch paired with dense fats for minimal disruption.",
    calories: 200,
    imageUrl: "https://images.unsplash.com/photo-1610444316047-78ab3e4fc219?q=80&w=400&auto=format&fit=crop",
    rating: 4.3,
    reviews: 95
  }
];
