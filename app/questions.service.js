"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
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
                q: "Y W U S\nQ ? ?",
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
                q: "Z L X J V\nH T F ? ?",
                choices: ["R D", "S E", "R E", "Q D"],
                a: 0,
                rate: 0,
                hint: "two series Z X V T ?\nand L J H F ?"
            },
            {
                id: 8,
                q: "Z S W O T\nK Q G ? ?",
                choices: ["OC", "NC", "ND", "OD"],
                a: 1,
                rate: 0,
                hint: "two series Z W T V Q ? \nand S O K G ?"
            },
            {
                id: 9,
                q: "W V T S Q\nP N M ? ?",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQW9HRTtRQWxHQSxjQUFTLEdBQXFCO1lBRTVCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHVCQUF1QjthQUM5QjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHdDQUF3QzthQUMvQztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxnQkFBZ0I7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHFDQUFxQzthQUM1QztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGdGQUFnRjthQUN2RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGlGQUFpRjthQUN4RjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxhQUFhO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSw0Q0FBNEM7YUFDbkQ7WUFHRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsYUFBYTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsNkJBQTZCO2FBQ3BDO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHNCQUFzQjtnQkFDekIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUscUNBQXFDO2FBQzVDO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHNCQUFzQjtnQkFDekIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsd0NBQXdDO2FBQy9DO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLHNCQUFzQjtnQkFDekIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsMkNBQTJDO2FBQ2xEO1NBRUYsQ0FBQztJQUVjLENBQUM7SUFwR04sZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBc0c1QjtJQUFELHVCQUFDO0NBQUEsQUF0R0QsSUFzR0M7QUF0R1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbnNTZXJ2aWNlIHtcblxuICBxdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj4gPSBbXG5cbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHE6IFwiQSBCIEMgPyBFXCIsXG4gICAgICBjaG9pY2VzOiBbXCJSXCIsIFwiUFwiLCBcIkRcIiwgXCJYXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5vcm1hbCBBbHBoYWJldCBPcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcTogXCJVIE8gSSA/IEFcIixcbiAgICAgIGNob2ljZXM6IFtcIlFcIiwgXCJFXCIsIFwiQ1wiLCBcIkpcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidm93bGVzIEEsIEUsIEksIE8sIFVcXG5pbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBxOiBcIlkgVyBVIFNcXG5RID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiUSBTXCIsIFwiTyBNXCIsIFwiSyBNXCIsIFwiTCBUXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImFsdGVybmF0ZSBsZXR0ZXJzXFxuaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgcTogXCJBIEIgRCBHID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlFcIiwgXCJNXCIsIFwiS1wiLCBcIkxcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwibGV0dGVycyBvZiB0aGUgc2VyaWVzIGFyZVxcbnJlc3BlY3RpdmVseW1vdmVkIG9uZVxcbnR3byB0aHJlZSwuLi4gc3RlcHMgZm9yd2FyZC5cIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHE6IFwiWiBVIFEgPyBMXCIsXG4gICAgICBjaG9pY2VzOiBbXCJJXCIsIFwiTVwiLCBcIk9cIiwgXCJOXCJdLFxuICAgICAgYTogMyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgb2YgdGhlIHNlcmllcyBhcmVcXG5yZXNwZWN0aXZlbHltb3ZlZCBvbmVcXG50d28gdGhyZWUsLi4uIHN0ZXBzIGZvcndhcmQuLlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcTogXCJBIEMgRiBIID8gTVwiLFxuICAgICAgY2hvaWNlczogW1wiSVwiLCBcIkxcIiwgXCJLXCIsIFwiSlwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJMZXR0ZXJzIG1vdmVkIHR3byBhbmRcXG50aHJlZSBzdGVwcyBmb3J3YXJkXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBxOiBcIlIgTSA/IEYgRCA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJDIEJcIiwgXCJCIEhcIiwgXCJJIENcIiwgXCJKIEhcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTGV0dGVyIGFyZSBpbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBxOiBcIlogTCBYIEogVlxcbkggVCBGID8gP1wiLFxuICAgICAgY2hvaWNlczogW1wiUiBEXCIsIFwiUyBFXCIsIFwiUiBFXCIsIFwiUSBEXCJdLFxuICAgICAgYTogMCxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInR3byBzZXJpZXMgWiBYIFYgVCA/XFxuYW5kIEwgSiBIIEYgP1wiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA4LFxuICAgICAgcTogXCJaIFMgVyBPIFRcXG5LIFEgRyA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIk9DXCIsIFwiTkNcIiwgXCJORFwiLCBcIk9EXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInR3byBzZXJpZXMgWiBXIFQgViBRID8gXFxuYW5kIFMgTyBLIEcgP1wiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA5LFxuICAgICAgcTogXCJXIFYgVCBTIFFcXG5QIE4gTSA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIkkgSlwiLCBcIkogS1wiLCBcIkogSVwiLCBcIksgSlwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG1vdmVkIG9uZSBhbmRcXG50d28gc3RlcHMgYmFja3dhcmRcIlxuICAgIH1cblxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlc3Rpb24ge1xuICBpZDogbnVtYmVyO1xuICBxOiBzdHJpbmc7XG4gIGNob2ljZXM6IEFycmF5PHN0cmluZz47XG4gIGE6IG51bWJlcjtcbiAgcmF0ZTogbnVtYmVyO1xuICBoaW50OiBzdHJpbmc7XG59XG4iXX0=