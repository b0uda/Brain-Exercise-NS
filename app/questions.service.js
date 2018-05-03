"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.playerAnswers = [];
        this.scienceQuestions = [
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
        this.generalQuestions = [
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
            },
            {
                id: 6,
                q: "How many holes are there in a standard ten pin bowling ball?",
                choices: ["2", "3", "4", "1"],
                a: 1,
                rate: 0,
                hint: "3"
            },
            {
                id: 7,
                q: "What letter is located between letter E and T on a computer keyboard?",
                choices: ["Y ", "Z", "W", "R"],
                a: 3,
                rate: 0,
                hint: "R"
            },
            {
                id: 8,
                q: "How many cards are there in a complete pack of cards?",
                choices: ["54", "50", "48", "52"],
                a: 3,
                rate: 0,
                hint: "52"
            },
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
        this.geoQuestions = [
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
            },
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
            },
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
    }
    QuestionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQWc2QkU7UUE5NUJBLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyxxQkFBZ0IsR0FBcUI7WUFDbkM7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLG1FQUFtRTtnQkFDdEUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGdFQUFnRTtnQkFDbkUsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO2dCQUNqRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsT0FBTzthQUNkLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGlFQUFpRTtnQkFDcEUsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUNuRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsT0FBTzthQUNkLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGtDQUFrQztnQkFDckMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO2dCQUNqRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVB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QUFFO2dCQUNOLENBQUMsRUFBRSw0REFBNEQ7Z0JBQy9ELE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFDakQsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLFVBQVU7YUFDakI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixDQUFDLEVBQUUsbUNBQW1DO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7Z0JBQ3BELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRixDQUFDO0lBRWMsQ0FBQztJQWg2Qk4sZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBazZCNUI7SUFBRCx1QkFBQztDQUFBLEFBbDZCRCxJQWs2QkM7QUFsNkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zU2VydmljZSB7XG5cbiAgcGxheWVyQW5zd2VyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gIHNjaWVuY2VRdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj4gPSBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBxOiBcIkhvdyBtYW55IHRlZXRoIHNob3VsZCBhbiBhZHVsdCBoYXZlIGluY2x1ZGluZyB0aGVpciB3aXNkb20gdGVldGg/XCIsXG4gICAgICBjaG9pY2VzOiBbXCIzMlwiLCBcIjM0XCIsIFwiMzNcIiwgXCIyOFwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCIzMlwiXG4gICAgfSwge1xuICAgICAgaWQ6IDEsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIG9yZ2FuIHRoYXQgd2UgdXNlIHRvIGJyZWF0aCBpbiBveHlnZW4/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJLaWRuZXlzXCIsIFwiTHVuZ3NcIiwgXCJTdG9tYWNoXCIsIFwiTGl2ZXJcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTHVuZ3NcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBvcmdhbiB0aGF0IHB1bXBzIGJsb29kIGFyb3VuZCB0aGUgYm9keT9cIixcbiAgICAgIGNob2ljZXM6IFtcIlByb3N0YXRlXCIsIFwiQXJ0ZXJpZXNcIiwgXCJWZWluc1wiLCBcIkhlYXJ0XCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkhlYXJ0XCJcbiAgICB9LCB7XG4gICAgICBpZDogMyxcbiAgICAgIHE6IFwiV2hhdCBtYWtlcyB1cCA4MCUgb2Ygb3VyIGJyYWlucz9cIixcbiAgICAgIGNob2ljZXM6IFtcIldhdGVyXCIsIFwiQ2FyYm9uXCIsIFwiQ2FsY2l1bVwiLCBcIlNvZGl1bVwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJXYXRlclwiXG4gICAgfSwge1xuICAgICAgaWQ6IDQsXG4gICAgICBxOiBcIldoZXJlIGlzIHRoZSBzbWFsbGVzdCBib25lIGluIHlvdXIgYm9keT9cIixcbiAgICAgIGNob2ljZXM6IFtcIk5vc2VcIiwgXCJFYXJzXCIsIFwiSGFuZHNcIiwgXCJMZWdzXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkVhcnNcIlxuICAgIH0sIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcTogXCJXaGVyZSBpcyB0aGUgbGFyZ2VzdCBib25lIGluIHlvdXIgYm9keT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkxlZ3NcIiwgXCJIYW5kc1wiLCBcIkVhcnNcIiwgXCJOb3NlXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkxlZ3NcIlxuICAgIH0sIHtcbiAgICAgIGlkOiA2LFxuICAgICAgcTogXCJIb3cgbWFueSByaWJzIGFyZSB0aGVyZSBpbiB0aGUgaHVtYW4gYm9keT9cIixcbiAgICAgIGNob2ljZXM6IFtcIjE2XCIsIFwiMThcIiwgXCIyMlwiLCBcIjI0XCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlR3ZW50eS1mb3VyICgyNCkuIEh1bWFucyBoYXZlIDEyIHBhaXJzIG9mIHJpYnMgLyAyNCByaWJzIGluIHRvdGFsXCJcbiAgICB9LCB7XG4gICAgICBpZDogNyxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgc3Ryb25nZXN0IG11c2NsZSBpbiB5b3VyIGJvZHk/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJFYXJzXCIsIFwiaGFuZHNcIiwgXCJUb25ndWVcIiwgXCJMZWdzXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlRvbmd1ZVwiXG4gICAgfSwge1xuICAgICAgaWQ6IDgsXG4gICAgICBxOiBcIldoaWNoIGNvbG91ciBleWVzIGRvIG1vcmUgaHVtYW5zIGhhdmU/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJCbGFja1wiLCBcIkJyb3duXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkJyb3duXCJcbiAgICB9LCB7XG4gICAgICBpZDogOSxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgdHViZSB0aGF0IGNhcnJpZXMgYmxvb2QgdG8gdGhlIGhlYXJ0P1wiLFxuICAgICAgY2hvaWNlczogW1wiUGFuY3JlYXNcIiwgXCJDYXBpbGxhcmllc1wiLCBcIkFydGVyaWVzXCIsIFwiVmVpbnNcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiVmVpblwiXG4gICAgfSwge1xuICAgICAgaWQ6IDEwLFxuICAgICAgcTogXCJIb3cgbWFueSBtb29ucyBkb2VzIHBsYW5ldCBNYXJzIGhhdmU/XCIsXG4gICAgICBjaG9pY2VzOiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlR3byDigJMgdGhleSBhcmUgY2FsbGVkIFBob2JvcyBhbmQgRGVpbW9zXCJcbiAgICB9LCB7XG4gICAgICBpZDogMTEsXG4gICAgICBxOiBcIldoaWNoIHBsYW5ldCBpcyBjbG9zZXN0IHRvIHRoZSBzdW4/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJVcmFudXNcIiwgXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk1lcmN1cnlcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAxMixcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkp1cGl0ZXJcIiwgXCJNYXJzXCIsIFwiRWFydGhcIiwgXCJOZXB0dW5lXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkp1cGl0ZXJcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAxMyxcbiAgICAgIHE6IFwiSG93IG1hbnkgZGF5cyBkb2VzIHRoZSBNb29uIHRha2UgdG8gb3JiaXQgdGhlIEVhcnRoP1wiLFxuICAgICAgY2hvaWNlczogW1wiMThcIiwgXCIyN1wiLCBcIjI1XCIsIFwiMzBcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiMjcgZGF5cyAoVG8gYmUgZXhhY3QgaXQgdGFrZXMgMjcgZGF5cywgNyBob3VycywgNDMgbWludXRlcywgMTEuNiBzZWNvbmRzKVwiXG4gICAgfSwge1xuICAgICAgaWQ6IDE0LFxuICAgICAgcTogXCJOZXB0dW5lIGhhcyBlaWdodCBtb29ucywgd2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgYmlnZ2VzdCBvbmU/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJEZXNwaW5hXCIsIFwiTGFyaXNzYVwiLCBcIlRyaXRvblwiLCBcIk5haWFkXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlRyaXRvblwiXG4gICAgfSwge1xuICAgICAgaWQ6IDE1LFxuICAgICAgcTogXCJXaGljaCBkd2FyZiBwbGFuZXQgc2hhcmVzIHRoZSBzYW1lIG5hbWUgYXMgYSBmYW1vdXMgRGlzbmV5IGRvZz9cIixcbiAgICAgIGNob2ljZXM6IFtcIk1hcnNcIiwgXCJKdXBpdGVyXCIsIFwiVmVudXNcIiwgXCJQbHV0b1wiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJQbHV0b1wiXG4gICAgfSwge1xuICAgICAgaWQ6IDE2LFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBtYW4gdG8gc2V0IGZvb3Qgb24gdGhlIG1vb24/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOZWlsIEFybXN0cm9uZ1wiLCBcIkNoYXJsZXMgRHVrZVwiLCBcIlBldGUgQ29ucmFkXCIsIFwiSm9obiBZb3VuZ1wiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOZWlsIEFybXN0cm9uZ1wiXG4gICAgfSwge1xuICAgICAgaWQ6IDE3LFxuICAgICAgcTogXCJIb3cgbWFueSByaW5ncyBkb2VzIFNhdHVybiBoYXZlIGFyb3VuZCBpdD9cIixcbiAgICAgIGNob2ljZXM6IFtcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiU2V2ZW4gKDcpXCJcbiAgICB9LCB7XG4gICAgICBpZDogMTgsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNsb3Nlc3Qgc3RhciB0byB0aGUgRWFydGg/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJXb2xmIDM1OVwiLCBcIlN1blwiLCBcIlNpcml1c1wiLCBcIlJvc3MgMTU0XCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlRoZSBTdW5cIlxuICAgIH0sIHtcbiAgICAgIGlkOiAxOSxcbiAgICAgIHE6IFwiV2hpY2ggdHJlZSBwcm9kdWNlcyBhY29ybnM/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJCbGFjayBDaGVycnlcIiwgXCJIYXd0aG9yblwiLCBcIkJ1dHRlcm51dFwiLCBcIk9hayBUcmVlXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk9hayBUcmVlXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjAsXG4gICAgICBxOiBcIldoYXQgdHlwZSBvZiBmbG93ZXIgaXMgdXNlZCBieSBjaGlsZHJlbiB0byBtYWtlIGEgY2hhaW4/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJSb3Nlc1wiLCBcIlR1bGlwc1wiLCBcIkRhaXNpZXNcIiwgXCJMb3R1c1wiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJEYWlzaWVzXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjEsXG4gICAgICBxOiBcIldoaWNoIGZsb3dlciBoYXMgYmlnIGJyaWdodCB5ZWxsb3cgcGV0YWxzIGFuZCBncm93cyB2ZXJ5LCB2ZXJ5IHRhbGw/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJTdW5mbG93ZXJcIiwgXCJEYWlzaWVzXCIsIFwiQ29uZWZsb3dlclwiLCBcIlR1bGlwc1wiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJTdW5mbG93ZXJcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyMixcbiAgICAgIHE6IFwiV2hhdCAnQycgaXMgYSBwcmlja2x5IHBsYW50IHRoYXQgZ3Jvd3MgaW4gdGhlIGRlc2VydD9cIixcbiAgICAgIGNob2ljZXM6IFtcIkNhbGx1bmFcIiwgXCJDYWN0dXNcIiwgXCJDYWx0aGFcIiwgXCJDaXNzdXNcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQ2FjdHVzXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjMsXG4gICAgICBxOiBcIldoYXQgdHlwZSBvZiBnYXMgaXMgcHJvdmlkZWQgYnkgdHJlZXMgYW5kIGhlbHBzIHVzIHRvIGJyZWF0aGU/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJPeHlnZW5cIiwgXCJIeWRyb2dlblwiLCBcIk5pdHJvZ2VuXCIsIFwiU3VsZnVyXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk94eWdlblwiXG4gICAgfSwge1xuICAgICAgaWQ6IDI0LFxuICAgICAgcTogXCJXaGljaCB0eXBlIG9mIEphcGFuZXNlIHRyZWUgaXMgdmVyeSBzbWFsbCBhbmQgZ3Jvd24gaW4gYSBwb3Q/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJDaGVycnlcIiwgXCJLYW56YW5cIiwgXCJQcnVudXNcIiwgXCJCb25zYWlcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQm9uc2FpXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjUsXG4gICAgICBxOiBcIldoYXQgdHlwZSBvZiBzdWJzdGFuY2UgaXMgcHJvZHVjZWQgYnkgZmxvd2VycyBhbmQgc29tZXRpbWVzIGNhdXNlcyBoYXkgZmV2ZXI/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOaXRyb2dlblwiLCBcIlBvbGxlblwiLCBcIkh5ZHJvZ2VuXCIsIFwiU3VsZnVyXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlBvbGxlblwiXG4gICAgfSwge1xuICAgICAgaWQ6IDI2LFxuICAgICAgcTogXCJXaGF0IHR5cGUgb2YgcmVkIGZsb3dlciBkbyBwZW9wbGUgb2Z0ZW4gZ2l2ZSBvbmUgYW5vdGhlciBvbiBWYWxlbnRpbmUncyBEYXk/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJSZWQgUm9zZXNcIiwgXCJDYXJkaW5hbFwiLCBcIlBvcHB5XCIsIFwiUmVkIGNhcm5hdGlvblwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJSZWQgUm9zZXNcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyNyxcbiAgICAgIHE6IFwiQmVzaWRlcyBsaWdodCwgd2hhdCBkbyB0cmVlcyBhbmQgZmxvd2VycyByZXF1aXJlIHRvIGdyb3c/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJQb2xsZW5cIiwgXCJPeHlnZW5cIiwgXCJXYXRlclwiLCBcIlZpdGFtaW5lXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIldhdGVyXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjgsXG4gICAgICBxOiBcIldoYXQgdHlwZSBvZiBzeXN0ZW0gY2lyY3VsYXRlcyBibG9vZCBhcm91bmQgdGhlIGJvZHk/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJEaWdlc3RpdmVcIiwgXCJSZXNwaXJhdG9yeVwiLCBcIkNpcmN1bGFyaXR5XCIsIFwiTmVydm91c1wiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJDaXJjdWxhcml0eSBTeXN0ZW1cIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyOSxcbiAgICAgIHE6IFwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBub3QgYSB0eXBlIG9mIHRvb3RoP1wiLFxuICAgICAgY2hvaWNlczogW1wiSW5jaXNvclwiLCBcIlJldGluYVwiLCBcIk1vbGFyXCIsIFwiQ2FuaW5lXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlJldGluYVwiXG4gICAgfSwge1xuICAgICAgaWQ6IDMwLFxuICAgICAgcTogXCJXaGF0IHBhcnQgb2YgdGhlIGh1bWFuIHNrZWxldG9uIHByb3RlY3RzIHRoZSBicmFpbj9cIixcbiAgICAgIGNob2ljZXM6IFtcIlJpYiBjYWdlXCIsIFwiUGVsdmlzXCIsIFwiU2t1bGxcIiwgXCJFYXJsb2JlXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlNrdWxsXCJcbiAgICB9LCB7XG4gICAgICBpZDogMzEsXG4gICAgICBxOiBcIldoYXQgY29sb3VyIGlzIGEgUnVieSBnZW1zdG9uZT9cIixcbiAgICAgIGNob2ljZXM6IFtcIlJlZFwiLCBcIk9yYW5nZVwiLCBcIkN5YW5cIiwgXCJHcmVlblwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJSZWRcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzMixcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgY2hlbWljYWwgc3ltYm9sIGZvciBveHlnZW4/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJPeFwiLCBcIk9cIiwgXCJYXCIsIFwiT2NcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiT1wiXG4gICAgfSwge1xuICAgICAgaWQ6IDMzLFxuICAgICAgcTogXCJXaGljaCBodW1hbiBib2R5IHN5c3RlbSBicmVha3MgZG93biBmb29kP1wiLFxuICAgICAgY2hvaWNlczogW1wiQ2lyY3VsYXRvcnlcIiwgXCJOZXJ2b3VzXCIsIFwiUmVzcGlyYXRvcnlcIiwgXCJEaWdlc3RpdmVcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiRGlnZXN0aXZlIHN5c3RlbVwiXG4gICAgfSwge1xuICAgICAgaWQ6IDM0LFxuICAgICAgcTogXCJXaG8gY3JlYXRlZCB0aGUgZmFtb3VzIGVxdWF0aW9uOiBFID0gbWMyP1wiLFxuICAgICAgY2hvaWNlczogW1wiVGhvbWFzIEVkaXNvblwiLCBcIk1hcmllIEN1cmllXCIsIFwiU3RlcGhlbiBIYXdraW5nXCIsIFwiQWxiZXJ0IEVpbnN0ZWluXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkFsYmVydCBFaW5zdGVpblwiXG4gICAgfSwge1xuICAgICAgaWQ6IDM1LFxuICAgICAgcTogXCJXaGljaCBwbGFuZXQgaXMgdGhlIHNtYWxsZXN0P1wiLFxuICAgICAgY2hvaWNlczogW1wiTmVwdHVuZVwiLCBcIkp1cGl0ZXJcIiwgXCJNYXJzXCIsIFwiTWVyY3VyeVwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJNZXJjdXJ5XCJcbiAgICB9LCB7XG4gICAgICBpZDogMzYsXG4gICAgICBxOiBcIldoaWNoIHBsYW5ldCBpcyBmdXJ0aGVzdCBmcm9tIHRoZSBTdW4/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOZXB0dW5lXCIsIFwiTWFyc1wiLCBcIk1lcmN1cnlcIiwgXCJKdXBpdGVyXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5lcHR1bmVcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzNyxcbiAgICAgIHE6IFwiSG93IG1hbnkgaW5uZXIgcGxhbmV0cyBhcmUgdGhlcmUgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIGNob2ljZXM6IFtcIjNcIiwgXCIyXCIsIFwiNFwiLCBcIjVcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiRm91cjogTWVyY3VyeSwgVmVudXMsIEVhcnRoLCBNYXJzXCJcbiAgICB9LCB7XG4gICAgICBpZDogMzgsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgU29kaXVtP1wiLFxuICAgICAgY2hvaWNlczogW1wiTmFcIiwgXCJTXCIsIFwiU29cIiwgXCJOXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5hXCJcbiAgICB9LCB7XG4gICAgICBpZDogMzksXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgR29sZD9cIixcbiAgICAgIGNob2ljZXM6IFtcIkdvXCIsIFwiQXVcIiwgXCJHXCIsIFwiQVwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJBdVwiXG4gICAgfVxuICBdO1xuXG4gIGdlbmVyYWxRdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj4gPSBbXG5cbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHE6IFwiV2hlcmUgZG9lcyB0aGUgcHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EgbGl2ZT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkhvdGVsXCIsIFwiQ2FzdGxlXCIsIFwiUGFsYWNlXCIsIFwiV2hpdGUgSG91c2VcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiV2hpdGUgSG91c2VcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBicmFzcyBpbnN0cnVtZW50IGluIGFuIG9yY2hlc3RyYT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkZsdXRlc1wiLCBcIkJhc3NvbnNcIiwgXCJUdWJhXCIsIFwiVHJ1bXBldFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJUdWJhXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgZG9lcyBwYXJtZXNhbiBjaGVlc2UgY29tZSBmcm9tP1wiLFxuICAgICAgY2hvaWNlczogW1wiSXRhbHlcIiwgXCJHZXJtYW55XCIsIFwiRnJhbmNlXCIsIFwiUnVzc2lhXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkl0YWx5XCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGhpZ2hlc3QgTW91bnRhaW4gaW4gQWZyaWNhP1wiLFxuICAgICAgY2hvaWNlczogW1wiS2FyaXNpbWJpXCIsIFwiTW91bnQgS2lsaW1hbmphcm9cIiwgXCJNaWtlbm9cIiwgXCJCd2FoaXRcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTW91bnQgS2lsaW1hbmphcm9cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBxOiBcIldoYXQgdHlwZSBvZiB0cmVlIGRvIGRhdGVzIGdyb3cgb24/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJCYXNzd29vZFwiLCBcIkhhd3Rob3JuXCIsIFwiQnV0dGVybnV0XCIsIFwiUGFsbSB0cmVlc1wiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJQYWxtIHRyZWVzXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBxOiBcIldoaWNoIGlzIG5vdCBhIGNvbG9yIG9mIE9seW1waWMgcmluZ3M/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJSZWRcIiwgXCJCbHVlXCIsIFwiT3JhbmdlXCIsIFwiWWVsbG93XCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk9yYW5nZVwiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgcTogXCJIb3cgbWFueSBob2xlcyBhcmUgdGhlcmUgaW4gYSBzdGFuZGFyZCB0ZW4gcGluIGJvd2xpbmcgYmFsbD9cIixcbiAgICAgIGNob2ljZXM6IFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjFcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiM1wiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA3LFxuICAgICAgcTogXCJXaGF0IGxldHRlciBpcyBsb2NhdGVkIGJldHdlZW4gbGV0dGVyIEUgYW5kIFQgb24gYSBjb21wdXRlciBrZXlib2FyZD9cIixcbiAgICAgIGNob2ljZXM6IFtcIlkgXCIsIFwiWlwiLCBcIldcIiwgXCJSXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlJcIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIHE6IFwiSG93IG1hbnkgY2FyZHMgYXJlIHRoZXJlIGluIGEgY29tcGxldGUgcGFjayBvZiBjYXJkcz9cIixcbiAgICAgIGNob2ljZXM6IFtcIjU0XCIsIFwiNTBcIiwgXCI0OFwiLCBcIjUyXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIjUyXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDksXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgaXNsYW5kIGluIHRoZSBNZWRpdGVycmFuZWFuIHNlYT9cIixcbiAgICAgIGNob2ljZXM6IFtcIlNpY2lseVwiLCBcIkliaXphXCIsIFwiTWVub3JjYVwiLCBcIlNhbnRvcmluaVwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJTaWNpbHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEwLFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBtb3N0IHBvcHVsYXIgc3BvcnQgdGhyb3VnaG91dCB0aGUgd29ybGQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJCYXNrZXRCYWxsXCIsIFwiRm9vdGJhbGxcIiwgXCJUZW5uaXNcIiwgXCJIYW5kQmFsbFwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJGb290YmFsbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTEsXG4gICAgICBxOiBcIldoaWNoIGZhbW91cyBnaXJsIGJhbmQgZGlkIENoZXJ5bCBDb2xlIGJlbG9uZyB0bz9cIixcbiAgICAgIGNob2ljZXM6IFtcIlRMQ1wiLCBcIkVuIFZvZ3VlXCIsIFwiU3BpY2UgR2lybHNcIiwgXCJHaXJscyBBbG91ZFwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJHaXJscyBBbG91ZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTIsXG4gICAgICBxOiBcIkhvdyBtYW55IGhvdXJzIGFyZSB0aGVyZSBpbiBzZXZlbiBkYXlzP1wiLFxuICAgICAgY2hvaWNlczogW1wiMTY4XCIsIFwiMTcyXCIsIFwiMTUwXCIsIFwiMTYwXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIjE2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTMsXG4gICAgICBxOiBcIldoYXQgY29sb3VyIGRvIHlvdSBnZXQgaWYgeW91IG1peCBibHVlIGFuZCB5ZWxsb3cgcGFpbnQgdG9nZXRoZXI/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJvcmFuZ2VcIiwgXCJSZWRcIiwgXCJHcmVlblwiLCBcIlB1cnBsZVwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJHcmVlblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTQsXG4gICAgICBxOiBcIkluIHdoaWNoIEFtZXJpY2FuIGNpdHkgaXMgdGhlIFN0YXR1ZSBvZiBMaWJlcnR5IGlzIGxvY2F0ZWQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOZXcgWW9ya1wiLCBcIlNhbiBEaWVnb1wiLCBcIkxvcyBBbmdlbGVzXCIsIFwiTGFzIFZlZ2FzXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5ldyBZb3JrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNSxcbiAgICAgIHE6IFwiR2xvYmFsIHdhcm1pbmcgaXMgY2F1c2VkIGJ5IHRvbyBtdWNoIG9mIHdoaWNoIHR5cGUgb2YgZ2FzP1wiLFxuICAgICAgY2hvaWNlczogW1wiaHlkcm9nZW5cIiwgXCJDYXJib24gZGlveGlkZVwiLCBcIk5pdHJvZ2VuXCIsIFwiSGVsaXVtXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkNhcmJvbiBkaW94aWRlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNixcbiAgICAgIHE6IFwiV2hhdCB0eXBlIG9mIG1ldGFsIG1ha2VzIHRoZSBzdHJvbmdlc3QgbWFnbmV0cz9cIixcbiAgICAgIGNob2ljZXM6IFtcIlN0ZWVsXCIsIFwiU2lsdmVyXCIsIFwiR29sZFwiLCBcIklyb25cIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiSXJvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTcsXG4gICAgICBxOiBcIldoYXQgeWVhciBkaWQgdGhlIFNlY29uZCBXb3JsZCBXYXIgc3RhcnQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCIxOTQxXCIsIFwiMTkzM1wiLCBcIjE5MzlcIiwgXCIxOTQ0XCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIjE5MzlcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAxOCxcbiAgICAgIHE6IFwiSG93IG1hbnkgbGVhdmVzIGRvZXMgYSBzaGFtcm9jayBoYXZlP1wiLFxuICAgICAgY2hvaWNlczogW1wiMlwiLCBcIjFcIiwgXCIzXCIsIFwiNFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCIzXCJcbiAgICB9LCB7XG4gICAgICBpZDogMTksXG4gICAgICBxOiBcIldoYXQgdHlwZSBvZiBnYXMgZG8gcGxhbnRzIGFic29yYiBmcm9tIHRoZSBhdG1vc3BoZXJlP1wiLFxuICAgICAgY2hvaWNlczogW1wiY2FyYm9uIGRpb3hpZGVcIiwgXCJGcmVvblwiLCBcIkhlbGl1bVwiLCBcIkFpclwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJjYXJib24gZGlveGlkZVwiXG4gICAgfSwge1xuICAgICAgaWQ6IDIwLFxuICAgICAgcTogXCJIb3cgbWFueSBzdHJpbmdzIGRvZXMgYSB2aW9saW4gaGF2ZT9cIixcbiAgICAgIGNob2ljZXM6IFtcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiNFwiXG4gICAgfSwge1xuICAgICAgaWQ6IDIxLFxuICAgICAgcTogXCJIb3cgbWFueSB5ZWFycyBhcmUgdGhlcmUgaW4gYSBjZW50dXJ5P1wiLFxuICAgICAgY2hvaWNlczogW1wiMTBcIiwgXCI1MFwiLCBcIjEwMDBcIiwgXCIxMDBcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiMTAwXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjIsXG4gICAgICBxOiBcIldoaWNoIGNvbnRpbmVudCBkb2VzIEluZGlhIGJlbG9uZyB0bz9cIixcbiAgICAgIGNob2ljZXM6IFtcIkFmcmljYVwiLCBcIkFzaWFcIiwgXCJFdXJvcGVcIiwgXCJBbWVyaWNhXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkFzaWFcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyMyxcbiAgICAgIHE6IFwiSG93IG1hbnkgemVyb3MgYXJlIHRoZXJlIGluIG9uZSBodW5kcmVkIHRob3VzYW5kP1wiLFxuICAgICAgY2hvaWNlczogW1wiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCI1XCJcbiAgICB9LCB7XG4gICAgICBpZDogMjQsXG4gICAgICBxOiBcIkluIHRoZSBmYWlyeXRhbGUgb2YgQ2luZGVyZWxsYSwgd2hhdCBkb2VzIENpbmRlcmVsbGEgbGVhdmUgYmVoaW5kIGF0IHRoZSBiYWxsP1wiLFxuICAgICAgY2hvaWNlczogW1wiR2xhc3Mgc2xpcHBlclwiLCBcIlNhbmRhbCBzbGlwcGVyXCIsIFwiQ2xvc2VkIGJhY2tcIiwgXCJTbGlwIG9uXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkdsYXNzIHNsaXBwZXJcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyNSxcbiAgICAgIHE6IFwiV2hpY2ggY29udGluZW50IGlzIHRoZSBTYWhhcmEgRGVzZXJ0IGxvY2F0ZWQgb24/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJBbWVyaWNhXCIsIFwiRXVyb3BlXCIsIFwiQWZyaWNhXCIsIFwiQXNpYVwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJBZnJpY2FcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyNixcbiAgICAgIHE6IFwiUGFycm90cywgcGVsaWNhbnMgYW5kIGN1Y2tvb3MgYXJlIGFsbCB0eXBlcyBvZiB3aGF0P1wiLFxuICAgICAgY2hvaWNlczogW1wiQmlyZHNcIiwgXCJEb2dzXCIsIFwiQ2F0c1wiLCBcIlNwaWRlcnNcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQmlyZHNcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyNyxcbiAgICAgIHE6IFwiSG93IG11Y2ggY2hhbmdlIHdvdWxkIHlvdSBoYXZlIGZyb20gwqMyIGlmIHlvdSBib3VnaHQgdHdvIHN0YW1wcyBhdCA2MHAgZWFjaD9cIixcbiAgICAgIGNob2ljZXM6IFtcIjgwcFwiLCBcIjcwcFwiLCBcIjQwcFwiLCBcIjYwcFwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCI4MHBcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAyOCxcbiAgICAgIHE6IFwiV2hpY2ggRGlzbmV5IGNoYXJhY3RlciBoYXMgYSBub3NlIHRoYXQgZ3Jvd3MgbG9uZ2VyIGV2ZXJ5IHRpbWUgaGUgdGVsbHMgYSBsaWU/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJBcmllbFwiLCBcIkdvb2Z5XCIsIFwiUGx1dG9cIiwgXCJQaW5vY2NoaW9cIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiUGlub2NjaGlvXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjksXG4gICAgICBxOiBcIkhvdyBtYW55IGhvdXJzIGFyZSB0aGVyZSBpbiB0aHJlZSBkYXlzP1wiLFxuICAgICAgY2hvaWNlczogW1wiNjRcIiwgXCI2OFwiLCBcIjcyXCIsIFwiNzRcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiNzJcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzMCxcbiAgICAgIHE6IFwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBjcmVhdHVyZXMgaXMgbm90IGEgc3BlY2llcyBvZiByZXB0aWxlP1wiLFxuICAgICAgY2hvaWNlczogW1widHVydGxlXCIsIFwic3BpZGVyXCIsIFwibGl6YXJkXCIsIFwiRGlub3NhdXJcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiU3BpZGVyXCJcbiAgICB9LCB7XG4gICAgICBpZDogMzEsXG4gICAgICBxOiBcIldoYXQgY291bnRyeSBpcyB0aGUgUml2ZXIgVGhhbWVzIGluP1wiLFxuICAgICAgY2hvaWNlczogW1wiRW5nbGFuZFwiLCBcIlNwYWluXCIsIFwiUm9tYW5pYVwiLCBcIkl0YWx5XCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkVuZ2xhbmRcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzMixcbiAgICAgIHE6IFwiV2hhdCBjb2xvciBtdXN0IGJlIGFkZGVkIHRvIHllbGxvdyB0byBtYWtlIG9yYW5nZT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkJsdWVcIiwgXCJZZWxsb3dcIiwgXCJHcmVlblwiLCBcIlJlZFwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJSZWRcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzMyxcbiAgICAgIHE6IFwiSG93IG1hbnkgZmluZ2VyIGhvbGVzIGFyZSB0aGVyZSBvbiB0aGUgZnJvbnQgb2YgYSByZWNvcmRlcj9cIixcbiAgICAgIGNob2ljZXM6IFtcIjZcIiwgXCI3XCIsIFwiNVwiLCBcIjhcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiN1wiXG4gICAgfSwge1xuICAgICAgaWQ6IDM0LFxuICAgICAgcTogXCJIb3cgbWFueSBtYWpvciBwbGFuZXRzIGFyZSB0aGVyZSBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgY2hvaWNlczogW1wiN1wiLCBcIjlcIiwgXCI4XCIsIFwiMTBcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiRWlnaHQgKE1lcmN1cnksIFZlbnVzLCBFYXJ0aCwgTWFycywgSnVwaXRlciwgU2F0dXJuLCBVcmFudXMsIE5lcHR1bmUpXCJcbiAgICB9LCB7XG4gICAgICBpZDogMzUsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIDE1dGggbGV0dGVyIG9mIHRoZSBhbHBoYWJldD9cIixcbiAgICAgIGNob2ljZXM6IFtcIlBcIiwgXCJJXCIsIFwiT1wiLCBcIlVcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiT1wiXG4gICAgfSwge1xuICAgICAgaWQ6IDM2LFxuICAgICAgcTogXCJXaGljaCBjb250aW5lbnQgaGFzIHRoZSBsb3dlc3QgcG9wdWxhdGlvbiBvZiBwZW9wbGU/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJBbnRhcmN0aWNhXCIsIFwiQWZyaWNhXCIsIFwiRXVyb3BlXCIsIFwiQXVzdHJhbGlhXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkFudGFyY3RpY2FcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzNyxcbiAgICAgIHE6IFwiSG93IG1hbnkgbW9udGhzIG9mIHRoZSB5ZWFyIGJlZ2luIHdpdGggdGhlIGxldHRlciBBP1wiLFxuICAgICAgY2hvaWNlczogW1wiMVwiLCBcIjNcIiwgXCIyXCIsIFwiNFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJUd286IEFwcmlsIGFuZCBBdWd1c3RcIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzOCxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCByYWluZm9yZXN0IGluIHRoZSB3b3JsZD9cIixcbiAgICAgIGNob2ljZXM6IFtcIkNvbmdvXCIsIFwiQW1hem9uXCIsIFwiRGFpbnRyZWVcIiwgXCJNb250ZXZlcmFkZVwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJBbWF6b25cIlxuICAgIH0sIHtcbiAgICAgIGlkOiAzOSxcbiAgICAgIHE6IFwiV2hpY2ggcGxhbmV0IGlzIGtub3duIGFzIHRoZSBSZWQgUGxhbmV0P1wiLFxuICAgICAgY2hvaWNlczogW1wiTWFyc1wiLCBcIkVhcnRoXCIsIFwiVmVudXNcIiwgXCJQbHV0b25cIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTWFyc1wiXG4gICAgfVxuXG4gIF07XG5cbiAgZ2VvUXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+ID0gW1xuXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgUGFyaXMgdGhlIGNhcGl0YWwgb2Y/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJHcmVlY2VcIiwgXCJTcGFpblwiLCBcIkl0YWx5XCIsIFwiRnJhbmNlXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInBhcmlzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEF1c3RyYWxpYT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkJhdGh1cnN0XCIsIFwiU3lkbmV5XCIsIFwiQ2FuYmVycmFcIiwgXCJEdWJib1wiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJDYW5iZXJyYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBHZXJtYW55P1wiLFxuICAgICAgY2hvaWNlczogW1wiSmVuYVwiLCBcIkZyYW5rZnVydFwiLCBcIk5pY2VcIiwgXCJCZXJsaW5cIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQmVybGluXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgcTogXCJXaGljaCBjb3VudHJ5IGlzIFdhc2hpbmd0b24gREMgdGhlIGNhcGl0YWwgb2Y/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJSb21hbmlhXCIsIFwiQW1lcmljYVwiLCBcIkl0YWx5XCIsIFwiTWV4aWNvXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkFtZXJpY2FcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgTWFkcmlkIHRoZSBjYXBpdGFsIG9mP1wiLFxuICAgICAgY2hvaWNlczogW1wiU3BhaW5cIiwgXCJQb2xhbmRcIiwgXCJJdGFseVwiLCBcIkF1c3RyaWFcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiU3BhaW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgQ3ViYT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkhvbGd1w61uXCIsIFwiSGF2YW5hXCIsIFwiTWF0YW56YXNcIiwgXCJCYXlhbW9cIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiSGF2YW5hXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIE5ldyBaZWFsYW5kP1wiLFxuICAgICAgY2hvaWNlczogW1wiTmVsc29uXCIsIFwiRHVuZWRpblwiLCBcIlRhdXJhbmdhXCIsIFwiV2VsbGluZ3RvblwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJXZWxsaW5ndG9uXCJcbiAgICB9XG4gICAgLFxuICAgIHtcbiAgICAgIGlkOiA3LFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIFRoYWlsYW5kP1wiLFxuICAgICAgY2hvaWNlczogW1wiUGF0dGF5YVwiLCBcIktyYWJpXCIsIFwiQmFuZ2tva1wiLCBcIkNob25idXJpXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkJhbmdrb2tcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDgsXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgQ2Fpcm8gdGhlIGNhcGl0YWwgb2Y/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJBbGdlcmlhXCIsIFwiTW9yb2Njb1wiLCBcIkVneXB0XCIsIFwiVHVuaXNhXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkVneXB0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA5LFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEVuZ2xhbmQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJMaXZlcnBvb2xcIiwgXCJMb25kb25cIiwgXCJNYW5jaGVzdGVyXCIsIFwiQnJpc3RvbFwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMb25kb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEwLFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBuYXRpb25hbCBjYXBpdGFsIGNpdHkgb2YgQ2FuYWRhP1wiLFxuICAgICAgY2hvaWNlczogW1wiQ2FsZ2FyeVwiLCBcIk1vbnRyZWFsXCIsIFwiQmFycmllXCIsIFwiT3R0YXdhXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk90dGF3YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTEsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgTWV4aWNvP1wiLFxuICAgICAgY2hvaWNlczogW1wiTWV4aWNvIENpdHlcIiwgXCJQdWVibGFcIiwgXCJDYW5jw7puXCIsIFwiTW9udGVycmV5XCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk1leGljbyBDaXR5XCJcbiAgICB9XG4gICAgLFxuICAgIHtcbiAgICAgIGlkOiAxMixcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBUb2t5byB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIkluZGlhXCIsIFwiQ2hpbmFcIiwgXCJKYXBhblwiLCBcIlRoYWlsYW5kXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkphcGFuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMyxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBMaXNib24gdGhlIGNhcGl0YWwgb2Y/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJQb3J0dWdhbFwiLCBcIkJyYXppbFwiLCBcIkluZGlhXCIsIFwiQW5nb2xhXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlBvcnR1Z2FsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNCxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBNb3JvY2NvP1wiLFxuICAgICAgY2hvaWNlczogW1wiS2VuaXRyYVwiLCBcIlJhYmF0XCIsIFwiTWFycmFrZXNoXCIsIFwiQ2FzYWJsYW5jYVwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJSYWJhdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTUsXG4gICAgICBxOiBcIldoYXQgcGxhbmV0IGlzIG5lYXJlc3QgdG8gdGhlIEVhcnRoP1wiLFxuICAgICAgY2hvaWNlczogW1wiVmVudXNcIiwgXCJVcmFudXNcIiwgXCJOZXB0dW5lXCIsIFwiTWVyY3VyeVwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJWZW51c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTYsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGFjdGl2ZSB2b2xjYW5vIGluIFNpY2lseT9cIixcbiAgICAgIGNob2ljZXM6IFtcIklzY2hpYVwiLCBcIk1vdW50RXRuYVwiLCBcIkZpbGljdWRpXCIsIFwiUGFuYXJlYVwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJNb3VudCBFdG5hXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNyxcbiAgICAgIHE6IFwiSW4gd2hpY2ggY291bnRyeSB3b3VsZCB5b3UgZmluZCB0aGUgcHlyYW1pZHM/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJNb3JvY2NvXCIsIFwiSXRhbHlcIiwgXCJFZ3lwdFwiLCBcIkluZGlhXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkVneXB0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxOCxcbiAgICAgIHE6IFwiSW4gd2hpY2ggU3RhdGUgb2YgQW1lcmljYSB3b3VsZCB5b3UgZmluZCBMYXMgVmVnYXM/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOZXZhZGFcIiwgXCJDYWxpZm9ybmlhXCIsIFwiVGV4YXNcIiwgXCJHZW9yZ2lhXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5ldmFkYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTksXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgdGhlIHNlY29uZCBiaWdnZXN0IGluIHRoZSB3b3JsZD9cIixcbiAgICAgIGNob2ljZXM6IFtcIkFtZXJpY2FcIiwgXCJDYW5hZGFcIiwgXCJDaGluYVwiLCBcIkluZGlhXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkNhbmFkYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjAsXG4gICAgICBxOiBcIldoZXJlIGlzIHRoZSBiaWdnZXN0IHJhaWx3YXkgc3RhdGlvbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJJbmRpYVwiLCBcIlJ1c3NpYVwiLCBcIkdlcm1hbnlcIiwgXCJOZXcgWW9ya1wiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOZXcgWW9yayBDaXR5IChHcmFuZCBDZW50cmFsIFRlcm1pbmFsKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjEsXG4gICAgICBxOiBcIldoaWNoIGNvbnRpbmVudCBpcyBNb3VudCBLaWxpbWFuamFybyBsb2NhdGVkIG9uP1wiLFxuICAgICAgY2hvaWNlczogW1wiQW1lcmljYVwiLCBcIkFmcmljYVwiLCBcIkFzaWFcIiwgXCJFdXJvcGVcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQWZyaWNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyMixcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgcml2ZXIgdGhhdCBydW5zIHRocm91Z2ggdGhlIEdyYW5kIENhbnlvbj9cIixcbiAgICAgIGNob2ljZXM6IFtcIkNvbG9yYWRvXCIsIFwiTmlsZVwiLCBcIk1la29uZ1wiLCBcIkxvaXJlXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkNvbG9yYWRvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyMyxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIFNjYW5kaW5hdmlhP1wiLFxuICAgICAgY2hvaWNlczogW1wiRGVubWFya1wiLCBcIk5vcndheVwiLCBcIkljZWxhbmRcIiwgXCJTd2VkZW5cIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiU3dlZGVuXCJcbiAgICB9LCB7XG4gICAgICBpZDogMjQsXG4gICAgICBxOiBcIldoaWNoIGlzIHRoZSBsYXJnZXN0IE9jZW4gb24gZWFydGg/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJQYWNpZmljXCIsIFwiQXRsYW50aWNcIiwgXCJBcmN0aWNcIiwgXCJTb3V0aGVyblwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJQYWNpZmljXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyNSxcbiAgICAgIHE6IFwiSW4gd2hpY2ggY29udGluZW50IGlzIEdyZWVjZSBsb2NhdGVkIG9uP1wiLFxuICAgICAgY2hvaWNlczogW1wiQW1lcmljYVwiLCBcIkFzaWFcIiwgXCJFdXJvcGVcIiwgXCJBZnJpY2FcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiRXVyb3BlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyNixcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBhdHRhY2hlZCB0byB0aGUgVW5pdGVkIFN0YXRlcz9cIixcbiAgICAgIGNob2ljZXM6IFtcIk1leGljb1wiLCBcIkdyZWVubGFuZFwiLCBcIkNvbG9tYmlhXCIsIFwiQXJnZW50aW5hXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk1leGljb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjcsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGhvdHRlc3QgY29udGluZW50IG9uIEVhcnRoP1wiLFxuICAgICAgY2hvaWNlczogW1wiQW1lcmljYVwiLCBcIkFmcmljYVwiLCBcIkFzaWFcIiwgXCJFdXJvcGVcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQWZyaWNhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyOCxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBDYW5iZXJyYSB0aGUgY2FwaXRhbCBjaXR5IG9mP1wiLFxuICAgICAgY2hvaWNlczogW1wiQXVzdHJhbGlhXCIsIFwiRmlqaVwiLCBcIkNoaW5hXCIsIFwiQXJnZW50aW5hXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkF1c3RyYWxpYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjksXG4gICAgICBxOiBcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgd29yZHMgZGVzY3JpYmVzIGEgc2V2ZXJlIHNub3dzdG9ybSB3aXRoIHN0cm9uZyB3aW5kczogXCIsXG4gICAgICBjaG9pY2VzOiBbXCJBdmFsYW5jaGVcIiwgXCJTbm93IEZsdXJyeVwiLCBcIlNub3cgU2hvd2Vyc1wiLCBcIkJsaXp6YXJkXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkJsaXp6YXJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzMCxcbiAgICAgIHE6IFwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBub3QgYSB0eXBlIG9mIGZvc3NpbCBmdWVsP1wiLFxuICAgICAgY2hvaWNlczogW1wiUGV0cm9sXCIsIFwiQ29hbFwiLCBcIlNhbmRcIiwgXCJPaWxcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiU2FuZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMzEsXG4gICAgICBxOiBcIldoZXJlIGRvIHN0YWxhY3RpdGVzIGFuZCBzdGFsYWdtaXRlcyBmb3JtP1wiLFxuICAgICAgY2hvaWNlczogW1wiU2FuZFwiLCBcIlNreVwiLCBcIk9jZWFuXCIsIFwiQ2F2ZXNcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQ2F2ZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMyLFxuICAgICAgcTogXCJDYW4geW91IHVuc2NyYW1ibGUgdGhlIGZvbGxvd2luZyB3b3JkIHRvIHJldmVhbCBhIGh1Z2Ugc3Rvcm0gd2l0aCBoaWdoIHdpbmRzOiBSQ0lSTkVBSFVcIixcbiAgICAgIGNob2ljZXM6IFtcIkh1cnJpY2FuZVwiLCBcIldpbmRzdG9ybVwiLCBcIlRlbXBlc3RcIiwgXCJXaGlybHdpbmRcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiSHVycmljYW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzMyxcbiAgICAgIHE6IFwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBub3QgYSBjb3VudHJ5P1wiLFxuICAgICAgY2hvaWNlczogW1wiRmlubGFuZFwiLCBcIk1vcm9jY29cIiwgXCJGcmFuY2VcIiwgXCJDYWlyb1wiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJDYWlyb1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMzQsXG4gICAgICBxOiBcIldoYXQgYXJlIHRoZSBHYW5nZXMsIE1pc3Npc3NpcHBpLCBUaGFtZXMsIFNlaW5lIGFuZCBWb2xnYSBhcmUgYWxsIHR5cGVzIG9mP1wiLFxuICAgICAgY2hvaWNlczogW1wibW91bnRhaW5zXCIsIFwiQ291bnRyaWVzXCIsIFwiUml2ZXJzXCIsIFwiT2NlYW5zXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlJpdmVyc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMzUsXG4gICAgICBxOiBcIldoaWNoIG9jZWFuIGlzIHNpdHVhdGVkIHRvIHRoZSB3ZXN0IG9mIE5vcnRoIGFuZCBTb3V0aCBBbWVyaWNhP1wiLFxuICAgICAgY2hvaWNlczogW1wiUGFjaWZpY1wiLCBcIkF0bGFudGljXCIsIFwiQXJjdGljXCIsIFwiSW5kaWFuXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlBhY2lmaWNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDM2LFxuICAgICAgcTogXCJUaGUgUml2ZXIgU2VpbmUgZmxvd3MgdGhyb3VnaCB3aGljaCBFdXJvcGVhbiBjYXBpdGFsIGNpdHk/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJNYWRyaWRcIiwgXCJMb25kb25cIiwgXCJQYXJpc1wiLCBcIkJlcmxpblwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJQYXJpc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMzcsXG4gICAgICBxOiBcIldoaWNoIGxheWVyIG9mIHBsYW5ldCBFYXJ0aCBpcyBtYWRlIHVwIG9mIHRlY3RvbmljIHBsYXRlcz9cIixcbiAgICAgIGNob2ljZXM6IFtcIklubmVyIENvcmVcIiwgXCJPdXRlciBDb3JlXCIsIFwiTWFudGxlXCIsIFwiQ3J1c3RcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQ3J1c3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDM4LFxuICAgICAgcTogXCJDb252ZWN0aW9uLCBGcm9udGFsIGFuZCBSZWxpZWYgYXJlIHRoZSB0aHJlZSBtYWluIHR5cGVzIG9mXCIsXG4gICAgICBjaG9pY2VzOiBbXCJDbG91ZHNcIiwgXCJSYWluZmFsbFwiLCBcIldpbmRzXCIsIFwiVHJlZXNcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiUmFpbmZhbGxcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDM5LFxuICAgICAgcTogXCJXaGF0IHR5cGUgb2YgYmlvbWUgaXMgdGhlIFNhaGFyYT9cIixcbiAgICAgIGNob2ljZXM6IFtcIkRlc2VydFwiLCBcIlJhaW5mb3Jlc3RcIiwgXCJUdW5kcmFcIiwgXCJPY2VhblwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJEZXNlcnRcIlxuICAgIH1cbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgcTogc3RyaW5nO1xuICBjaG9pY2VzOiBBcnJheTxzdHJpbmc+O1xuICBhOiBudW1iZXI7XG4gIHJhdGU6IG51bWJlcjtcbiAgaGludDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbnN3ZXIge1xuICBpZDogbnVtYmVyO1xuICBwbGF5ZXJBbnN3ZXI6IG51bWJlcjtcbiAgcXVlc3Rpb246IElRdWVzdGlvbjtcbn1cbiJdfQ==