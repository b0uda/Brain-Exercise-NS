import { Injectable } from "@angular/core";

@Injectable()
export class QuestionsService {

  playerAnswers: Array<number> = [];

  scienceQuestions: Array<IQuestion> = [
    {
      id: 0,
      q: "A B C ? E",
      choices: ["R", "P", "D", "X"],
      a: 2,
      rate: 0,
      hint: "Normal Alphabet Order"
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
    }, {
      id: 40,
      q: "Which ocean separates North America from Europe?",
      choices: ["Indian", "Arctic", "Pacific", "Atlantic"],
      a: 3,
      rate: 0,
      hint: "Atlantic"
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
      choices: ["Ischia", "Mount Etna", "Filicudi", "Panarea"],
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
    },
    {
      id: 40,
      q: "Which country has the largest population in the world?",
      choices: ["India", "United States", "Japan", "China"],
      a: 3,
      rate: 0,
      hint: "China"
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
