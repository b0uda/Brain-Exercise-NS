import { Injectable } from "@angular/core";

@Injectable()
export class QuestionsService {

  playerAnswers: Array<number> = [];

  mathQuestions: Array<IQuestion> = [

    {
      id: 0,
      q: "A B C ? E",
      choices: ["R", "P", "D", "X"],
      a: 2,
      rate: 0,
      hint: "Normal Alphabet Order"
    },

    {
      id: 1,
      q: "U O I ? A",
      choices: ["Q", "E", "C", "J"],
      a: 1,
      rate: 0,
      hint: "vowles A, E, I, O, U\nin reverse order"
    },

    {
      id: 2,
      q: "Y W U S Q ? ?",
      choices: ["Q S", "O M", "K M", "L T"],
      a: 1,
      rate: 0,
      hint: "alternate letters\nin reverse order"
    },

    {
      id: 3,
      q: "A B D G ?",
      choices: ["Q", "M", "K", "L"],
      a: 2,
      rate: 0,
      hint: "letters of the series are\nrespectivelymoved one\ntwo three,... steps forward."
    },
    {
      id: 4,
      q: "Z U Q ? L",
      choices: ["I", "M", "O", "N"],
      a: 3,
      rate: 0,
      hint: "letters of the series are\nrespectivelymoved one\ntwo three,... steps forward.."
    },

    {
      id: 5,
      q: "A C F H ? M",
      choices: ["I", "L", "K", "J"],
      a: 2,
      rate: 0,
      hint: "Letters moved two and\nthree steps forward"
    }
    ,

    {
      id: 6,
      q: "R M ? F D ?",
      choices: ["C B", "B H", "I C", "J H"],
      a: 2,
      rate: 0,
      hint: "Letter are in reverse order"
    }
    ,

    {
      id: 7,
      q: "Z L X J V H T F ? ?",
      choices: ["R D", "S E", "R E", "Q D"],
      a: 0,
      rate: 0,
      hint: "two series Z X V T ?\nand L J H F ?"
    }
    ,

    {
      id: 8,
      q: "Z S W O T K Q G ? ?",
      choices: ["OC", "NC", "ND", "OD"],
      a: 1,
      rate: 0,
      hint: "two series Z W T V Q ? \nand S O K G ?"
    }
    ,

    {
      id: 9,
      q: "W V T S Q P N M ? ?",
      choices: ["I J", "J K", "J I", "K J"],
      a: 3,
      rate: 0,
      hint: "letters moved one and\ntwo steps backward"
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
