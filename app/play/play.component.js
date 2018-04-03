"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var platform_1 = require("platform");
var router_1 = require("nativescript-angular/router");
var questions_service_1 = require("../questions.service");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_2 = require("@angular/router");
var application = require("application");
var application_1 = require("application");
var tnsfx = require("nativescript-effects");
var orientation = require("nativescript-orientation");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(modalService, viewContainerRef, ngZone, route, router, routerExtensions, questionService) {
        var _this = this;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.questionService = questionService;
        this.questions = questionService.questions;
        this.questionIndex = 0;
        this.questionCurrent = this.questions[0];
        this.score = 0;
        this.questionIndicator = "Question " + (this.questionIndex + 1);
        this.route.params
            .forEach(function (params) {
            _this.correction = params.correction;
        });
        // second way to find if correction mode
        if (this.questionService.playerAnswers.length > 0) {
            console.log("mode correcton");
        }
        else {
            console.log("mode NO correcton");
        }
        // correction debug value
    }
    PlayComponent.prototype.nextCorrection = function () {
        this.questionIndex++;
        this.questionCurrent = this.questions[this.questionIndex];
        this.animateQuestionIndicator();
        this.answerL0.className = "answer_label";
        this.answerL1.className = "answer_label";
        this.answerL2.className = "answer_label";
        this.answerL3.className = "answer_label";
        this.goodAnswer = this.questions[this.questionIndex].a;
        this.playerAnswer = this.playerAnswers[this.questionIndex];
        // switch the player answer for first question "need to be on ngInit()"
        switch (this.playerAnswer) {
            case 0:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL0.className = "answer_label_correct";
                }
                else {
                    this.answerL0.className = "answer_label_incorrect";
                    switch (this.goodAnswer) {
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 1:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL1.className = "answer_label_correct";
                }
                else {
                    this.answerL1.className = "answer_label_incorrect";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 2:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL2.className = "answer_label_correct";
                }
                else {
                    this.answerL2.className = "answer_label_incorrect";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            break;
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 3:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL3.className = "answer_label_correct";
                }
                else {
                    this.answerL3.className = "answer_label_incorrect";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            break;
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
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
    PlayComponent.prototype.goHome = function () {
        this.routerExtensions.navigate(["home"], { clearHistory: true });
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
        // console.dir(this.answerI0);
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
            switch (this.playerAnswer) {
                case 0:
                    if (this.playerAnswer === this.goodAnswer) {
                        this.answerL0.className = "answer_label_correct";
                    }
                    else {
                        this.answerL0.className = "answer_label_incorrect";
                        switch (this.goodAnswer) {
                            case 1:
                                this.answerL1.className = "answer_label_correct";
                                break;
                            case 2:
                                this.answerL2.className = "answer_label_correct";
                                break;
                            case 3:
                                this.answerL3.className = "answer_label_correct";
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case 1:
                    if (this.playerAnswer === this.goodAnswer) {
                        this.answerL1.className = "answer_label_correct";
                    }
                    else {
                        this.answerL1.className = "answer_label_incorrect";
                        switch (this.goodAnswer) {
                            case 0:
                                this.answerL0.className = "answer_label_correct";
                                break;
                            case 2:
                                this.answerL2.className = "answer_label_correct";
                                break;
                            case 3:
                                this.answerL3.className = "answer_label_correct";
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case 2:
                    if (this.playerAnswer === this.goodAnswer) {
                        this.answerL2.className = "answer_label_correct";
                    }
                    else {
                        this.answerL2.className = "answer_label_incorrect";
                        switch (this.goodAnswer) {
                            case 0:
                                this.answerL0.className = "answer_label_correct";
                                break;
                            case 1:
                                this.answerL1.className = "answer_label_correct";
                                break;
                            case 3:
                                this.answerL3.className = "answer_label_correct";
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case 3:
                    if (this.playerAnswer === this.goodAnswer) {
                        this.answerL3.className = "answer_label_correct";
                    }
                    else {
                        this.answerL3.className = "answer_label_incorrect";
                        switch (this.goodAnswer) {
                            case 0:
                                this.answerL0.className = "answer_label_correct";
                                break;
                            case 1:
                                this.answerL1.className = "answer_label_correct";
                                break;
                            case 2:
                                this.answerL2.className = "answer_label_correct";
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                default:
                    break;
            }
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
        // console.dir(this.playerAnswers);
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
            // todo finish test debug
            // if good answer
            if (this.questionCurrent.a === _answer) {
                // console.log("xxx good answer");
                this.score++;
            }
            else {
                // console.log("xxx bad answer");
            }
            if (this.questionIndex >= 2) {
                // this.routerExtensions.navigate(['/score'])
                this.routerExtensions.navigateByUrl("/score/" + this.score, { clearHistory: true });
            }
            // todo TextChange Animation
            setTimeout(function () {
                _this._questionLabel.animate({
                    opacity: 0,
                    duration: 200,
                    curve: enums_1.AnimationCurve.easeInOut
                });
                _this.questionIndex++;
                _this.animateQuestionIndicator();
                _this.questionCurrent = _this.questions[_this.questionIndex];
            }, 1000);
            // change the text of question and show it after fade
            setTimeout(function () {
                _this.ngZone.run(function () {
                    // Do whatever you want here
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
            // todo questions finished
            this.routerExtensions.navigateByUrl("/score/" + this.score, { clearHistory: true });
        }
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
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            core_1.NgZone,
            router_2.ActivatedRoute,
            router_2.Router,
            router_1.RouterExtensions,
            questions_service_1.QuestionsService])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCwwREFBNEQ7QUFFNUQscUNBQTZDO0FBSTdDLHNEQUErRDtBQVUvRCwwREFBNEU7QUFJNUUsa0NBQTBDO0FBSTFDLGtFQUEyRjtBQUkzRiwwQ0FBeUQ7QUFFekQseUNBQTJDO0FBRTNDLDJDQUFzRjtBQUl0RixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUU5QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQWtDRSx1QkFDVSxZQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsZUFBaUM7UUFQM0MsaUJBNEJDO1FBM0JTLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFFOUQsSUFBSSxD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O1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FvQ3dCLGlDQUFrQjtZQUNkLHVCQUFnQjtZQUMxQixhQUFNO1lBQ1AsdUJBQWM7WUFDYixlQUFNO1lBQ0kseUJBQWdCO1lBQ2pCLG9DQUFnQjtPQXpDaEMsYUFBYSxDQStrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9rQkQsSUEra0JDO0FBL2tCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQsIE5nWm9uZSwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgaXNBbmRyb2lkLCBzY3JlZW4gfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuXG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlLCBQb2ludCB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSUFuc3dlciwgSVF1ZXN0aW9uLCBRdWVzdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3F1ZXN0aW9ucy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVUeXBlcyB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuXG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hbmltYXRpb24vYW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN1bHREaWFsb2dDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzdWx0LWRpYWxvZy9yZXN1bHQtZGlhbG9nLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5cblxuY29uc3QgdG5zZnggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWVmZmVjdHNcIik7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1wbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGxheS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uTGFiZWxcIikgcXVlc3Rpb25MYWJlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImltYWdlXCIpIGltYWdlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMFwiKSBhbnN3ZXJJbWcwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMVwiKSBhbnN3ZXJJbWcxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMlwiKSBhbnN3ZXJJbWcyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nM1wiKSBhbnN3ZXJJbWczOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwwXCIpIGFuc3dlckxhYmVsMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMVwiKSBhbnN3ZXJMYWJlbDE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDJcIikgYW5zd2VyTGFiZWwyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwzXCIpIGFuc3dlckxhYmVsMzogRWxlbWVudFJlZjtcblxuICBhbnN3ZXJJMDogSW1hZ2U7XG4gIGFuc3dlckkxOiBJbWFnZTtcbiAgYW5zd2VySTI6IEltYWdlO1xuICBhbnN3ZXJJMzogSW1hZ2U7XG5cbiAgX3F1ZXN0aW9uTGFiZWw6IExhYmVsO1xuICBhbnN3ZXJMMDogTGFiZWw7XG4gIGFuc3dlckwxOiBMYWJlbDtcbiAgYW5zd2VyTDI6IExhYmVsO1xuICBhbnN3ZXJMMzogTGFiZWw7XG5cbiAgcXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+O1xuICBxdWVzdGlvbkN1cnJlbnQ6IElRdWVzdGlvbjtcbiAgcXVlc3Rpb25JbmRleDtcbiAgc2NvcmU7XG4gIHF1ZXN0aW9uSW5kaWNhdG9yOiBzdHJpbmc7XG4gIGNvcnJlY3Rpb247XG4gIHBsYXllckFuc3dlcnM6IEFycmF5PG51bWJlcj47XG4gIGdvb2RBbnN3ZXI6IG51bWJlcjtcbiAgcGxheWVyQW5zd2VyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2UucXVlc3Rpb25zO1xuICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDA7XG4gICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1swXTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kaWNhdG9yID0gYFF1ZXN0aW9uICR7dGhpcy5xdWVzdGlvbkluZGV4ICsgMX1gO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5jb3JyZWN0aW9uID0gcGFyYW1zLmNvcnJlY3Rpb247XG4gICAgICB9KTtcblxuICAgIC8vIHNlY29uZCB3YXkgdG8gZmluZCBpZiBjb3JyZWN0aW9uIG1vZGVcbiAgICBpZiAodGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGUgY29ycmVjdG9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGUgTk8gY29ycmVjdG9uXCIpO1xuICAgIH1cblxuICAgIC8vIGNvcnJlY3Rpb24gZGVidWcgdmFsdWVcbiAgfVxuXG4gIG5leHRDb3JyZWN0aW9uKCkge1xuICAgIHRoaXMucXVlc3Rpb25JbmRleCsrO1xuICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcblxuICAgIHRoaXMuYW5pbWF0ZVF1ZXN0aW9uSW5kaWNhdG9yKCk7XG5cbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG5cbiAgICB0aGlzLmdvb2RBbnN3ZXIgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdLmE7XG4gICAgdGhpcy5wbGF5ZXJBbnN3ZXIgPSB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAvLyBzd2l0Y2ggdGhlIHBsYXllciBhbnN3ZXIgZm9yIGZpcnN0IHF1ZXN0aW9uIFwibmVlZCB0byBiZSBvbiBuZ0luaXQoKVwiXG4gICAgc3dpdGNoICh0aGlzLnBsYXllckFuc3dlcikge1xuICAgICAgY2FzZSAwOlxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gaWYgbm90IGFuZHJvaWQgcmV0dXJuXG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9ncmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5ncmlkTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX2dyaWRMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwgPSA8TGFiZWw+dGhpcy5xdWVzdGlvbkxhYmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gX3F1ZXN0aW9uLnRvcCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscyAvIDQ7XG5cbiAgICBjb25zdCBfcXVlc3Rpb25JbWcgPSA8SW1hZ2U+dGhpcy5pbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnN0IHggPSBfcXVlc3Rpb25JbWcuZ2V0QWN0dWFsU2l6ZSgpLmhlaWdodDtcblxuICAgIHRoaXMuYW5zd2VySTAgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMSA9IDxJbWFnZT50aGlzLmFuc3dlckltZzEubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkyID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTMgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWczLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gY29uc29sZS5kaXIodGhpcy5hbnN3ZXJJMCk7XG4gICAgLy8gUXVpeiBMb2dpY1xuXG4gICAgdGhpcy5hbnN3ZXJMMCA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDEgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDEubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwyID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMyA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMy5uYXRpdmVFbGVtZW50O1xuXG4gICAgb3JpZW50YXRpb24uZGlzYWJsZVJvdGF0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jb3JyZWN0aW9uID09PSBcInRydWVcIikge1xuXG4gICAgICB0aGlzLmFuc3dlckkwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgICB0aGlzLmFuc3dlckkxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgICB0aGlzLmFuc3dlckkyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgICB0aGlzLmFuc3dlckkzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgICB0aGlzLnBsYXllckFuc3dlcnMgPSB0aGlzLnF1ZXN0aW9uU2VydmljZS5wbGF5ZXJBbnN3ZXJzO1xuXG4gICAgICB0aGlzLmdvb2RBbnN3ZXIgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdLmE7XG4gICAgICB0aGlzLnBsYXllckFuc3dlciA9IHRoaXMucGxheWVyQW5zd2Vyc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuICAgICAgLy8gc3dpdGNoIHRoZSBwbGF5ZXIgYW5zd2VyIGZvciBmaXJzdCBxdWVzdGlvbiBcIm5lZWQgdG8gYmUgb24gbmdJbml0KClcIlxuICAgICAgc3dpdGNoICh0aGlzLnBsYXllckFuc3dlcikge1xuICAgICAgICBjYXNlIDA6XG5cbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyQW5zd2VyID09PSB0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2luY29ycmVjdFwiO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XS5wbGF5ZXJBbnN3ZXJcbiAgfVxuXG4gIGFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpIHtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kaWNhdG9yID0gYFF1ZXN0aW9uICR7dGhpcy5xdWVzdGlvbkluZGV4ICsgMX1gO1xuICB9XG5cbiAgbmV4dFF1ZXN0aW9uKGFuc3dlcjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAvLyB0b2RvMVxuICAgIC8vIHRoaXMucGxheXdlckFuc3dlclRlbXAgPSB7IGlkOiB0aGlzLnF1ZXN0aW9uSW5kZXgsIHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uQ3VycmVudCwgcGxheWVyQW5zd2VyOiBhbnN3ZXIgfTtcbiAgICAvLyB0aGlzLnBsYXllckFuc3dlcnMucHVzaCh0aGlzLnBsYXl3ZXJBbnN3ZXJUZW1wKTtcblxuICAgIHRoaXMuYW5zd2VySTAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcblxuICAgIGlmICh0aGlzLmNvcnJlY3Rpb24gPT09IFwiZmFsc2VcIikge1xuICAgICAgdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2Vycy5wdXNoKGFuc3dlcik7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5kaXIodGhpcy5wbGF5ZXJBbnN3ZXJzKTtcblxuICAgIHN3aXRjaCAoYW5zd2VyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjAoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjMoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSBRdWVzdGlvbiBJbmZvcm1hdGlvbiBhZnRlciBlbmQgb2YgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHRRdWVzdGlvbkxvZ2ljKGFuc3dlcik7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIG5leHRRdWVzdGlvbkxvZ2ljKF9hbnN3ZXI6IG51bWJlcikge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5leHQgcXVlc3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4IDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAvLyB0b2RvIGZpbmlzaCB0ZXN0IGRlYnVnXG4gICAgICAvLyBpZiBnb29kIGFuc3dlclxuICAgICAgaWYgKHRoaXMucXVlc3Rpb25DdXJyZW50LmEgPT09IF9hbnN3ZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4eHggZ29vZCBhbnN3ZXJcIik7XG4gICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieHh4IGJhZCBhbnN3ZXJcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPj0gMikge1xuXG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9zY29yZSddKVxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChgL3Njb3JlLyR7dGhpcy5zY29yZX1gLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gdG9kbyBUZXh0Q2hhbmdlIEFuaW1hdGlvblxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcXVlc3Rpb25MYWJlbC5hbmltYXRlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4Kys7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVF1ZXN0aW9uSW5kaWNhdG9yKCk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgb2YgcXVlc3Rpb24gYW5kIHNob3cgaXQgYWZ0ZXIgZmFkZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgaGVyZVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbnN3ZXJJMC5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5zd2VySTEuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuc3dlckkyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbnN3ZXJJMy5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sIDEyMDApO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gdG9kbyBxdWVzdGlvbnMgZmluaXNoZWRcblxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoYC9zY29yZS8ke3RoaXMuc2NvcmV9YCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG5cbiAgICB9XG4gIH1cblxuICBhbmltYXRlQW5zd2VyMCgpIHtcbiAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMSgpIHtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMigpIHtcbiAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMygpIHtcbiAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICB9LCAxMDAwKTtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxufVxuIl19