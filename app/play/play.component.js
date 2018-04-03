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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCwwREFBNEQ7QUFFNUQscUNBQTZDO0FBSTdDLHNEQUErRDtBQVUvRCwwREFBNEU7QUFJNUUsa0NBQTBDO0FBSTFDLGtFQUEyRjtBQUkzRiwwQ0FBeUQ7QUFFekQseUNBQTJDO0FBRTNDLDJDQUFzRjtBQUl0RixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUU5QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQWtDRSx1QkFDVSxZQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsZUFBaUM7UUFQM0MsaUJBNEJDO1FBM0JTLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFFOUQsSUFBSSxD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T0F6Q2hDLGFBQWEsQ0Ewa0J6QjtJQUFELG9CQUFDO0NBQUEsQUExa0JELElBMGtCQztBQTFrQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IGlzQW5kcm9pZCwgc2NyZWVuIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cblxuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSwgUG9pbnQgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IElBbnN3ZXIsIElRdWVzdGlvbiwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4uL3Jlc3VsdC1kaWFsb2cvcmVzdWx0LWRpYWxvZy5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuXG5cbmNvbnN0IHRuc2Z4ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1lZmZlY3RzXCIpO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtcGxheVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BsYXkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BsYXkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJncmlkTGF5b3V0XCIpIGdyaWRMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkxhYmVsXCIpIHF1ZXN0aW9uTGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzBcIikgYW5zd2VySW1nMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzFcIikgYW5zd2VySW1nMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzJcIikgYW5zd2VySW1nMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzNcIikgYW5zd2VySW1nMzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMFwiKSBhbnN3ZXJMYWJlbDA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDFcIikgYW5zd2VyTGFiZWwxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwyXCIpIGFuc3dlckxhYmVsMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsM1wiKSBhbnN3ZXJMYWJlbDM6IEVsZW1lbnRSZWY7XG5cbiAgYW5zd2VySTA6IEltYWdlO1xuICBhbnN3ZXJJMTogSW1hZ2U7XG4gIGFuc3dlckkyOiBJbWFnZTtcbiAgYW5zd2VySTM6IEltYWdlO1xuXG4gIF9xdWVzdGlvbkxhYmVsOiBMYWJlbDtcbiAgYW5zd2VyTDA6IExhYmVsO1xuICBhbnN3ZXJMMTogTGFiZWw7XG4gIGFuc3dlckwyOiBMYWJlbDtcbiAgYW5zd2VyTDM6IExhYmVsO1xuXG4gIHF1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPjtcbiAgcXVlc3Rpb25DdXJyZW50OiBJUXVlc3Rpb247XG4gIHF1ZXN0aW9uSW5kZXg7XG4gIHNjb3JlO1xuICBxdWVzdGlvbkluZGljYXRvcjogc3RyaW5nO1xuICBjb3JyZWN0aW9uO1xuICBwbGF5ZXJBbnN3ZXJzOiBBcnJheTxudW1iZXI+O1xuICBnb29kQW5zd2VyOiBudW1iZXI7XG4gIHBsYXllckFuc3dlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBxdWVzdGlvblNlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2UpIHtcblxuICAgIHRoaXMucXVlc3Rpb25zID0gcXVlc3Rpb25TZXJ2aWNlLnF1ZXN0aW9ucztcbiAgICB0aGlzLnF1ZXN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbMF07XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5xdWVzdGlvbkluZGljYXRvciA9IGBRdWVzdGlvbiAke3RoaXMucXVlc3Rpb25JbmRleCArIDF9YDtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuY29ycmVjdGlvbiA9IHBhcmFtcy5jb3JyZWN0aW9uO1xuICAgICAgfSk7XG5cbiAgICAvLyBzZWNvbmQgd2F5IHRvIGZpbmQgaWYgY29ycmVjdGlvbiBtb2RlXG4gICAgaWYgKHRoaXMucXVlc3Rpb25TZXJ2aWNlLnBsYXllckFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJtb2RlIGNvcnJlY3RvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJtb2RlIE5PIGNvcnJlY3RvblwiKTtcbiAgICB9XG5cbiAgICAvLyBjb3JyZWN0aW9uIGRlYnVnIHZhbHVlXG4gIH1cblxuICBuZXh0Q29ycmVjdGlvbigpIHtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kZXgrKztcbiAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF07XG5cbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG5cbiAgICB0aGlzLmdvb2RBbnN3ZXIgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdLmE7XG4gICAgdGhpcy5wbGF5ZXJBbnN3ZXIgPSB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAvLyBzd2l0Y2ggdGhlIHBsYXllciBhbnN3ZXIgZm9yIGZpcnN0IHF1ZXN0aW9uIFwibmVlZCB0byBiZSBvbiBuZ0luaXQoKVwiXG4gICAgc3dpdGNoICh0aGlzLnBsYXllckFuc3dlcikge1xuICAgICAgY2FzZSAwOlxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8vIGlmIG5vdCBhbmRyb2lkIHJldHVyblxuICAgIGlmICghaXNBbmRyb2lkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XG4gICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfZ3JpZExheW91dCA9IDxHcmlkTGF5b3V0PnRoaXMuZ3JpZExheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9ncmlkTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsID0gPExhYmVsPnRoaXMucXVlc3Rpb25MYWJlbC5uYXRpdmVFbGVtZW50O1xuICAgIC8vIF9xdWVzdGlvbi50b3AgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMgLyA0O1xuXG4gICAgY29uc3QgX3F1ZXN0aW9uSW1nID0gPEltYWdlPnRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zdCB4ID0gX3F1ZXN0aW9uSW1nLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG5cbiAgICB0aGlzLmFuc3dlckkwID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTEgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMiA9IDxJbWFnZT50aGlzLmFuc3dlckltZzIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkzID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMy5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuYW5zd2VySTApO1xuICAgIC8vIFF1aXogTG9naWNcblxuICAgIHRoaXMuYW5zd2VyTDAgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDAubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwxID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMiA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDMgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDMubmF0aXZlRWxlbWVudDtcblxuICAgIG9yaWVudGF0aW9uLmRpc2FibGVSb3RhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY29ycmVjdGlvbiA9PT0gXCJ0cnVlXCIpIHtcblxuICAgICAgdGhpcy5hbnN3ZXJJMC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5wbGF5ZXJBbnN3ZXJzID0gdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2VycztcblxuICAgICAgdGhpcy5nb29kQW5zd2VyID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XS5hO1xuICAgICAgdGhpcy5wbGF5ZXJBbnN3ZXIgPSB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAgIC8vIHN3aXRjaCB0aGUgcGxheWVyIGFuc3dlciBmb3IgZmlyc3QgcXVlc3Rpb24gXCJuZWVkIHRvIGJlIG9uIG5nSW5pdCgpXCJcbiAgICAgIHN3aXRjaCAodGhpcy5wbGF5ZXJBbnN3ZXIpIHtcbiAgICAgICAgY2FzZSAwOlxuXG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyQW5zd2VyID09PSB0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2luY29ycmVjdFwiO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyQW5zd2VyID09PSB0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2luY29ycmVjdFwiO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gdGhpcy5wbGF5ZXJBbnN3ZXJzW3RoaXMucXVlc3Rpb25JbmRleF0ucGxheWVyQW5zd2VyXG4gIH1cblxuICBhbmltYXRlUXVlc3Rpb25JbmRpY2F0b3IoKSB7XG4gICAgdGhpcy5xdWVzdGlvbkluZGljYXRvciA9IGBRdWVzdGlvbiAke3RoaXMucXVlc3Rpb25JbmRleCArIDF9YDtcbiAgfVxuXG4gIG5leHRRdWVzdGlvbihhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuXG4gICAgLy8gdG9kbzFcbiAgICAvLyB0aGlzLnBsYXl3ZXJBbnN3ZXJUZW1wID0geyBpZDogdGhpcy5xdWVzdGlvbkluZGV4LCBxdWVzdGlvbjogdGhpcy5xdWVzdGlvbkN1cnJlbnQsIHBsYXllckFuc3dlcjogYW5zd2VyIH07XG4gICAgLy8gdGhpcy5wbGF5ZXJBbnN3ZXJzLnB1c2godGhpcy5wbGF5d2VyQW5zd2VyVGVtcCk7XG5cbiAgICB0aGlzLmFuc3dlckkwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMS5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG5cbiAgICBpZiAodGhpcy5jb3JyZWN0aW9uID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHRoaXMucXVlc3Rpb25TZXJ2aWNlLnBsYXllckFuc3dlcnMucHVzaChhbnN3ZXIpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMucGxheWVyQW5zd2Vycyk7XG5cbiAgICBzd2l0Y2ggKGFuc3dlcikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIwKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjEoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgUXVlc3Rpb24gSW5mb3JtYXRpb24gYWZ0ZXIgZW5kIG9mIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0UXVlc3Rpb25Mb2dpYyhhbnN3ZXIpO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBuZXh0UXVlc3Rpb25Mb2dpYyhfYW5zd2VyOiBudW1iZXIpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBuZXh0IHF1ZXN0aW9uXG4gICAgaWYgKHRoaXMucXVlc3Rpb25JbmRleCA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcblxuICAgICAgLy8gdG9kbyBmaW5pc2ggdGVzdCBkZWJ1Z1xuICAgICAgLy8gaWYgZ29vZCBhbnN3ZXJcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uQ3VycmVudC5hID09PSBfYW5zd2VyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieHh4IGdvb2QgYW5zd2VyXCIpO1xuICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInh4eCBiYWQgYW5zd2VyXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID49IDIpIHtcblxuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvc2NvcmUnXSlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoYC9zY29yZS8ke3RoaXMuc2NvcmV9YCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZG8gVGV4dENoYW5nZSBBbmltYXRpb25cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25JbmRleCsrO1xuICAgICAgICB0aGlzLmFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF07XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IG9mIHF1ZXN0aW9uIGFuZCBzaG93IGl0IGFmdGVyIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IGhlcmVcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9xdWVzdGlvbkxhYmVsLmFuaW1hdGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYW5zd2VySTAuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuc3dlckkxLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbnN3ZXJJMi5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5zd2VySTMuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMyk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9LCAxMjAwKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIHRvZG8gcXVlc3Rpb25zIGZpbmlzaGVkXG5cbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKGAvc2NvcmUvJHt0aGlzLnNjb3JlfWAsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjAoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjEoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjIoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjMoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbn1cbiJdfQ==