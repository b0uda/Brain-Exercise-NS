"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.playerAnswers = [];
        this.mathQuestions = [
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
            },
            {
                id: 6,
                q: "R M ? F D ?",
                choices: ["C B", "B H", "I C", "J H"],
                a: 2,
                rate: 0,
                hint: "Letter are in reverse order"
            },
            {
                id: 7,
                q: "Z L X J V H T F ? ?",
                choices: ["R D", "S E", "R E", "Q D"],
                a: 0,
                rate: 0,
                hint: "two series Z X V T ?\nand L J H F ?"
            },
            {
                id: 8,
                q: "Z S W O T K Q G ? ?",
                choices: ["OC", "NC", "ND", "OD"],
                a: 1,
                rate: 0,
                hint: "two series Z W T V Q ? \nand S O K G ?"
            },
            {
                id: 9,
                q: "W V T S Q P N M ? ?",
                choices: ["I J", "J K", "J I", "K J"],
                a: 3,
                rate: 0,
                hint: "letters moved one and\ntwo steps backward"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQTBSRTtRQXhSQSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFFbEMsa0JBQWEsR0FBcUI7WUFFaEM7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsdUJBQXVCO2FBQzlCO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsd0NBQXdDO2FBQy9DO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGVBQWU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHFDQUFxQzthQUM1QztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGdG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RUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixDQUFDLEVBQUUsbURBQW1EO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7Z0JBQ2hELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixDQUFDLEVBQUUsb0RBQW9EO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7Z0JBQ25ELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSx3Q0FBd0M7YUFDL0M7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixDQUFDLEVBQUUsa0RBQWtEO2dCQUNyRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7Z0JBQ2hELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRixDQUFDO0lBRWMsQ0FBQztJQTFSTixnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0E0UjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVSRCxJQTRSQztBQTVSWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uc1NlcnZpY2Uge1xuXG4gIHBsYXllckFuc3dlcnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuICBtYXRoUXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+ID0gW1xuXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBxOiBcIkEgQiBDID8gRVwiLFxuICAgICAgY2hvaWNlczogW1wiUlwiLCBcIlBcIiwgXCJEXCIsIFwiWFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOb3JtYWwgQWxwaGFiZXQgT3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHE6IFwiVSBPIEkgPyBBXCIsXG4gICAgICBjaG9pY2VzOiBbXCJRXCIsIFwiRVwiLCBcIkNcIiwgXCJKXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInZvd2xlcyBBLCBFLCBJLCBPLCBVXFxuaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcTogXCJZIFcgVSBTIFEgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJRIFNcIiwgXCJPIE1cIiwgXCJLIE1cIiwgXCJMIFRcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiYWx0ZXJuYXRlIGxldHRlcnNcXG5pbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBxOiBcIkEgQiBEIEcgP1wiLFxuICAgICAgY2hvaWNlczogW1wiUVwiLCBcIk1cIiwgXCJLXCIsIFwiTFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG9mIHRoZSBzZXJpZXMgYXJlXFxucmVzcGVjdGl2ZWx5bW92ZWQgb25lXFxudHdvIHRocmVlLC4uLiBzdGVwcyBmb3J3YXJkLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHE6IFwiWiBVIFEgPyBMXCIsXG4gICAgICBjaG9pY2VzOiBbXCJJXCIsIFwiTVwiLCBcIk9cIiwgXCJOXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgb2YgdGhlIHNlcmllcyBhcmVcXG5yZXNwZWN0aXZlbHltb3ZlZCBvbmVcXG50d28gdGhyZWUsLi4uIHN0ZXBzIGZvcndhcmQuLlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcTogXCJBIEMgRiBIID8gTVwiLFxuICAgICAgY2hvaWNlczogW1wiSVwiLCBcIkxcIiwgXCJLXCIsIFwiSlwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMZXR0ZXJzIG1vdmVkIHR3byBhbmRcXG50aHJlZSBzdGVwcyBmb3J3YXJkXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBxOiBcIlIgTSA/IEYgRCA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJDIEJcIiwgXCJCIEhcIiwgXCJJIENcIiwgXCJKIEhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTGV0dGVyIGFyZSBpbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBxOiBcIlogTCBYIEogViBIIFQgRiA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlIgRFwiLCBcIlMgRVwiLCBcIlIgRVwiLCBcIlEgRFwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ0d28gc2VyaWVzIFogWCBWIFQgP1xcbmFuZCBMIEogSCBGID9cIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIHE6IFwiWiBTIFcgTyBUIEsgUSBHID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiT0NcIiwgXCJOQ1wiLCBcIk5EXCIsIFwiT0RcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidHdvIHNlcmllcyBaIFcgVCBWIFEgPyBcXG5hbmQgUyBPIEsgRyA/XCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDksXG4gICAgICBxOiBcIlcgViBUIFMgUSBQIE4gTSA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIkkgSlwiLCBcIkogS1wiLCBcIkogSVwiLCBcIksgSlwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG1vdmVkIG9uZSBhbmRcXG50d28gc3RlcHMgYmFja3dhcmRcIlxuICAgIH1cblxuICBdO1xuXG4gIGdlb1F1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPiA9IFtcbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBQYXJpcyB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIkdyZWVjZVwiLCBcIlNwYWluXCIsIFwiSXRhbHlcIiwgXCJGcmFuY2VcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwicGFyaXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgQXVzdHJhbGlhP1wiLFxuICAgICAgY2hvaWNlczogW1wiQmF0aHVyc3RcIiwgXCJTeWRuZXlcIiwgXCJDYW5iZXJyYVwiLCBcIkR1YmJvXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkNhbmJlcnJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEdlcm1hbnk/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJKZW5hXCIsIFwiRnJhbmtmdXJ0XCIsIFwiTmljZVwiLCBcIkJlcmxpblwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJCZXJsaW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgV2FzaGluZ3RvbiBEQyB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIlJvbWFuaWFcIiwgXCJBbWVyaWNhXCIsIFwiSXRhbHlcIiwgXCJNZXhpY29cIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQW1lcmljYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBNYWRyaWQgdGhlIGNhcGl0YWwgb2Y/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJTcGFpblwiLCBcIlBvbGFuZFwiLCBcIkl0YWx5XCIsIFwiQXVzdHJpYVwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJTcGFpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBDdWJhP1wiLFxuICAgICAgY2hvaWNlczogW1wiSG9sZ3XDrW5cIiwgXCJIYXZhbmFcIiwgXCJNYXRhbnphc1wiLCBcIkJheWFtb1wiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJIYXZhbmFcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgTmV3IFplYWxhbmQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOZWxzb25cIiwgXCJEdW5lZGluXCIsIFwiVGF1cmFuZ2FcIiwgXCJXZWxsaW5ndG9uXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIldlbGxpbmd0b25cIlxuICAgIH1cbiAgICAsXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgVGhhaWxhbmQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJQYXR0YXlhXCIsIFwiS3JhYmlcIiwgXCJCYW5na29rXCIsIFwiQ2hvbmJ1cmlcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQmFuZ2tva1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBDYWlybyB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIkFsZ2VyaWFcIiwgXCJNb3JvY2NvXCIsIFwiRWd5cHRcIiwgXCJUdW5pc2FcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiRWd5cHRcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDksXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRW5nbGFuZD9cIixcbiAgICAgIGNob2ljZXM6IFtcIkxpdmVycG9vbFwiLCBcIkxvbmRvblwiLCBcIk1hbmNoZXN0ZXJcIiwgXCJCcmlzdG9sXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkxvbmRvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTAsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIG5hdGlvbmFsIGNhcGl0YWwgY2l0eSBvZiBDYW5hZGE/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJDYWxnYXJ5XCIsIFwiTW9udHJlYWxcIiwgXCJCYXJyaWVcIiwgXCJPdHRhd2FcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiT3R0YXdhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMSxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBNZXhpY28/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJNZXhpY28gQ2l0eVwiLCBcIlB1ZWJsYVwiLCBcIkNhbmPDum5cIiwgXCJNb250ZXJyZXlcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTWV4aWNvIENpdHlcIlxuICAgIH1cbiAgICAsXG4gICAge1xuICAgICAgaWQ6IDEyLFxuICAgICAgcTogXCJXaGljaCBjb3VudHJ5IGlzIFRva3lvIHRoZSBjYXBpdGFsIG9mP1wiLFxuICAgICAgY2hvaWNlczogW1wiSW5kaWFcIiwgXCJDaGluYVwiLCBcIkphcGFuXCIsIFwiVGhhaWxhbmRcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiSmFwYW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEzLFxuICAgICAgcTogXCJXaGljaCBjb3VudHJ5IGlzIExpc2JvbiB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIlBvcnR1Z2FsXCIsIFwiQnJhemlsXCIsIFwiSW5kaWFcIiwgXCJBbmdvbGFcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiUG9ydHVnYWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE0LFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIE1vcm9jY28/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJLZW5pdHJhXCIsIFwiUmFiYXRcIiwgXCJNYXJyYWtlc2hcIiwgXCJDYXNhYmxhbmNhXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlJhYmF0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNSxcbiAgICAgIHE6IFwiV2hhdCBwbGFuZXQgaXMgbmVhcmVzdCB0byB0aGUgRWFydGg/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJWZW51c1wiLCBcIlVyYW51c1wiLCBcIk5lcHR1bmVcIiwgXCJNZXJjdXJ5XCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIlZlbnVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNixcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgYWN0aXZlIHZvbGNhbm8gaW4gU2ljaWx5P1wiLFxuICAgICAgY2hvaWNlczogW1wiSXNjaGlhXCIsIFwiTW91bnQgRXRuYVwiLCBcIkZpbGljdWRpXCIsIFwiUGFuYXJlYVwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJNb3VudCBFdG5hXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNyxcbiAgICAgIHE6IFwiSW4gd2hpY2ggY291bnRyeSB3b3VsZCB5b3UgZmluZCB0aGUgcHlyYW1pZHM/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJNb3JvY2NvXCIsIFwiSXRhbHlcIiwgXCJFZ3lwdFwiLCBcIkluZGlhXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkVneXB0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxOCxcbiAgICAgIHE6IFwiSW4gd2hpY2ggU3RhdGUgb2YgQW1lcmljYSB3b3VsZCB5b3UgZmluZCBMYXMgVmVnYXM/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJOZXZhZGFcIiwgXCJDYWxpZm9ybmlhXCIsIFwiVGV4YXNcIiwgXCJHZW9yZ2lhXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5ldmFkYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTksXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgdGhlIHNlY29uZCBiaWdnZXN0IGluIHRoZSB3b3JsZD9cIixcbiAgICAgIGNob2ljZXM6IFtcIkFtZXJpY2FcIiwgXCJDYW5hZGFcIiwgXCJDaGluYVwiLCBcIkluZGlhXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkNhbmFkYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjAsXG4gICAgICBxOiBcIldoZXJlIGlzIHRoZSBiaWdnZXN0IHJhaWx3YXkgc3RhdGlvbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJJbmRpYVwiLCBcIlJ1c3NpYVwiLCBcIkdlcm1hbnlcIiwgXCJOZXcgWW9ya1wiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOZXcgWW9yayBDaXR5IChHcmFuZCBDZW50cmFsIFRlcm1pbmFsKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjEsXG4gICAgICBxOiBcIldoaWNoIGNvbnRpbmVudCBpcyBNb3VudCBLaWxpbWFuamFybyBsb2NhdGVkIG9uP1wiLFxuICAgICAgY2hvaWNlczogW1wiQW1lcmljYVwiLCBcIkFmcmljYVwiLCBcIkFzaWFcIiwgXCJFdXJvcGVcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQWZyaWNhXCJcbiAgICB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVzdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIHE6IHN0cmluZztcbiAgY2hvaWNlczogQXJyYXk8c3RyaW5nPjtcbiAgYTogbnVtYmVyO1xuICByYXRlOiBudW1iZXI7XG4gIGhpbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQW5zd2VyIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGxheWVyQW5zd2VyOiBudW1iZXI7XG4gIHF1ZXN0aW9uOiBJUXVlc3Rpb247XG59XG4iXX0=