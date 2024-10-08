const pets = [
    {
      id: 1,
      name: "Buddy",
      age: 3,
      species: "Dog",
      breed: "Labrador Retriever",
      gender: "Male",
      medicalRecords: "Neutered, vaccinated",
      isAdopted: false
    },
    {
      id: 2,
      name: "Whiskers",
      age: 2,
      species: "Cat",
      breed: "Siamese",
      gender: "Female",
      medicalRecords: "Spayed, vaccinated",
      isAdopted: true
    },
    {
      id: 3,
      name: "Max",
      age: 1,
      species: "Dog",
      breed: "Golden Retriever",
      gender: "Male",
      medicalRecords: "Vaccinated",
      isAdopted: false
    },
    {
      id: 4,
      name: "Bella",
      age: 4,
      species: "Dog",
      breed: "Poodle",
      gender: "Female",
      medicalRecords: "Spayed, vaccinated",
      isAdopted: false
    },
    {
      id: 5,
      name: "Shadow",
      age: 5,
      species: "Cat",
      breed: "Maine Coon",
      gender: "Male",
      medicalRecords: "Neutered, vaccinated",
      isAdopted: true
    }
  ];

  const adoptions = [
    {
      id: 1,
      date: '2023-09-29',
      userName: 'JohnDoe',
      petId: 1
    },
    {
      id: 2,
      date: '2023-09-30',
      userName: 'JaneSmith',
      petId: 2
    }
  ];
  
  
  export function retrievePets(search) {
    if (!search) return pets;
  
    let matchingPets = pets;
    const { name, age, species, breed, gender, isAdopted } = search;
  
    if (name) {
      matchingPets = matchingPets.filter((pet) =>
        pet.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  
    if (isAdopted) {
      matchingPets = matchingPets.filter((pets) => pets.isAdopted == parseBoolean(isAdopted));
    }
  
    if (age) {
        matchingPets = matchingPets.filter((pet) => pet.age === age);
      }
  
      if (species) {
        matchingPets = matchingPets.filter((pet) => pet.species === species);
      }
        
      if (breed) {
        matchingPets = matchingPets.filter((pet) => pet.breed === breed);
      }
      if (gender) {
        matchingPets = matchingPets.filter((pet) => pet.gender === gender);
      }

    return matchingPets;
  }

  function parseBoolean(value) {
    console.log(value);
    return value !== undefined && value.toLowerCase() === "true";
  }

  export function retrievePetsById(id) {

    return pets.find((pet) => pet.id == id);
  }

  export function createPets(name, age, species, breed, gender, medicalRecords) {
  
    const newPet = {
      id: pets.length + 1,
      name,
      age,
      species,
      breed,
      gender,
      medicalRecords,
      isAdopted: false

    };
  
    pets.push(newPet);
    return newPet;
  }

  export function updatePets(id, updateData) {
    const pet = retrievePetsById(id);
  
    if (!pet) throw `Pet ${id} not found!`;

  
    Object.assign(todo, updateData);
  
    return todo;
  }

  export function deletePet(id) {
  
    const index = pets.findIndex((t) => t.id == id);
    if (index >= 0) pets.splice(index, 1);
  }

  export function createAdoption(userName, petId){
    const pet = retrievePetsById(petId); 

    if (!pet) throw new Error(`Pet with id ${petId} not found.`);
    if (pet.isAdopted) throw new Error(`Pet with id ${petId} is already adopted.`);

    pet.isAdopted = true; 

    const newAdoption = {
      id: adoptions.length + 1,
      date: new Date().toISOString().split('T')[0],
      userName,
      petId
    };

    adoptions.push(newAdoption);
    return newAdoption; 
  }

  export function retrieveAdoptionsById(id) {
    return adoptions.find((adoption) => adoption.id == id);
  }

  export function retrieveAdoptionsByUser(userName) {
    if (!userName) {
      throw new Error('userName is required');
    }
    return adoptions.filter(adoption => 
      adoption.userName && adoption.userName.toLowerCase() === userName.toLowerCase()
    );
  }
  

  export function retrieveAdoptions() {
    return adoptions;
  }
