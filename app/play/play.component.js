"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var questions_service_1 = require("../questions.service");
var enums_1 = require("ui/enums");
var animation_1 = require("tns-core-modules/ui/animation/animation");
var tnsfx = require("nativescript-effects");
var orientation = require("nativescript-orientation");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(ngZone, routerExtensions, questionService) {
        this.ngZone = ngZone;
        this.routerExtensions = routerExtensions;
        this.questionService = questionService;
        this.questions = questionService.questions;
        this.questionIndex = 0;
        this.questionCurrent = this.questions[0];
        this.score = 0;
    }
    PlayComponent.prototype.pageLoaded = function () {
        console.log("loaded");
    };
    PlayComponent.prototype.ngOnInit = function () {
        var _deviceType = platformModule.device.deviceType;
        var _gridLayout = this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();
        this._questionLabel = this.questionLabel.nativeElement;
        // _question.top = screen.mainScreen.heightPixels / 4;
        var _questionImg = this.image.nativeElement;
        // const x = _questionImg.getActualSize().height;
        this.answerI0 = this.answerImg0.nativeElement;
        this.answerI1 = this.answerImg1.nativeElement;
        this.answerI2 = this.answerImg2.nativeElement;
        this.answerI3 = this.answerImg3.nativeElement;
        // console.dir(this.answerI0);
        // Quiz Logic
        this.answerL0 = this.answerLabel0.nativeElement;
        this.answerL1 = this.answerLabel1.nativeElement;
        this.answerL2 = this.answerLabel2.nativeElement;
        this.answerL3 = this.answerLabel3.nativeElement;
        orientation.disableRotation();
    };
    PlayComponent.prototype.nextQuestion = function (answer) {
        var _this = this;
        console.log("answer " + answer);
        this.answerI0.removeEventListener("tap");
        this.answerI1.removeEventListener("tap");
        this.answerI2.removeEventListener("tap");
        this.answerI3.removeEventListener("tap");
        switch (answer) {
            case 0:
                this.animateAnswer0();
                break;
            case 1:
                this.animateAnswer1();
                break;
            case 2:
                this.animateAnswer2();
                break;
            case 3:
                this.animateAnswer3();
                break;
            default:
                break;
        }
        // Change Question Information after end of animation
        setTimeout(function () {
            _this.nextQuestionLogic(answer);
        }, 1000);
    };
    PlayComponent.prototype.nextQuestionLogic = function (_answer) {
        var _this = this;
        // if there is next question
        if (this.questionIndex < this.questions.length - 1) {
            // if good answer
            if (this.questionCurrent.a === _answer) {
                // console.log("xxx good answer");
                this.score++;
            }
            else {
                // console.log("xxx bad answer");
            }
            // todo TextChange Animation
            setTimeout(function () {
                _this._questionLabel.animate({
                    opacity: 0,
                    duration: 200,
                    curve: enums_1.AnimationCurve.easeInOut
                });
                _this.questionIndex++;
                _this.questionCurrent = _this.questions[_this.questionIndex];
            }, 1000);
            // change the text of question and show it after fade
            setTimeout(function () {
                _this.ngZone.run(function () {
                    // Do whatever you want here
                    console.log("xxx reload view!!!!");
                });
                _this._questionLabel.animate({
                    opacity: 1,
                    duration: 200,
                    curve: enums_1.AnimationCurve.easeInOut
                });
                _this.answerI0.addEventListener("tap", function () {
                    _this.nextQuestion(0);
                });
                _this.answerI1.addEventListener("tap", function () {
                    _this.nextQuestion(1);
                });
                _this.answerI2.addEventListener("tap", function () {
                    _this.nextQuestion(2);
                });
                _this.answerI3.addEventListener("tap", function () {
                    _this.nextQuestion(3);
                });
            }, 1200);
        }
        else {
            dialogs.alert("you have a score of : " + this.score).then(function () {
                _this.routerExtensions.navigate(["/home"], { clearHistory: false });
            });
        }
    };
    PlayComponent.prototype.showAnswer = function () {
        var definitions = new Array();
        var a1 = {
            target: this.answerL0,
            opacity: 1,
            duration: 200
        };
        definitions.push(a1);
        var a2 = {
            target: this.answerL1,
            opacity: 1,
            duration: 200
        };
        definitions.push(a2);
        var a3 = {
            target: this.answerL2,
            opacity: 1,
            duration: 200
        };
        definitions.push(a3);
        var a4 = {
            target: this.answerL3,
            opacity: 1,
            duration: 200
        };
        definitions.push(a4);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    PlayComponent.prototype.hideAnswer = function () {
        var definitions = new Array();
        var a1 = {
            target: this.answerL0,
            opacity: 0,
            duration: 200
        };
        definitions.push(a1);
        var a2 = {
            target: this.answerL1,
            opacity: 0,
            duration: 200
        };
        definitions.push(a2);
        var a3 = {
            target: this.answerL2,
            opacity: 0,
            duration: 200
        };
        definitions.push(a3);
        var a4 = {
            target: this.answerL3,
            opacity: 0,
            duration: 200
        };
        definitions.push(a4);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    PlayComponent.prototype.animateAnswer0 = function () {
        var _this = this;
        this.answerI0.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI1.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI2.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
        this.answerI3.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
        setTimeout(function () {
            _this.hideAnswer();
        }, 1000);
        setTimeout(function () {
            _this.showAnswer();
        }, 1200);
    };
    PlayComponent.prototype.animateAnswer1 = function () {
        var _this = this;
        this.answerI1.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI0.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI2.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
        this.answerI3.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
    };
    PlayComponent.prototype.animateAnswer2 = function () {
        var _this = this;
        this.answerI2.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
        this.answerI0.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI1.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI3.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
    };
    PlayComponent.prototype.animateAnswer3 = function () {
        var _this = this;
        this.answerI3.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
        this.answerI0.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI1.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI2.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
    };
    __decorate([
        core_1.ViewChild("gridLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "gridLayout", void 0);
    __decorate([
        core_1.ViewChild("questionLabel"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "questionLabel", void 0);
    __decorate([
        core_1.ViewChild("image"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "image", void 0);
    __decorate([
        core_1.ViewChild("answerImg0"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg0", void 0);
    __decorate([
        core_1.ViewChild("answerImg1"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg1", void 0);
    __decorate([
        core_1.ViewChild("answerImg2"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg2", void 0);
    __decorate([
        core_1.ViewChild("answerImg3"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg3", void 0);
    __decorate([
        core_1.ViewChild("answerLabel0"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel0", void 0);
    __decorate([
        core_1.ViewChild("answerLabel1"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel1", void 0);
    __decorate([
        core_1.ViewChild("answerLabel2"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel2", void 0);
    __decorate([
        core_1.ViewChild("answerLabel3"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel3", void 0);
    PlayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-play",
            templateUrl: "./play.component.html",
            styleUrls: ["./play.component.scss"]
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            router_1.RouterExtensions,
            questions_service_1.QuestionsService])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUV4RiwwREFBNEQ7QUFJNUQsc0RBQStEO0FBTy9ELG9DQUFzQztBQUd0QywwREFBbUU7QUFJbkUsa0NBQTBDO0FBRTFDLHFFQUF5RjtBQUV6RixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUU5QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQThCRSx1QkFDVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGVBQWlDO1FBRmpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVFLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQU0sV0FBVyxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLEdBQVUsSUFBSSxDQUFDLGFBQWEsQ0FB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Q0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFYekMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FnQ2tCLGFBQU07WUFDSSx5QkFBZ0I7WUFDakIsb0NBQWdCO09BakNoQyxhQUFhLENBOFp6QjtJQUFELG9CQUFDO0NBQUEsQUE5WkQsSUE4WkM7QUE5Wlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlLCBQb2ludCB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSVF1ZXN0aW9uLCBRdWVzdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3F1ZXN0aW9ucy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVUeXBlcyB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuXG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hbmltYXRpb24vYW5pbWF0aW9uXCI7XG5cbmNvbnN0IHRuc2Z4ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1lZmZlY3RzXCIpO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtcGxheVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BsYXkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BsYXkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJncmlkTGF5b3V0XCIpIGdyaWRMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkxhYmVsXCIpIHF1ZXN0aW9uTGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzBcIikgYW5zd2VySW1nMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzFcIikgYW5zd2VySW1nMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzJcIikgYW5zd2VySW1nMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzNcIikgYW5zd2VySW1nMzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMFwiKSBhbnN3ZXJMYWJlbDA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDFcIikgYW5zd2VyTGFiZWwxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwyXCIpIGFuc3dlckxhYmVsMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsM1wiKSBhbnN3ZXJMYWJlbDM6IEVsZW1lbnRSZWY7XG5cbiAgYW5zd2VySTA6IEltYWdlO1xuICBhbnN3ZXJJMTogSW1hZ2U7XG4gIGFuc3dlckkyOiBJbWFnZTtcbiAgYW5zd2VySTM6IEltYWdlO1xuXG4gIF9xdWVzdGlvbkxhYmVsOiBMYWJlbDtcbiAgYW5zd2VyTDA6IExhYmVsO1xuICBhbnN3ZXJMMTogTGFiZWw7XG4gIGFuc3dlckwyOiBMYWJlbDtcbiAgYW5zd2VyTDM6IExhYmVsO1xuXG4gIHJvdXRlcjtcbiAgcXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+O1xuICBxdWVzdGlvbkN1cnJlbnQ6IElRdWVzdGlvbjtcbiAgcXVlc3Rpb25JbmRleDtcbiAgc2NvcmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBxdWVzdGlvblNlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2UpIHtcblxuICAgIHRoaXMucXVlc3Rpb25zID0gcXVlc3Rpb25TZXJ2aWNlLnF1ZXN0aW9ucztcbiAgICB0aGlzLnF1ZXN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbMF07XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cblxuICBwYWdlTG9hZGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9ncmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5ncmlkTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX2dyaWRMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwgPSA8TGFiZWw+dGhpcy5xdWVzdGlvbkxhYmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gX3F1ZXN0aW9uLnRvcCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscyAvIDQ7XG5cbiAgICBjb25zdCBfcXVlc3Rpb25JbWcgPSA8SW1hZ2U+dGhpcy5pbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnN0IHggPSBfcXVlc3Rpb25JbWcuZ2V0QWN0dWFsU2l6ZSgpLmhlaWdodDtcblxuICAgIHRoaXMuYW5zd2VySTAgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMSA9IDxJbWFnZT50aGlzLmFuc3dlckltZzEubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkyID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTMgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWczLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gY29uc29sZS5kaXIodGhpcy5hbnN3ZXJJMCk7XG4gICAgLy8gUXVpeiBMb2dpY1xuXG4gICAgdGhpcy5hbnN3ZXJMMCA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDEgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDEubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwyID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMyA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMy5uYXRpdmVFbGVtZW50O1xuXG4gICAgb3JpZW50YXRpb24uZGlzYWJsZVJvdGF0aW9uKCk7XG5cbiAgfVxuXG4gIG5leHRRdWVzdGlvbihhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuXG4gICAgY29uc29sZS5sb2coYGFuc3dlciAke2Fuc3dlcn1gKTtcblxuICAgIHRoaXMuYW5zd2VySTAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcblxuICAgIHN3aXRjaCAoYW5zd2VyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjAoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjMoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSBRdWVzdGlvbiBJbmZvcm1hdGlvbiBhZnRlciBlbmQgb2YgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHRRdWVzdGlvbkxvZ2ljKGFuc3dlcik7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIG5leHRRdWVzdGlvbkxvZ2ljKF9hbnN3ZXI6IG51bWJlcikge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5leHQgcXVlc3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4IDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAvLyBpZiBnb29kIGFuc3dlclxuICAgICAgaWYgKHRoaXMucXVlc3Rpb25DdXJyZW50LmEgPT09IF9hbnN3ZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4eHggZ29vZCBhbnN3ZXJcIik7XG4gICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieHh4IGJhZCBhbnN3ZXJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZG8gVGV4dENoYW5nZSBBbmltYXRpb25cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25JbmRleCsrO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF07XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IG9mIHF1ZXN0aW9uIGFuZCBzaG93IGl0IGFmdGVyIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IGhlcmVcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eCByZWxvYWQgdmlldyEhISFcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbnN3ZXJJMC5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5zd2VySTEuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuc3dlckkyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbnN3ZXJJMy5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sIDEyMDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpYWxvZ3MuYWxlcnQoYHlvdSBoYXZlIGEgc2NvcmUgb2YgOiAke3RoaXMuc2NvcmV9YCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0Fuc3dlcigpIHtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgY29uc3QgYTE6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuYW5zd2VyTDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XG5cbiAgICBjb25zdCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgIHRhcmdldDogdGhpcy5hbnN3ZXJMMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgIGNvbnN0IGEzOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmFuc3dlckwyLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTMpO1xuXG4gICAgY29uc3QgYTQ6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuYW5zd2VyTDMsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhNCk7XG5cbiAgICBjb25zdCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcblxuICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFuaW1hdGlvbiBmaW5pc2hlZFwiKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhpZGVBbnN3ZXIoKSB7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgIGNvbnN0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmFuc3dlckwwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgY29uc3QgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuYW5zd2VyTDEsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG5cbiAgICBjb25zdCBhMzogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgIHRhcmdldDogdGhpcy5hbnN3ZXJMMixcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEzKTtcblxuICAgIGNvbnN0IGE0OiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmFuc3dlckwzLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTQpO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBhbmltYXRlQW5zd2VyMCgpIHtcbiAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVBbnN3ZXIoKTtcbiAgICB9LCAxMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0Fuc3dlcigpO1xuICAgIH0sIDEyMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMSgpIHtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMigpIHtcbiAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMygpIHtcbiAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxufVxuIl19