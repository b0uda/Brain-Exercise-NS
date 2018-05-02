"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.playerAnswers = [];
        this.questions = [
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
        this.geography = [
            {
                id: 9,
                q: "Which country is Paris the capital of?",
                choices: ["France", "Spain", "Italy", "Greece"],
                a: 3,
                rate: 0,
                hint: "paris"
            },
            {
                id: 9,
                q: "What is the capital of Australia?",
                choices: ["Bathurst", "Sydney", "Dubbo", "Canberra"],
                a: 3,
                rate: 0,
                hint: "Canberra"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQXlIRTtRQXZIQSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFFbEMsY0FBUyxHQUFxQjtZQUU1QjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsV0FBVztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSx1QkFBdUI7YUFDOUI7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsV0FBVztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSx3Q0FBd0M7YUFDL0M7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsZUFBZTtnQkFDbEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUscUNBQXFDO2FBQzVDO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsZ0ZBQWdGO2FBQ3ZGO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsaUZBQWlGO2FBQ3hGO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGFBQWE7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLDRDQUE0QzthQUNuRDtZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxhQUFhO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSw2QkFBNkI7YUFDcEM7WUFHRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUscUJBQXFCO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxxQ0FBcUM7YUFDNUM7WUFHRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUscUJBQXFCO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ2pDLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSx3Q0FBd0M7YUFDL0M7WUFHRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUscUJBQXFCO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSwyQ0FBMkM7YUFDbEQ7U0FFRixDQUFDO1FBRUYsY0FBUyxHQUFxQjtZQUM1QjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsd0NBQXdDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7Z0JBQy9DLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsbUNBQW1DO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7Z0JBQ3BELENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxVQUFVO2FBQ2pCO1NBQ0YsQ0FBQztJQUVjLENBQUM7SUF6SE4sZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBMkg1QjtJQUFELHVCQUFDO0NBQUEsQUEzSEQsSUEySEM7QUEzSFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbnNTZXJ2aWNlIHtcblxuICBwbGF5ZXJBbnN3ZXJzOiBBcnJheTxudW1iZXI+ID0gW107XG5cbiAgcXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+ID0gW1xuXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBxOiBcIkEgQiBDID8gRVwiLFxuICAgICAgY2hvaWNlczogW1wiUlwiLCBcIlBcIiwgXCJEXCIsIFwiWFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOb3JtYWwgQWxwaGFiZXQgT3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHE6IFwiVSBPIEkgPyBBXCIsXG4gICAgICBjaG9pY2VzOiBbXCJRXCIsIFwiRVwiLCBcIkNcIiwgXCJKXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInZvd2xlcyBBLCBFLCBJLCBPLCBVXFxuaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcTogXCJZIFcgVSBTIFEgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJRIFNcIiwgXCJPIE1cIiwgXCJLIE1cIiwgXCJMIFRcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiYWx0ZXJuYXRlIGxldHRlcnNcXG5pbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBxOiBcIkEgQiBEIEcgP1wiLFxuICAgICAgY2hvaWNlczogW1wiUVwiLCBcIk1cIiwgXCJLXCIsIFwiTFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG9mIHRoZSBzZXJpZXMgYXJlXFxucmVzcGVjdGl2ZWx5bW92ZWQgb25lXFxudHdvIHRocmVlLC4uLiBzdGVwcyBmb3J3YXJkLlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgcTogXCJaIFUgUSA/IExcIixcbiAgICAgIGNob2ljZXM6IFtcIklcIiwgXCJNXCIsIFwiT1wiLCBcIk5cIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwibGV0dGVycyBvZiB0aGUgc2VyaWVzIGFyZVxcbnJlc3BlY3RpdmVseW1vdmVkIG9uZVxcbnR3byB0aHJlZSwuLi4gc3RlcHMgZm9yd2FyZC4uXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBxOiBcIkEgQyBGIEggPyBNXCIsXG4gICAgICBjaG9pY2VzOiBbXCJJXCIsIFwiTFwiLCBcIktcIiwgXCJKXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkxldHRlcnMgbW92ZWQgdHdvIGFuZFxcbnRocmVlIHN0ZXBzIGZvcndhcmRcIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIHE6IFwiUiBNID8gRiBEID9cIixcbiAgICAgIGNob2ljZXM6IFtcIkMgQlwiLCBcIkIgSFwiLCBcIkkgQ1wiLCBcIkogSFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMZXR0ZXIgYXJlIGluIHJldmVyc2Ugb3JkZXJcIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogNyxcbiAgICAgIHE6IFwiWiBMIFggSiBWIEggVCBGID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiUiBEXCIsIFwiUyBFXCIsIFwiUiBFXCIsIFwiUSBEXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInR3byBzZXJpZXMgWiBYIFYgVCA/XFxuYW5kIEwgSiBIIEYgP1wiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA4LFxuICAgICAgcTogXCJaIFMgVyBPIFQgSyBRIEcgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJPQ1wiLCBcIk5DXCIsIFwiTkRcIiwgXCJPRFwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ0d28gc2VyaWVzIFogVyBUIFYgUSA/IFxcbmFuZCBTIE8gSyBHID9cIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogOSxcbiAgICAgIHE6IFwiVyBWIFQgUyBRIFAgTiBNID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiSSBKXCIsIFwiSiBLXCIsIFwiSiBJXCIsIFwiSyBKXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgbW92ZWQgb25lIGFuZFxcbnR3byBzdGVwcyBiYWNrd2FyZFwiXG4gICAgfVxuXG4gIF07XG5cbiAgZ2VvZ3JhcGh5OiBBcnJheTxJUXVlc3Rpb24+ID0gW1xuICAgIHtcbiAgICAgIGlkOiA5LFxuICAgICAgcTogXCJXaGljaCBjb3VudHJ5IGlzIFBhcmlzIHRoZSBjYXBpdGFsIG9mP1wiLFxuICAgICAgY2hvaWNlczogW1wiRnJhbmNlXCIsIFwiU3BhaW5cIiwgXCJJdGFseVwiLCBcIkdyZWVjZVwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJwYXJpc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogOSxcbiAgICAgIHE6IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBBdXN0cmFsaWE/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJCYXRodXJzdFwiLCBcIlN5ZG5leVwiLCBcIkR1YmJvXCIsIFwiQ2FuYmVycmFcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiQ2FuYmVycmFcIlxuICAgIH1cbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgcTogc3RyaW5nO1xuICBjaG9pY2VzOiBBcnJheTxzdHJpbmc+O1xuICBhOiBudW1iZXI7XG4gIHJhdGU6IG51bWJlcjtcbiAgaGludDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbnN3ZXIge1xuICBpZDogbnVtYmVyO1xuICBwbGF5ZXJBbnN3ZXI6IG51bWJlcjtcbiAgcXVlc3Rpb246IElRdWVzdGlvbjtcbn1cbiJdfQ==