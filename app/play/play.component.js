"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var platform_1 = require("platform");
var router_1 = require("nativescript-angular/router");
var questions_service_1 = require("../questions.service");
var enums_1 = require("ui/enums");
var router_2 = require("@angular/router");
var application = require("application");
var application_1 = require("application");
// const tnsfx = require("nativescript-effects");
var orientation = require("nativescript-orientation");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(viewContainerRef, ngZone, route, router, routerExtensions, questionService) {
        var _this = this;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.questionService = questionService;
        this.route.params
            .forEach(function (params) {
            _this.correction = params.correction;
            _this.mode = params.mode;
        });
        switch (this.mode) {
            case "geo":
                this.questions = questionService.geoQuestions;
                break;
            case "general":
                this.questions = questionService.generalQuestions;
                break;
            case "science":
                this.questions = questionService.scienceQuestions;
                break;
            default:
                break;
        }
        this.questionIndex = 0;
        this.questionCurrent = this.questions[0];
        this.score = 0;
        this.questionIndicator = "Question " + (this.questionIndex + 1);
        // init the players answers every qcm
        if (this.correction === "false") {
            this.questionService.playerAnswers = [];
        }
    }
    PlayComponent.prototype.nextCorrection = function () {
        this.questionIndex++;
        // go home after end of correction
        if (this.questionIndex >= this.questions.length) {
            // this.routerExtensions.navigate(['/score'])
            this.routerExtensions.navigate(["home"], { clearHistory: true });
        }
        this.questionCurrent = this.questions[this.questionIndex];
        this.animateQuestionIndicator();
        this.answerL0.className = "answer_label";
        this.answerL1.className = "answer_label";
        this.answerL2.className = "answer_label";
        this.answerL3.className = "answer_label";
        this.goodAnswer = this.questions[this.questionIndex].a;
        this.playerAnswer = this.playerAnswers[this.questionIndex];
        // switch the player answer for first question "need to be on ngInit()"
        this.testPlayerAnswer();
    };
    PlayComponent.prototype.goHome = function () {
        this.routerExtensions.navigate(["home"], { clearHistory: true });
    };
    PlayComponent.prototype.testPlayerAnswer = function () {
        // reload original images
        this.answerI0.src = "res://answer0";
        this.answerI1.src = "res://answer1";
        this.answerI2.src = "res://answer2";
        this.answerI3.src = "res://answer3";
        switch (this.playerAnswer) {
            case 0:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL0.className = "answer_label_correct";
                    this.answerI0.src = "res://right";
                }
                else {
                    this.answerL0.className = "answer_label_incorrect";
                    this.answerI0.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            this.answerI1.src = "res://right";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            this.answerI2.src = "res://right";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            this.answerI3.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 1:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL1.className = "answer_label_correct";
                    this.answerI1.src = "res://right";
                }
                else {
                    this.answerL1.className = "answer_label_incorrect";
                    this.answerI1.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            this.answerI0.src = "res://right";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            this.answerI2.src = "res://right";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            this.answerI3.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 2:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL2.className = "answer_label_correct";
                    this.answerI2.src = "res://right";
                }
                else {
                    this.answerL2.className = "answer_label_incorrect";
                    this.answerI2.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            this.answerI0.src = "res://right";
                            break;
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            this.answerI1.src = "res://right";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            this.answerI3.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 3:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL3.className = "answer_label_correct";
                    this.answerI3.src = "res://right";
                }
                else {
                    this.answerL3.className = "answer_label_incorrect";
                    this.answerI3.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            this.answerI0.src = "res://right";
                            break;
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            this.answerI1.src = "res://right";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            this.answerI2.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            default:
                break;
        }
    };
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if not android return
        if (!platform_1.isAndroid) {
            return;
        }
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            data.cancel = true;
            _this.routerExtensions.navigate(["/home"], { clearHistory: true });
        });
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
        // Quiz Logic
        this.answerL0 = this.answerLabel0.nativeElement;
        this.answerL1 = this.answerLabel1.nativeElement;
        this.answerL2 = this.answerLabel2.nativeElement;
        this.answerL3 = this.answerLabel3.nativeElement;
        orientation.disableRotation();
        if (this.correction === "true") {
            this.answerI0.removeEventListener("tap");
            this.answerI1.removeEventListener("tap");
            this.answerI2.removeEventListener("tap");
            this.answerI3.removeEventListener("tap");
            this.playerAnswers = this.questionService.playerAnswers;
            this.goodAnswer = this.questions[this.questionIndex].a;
            this.playerAnswer = this.playerAnswers[this.questionIndex];
            // switch the player answer for first question "need to be on ngInit()"
            this.testPlayerAnswer();
        }
        // this.playerAnswers[this.questionIndex].playerAnswer
    };
    PlayComponent.prototype.animateQuestionIndicator = function () {
        this.questionIndicator = "Question " + (this.questionIndex + 1);
    };
    PlayComponent.prototype.nextQuestion = function (answer) {
        // todo1
        // this.playwerAnswerTemp = { id: this.questionIndex, question: this.questionCurrent, playerAnswer: answer };
        // this.playerAnswers.push(this.playwerAnswerTemp);
        var _this = this;
        this.answerI0.removeEventListener("tap");
        this.answerI1.removeEventListener("tap");
        this.answerI2.removeEventListener("tap");
        this.answerI3.removeEventListener("tap");
        if (this.correction === "false") {
            this.questionService.playerAnswers.push(answer);
        }
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
        }, 1200);
        this._questionLabel.animate({
            opacity: 0,
            duration: 200,
            curve: enums_1.AnimationCurve.easeInOut
        });
    };
    PlayComponent.prototype.nextQuestionLogic = function (_answer) {
        var _this = this;
        // if there is next question
        if (this.questionIndex < this.questions.length - 1) {
            // todo finish test debug
            // if good answer
            if (this.questionCurrent.a === _answer) {
                this.score++;
            }
            // todo if was here
            // todo TextChange Animation
            // setTimeout(() => {
            this.questionIndex++;
            this.animateQuestionIndicator();
            this.questionCurrent = this.questions[this.questionIndex];
            // }, 1000);
            this._questionLabel.animate({
                opacity: 1,
                duration: 200,
                curve: enums_1.AnimationCurve.easeInOut
            });
            this.answerI0.addEventListener("tap", function () {
                _this.nextQuestion(0);
            });
            this.answerI1.addEventListener("tap", function () {
                _this.nextQuestion(1);
            });
            this.answerI2.addEventListener("tap", function () {
                _this.nextQuestion(2);
            });
            this.answerI3.addEventListener("tap", function () {
                _this.nextQuestion(3);
            });
            // change the text of question and show it after fade
            // setTimeout(() => {
            this.ngZone.run(function () {
                // Do whatever you want here
            });
            // }, 1200);
            if (this.questionIndex >= this.questions.length - 1) {
                // if (this.questionIndex >= 2) {
                // this.routerExtensions.navigate(['/score'])
                this.routerExtensions.navigateByUrl("/score/" + this.score + "/" + this.mode, { clearHistory: true });
            }
        }
        else {
            // todo questions finished
            this.routerExtensions.navigateByUrl("/score/" + this.score + "/" + this.mode, { clearHistory: true });
        }
    };
    PlayComponent.prototype.animateAnswer0 = function () {
        var _this = this;
        this.answerI0.className = "panel_answer animate_bigger";
        this.answerI1.className = "panel_answer animate_smaller";
        this.answerL1.className = "answer_label animate_smaller";
        this.answerI2.className = "panel_answer animate_smaller";
        this.answerL2.className = "answer_label animate_smaller";
        this.answerI3.className = "panel_answer animate_smaller";
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
            _this.answerI1.className = "panel_answer";
            _this.answerL1.className = "answer_label";
            _this.answerI2.className = "panel_answer";
            _this.answerL2.className = "answer_label";
            _this.answerI3.className = "panel_answer";
            _this.answerL3.className = "answer_label";
        }, 1200);
    };
    PlayComponent.prototype.animateAnswer1 = function () {
        var _this = this;
        this.answerI1.className = "panel_answer animate_bigger";
        this.answerI0.className = "panel_answer animate_smaller";
        this.answerL0.className = "answer_label animate_smaller";
        this.answerI2.className = "panel_answer animate_smaller";
        this.answerL2.className = "answer_label animate_smaller";
        this.answerI3.className = "panel_answer animate_smaller";
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
            _this.answerI0.className = "panel_answer";
            _this.answerL0.className = "answer_label";
            _this.answerI2.className = "panel_answer";
            _this.answerL2.className = "answer_label";
            _this.answerI3.className = "panel_answer";
            _this.answerL3.className = "answer_label";
        }, 1200);
    };
    PlayComponent.prototype.animateAnswer2 = function () {
        var _this = this;
        this.answerI2.className = "panel_answer animate_bigger";
        this.answerI0.className = "panel_answer animate_smaller";
        this.answerL0.className = "answer_label animate_smaller";
        this.answerI1.className = "panel_answer animate_smaller";
        this.answerL1.className = "answer_label animate_smaller";
        this.answerI3.className = "panel_answer animate_smaller";
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
            _this.answerI0.className = "panel_answer";
            _this.answerL0.className = "answer_label";
            _this.answerI1.className = "panel_answer";
            _this.answerL1.className = "answer_label";
            _this.answerI3.className = "panel_answer";
            _this.answerL3.className = "answer_label";
        }, 1200);
    };
    PlayComponent.prototype.animateAnswer3 = function () {
        var _this = this;
        this.answerI3.className = "panel_answer animate_bigger";
        this.answerI0.className = "panel_answer animate_smaller";
        this.answerL0.className = "answer_label animate_smaller";
        this.answerI1.className = "panel_answer animate_smaller";
        this.answerL1.className = "answer_label animate_smaller";
        this.answerI2.className = "panel_answer animate_smaller";
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
            _this.answerI0.className = "panel_answer";
            _this.answerL0.className = "answer_label";
            _this.answerI1.className = "panel_answer";
            _this.answerL1.className = "answer_label";
            _this.answerI2.className = "panel_answer";
            _this.answerL2.className = "answer_label";
        }, 1200);
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
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            core_1.NgZone,
            router_2.ActivatedRoute,
            router_2.Router,
            router_1.RouterExtensions,
            questions_service_1.QuestionsService])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCwwREFBNEQ7QUFFNUQscUNBQXFDO0FBRXJDLHNEQUErRDtBQVUvRCwwREFBNEU7QUFFNUUsa0NBQTBDO0FBTTFDLDBDQUF5RDtBQUV6RCx5Q0FBMkM7QUFFM0MsMkNBQXNGO0FBRXRGLGlEQUFpRDtBQUVqRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQW1DRSx1QkFDVSxnQkFBa0MsRUFDbEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsZUFBaUM7UUFOM0MsaUJBdUNDO1FBdENTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2QsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVMLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUM7Z0JBQzlDLEtBQUssQ0FBQztZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FB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QUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFYekMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FxQzRCLHVCQUFnQjtZQUMxQixhQUFNO1lBQ1AsdUJBQWM7WUFDYixlQUFNO1lBQ0kseUJBQWdCO1lBQ2pCLG9DQUFnQjtPQXpDaEMsYUFBYSxDQTBkekI7SUFBRCxvQkFBQztDQUFBLEFBMWRELElBMGRDO0FBMWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBOZ01vZHVsZSwgTmdab25lLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbi8vIGltcG9ydCB7IFBhZ2UsIFBvaW50IH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuLy8gaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBJQW5zd2VyLCBJUXVlc3Rpb24sIFF1ZXN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vcXVlc3Rpb25zLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcblxuLy8gaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuLy8gY29uc3QgdG5zZnggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWVmZmVjdHNcIik7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1wbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGxheS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uTGFiZWxcIikgcXVlc3Rpb25MYWJlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImltYWdlXCIpIGltYWdlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMFwiKSBhbnN3ZXJJbWcwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMVwiKSBhbnN3ZXJJbWcxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMlwiKSBhbnN3ZXJJbWcyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nM1wiKSBhbnN3ZXJJbWczOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwwXCIpIGFuc3dlckxhYmVsMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMVwiKSBhbnN3ZXJMYWJlbDE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDJcIikgYW5zd2VyTGFiZWwyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwzXCIpIGFuc3dlckxhYmVsMzogRWxlbWVudFJlZjtcblxuICBhbnN3ZXJJMDogSW1hZ2U7XG4gIGFuc3dlckkxOiBJbWFnZTtcbiAgYW5zd2VySTI6IEltYWdlO1xuICBhbnN3ZXJJMzogSW1hZ2U7XG5cbiAgX3F1ZXN0aW9uTGFiZWw6IExhYmVsO1xuICBhbnN3ZXJMMDogTGFiZWw7XG4gIGFuc3dlckwxOiBMYWJlbDtcbiAgYW5zd2VyTDI6IExhYmVsO1xuICBhbnN3ZXJMMzogTGFiZWw7XG5cbiAgbW9kZTogc3RyaW5nO1xuICBxdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj47XG4gIHF1ZXN0aW9uQ3VycmVudDogSVF1ZXN0aW9uO1xuICBxdWVzdGlvbkluZGV4O1xuICBzY29yZTtcbiAgcXVlc3Rpb25JbmRpY2F0b3I6IHN0cmluZztcbiAgY29ycmVjdGlvbjtcbiAgcGxheWVyQW5zd2VyczogQXJyYXk8bnVtYmVyPjtcbiAgZ29vZEFuc3dlcjogbnVtYmVyO1xuICBwbGF5ZXJBbnN3ZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5jb3JyZWN0aW9uID0gcGFyYW1zLmNvcnJlY3Rpb247XG4gICAgICAgIHRoaXMubW9kZSA9IHBhcmFtcy5tb2RlO1xuICAgICAgfSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgY2FzZSBcImdlb1wiOlxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5nZW9RdWVzdGlvbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImdlbmVyYWxcIjpcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2UuZ2VuZXJhbFF1ZXN0aW9ucztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2NpZW5jZVwiOlxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5zY2llbmNlUXVlc3Rpb25zO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zWzBdO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucXVlc3Rpb25JbmRpY2F0b3IgPSBgUXVlc3Rpb24gJHt0aGlzLnF1ZXN0aW9uSW5kZXggKyAxfWA7XG5cbiAgICAvLyBpbml0IHRoZSBwbGF5ZXJzIGFuc3dlcnMgZXZlcnkgcWNtXG4gICAgaWYgKHRoaXMuY29ycmVjdGlvbiA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICB0aGlzLnF1ZXN0aW9uU2VydmljZS5wbGF5ZXJBbnN3ZXJzID0gW107XG4gICAgfVxuXG4gIH1cblxuICBuZXh0Q29ycmVjdGlvbigpIHtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kZXgrKztcblxuICAgIC8vIGdvIGhvbWUgYWZ0ZXIgZW5kIG9mIGNvcnJlY3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID49IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Njb3JlJ10pXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuXG4gICAgdGhpcy5hbmltYXRlUXVlc3Rpb25JbmRpY2F0b3IoKTtcblxuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcblxuICAgIHRoaXMuZ29vZEFuc3dlciA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF0uYTtcbiAgICB0aGlzLnBsYXllckFuc3dlciA9IHRoaXMucGxheWVyQW5zd2Vyc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuICAgIC8vIHN3aXRjaCB0aGUgcGxheWVyIGFuc3dlciBmb3IgZmlyc3QgcXVlc3Rpb24gXCJuZWVkIHRvIGJlIG9uIG5nSW5pdCgpXCJcblxuICAgIHRoaXMudGVzdFBsYXllckFuc3dlcigpO1xuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHRlc3RQbGF5ZXJBbnN3ZXIoKSB7XG5cbiAgICAvLyByZWxvYWQgb3JpZ2luYWwgaW1hZ2VzXG4gICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL2Fuc3dlcjBcIjtcbiAgICB0aGlzLmFuc3dlckkxLnNyYyA9IFwicmVzOi8vYW5zd2VyMVwiO1xuICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9hbnN3ZXIyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL2Fuc3dlcjNcIjtcblxuICAgIHN3aXRjaCAodGhpcy5wbGF5ZXJBbnN3ZXIpIHtcbiAgICAgIGNhc2UgMDpcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gaWYgbm90IGFuZHJvaWQgcmV0dXJuXG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9ncmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5ncmlkTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX2dyaWRMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwgPSA8TGFiZWw+dGhpcy5xdWVzdGlvbkxhYmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gX3F1ZXN0aW9uLnRvcCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscyAvIDQ7XG5cbiAgICBjb25zdCBfcXVlc3Rpb25JbWcgPSA8SW1hZ2U+dGhpcy5pbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnN0IHggPSBfcXVlc3Rpb25JbWcuZ2V0QWN0dWFsU2l6ZSgpLmhlaWdodDtcblxuICAgIHRoaXMuYW5zd2VySTAgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMSA9IDxJbWFnZT50aGlzLmFuc3dlckltZzEubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkyID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTMgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWczLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBRdWl6IExvZ2ljXG5cbiAgICB0aGlzLmFuc3dlckwwID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMSA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDIgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwzID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwzLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBvcmllbnRhdGlvbi5kaXNhYmxlUm90YXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNvcnJlY3Rpb24gPT09IFwidHJ1ZVwiKSB7XG5cbiAgICAgIHRoaXMuYW5zd2VySTAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMuYW5zd2VySTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMuYW5zd2VySTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMuYW5zd2VySTMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMucGxheWVyQW5zd2VycyA9IHRoaXMucXVlc3Rpb25TZXJ2aWNlLnBsYXllckFuc3dlcnM7XG5cbiAgICAgIHRoaXMuZ29vZEFuc3dlciA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF0uYTtcbiAgICAgIHRoaXMucGxheWVyQW5zd2VyID0gdGhpcy5wbGF5ZXJBbnN3ZXJzW3RoaXMucXVlc3Rpb25JbmRleF07XG4gICAgICAvLyBzd2l0Y2ggdGhlIHBsYXllciBhbnN3ZXIgZm9yIGZpcnN0IHF1ZXN0aW9uIFwibmVlZCB0byBiZSBvbiBuZ0luaXQoKVwiXG4gICAgICB0aGlzLnRlc3RQbGF5ZXJBbnN3ZXIoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XS5wbGF5ZXJBbnN3ZXJcbiAgfVxuXG4gIGFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpIHtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kaWNhdG9yID0gYFF1ZXN0aW9uICR7dGhpcy5xdWVzdGlvbkluZGV4ICsgMX1gO1xuICB9XG5cbiAgbmV4dFF1ZXN0aW9uKGFuc3dlcjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAvLyB0b2RvMVxuICAgIC8vIHRoaXMucGxheXdlckFuc3dlclRlbXAgPSB7IGlkOiB0aGlzLnF1ZXN0aW9uSW5kZXgsIHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uQ3VycmVudCwgcGxheWVyQW5zd2VyOiBhbnN3ZXIgfTtcbiAgICAvLyB0aGlzLnBsYXllckFuc3dlcnMucHVzaCh0aGlzLnBsYXl3ZXJBbnN3ZXJUZW1wKTtcblxuICAgIHRoaXMuYW5zd2VySTAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcblxuICAgIGlmICh0aGlzLmNvcnJlY3Rpb24gPT09IFwiZmFsc2VcIikge1xuICAgICAgdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2Vycy5wdXNoKGFuc3dlcik7XG4gICAgfVxuICAgIHN3aXRjaCAoYW5zd2VyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjAoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjMoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSBRdWVzdGlvbiBJbmZvcm1hdGlvbiBhZnRlciBlbmQgb2YgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHRRdWVzdGlvbkxvZ2ljKGFuc3dlcik7XG4gICAgfSwgMTIwMCk7XG5cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsLmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5leHRRdWVzdGlvbkxvZ2ljKF9hbnN3ZXI6IG51bWJlcikge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5leHQgcXVlc3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4IDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAvLyB0b2RvIGZpbmlzaCB0ZXN0IGRlYnVnXG4gICAgICAvLyBpZiBnb29kIGFuc3dlclxuICAgICAgaWYgKHRoaXMucXVlc3Rpb25DdXJyZW50LmEgPT09IF9hbnN3ZXIpIHtcblxuICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZG8gaWYgd2FzIGhlcmVcblxuICAgICAgLy8gdG9kbyBUZXh0Q2hhbmdlIEFuaW1hdGlvblxuXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgdGhpcy5xdWVzdGlvbkluZGV4Kys7XG4gICAgICB0aGlzLmFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpO1xuICAgICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuICAgICAgLy8gfSwgMTAwMCk7XG5cbiAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuc3dlckkwLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigwKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5zd2VySTIuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDIpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFuc3dlckkzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigzKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgb2YgcXVlc3Rpb24gYW5kIHNob3cgaXQgYWZ0ZXIgZmFkZVxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCBoZXJlXG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyB9LCAxMjAwKTtcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPj0gdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID49IDIpIHtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Njb3JlJ10pXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKGAvc2NvcmUvJHt0aGlzLnNjb3JlfS8ke3RoaXMubW9kZX1gLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIHRvZG8gcXVlc3Rpb25zIGZpbmlzaGVkXG5cbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKGAvc2NvcmUvJHt0aGlzLnNjb3JlfS8ke3RoaXMubW9kZX1gLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVBbnN3ZXIwKCkge1xuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcblxuICAgIH0sIDEyMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMSgpIHtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgfSwgMTIwMCk7XG5cbiAgfVxuXG4gIGFuaW1hdGVBbnN3ZXIyKCkge1xuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMjAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjMoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEyMDApO1xuICB9XG5cbn1cbiJdfQ==