"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.questions = [
            {
                id: -1,
                q: "Z L X J V H T F ? ?",
                choices: ["R D", "S E", "R E", "Q D"],
                a: 0,
                rate: 0,
                hint: "two series Z X V T ?\nand L J H F ?"
            },
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
    }
    QuestionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQTRHRTtRQTFHQSxjQUFTLEdBQXFCO1lBQzVCO2dCQUNFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUscUNBQXFDO2FBQzVDO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsdUJBQXVCO2FBQzlCO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLFdBQVc7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsd0NBQXdDO2FBQy9DO1lBRUQ7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGVBQWU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHFDQUFxQzthQUM1QztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGdGQUFnRjthQUN2RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGlGQUFpRjthQUN4RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxhQUFhO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSw0Q0FBNEM7YUFDbkQ7WUFHRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsYUFBYTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsNkJBQTZCO2FBQ3BDO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUscUNBQXFDO2FBQzVDO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsd0NBQXdDO2FBQy9DO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHFCQUFxQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsMkNBQTJDO2FBQ2xEO1NBRUYsQ0FBQztJQUVjLENBQUM7SUE1R04sZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBOEc1QjtJQUFELHVCQUFDO0NBQUEsQUE5R0QsSUE4R0M7QUE5R1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbnNTZXJ2aWNlIHtcblxuICBxdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj4gPSBbXG4gICAge1xuICAgICAgaWQ6IC0xLFxuICAgICAgcTogXCJaIEwgWCBKIFYgSCBUIEYgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJSIERcIiwgXCJTIEVcIiwgXCJSIEVcIiwgXCJRIERcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidHdvIHNlcmllcyBaIFggViBUID9cXG5hbmQgTCBKIEggRiA/XCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBxOiBcIkEgQiBDID8gRVwiLFxuICAgICAgY2hvaWNlczogW1wiUlwiLCBcIlBcIiwgXCJEXCIsIFwiWFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOb3JtYWwgQWxwaGFiZXQgT3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHE6IFwiVSBPIEkgPyBBXCIsXG4gICAgICBjaG9pY2VzOiBbXCJRXCIsIFwiRVwiLCBcIkNcIiwgXCJKXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInZvd2xlcyBBLCBFLCBJLCBPLCBVXFxuaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcTogXCJZIFcgVSBTIFEgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJRIFNcIiwgXCJPIE1cIiwgXCJLIE1cIiwgXCJMIFRcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiYWx0ZXJuYXRlIGxldHRlcnNcXG5pbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBxOiBcIkEgQiBEIEcgP1wiLFxuICAgICAgY2hvaWNlczogW1wiUVwiLCBcIk1cIiwgXCJLXCIsIFwiTFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG9mIHRoZSBzZXJpZXMgYXJlXFxucmVzcGVjdGl2ZWx5bW92ZWQgb25lXFxudHdvIHRocmVlLC4uLiBzdGVwcyBmb3J3YXJkLlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgcTogXCJaIFUgUSA/IExcIixcbiAgICAgIGNob2ljZXM6IFtcIklcIiwgXCJNXCIsIFwiT1wiLCBcIk5cIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwibGV0dGVycyBvZiB0aGUgc2VyaWVzIGFyZVxcbnJlc3BlY3RpdmVseW1vdmVkIG9uZVxcbnR3byB0aHJlZSwuLi4gc3RlcHMgZm9yd2FyZC4uXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBxOiBcIkEgQyBGIEggPyBNXCIsXG4gICAgICBjaG9pY2VzOiBbXCJJXCIsIFwiTFwiLCBcIktcIiwgXCJKXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkxldHRlcnMgbW92ZWQgdHdvIGFuZFxcbnRocmVlIHN0ZXBzIGZvcndhcmRcIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIHE6IFwiUiBNID8gRiBEID9cIixcbiAgICAgIGNob2ljZXM6IFtcIkMgQlwiLCBcIkIgSFwiLCBcIkkgQ1wiLCBcIkogSFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMZXR0ZXIgYXJlIGluIHJldmVyc2Ugb3JkZXJcIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogNyxcbiAgICAgIHE6IFwiWiBMIFggSiBWIEggVCBGID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiUiBEXCIsIFwiUyBFXCIsIFwiUiBFXCIsIFwiUSBEXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInR3byBzZXJpZXMgWiBYIFYgVCA/XFxuYW5kIEwgSiBIIEYgP1wiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA4LFxuICAgICAgcTogXCJaIFMgVyBPIFQgSyBRIEcgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJPQ1wiLCBcIk5DXCIsIFwiTkRcIiwgXCJPRFwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ0d28gc2VyaWVzIFogVyBUIFYgUSA/IFxcbmFuZCBTIE8gSyBHID9cIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogOSxcbiAgICAgIHE6IFwiVyBWIFQgUyBRIFAgTiBNID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiSSBKXCIsIFwiSiBLXCIsIFwiSiBJXCIsIFwiSyBKXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgbW92ZWQgb25lIGFuZFxcbnR3byBzdGVwcyBiYWNrd2FyZFwiXG4gICAgfVxuXG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVzdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIHE6IHN0cmluZztcbiAgY2hvaWNlczogQXJyYXk8c3RyaW5nPjtcbiAgYTogbnVtYmVyO1xuICByYXRlOiBudW1iZXI7XG4gIGhpbnQ6IHN0cmluZztcbn1cbiJdfQ==