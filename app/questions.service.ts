import { Injectable } from "@angular/core";

@Injectable()
export class QuestionsService {

  playerAnswers: Array<number> = [];

  scienceQuestions: Array<IQuestion> = [
    {
      id: 0,
      q: "How many teeth should an adult have including their wisdom teeth?",
      choices: ["32", "34", "33", "28"],
      a: 0,
      rate: 0,
      hint: "32"
    }, {
      id: 1,
      q: "What is the name of the organ that we use to breath in oxygen?",
      choices: ["Kidneys", "Lungs", "Stomach", "Liver"],
      a: 1,
      rate: 0,
      hint: "Lungs"
    }, {
      id: 2,
      q: "What is the name of the organ that pumps blood around the body?",
      choices: ["Prostate", "Arteries", "Veins", "Heart"],
      a: 3,
      rate: 0,
      hint: "Heart"
    }, {
      id: 3,
      q: "What makes up 80% of our brains?",
      choices: ["Water", "Carbon", "Calcium", "Sodium"],
      a: 0,
      rate: 0,
      hint: "Water"
    }, {
      id: 4,
      q: "Where is the smallest bone in your body?",
      choices: ["Nose", "Ears", "Hands", "Legs"],
      a: 1,
      rate: 0,
      hint: "Ears"
    }, {
      id: 5,
      q: "Where is the largest bone in your body?",
      choices: ["Legs", "Hands", "Ears", "Nose"],
      a: 0,
      rate: 0,
      hint: "Legs"
    }, {
      id: 6,
      q: "How many ribs are there in the human body?",
      choices: ["16", "18", "22", "24"],
      a: 3,
      rate: 0,
      hint: "Twenty-four (24). Humans have 12 pairs of ribs / 24 ribs in total"
    }, {
      id: 7,
      q: "What is the strongest muscle in your body?",
      choices: ["Ears", "hands", "Tongue", "Legs"],
      a: 2,
      rate: 0,
      hint: "Tongue"
    }, {
      id: 8,
      q: "Which colour eyes do more humans have?",
      choices: ["Black", "Brown", "Green", "Blue"],
      a: 1,
      rate: 0,
      hint: "Brown"
    }, {
      id: 9,
      q: "What is the name of the tube that carries blood to the heart?",
      choices: ["Pancreas", "Capillaries", "Arteries", "Veins"],
      a: 3,
      rate: 0,
      hint: "Vein"
    }, {
      id: 10,
      q: "How many moons does planet Mars have?",
      choices: ["1", "2", "3", "4"],
      a: 1,
      rate: 0,
      hint: "Two – they are called Phobos and Deimos"
    }, {
      id: 11,
      q: "Which planet is closest to the sun?",
      choices: ["Uranus", "Venus", "Mars", "Mercury"],
      a: 3,
      rate: 0,
      hint: "Mercury"
    }, {
      id: 12,
      q: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Mars", "Earth", "Neptune"],
      a: 0,
      rate: 0,
      hint: "Jupiter"
    }, {
      id: 13,
      q: "How many days does the Moon take to orbit the Earth?",
      choices: ["18", "27", "25", "30"],
      a: 1,
      rate: 0,
      hint: "27 days (To be exact it takes 27 days, 7 hours, 43 minutes, 11.6 seconds)"
    }, {
      id: 14,
      q: "Neptune has eight moons, what is the name of the biggest one?",
      choices: ["Despina", "Larissa", "Triton", "Naiad"],
      a: 2,
      rate: 0,
      hint: "Triton"
    }, {
      id: 15,
      q: "Which dwarf planet shares the same name as a famous Disney dog?",
      choices: ["Mars", "Jupiter", "Venus", "Pluto"],
      a: 3,
      rate: 0,
      hint: "Pluto"
    }, {
      id: 16,
      q: "What is the name of the first man to set foot on the moon?",
      choices: ["Neil Armstrong", "Charles Duke", "Pete Conrad", "John Young"],
      a: 0,
      rate: 0,
      hint: "Neil Armstrong"
    }, {
      id: 17,
      q: "How many rings does Saturn have around it?",
      choices: ["5", "6", "7", "8"],
      a: 2,
      rate: 0,
      hint: "Seven (7)"
    }, {
      id: 18,
      q: "What is the closest star to the Earth?",
      choices: ["Wolf 359", "Sun", "Sirius", "Ross 154"],
      a: 1,
      rate: 0,
      hint: "The Sun"
    }, {
      id: 19,
      q: "Which tree produces acorns?",
      choices: ["Black Cherry", "Hawthorn", "Butternut", "Oak Tree"],
      a: 3,
      rate: 0,
      hint: "Oak Tree"
    }, {
      id: 20,
      q: "What type of flower is used by children to make a chain?",
      choices: ["Roses", "Tulips", "Daisies", "Lotus"],
      a: 2,
      rate: 0,
      hint: "Daisies"
    }, {
      id: 21,
      q: "Which flower has big bright yellow petals and grows very, very tall?",
      choices: ["Sunflower", "Daisies", "Coneflower", "Tulips"],
      a: 0,
      rate: 0,
      hint: "Sunflower"
    }, {
      id: 22,
      q: "What 'C' is a prickly plant that grows in the desert?",
      choices: ["Calluna", "Cactus", "Caltha", "Cissus"],
      a: 1,
      rate: 0,
      hint: "Cactus"
    }, {
      id: 23,
      q: "What type of gas is provided by trees and helps us to breathe?",
      choices: ["Oxygen", "Hydrogen", "Nitrogen", "Sulfur"],
      a: 0,
      rate: 0,
      hint: "Oxygen"
    }, {
      id: 24,
      q: "Which type of Japanese tree is very small and grown in a pot?",
      choices: ["Cherry", "Kanzan", "Prunus", "Bonsai"],
      a: 3,
      rate: 0,
      hint: "Bonsai"
    }, {
      id: 25,
      q: "What type of substance is produced by flowers and sometimes causes hay fever?",
      choices: ["Nitrogen", "Pollen", "Hydrogen", "Sulfur"],
      a: 1,
      rate: 0,
      hint: "Pollen"
    }, {
      id: 26,
      q: "What type of red flower do people often give one another on Valentine's Day?",
      choices: ["Red Roses", "Cardinal", "Poppy", "Red carnation"],
      a: 0,
      rate: 0,
      hint: "Red Roses"
    }, {
      id: 27,
      q: "Besides light, what do trees and flowers require to grow?",
      choices: ["Pollen", "Oxygen", "Water", "Vitamine"],
      a: 2,
      rate: 0,
      hint: "Water"
    }, {
      id: 28,
      q: "What type of system circulates blood around the body?",
      choices: ["Digestive", "Respiratory", "Circularity", "Nervous"],
      a: 2,
      rate: 0,
      hint: "Circularity System"
    }, {
      id: 29,
      q: "Which of the following is not a type of tooth?",
      choices: ["Incisor", "Retina", "Molar", "Canine"],
      a: 1,
      rate: 0,
      hint: "Retina"
    }, {
      id: 30,
      q: "What part of the human skeleton protects the brain?",
      choices: ["Rib cage", "Pelvis", "Skull", "Earlobe"],
      a: 2,
      rate: 0,
      hint: "Skull"
    }, {
      id: 31,
      q: "What colour is a Ruby gemstone?",
      choices: ["Red", "Orange", "Cyan", "Green"],
      a: 0,
      rate: 0,
      hint: "Red"
    }, {
      id: 32,
      q: "What is the chemical symbol for oxygen?",
      choices: ["Ox", "O", "X", "Oc"],
      a: 1,
      rate: 0,
      hint: "O"
    }, {
      id: 33,
      q: "Which human body system breaks down food?",
      choices: ["Circulatory", "Nervous", "Respiratory", "Digestive"],
      a: 3,
      rate: 0,
      hint: "Digestive system"
    }, {
      id: 34,
      q: "Who created the famous equation: E = mc2?",
      choices: ["Thomas Edison", "Marie Curie", "Stephen Hawking", "Albert Einstein"],
      a: 3,
      rate: 0,
      hint: "Albert Einstein"
    }, {
      id: 35,
      q: "Which planet is the smallest?",
      choices: ["Neptune", "Jupiter", "Mars", "Mercury"],
      a: 3,
      rate: 0,
      hint: "Mercury"
    }, {
      id: 36,
      q: "Which planet is furthest from the Sun?",
      choices: ["Neptune", "Mars", "Mercury", "Jupiter"],
      a: 0,
      rate: 0,
      hint: "Neptune"
    }, {
      id: 37,
      q: "How many inner planets are there in our solar system?",
      choices: ["3", "2", "4", "5"],
      a: 2,
      rate: 0,
      hint: "Four: Mercury, Venus, Earth, Mars"
    }, {
      id: 38,
      q: "What is the chemical symbol for Sodium?",
      choices: ["Na", "S", "So", "N"],
      a: 0,
      rate: 0,
      hint: "Na"
    }, {
      id: 39,
      q: "What is the chemical symbol for Gold?",
      choices: ["Go", "Au", "G", "A"],
      a: 1,
      rate: 0,
      hint: "Au"
    }
  ];

  generalQuestions: Array<IQuestion> = [

    {
      id: 0,
      q: "Where does the president of the United States of America live?",
      choices: ["Hotel", "Castle", "Palace", "White House"],
      a: 3,
      rate: 0,
      hint: "White House"
    },

    {
      id: 1,
      q: "What is the largest brass instrument in an orchestra?",
      choices: ["Flutes", "Bassons", "Tuba", "Trumpet"],
      a: 2,
      rate: 0,
      hint: "Tuba"
    },

    {
      id: 2,
      q: "Which country does parmesan cheese come from?",
      choices: ["Italy", "Germany", "France", "Russia"],
      a: 0,
      rate: 0,
      hint: "Italy"
    },

    {
      id: 3,
      q: "What is the name of the highest Mountain in Africa?",
      choices: ["Karisimbi", "Mount Kilimanjaro", "Mikeno", "Bwahit"],
      a: 1,
      rate: 0,
      hint: "Mount Kilimanjaro"
    },
    {
      id: 4,
      q: "What type of tree do dates grow on?",
      choices: ["Basswood", "Hawthorn", "Butternut", "Palm trees"],
      a: 3,
      rate: 0,
      hint: "Palm trees"
    },

    {
      id: 5,
      q: "Which is not a color of Olympic rings?",
      choices: ["Red", "Blue", "Orange", "Yellow"],
      a: 2,
      rate: 0,
      hint: "Orange"
    }
    ,

    {
      id: 6,
      q: "How many holes are there in a standard ten pin bowling ball?",
      choices: ["2", "3", "4", "1"],
      a: 1,
      rate: 0,
      hint: "3"
    }
    ,

    {
      id: 7,
      q: "What letter is located between letter E and T on a computer keyboard?",
      choices: ["Y ", "Z", "W", "R"],
      a: 3,
      rate: 0,
      hint: "R"
    }
    ,

    {
      id: 8,
      q: "How many cards are there in a complete pack of cards?",
      choices: ["54", "50", "48", "52"],
      a: 3,
      rate: 0,
      hint: "52"
    }
    ,

    {
      id: 9,
      q: "What is the largest island in the Mediterranean sea?",
      choices: ["Sicily", "Ibiza", "Menorca", "Santorini"],
      a: 0,
      rate: 0,
      hint: "Sicily"
    },
    {
      id: 10,
      q: "What is the most popular sport throughout the world?",
      choices: ["BasketBall", "Football", "Tennis", "HandBall"],
      a: 1,
      rate: 0,
      hint: "Football"
    },
    {
      id: 11,
      q: "Which famous girl band did Cheryl Cole belong to?",
      choices: ["TLC", "En Vogue", "Spice Girls", "Girls Aloud"],
      a: 3,
      rate: 0,
      hint: "Girls Aloud"
    },
    {
      id: 12,
      q: "How many hours are there in seven days?",
      choices: ["168", "172", "150", "160"],
      a: 0,
      rate: 0,
      hint: "168"
    },
    {
      id: 13,
      q: "What colour do you get if you mix blue and yellow paint together?",
      choices: ["orange", "Red", "Green", "Purple"],
      a: 2,
      rate: 0,
      hint: "Green"
    },
    {
      id: 14,
      q: "In which American city is the Statue of Liberty is located?",
      choices: ["New York", "San Diego", "Los Angeles", "Las Vegas"],
      a: 0,
      rate: 0,
      hint: "New York"
    },
    {
      id: 15,
      q: "Global warming is caused by too much of which type of gas?",
      choices: ["hydrogen", "Carbon dioxide", "Nitrogen", "Helium"],
      a: 1,
      rate: 0,
      hint: "Carbon dioxide"
    },
    {
      id: 16,
      q: "What type of metal makes the strongest magnets?",
      choices: ["Steel", "Silver", "Gold", "Iron"],
      a: 3,
      rate: 0,
      hint: "Iron"
    },
    {
      id: 17,
      q: "What year did the Second World War start?",
      choices: ["1941", "1933", "1939", "1944"],
      a: 2,
      rate: 0,
      hint: "1939"
    }, {
      id: 18,
      q: "How many leaves does a shamrock have?",
      choices: ["2", "1", "3", "4"],
      a: 2,
      rate: 0,
      hint: "3"
    }, {
      id: 19,
      q: "What type of gas do plants absorb from the atmosphere?",
      choices: ["carbon dioxide", "Freon", "Helium", "Air"],
      a: 0,
      rate: 0,
      hint: "carbon dioxide"
    }, {
      id: 20,
      q: "How many strings does a violin have?",
      choices: ["3", "4", "5", "6"],
      a: 1,
      rate: 0,
      hint: "4"
    }, {
      id: 21,
      q: "How many years are there in a century?",
      choices: ["10", "50", "1000", "100"],
      a: 3,
      rate: 0,
      hint: "100"
    }, {
      id: 22,
      q: "Which continent does India belong to?",
      choices: ["Africa", "Asia", "Europe", "America"],
      a: 1,
      rate: 0,
      hint: "Asia"
    }, {
      id: 23,
      q: "How many zeros are there in one hundred thousand?",
      choices: ["3", "4", "5", "6"],
      a: 2,
      rate: 0,
      hint: "5"
    }, {
      id: 24,
      q: "In the fairytale of Cinderella, what does Cinderella leave behind at the ball?",
      choices: ["Glass slipper", "Sandal slipper", "Closed back", "Slip on"],
      a: 0,
      rate: 0,
      hint: "Glass slipper"
    }, {
      id: 25,
      q: "Which continent is the Sahara Desert located on?",
      choices: ["America", "Europe", "Africa", "Asia"],
      a: 2,
      rate: 0,
      hint: "Africa"
    }, {
      id: 26,
      q: "Parrots, pelicans and cuckoos are all types of what?",
      choices: ["Birds", "Dogs", "Cats", "Spiders"],
      a: 0,
      rate: 0,
      hint: "Birds"
    }, {
      id: 27,
      q: "How much change would you have from £2 if you bought two stamps at 60p each?",
      choices: ["80p", "70p", "40p", "60p"],
      a: 0,
      rate: 0,
      hint: "80p"
    }, {
      id: 28,
      q: "Which Disney character has a nose that grows longer every time he tells a lie?",
      choices: ["Ariel", "Goofy", "Pluto", "Pinocchio"],
      a: 3,
      rate: 0,
      hint: "Pinocchio"
    }, {
      id: 29,
      q: "How many hours are there in three days?",
      choices: ["64", "68", "72", "74"],
      a: 2,
      rate: 0,
      hint: "72"
    }, {
      id: 30,
      q: "Which of the following creatures is not a species of reptile?",
      choices: ["turtle", "spider", "lizard", "Dinosaur"],
      a: 1,
      rate: 0,
      hint: "Spider"
    }, {
      id: 31,
      q: "What country is the River Thames in?",
      choices: ["England", "Spain", "Romania", "Italy"],
      a: 0,
      rate: 0,
      hint: "England"
    }, {
      id: 32,
      q: "What color must be added to yellow to make orange?",
      choices: ["Blue", "Yellow", "Green", "Red"],
      a: 3,
      rate: 0,
      hint: "Red"
    }, {
      id: 33,
      q: "How many finger holes are there on the front of a recorder?",
      choices: ["6", "7", "5", "8"],
      a: 1,
      rate: 0,
      hint: "7"
    }, {
      id: 34,
      q: "How many major planets are there in our solar system?",
      choices: ["7", "9", "8", "10"],
      a: 2,
      rate: 0,
      hint: "Eight (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)"
    }, {
      id: 35,
      q: "What is the 15th letter of the alphabet?",
      choices: ["P", "I", "O", "U"],
      a: 2,
      rate: 0,
      hint: "O"
    }, {
      id: 36,
      q: "Which continent has the lowest population of people?",
      choices: ["Antarctica", "Africa", "Europe", "Australia"],
      a: 0,
      rate: 0,
      hint: "Antarctica"
    }, {
      id: 37,
      q: "How many months of the year begin with the letter A?",
      choices: ["1", "3", "2", "4"],
      a: 2,
      rate: 0,
      hint: "Two: April and August"
    }, {
      id: 38,
      q: "What is the largest rainforest in the world?",
      choices: ["Congo", "Amazon", "Daintree", "Monteverade"],
      a: 1,
      rate: 0,
      hint: "Amazon"
    }, {
      id: 39,
      q: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Earth", "Venus", "Pluton"],
      a: 0,
      rate: 0,
      hint: "Mars"
    }

  ];

  geoQuestions: Array<IQuestion> = [

    {
      id: 0,
      q: "Which country is Paris the capital of?",
      choices: ["Greece", "Spain", "Italy", "France"],
      a: 3,
      rate: 0,
      hint: "paris"
    },
    {
      id: 1,
      q: "What is the capital of Australia?",
      choices: ["Bathurst", "Sydney", "Canberra", "Dubbo"],
      a: 2,
      rate: 0,
      hint: "Canberra"
    },
    {
      id: 2,
      q: "What is the capital of Germany?",
      choices: ["Jena", "Frankfurt", "Nice", "Berlin"],
      a: 3,
      rate: 0,
      hint: "Berlin"
    },
    {
      id: 3,
      q: "Which country is Washington DC the capital of?",
      choices: ["Romania", "America", "Italy", "Mexico"],
      a: 1,
      rate: 0,
      hint: "America"
    },
    {
      id: 4,
      q: "Which country is Madrid the capital of?",
      choices: ["Spain", "Poland", "Italy", "Austria"],
      a: 0,
      rate: 0,
      hint: "Spain"
    },
    {
      id: 5,
      q: "What is the capital of Cuba?",
      choices: ["Holguín", "Havana", "Matanzas", "Bayamo"],
      a: 1,
      rate: 0,
      hint: "Havana"
    },
    {
      id: 6,
      q: "What is the capital of New Zealand?",
      choices: ["Nelson", "Dunedin", "Tauranga", "Wellington"],
      a: 3,
      rate: 0,
      hint: "Wellington"
    }
    ,
    {
      id: 7,
      q: "What is the capital of Thailand?",
      choices: ["Pattaya", "Krabi", "Bangkok", "Chonburi"],
      a: 2,
      rate: 0,
      hint: "Bangkok"
    },
    {
      id: 8,
      q: "Which country is Cairo the capital of?",
      choices: ["Algeria", "Morocco", "Egypt", "Tunisa"],
      a: 2,
      rate: 0,
      hint: "Egypt"
    },
    {
      id: 9,
      q: "What is the capital of England?",
      choices: ["Liverpool", "London", "Manchester", "Bristol"],
      a: 1,
      rate: 0,
      hint: "London"
    },
    {
      id: 10,
      q: "What is the national capital city of Canada?",
      choices: ["Calgary", "Montreal", "Barrie", "Ottawa"],
      a: 3,
      rate: 0,
      hint: "Ottawa"
    },
    {
      id: 11,
      q: "What is the capital of Mexico?",
      choices: ["Mexico City", "Puebla", "Cancún", "Monterrey"],
      a: 0,
      rate: 0,
      hint: "Mexico City"
    }
    ,
    {
      id: 12,
      q: "Which country is Tokyo the capital of?",
      choices: ["India", "China", "Japan", "Thailand"],
      a: 2,
      rate: 0,
      hint: "Japan"
    },
    {
      id: 13,
      q: "Which country is Lisbon the capital of?",
      choices: ["Portugal", "Brazil", "India", "Angola"],
      a: 0,
      rate: 0,
      hint: "Portugal"
    },
    {
      id: 14,
      q: "What is the capital of Morocco?",
      choices: ["Kenitra", "Rabat", "Marrakesh", "Casablanca"],
      a: 1,
      rate: 0,
      hint: "Rabat"
    },
    {
      id: 15,
      q: "What planet is nearest to the Earth?",
      choices: ["Venus", "Uranus", "Neptune", "Mercury"],
      a: 0,
      rate: 0,
      hint: "Venus"
    },
    {
      id: 16,
      q: "What is the name of the active volcano in Sicily?",
      choices: ["Ischia", "MountEtna", "Filicudi", "Panarea"],
      a: 1,
      rate: 0,
      hint: "Mount Etna"
    },
    {
      id: 17,
      q: "In which country would you find the pyramids?",
      choices: ["Morocco", "Italy", "Egypt", "India"],
      a: 2,
      rate: 0,
      hint: "Egypt"
    },
    {
      id: 18,
      q: "In which State of America would you find Las Vegas?",
      choices: ["Nevada", "California", "Texas", "Georgia"],
      a: 0,
      rate: 0,
      hint: "Nevada"
    },
    {
      id: 19,
      q: "Which country is the second biggest in the world?",
      choices: ["America", "Canada", "China", "India"],
      a: 1,
      rate: 0,
      hint: "Canada"
    },
    {
      id: 20,
      q: "Where is the biggest railway station in the world?",
      choices: ["India", "Russia", "Germany", "New York"],
      a: 3,
      rate: 0,
      hint: "New York City (Grand Central Terminal)"
    },
    {
      id: 21,
      q: "Which continent is Mount Kilimanjaro located on?",
      choices: ["America", "Africa", "Asia", "Europe"],
      a: 1,
      rate: 0,
      hint: "Africa"
    },
    {
      id: 22,
      q: "What is the name of the river that runs through the Grand Canyon?",
      choices: ["Colorado", "Nile", "Mekong", "Loire"],
      a: 0,
      rate: 0,
      hint: "Colorado"
    },
    {
      id: 23,
      q: "What is the largest country in Scandinavia?",
      choices: ["Denmark", "Norway", "Iceland", "Sweden"],
      a: 3,
      rate: 0,
      hint: "Sweden"
    }, {
      id: 24,
      q: "Which is the largest Ocen on earth?",
      choices: ["Pacific", "Atlantic", "Arctic", "Southern"],
      a: 0,
      rate: 0,
      hint: "Pacific"
    },
    {
      id: 25,
      q: "In which continent is Greece located on?",
      choices: ["America", "Asia", "Europe", "Africa"],
      a: 2,
      rate: 0,
      hint: "Europe"
    },
    {
      id: 26,
      q: "Which country is attached to the United States?",
      choices: ["Mexico", "Greenland", "Colombia", "Argentina"],
      a: 0,
      rate: 0,
      hint: "Mexico"
    },
    {
      id: 27,
      q: "What is the hottest continent on Earth?",
      choices: ["America", "Africa", "Asia", "Europe"],
      a: 1,
      rate: 0,
      hint: "Africa"
    },
    {
      id: 28,
      q: "Which country is Canberra the capital city of?",
      choices: ["Australia", "Fiji", "China", "Argentina"],
      a: 0,
      rate: 0,
      hint: "Australia"
    },
    {
      id: 29,
      q: "Which of the following words describes a severe snowstorm with strong winds: ",
      choices: ["Avalanche", "Snow Flurry", "Snow Showers", "Blizzard"],
      a: 3,
      rate: 0,
      hint: "Blizzard"
    },
    {
      id: 30,
      q: "Which of the following is not a type of fossil fuel?",
      choices: ["Petrol", "Coal", "Sand", "Oil"],
      a: 2,
      rate: 0,
      hint: "Sand"
    },
    {
      id: 31,
      q: "Where do stalactites and stalagmites form?",
      choices: ["Sand", "Sky", "Ocean", "Caves"],
      a: 3,
      rate: 0,
      hint: "Caves"
    },
    {
      id: 32,
      q: "Can you unscramble the following word to reveal a huge storm with high winds: RCIRNEAHU",
      choices: ["Hurricane", "Windstorm", "Tempest", "Whirlwind"],
      a: 0,
      rate: 0,
      hint: "Hurricane"
    },
    {
      id: 33,
      q: "Which of the following is not a country?",
      choices: ["Finland", "Morocco", "France", "Cairo"],
      a: 3,
      rate: 0,
      hint: "Cairo"
    },
    {
      id: 34,
      q: "What are the Ganges, Mississippi, Thames, Seine and Volga are all types of?",
      choices: ["mountains", "Countries", "Rivers", "Oceans"],
      a: 2,
      rate: 0,
      hint: "Rivers"
    },
    {
      id: 35,
      q: "Which ocean is situated to the west of North and South America?",
      choices: ["Pacific", "Atlantic", "Arctic", "Indian"],
      a: 0,
      rate: 0,
      hint: "Pacific"
    },
    {
      id: 36,
      q: "The River Seine flows through which European capital city?",
      choices: ["Madrid", "London", "Paris", "Berlin"],
      a: 2,
      rate: 0,
      hint: "Paris"
    },
    {
      id: 37,
      q: "Which layer of planet Earth is made up of tectonic plates?",
      choices: ["Inner Core", "Outer Core", "Mantle", "Crust"],
      a: 3,
      rate: 0,
      hint: "Crust"
    },
    {
      id: 38,
      q: "Convection, Frontal and Relief are the three main types of",
      choices: ["Clouds", "Rainfall", "Winds", "Trees"],
      a: 1,
      rate: 0,
      hint: "Rainfall"
    },
    {
      id: 39,
      q: "What type of biome is the Sahara?",
      choices: ["Desert", "Rainforest", "Tundra", "Ocean"],
      a: 0,
      rate: 0,
      hint: "Desert"
    }
  ];

  constructor() { }

}

export interface IQuestion {
  id: number;
  q: string;
  choices: Array<string>;
  a: number;
  rate: number;
  hint: string;
}

export interface IAnswer {
  id: number;
  playerAnswer: number;
  question: IQuestion;
}
