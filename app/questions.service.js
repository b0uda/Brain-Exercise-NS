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
    }
    QuestionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQXNHRTtRQXBHQSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixjQUFTLEdBQXFCO1lBRTVCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHVCQUF1QjthQUM5QjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHdDQUF3QzthQUMvQztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxlQUFlO2dCQUNsQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxxQ0FBcUM7YUFDNUM7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsV0FBVztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxnRkFBZ0Y7YUFDdkY7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsV0FBVztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxpRkFBaUY7YUFDeEY7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsYUFBYTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsNENBQTRDO2FBQ25EO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGFBQWE7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLDZCQUE2QjthQUNwQztZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxxQkFBcUI7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHFDQUFxQzthQUM1QztZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxxQkFBcUI7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDakMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHdDQUF3QzthQUMvQztZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxxQkFBcUI7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLDJDQUEyQzthQUNsRDtTQUVGLENBQUM7SUFFYyxDQUFDO0lBdEdOLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFOztPQUNBLGdCQUFnQixDQXlHNUI7SUFBRCx1QkFBQztDQUFBLEFBekdELElBeUdDO0FBekdZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zU2VydmljZSB7XG5cbiAgcGxheWVyQW5zd2VycyA9IFtdO1xuXG4gIHF1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPiA9IFtcblxuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgcTogXCJBIEIgQyA/IEVcIixcbiAgICAgIGNob2ljZXM6IFtcIlJcIiwgXCJQXCIsIFwiRFwiLCBcIlhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTm9ybWFsIEFscGhhYmV0IE9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBxOiBcIlUgTyBJID8gQVwiLFxuICAgICAgY2hvaWNlczogW1wiUVwiLCBcIkVcIiwgXCJDXCIsIFwiSlwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ2b3dsZXMgQSwgRSwgSSwgTywgVVxcbmluIHJldmVyc2Ugb3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHE6IFwiWSBXIFUgUyBRID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiUSBTXCIsIFwiTyBNXCIsIFwiSyBNXCIsIFwiTCBUXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImFsdGVybmF0ZSBsZXR0ZXJzXFxuaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgcTogXCJBIEIgRCBHID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlFcIiwgXCJNXCIsIFwiS1wiLCBcIkxcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwibGV0dGVycyBvZiB0aGUgc2VyaWVzIGFyZVxcbnJlc3BlY3RpdmVseW1vdmVkIG9uZVxcbnR3byB0aHJlZSwuLi4gc3RlcHMgZm9yd2FyZC5cIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHE6IFwiWiBVIFEgPyBMXCIsXG4gICAgICBjaG9pY2VzOiBbXCJJXCIsIFwiTVwiLCBcIk9cIiwgXCJOXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgb2YgdGhlIHNlcmllcyBhcmVcXG5yZXNwZWN0aXZlbHltb3ZlZCBvbmVcXG50d28gdGhyZWUsLi4uIHN0ZXBzIGZvcndhcmQuLlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcTogXCJBIEMgRiBIID8gTVwiLFxuICAgICAgY2hvaWNlczogW1wiSVwiLCBcIkxcIiwgXCJLXCIsIFwiSlwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMZXR0ZXJzIG1vdmVkIHR3byBhbmRcXG50aHJlZSBzdGVwcyBmb3J3YXJkXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBxOiBcIlIgTSA/IEYgRCA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJDIEJcIiwgXCJCIEhcIiwgXCJJIENcIiwgXCJKIEhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTGV0dGVyIGFyZSBpbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBxOiBcIlogTCBYIEogViBIIFQgRiA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlIgRFwiLCBcIlMgRVwiLCBcIlIgRVwiLCBcIlEgRFwiXSxcbiAgICAgIGE6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJ0d28gc2VyaWVzIFogWCBWIFQgP1xcbmFuZCBMIEogSCBGID9cIlxuICAgIH1cbiAgICAsXG5cbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIHE6IFwiWiBTIFcgTyBUIEsgUSBHID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiT0NcIiwgXCJOQ1wiLCBcIk5EXCIsIFwiT0RcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidHdvIHNlcmllcyBaIFcgVCBWIFEgPyBcXG5hbmQgUyBPIEsgRyA/XCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDksXG4gICAgICBxOiBcIlcgViBUIFMgUSBQIE4gTSA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIkkgSlwiLCBcIkogS1wiLCBcIkogSVwiLCBcIksgSlwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG1vdmVkIG9uZSBhbmRcXG50d28gc3RlcHMgYmFja3dhcmRcIlxuICAgIH1cblxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlc3Rpb24ge1xuICBpZDogbnVtYmVyO1xuICBxOiBzdHJpbmc7XG4gIGNob2ljZXM6IEFycmF5PHN0cmluZz47XG4gIGE6IG51bWJlcjtcbiAgcmF0ZTogbnVtYmVyO1xuICBoaW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuc3dlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBsYXllckFuc3dlcjogbnVtYmVyO1xuICBxdWVzdGlvbjogSVF1ZXN0aW9uO1xufVxuIl19