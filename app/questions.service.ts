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
      id: 0,
      q: "Which country is Madrid the capital of?",
      choices: ["Spain", "Poland", "Italy", "Austria"],
      a: 0,
      rate: 0,
      hint: "Spain"
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
