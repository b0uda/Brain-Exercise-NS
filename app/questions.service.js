"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.playerAnswers = [];
        this.questions = [
            {
                id: -1,
                q: "How many pairs of letters in the word 'CHAIRS' have as many letters between them in the word as in the alphabet?",
                choices: ["R", "P", "D", "X"],
                a: 2,
                rate: 0,
                hint: "Normal Alphabet Order"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQStHRTtRQTdHQSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFFbEMsY0FBUyxHQUFxQjtZQUU1QjtnQkFDRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsRUFBRSxrSEFBa0g7Z0JBQ3JILE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHVCQUF1QjthQUM5QjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHVCQUF1QjthQUM5QjtZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxXQUFXO2dCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHdDQUF3QzthQUMvQztZQUVEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxlQUFlO2dCQUNsQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxxQ0FBcUM7YUFDNUM7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsV0FBVztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxnRkFBZ0Y7YUFDdkY7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsV0FBVztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxpRkFBaUY7YUFDeEY7WUFFRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQUUsYUFBYTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsNENBQTRDO2FBQ25EO1lBR0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLGFBQWE7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLDZCQUE2QjthQUNwQztZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxxQkFBcUI7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHFDQUFxQzthQUM1QztZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxxQkFBcUI7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDakMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHdDQUF3QzthQUMvQztZQUdEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLENBQUMsRUFBRSxxQkFBcUI7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDckMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLDJDQUEyQzthQUNsRDtTQUVGLENBQUM7SUFFYyxDQUFDO0lBL0dOLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFOztPQUNBLGdCQUFnQixDQWtINUI7SUFBRCx1QkFBQztDQUFBLEFBbEhELElBa0hDO0FBbEhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zU2VydmljZSB7XG5cbiAgcGxheWVyQW5zd2VyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gIHF1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPiA9IFtcblxuICAgIHtcbiAgICAgIGlkOiAtMSxcbiAgICAgIHE6IFwiSG93IG1hbnkgcGFpcnMgb2YgbGV0dGVycyBpbiB0aGUgd29yZCAnQ0hBSVJTJyBoYXZlIGFzIG1hbnkgbGV0dGVycyBiZXR3ZWVuIHRoZW0gaW4gdGhlIHdvcmQgYXMgaW4gdGhlIGFscGhhYmV0P1wiLFxuICAgICAgY2hvaWNlczogW1wiUlwiLCBcIlBcIiwgXCJEXCIsIFwiWFwiXSxcbiAgICAgIGE6IDIsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJOb3JtYWwgQWxwaGFiZXQgT3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHE6IFwiQSBCIEMgPyBFXCIsXG4gICAgICBjaG9pY2VzOiBbXCJSXCIsIFwiUFwiLCBcIkRcIiwgXCJYXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIk5vcm1hbCBBbHBoYWJldCBPcmRlclwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcTogXCJVIE8gSSA/IEFcIixcbiAgICAgIGNob2ljZXM6IFtcIlFcIiwgXCJFXCIsIFwiQ1wiLCBcIkpcIl0sXG4gICAgICBhOiAxLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidm93bGVzIEEsIEUsIEksIE8sIFVcXG5pbiByZXZlcnNlIG9yZGVyXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBxOiBcIlkgVyBVIFMgUSA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIlEgU1wiLCBcIk8gTVwiLCBcIksgTVwiLCBcIkwgVFwiXSxcbiAgICAgIGE6IDEsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJhbHRlcm5hdGUgbGV0dGVyc1xcbmluIHJldmVyc2Ugb3JkZXJcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHE6IFwiQSBCIEQgRyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJRXCIsIFwiTVwiLCBcIktcIiwgXCJMXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcImxldHRlcnMgb2YgdGhlIHNlcmllcyBhcmVcXG5yZXNwZWN0aXZlbHltb3ZlZCBvbmVcXG50d28gdGhyZWUsLi4uIHN0ZXBzIGZvcndhcmQuXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBxOiBcIlogVSBRID8gTFwiLFxuICAgICAgY2hvaWNlczogW1wiSVwiLCBcIk1cIiwgXCJPXCIsIFwiTlwiXSxcbiAgICAgIGE6IDMsXG4gICAgICByYXRlOiAwLFxuICAgICAgaGludDogXCJsZXR0ZXJzIG9mIHRoZSBzZXJpZXMgYXJlXFxucmVzcGVjdGl2ZWx5bW92ZWQgb25lXFxudHdvIHRocmVlLC4uLiBzdGVwcyBmb3J3YXJkLi5cIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIHE6IFwiQSBDIEYgSCA/IE1cIixcbiAgICAgIGNob2ljZXM6IFtcIklcIiwgXCJMXCIsIFwiS1wiLCBcIkpcIl0sXG4gICAgICBhOiAyLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwiTGV0dGVycyBtb3ZlZCB0d28gYW5kXFxudGhyZWUgc3RlcHMgZm9yd2FyZFwiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgcTogXCJSIE0gPyBGIEQgP1wiLFxuICAgICAgY2hvaWNlczogW1wiQyBCXCIsIFwiQiBIXCIsIFwiSSBDXCIsIFwiSiBIXCJdLFxuICAgICAgYTogMixcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcIkxldHRlciBhcmUgaW4gcmV2ZXJzZSBvcmRlclwiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA3LFxuICAgICAgcTogXCJaIEwgWCBKIFYgSCBUIEYgPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJSIERcIiwgXCJTIEVcIiwgXCJSIEVcIiwgXCJRIERcIl0sXG4gICAgICBhOiAwLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwidHdvIHNlcmllcyBaIFggViBUID9cXG5hbmQgTCBKIEggRiA/XCJcbiAgICB9XG4gICAgLFxuXG4gICAge1xuICAgICAgaWQ6IDgsXG4gICAgICBxOiBcIlogUyBXIE8gVCBLIFEgRyA/ID9cIixcbiAgICAgIGNob2ljZXM6IFtcIk9DXCIsIFwiTkNcIiwgXCJORFwiLCBcIk9EXCJdLFxuICAgICAgYTogMSxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBoaW50OiBcInR3byBzZXJpZXMgWiBXIFQgViBRID8gXFxuYW5kIFMgTyBLIEcgP1wiXG4gICAgfVxuICAgICxcblxuICAgIHtcbiAgICAgIGlkOiA5LFxuICAgICAgcTogXCJXIFYgVCBTIFEgUCBOIE0gPyA/XCIsXG4gICAgICBjaG9pY2VzOiBbXCJJIEpcIiwgXCJKIEtcIiwgXCJKIElcIiwgXCJLIEpcIl0sXG4gICAgICBhOiAzLFxuICAgICAgcmF0ZTogMCxcbiAgICAgIGhpbnQ6IFwibGV0dGVycyBtb3ZlZCBvbmUgYW5kXFxudHdvIHN0ZXBzIGJhY2t3YXJkXCJcbiAgICB9XG5cbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgcTogc3RyaW5nO1xuICBjaG9pY2VzOiBBcnJheTxzdHJpbmc+O1xuICBhOiBudW1iZXI7XG4gIHJhdGU6IG51bWJlcjtcbiAgaGludDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbnN3ZXIge1xuICBpZDogbnVtYmVyO1xuICBwbGF5ZXJBbnN3ZXI6IG51bWJlcjtcbiAgcXVlc3Rpb246IElRdWVzdGlvbjtcbn1cbiJdfQ==