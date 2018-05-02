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
                id: 0,
                q: "Which country is Madrid the capital of?",
                choices: ["Spain", "Poland", "Italy", "Austria"],
                a: 0,
                rate: 0,
                hint: "Spain"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQWlKRTtRQS9JQSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFFbEMsa0JBQWEsR0FBcUI7WUFFaEM7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsdUJBQXVCO2FBQzlCO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsd0NBQXdDO2FBQy9DO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGVBQWU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHFDQUFxQzthQUM1QztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGdGQUFnRjthQUN2RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGlGQUFpRjthQUN4RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxhQUFhO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSw0Q0FBNEM7YUFDbkQ7WUFHRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsYUFBYTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsNkJBQTZCO2FBQ3BDO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUscUNBQXFDO2FBQzVDO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsd0NBQXdDO2FBQy9DO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsMkNBQTJDO2FBQ2xEO1NBRUYsQ0FBQztRQUVGLGlCQUFZLEdBQXFCO1lBQy9CO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSx3Q0FBd0M7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztnQkFDL0MsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxtQ0FBbUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztnQkFDcEQsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLFVBQVU7YUFDakI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsaUNBQWlDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7Z0JBQ2hELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsZ0RBQWdEO2dCQUNuRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7Z0JBQ2xELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHlDQUF5QztnQkFDNUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO2dCQUNoRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0YsQ0FBQztJQUVjLENBQUM7SUFqSk4sZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBbUo1QjtJQUFELHVCQUFDO0NBQUEsQUFuSkQsSUFtSkM7QUFuSlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbnNTZXJ2aWNlIHtcblxuICBwbGF5ZXJBbnN3ZXJzOiBBcnJheTxudW1iZXI+ID0gW107XG5cbiAgbWF0aFF1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPiA9IFtcblxuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgcTogXCJBIEIgQyA/IEVcIixcbiAgICAgIGNob2ljZXM6IFtcIlJcIiwgXCJQXCIsIFwiRFwiLCBcIlhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTm9ybWFsIEFscGhhYmV0IE9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBxOiBcIlUgTyBJID8gQVwiLFxuICAgICAgY2hvaWNlczogW1wiUVwiLCBcIkVcIiwgXCJDXCIsIFwiSlwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ2b3dsZXMgQSwgRSwgSSwgTywgVVxcbmluIHJldmVyc2Ugb3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHE6IFwiWSBXIFUgUyBRID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiUSBTXCIsIFwiTyBNXCIsIFwiSyBNXCIsIFwiTCBUXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImFsdGVybmF0ZSBsZXR0ZXJzXFxuaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgcTogXCJBIEIgRCBHID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlFcIiwgXCJNXCIsIFwiS1wiLCBcIkxcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwibGV0dGVycyBvZiB0aGUgc2VyaWVzIGFyZVxcbnJlc3BlY3RpdmVseW1vdmVkIG9uZVxcbnR3byB0aHJlZSwuLi4gc3RlcHMgZm9yd2FyZC5cIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHE6IFwiWiBVIFEgPyBMXCIsXG4gICAgICBjaG9pY2VzOiBbXCJJXCIsIFwiTVwiLCBcIk9cIiwgXCJOXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgb2YgdGhlIHNlcmllcyBhcmVcXG5yZXNwZWN0aXZlbHltb3ZlZCBvbmVcXG50d28gdGhyZWUsLi4uIHN0ZXBzIGZvcndhcmQuLlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcTogXCJBIEMgRiBIID8gTVwiLFxuICAgICAgY2hvaWNlczogW1wiSVwiLCBcIkxcIiwgXCJLXCIsIFwiSlwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMZXR0ZXJzIG1vdmVkIHR3byBhbmRcXG50aHJlZSBzdGVwcyBmb3J3YXJkXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBxOiBcIlIgTSA/IEYgRCA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJDIEJcIiwgXCJCIEhcIiwgXCJJIENcIiwgXCJKIEhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTGV0dGVyIGFyZSBpbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBxOiBcIlogTCBYIEogViBIIFQgRiA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlIgRFwiLCBcIlMgRVwiLCBcIlIgRVwiLCBcIlEgRFwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ0d28gc2VyaWVzIFogWCBWIFQgP1xcbmFuZCBMIEogSCBGID9cIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIHE6IFwiWiBTIFcgTyBUIEsgUSBHID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiT0NcIiwgXCJOQ1wiLCBcIk5EXCIsIFwiT0RcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidHdvIHNlcmllcyBaIFcgVCBWIFEgPyBcXG5hbmQgUyBPIEsgRyA/XCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDksXG4gICAgICBxOiBcIlcgViBUIFMgUSBQIE4gTSA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIkkgSlwiLCBcIkogS1wiLCBcIkogSVwiLCBcIksgSlwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG1vdmVkIG9uZSBhbmRcXG50d28gc3RlcHMgYmFja3dhcmRcIlxuICAgIH1cblxuICBdO1xuXG4gIGdlb1F1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPiA9IFtcbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBQYXJpcyB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIkdyZWVjZVwiLCBcIlNwYWluXCIsIFwiSXRhbHlcIiwgXCJGcmFuY2VcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwicGFyaXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBxOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgQXVzdHJhbGlhP1wiLFxuICAgICAgY2hvaWNlczogW1wiQmF0aHVyc3RcIiwgXCJTeWRuZXlcIiwgXCJDYW5iZXJyYVwiLCBcIkR1YmJvXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkNhbmJlcnJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcTogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEdlcm1hbnk/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJKZW5hXCIsIFwiRnJhbmtmdXJ0XCIsIFwiTmljZVwiLCBcIkJlcmxpblwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJCZXJsaW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBxOiBcIldoaWNoIGNvdW50cnkgaXMgV2FzaGluZ3RvbiBEQyB0aGUgY2FwaXRhbCBvZj9cIixcbiAgICAgIGNob2ljZXM6IFtcIlJvbWFuaWFcIiwgXCJBbWVyaWNhXCIsIFwiSXRhbHlcIiwgXCJNZXhpY29cIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQW1lcmljYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHE6IFwiV2hpY2ggY291bnRyeSBpcyBNYWRyaWQgdGhlIGNhcGl0YWwgb2Y/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJTcGFpblwiLCBcIlBvbGFuZFwiLCBcIkl0YWx5XCIsIFwiQXVzdHJpYVwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJTcGFpblwiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlc3Rpb24ge1xuICBpZDogbnVtYmVyO1xuICBxOiBzdHJpbmc7XG4gIGNob2ljZXM6IEFycmF5PHN0cmluZz47XG4gIGE6IG51bWJlcjtcbiAgcmF0ZTogbnVtYmVyO1xuICBoaW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuc3dlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBsYXllckFuc3dlcjogbnVtYmVyO1xuICBxdWVzdGlvbjogSVF1ZXN0aW9uO1xufVxuIl19