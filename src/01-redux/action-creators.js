// you need to define the action creators below!

const ADOPT_PET = 'ADOPT_PET';
const PREVIEW_PET = 'PREVIEW_PET';
const ADD_NEW_DOG = 'ADD_NEW_DOG';
const ADD_NEW_CAT = 'ADD_NEW_CAT';
const REMOVE_DOG = 'REMOVE_DOG';
const REMOVE_CAT = 'REMOVE_CAT';

export const adoptPet = (pet) => ({
  type: ADOPT_PET,
  pet
})

export const previewPet = (pet) => ({
  type: PREVIEW_PET,
  pet
});

export const addNewDog = (pet) => ({
  type: ADD_NEW_DOG,
  dog: pet
})

export const addNewCat = (pet) => ({
  type: ADD_NEW_CAT,
  cat: pet
})

export const removeDog = (pet) => ({
  type: REMOVE_DOG,
  dogId: pet.id
})

export const removeCat = (pet) => ({
  type: REMOVE_CAT,
  catId: pet.id
})
