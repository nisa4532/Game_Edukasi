export type AnimalType = 'carnivore' | 'herbivore';

export interface Pet {
    id: string;
    emoji: string;
    name: string;
    food: string;
    type: AnimalType;
}

export interface Food {
    id: string;
    emoji: string;
    name: string;
}

export const PETS: Pet[] = [
    { id: 'cat', emoji: '🐈', name: 'Kucing', food: 'fish', type: 'carnivore' },
    { id: 'dog', emoji: '🐕', name: 'Anjing', food: 'bone', type: 'carnivore' },
    { id: 'rabbit', emoji: '🐇', name: 'Kelinci', food: 'carrot', type: 'herbivore' },
    { id: 'chicken', emoji: '🐓', name: 'Ayam', food: 'corn', type: 'herbivore' },
    { id: 'cow', emoji: '🐄', name: 'Sapi', food: 'grass', type: 'herbivore' }
];

export const FOODS: Food[] = [
    { id: 'fish', emoji: '🐟', name: 'Ikan' },
    { id: 'bone', emoji: '🦴', name: 'Tulang' },
    { id: 'carrot', emoji: '🥕', name: 'Wortel' },
    { id: 'corn', emoji: '🌽', name: 'Jagung' },
    { id: 'grass', emoji: '🌿', name: 'Rumput' }
];
