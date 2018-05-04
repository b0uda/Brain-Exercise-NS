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
var orientation = require("nativescript-orientation");
var admob = require("nativescript-admob");
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
            // adds intertisiel
            if (this.questionIndex === 8 || this.questionIndex === 18
                || this.questionIndex === 28 || this.questionIndex === 38) {
                admob.createInterstitial({
                    testing: true,
                    iosInterstitialId: "ca-app-pub-XXXXXX/YYYYY2",
                    androidInterstitialId: "ca-app-pub-3940256099942544/1033173712",
                    // Android automatically adds the connected device as test device with testing:true, iOS does not
                    iosTestDeviceIds: ["ce97330130c9047ce0d4430d37d713b2"],
                    keywords: ["keyword1", "keyword2"] // add keywords for ad targeting
                }).then(function () {
                    console.log("admob createInterstitial done");
                }, function (error) {
                    console.log("admob createInterstitial error: " + error);
                });
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
    PlayComponent.prototype.loadBanner = function () {
        setTimeout(function () {
            // Banner
            admob.createBanner({
                // if this 'view' property is not set, the banner is overlayed on the current top most view
                // view: "FlexBoxLayout",
                testing: true,
                size: admob.AD_SIZE.SMART_BANNER,
                iosBannerId: "ca-app-pub-XXXXXX/YYYYYY",
                androidBannerId: "ca-app-pub-3940256099942544/6300978111",
                // Android automatically adds the connected device as test device with testing:true, iOS does not
                iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
                margins: {
                    // if both are set, top wins
                    top: 50
                    // bottom: 50
                },
                keywords: ["keyword1", "keyword2"] // add keywords for ad targeting
            }).then(function () {
                console.log("admob createBanner done");
            }, function (error) {
                console.log("admob createBanner error: " + error);
            });
        }, 500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCwwREFBNEQ7QUFFNUQscUNBQXFDO0FBRXJDLHNEQUErRDtBQU8vRCwwREFBNEU7QUFFNUUsa0NBQTBDO0FBRzFDLDBDQUF5RDtBQUN6RCx5Q0FBMkM7QUFFM0MsMkNBQXNGO0FBRXRGLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRXhELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBUTFDO0lBbUNFLHVCQUNVLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxlQUFpQztRQU4zQyxpQkF1Q0M7UUF0Q1MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNkLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUwsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztnQkFDOUMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxTQUFT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QVU7Z0RBQUM7SUFDYjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUN2QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUN2QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUN2QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUNyQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUN6QjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUN6QjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUN6QjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQVh6QyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQXFDNEIsdUJBQWdCO1lBQzFCLGFBQU07WUFDUCx1QkFBYztZQUNiLGVBQU07WUFDSSx5QkFBZ0I7WUFDakIsb0NBQWdCO09BekNoQyxhQUFhLENBK2dCekI7SUFBRCxvQkFBQztDQUFBLEFBL2dCRCxJQStnQkM7QUEvZ0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBOZ01vZHVsZSwgTmdab25lLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSUFuc3dlciwgSVF1ZXN0aW9uLCBRdWVzdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3F1ZXN0aW9ucy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxudmFyIGFkbW9iID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hZG1vYlwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1wbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGxheS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uTGFiZWxcIikgcXVlc3Rpb25MYWJlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImltYWdlXCIpIGltYWdlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMFwiKSBhbnN3ZXJJbWcwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMVwiKSBhbnN3ZXJJbWcxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMlwiKSBhbnN3ZXJJbWcyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nM1wiKSBhbnN3ZXJJbWczOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwwXCIpIGFuc3dlckxhYmVsMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMVwiKSBhbnN3ZXJMYWJlbDE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDJcIikgYW5zd2VyTGFiZWwyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwzXCIpIGFuc3dlckxhYmVsMzogRWxlbWVudFJlZjtcblxuICBhbnN3ZXJJMDogSW1hZ2U7XG4gIGFuc3dlckkxOiBJbWFnZTtcbiAgYW5zd2VySTI6IEltYWdlO1xuICBhbnN3ZXJJMzogSW1hZ2U7XG5cbiAgX3F1ZXN0aW9uTGFiZWw6IExhYmVsO1xuICBhbnN3ZXJMMDogTGFiZWw7XG4gIGFuc3dlckwxOiBMYWJlbDtcbiAgYW5zd2VyTDI6IExhYmVsO1xuICBhbnN3ZXJMMzogTGFiZWw7XG5cbiAgbW9kZTogc3RyaW5nO1xuICBxdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj47XG4gIHF1ZXN0aW9uQ3VycmVudDogSVF1ZXN0aW9uO1xuICBxdWVzdGlvbkluZGV4O1xuICBzY29yZTtcbiAgcXVlc3Rpb25JbmRpY2F0b3I6IHN0cmluZztcbiAgY29ycmVjdGlvbjtcbiAgcGxheWVyQW5zd2VyczogQXJyYXk8bnVtYmVyPjtcbiAgZ29vZEFuc3dlcjogbnVtYmVyO1xuICBwbGF5ZXJBbnN3ZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5jb3JyZWN0aW9uID0gcGFyYW1zLmNvcnJlY3Rpb247XG4gICAgICAgIHRoaXMubW9kZSA9IHBhcmFtcy5tb2RlO1xuICAgICAgfSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgY2FzZSBcImdlb1wiOlxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5nZW9RdWVzdGlvbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImdlbmVyYWxcIjpcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2UuZ2VuZXJhbFF1ZXN0aW9ucztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2NpZW5jZVwiOlxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5zY2llbmNlUXVlc3Rpb25zO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zWzBdO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucXVlc3Rpb25JbmRpY2F0b3IgPSBgUXVlc3Rpb24gJHt0aGlzLnF1ZXN0aW9uSW5kZXggKyAxfWA7XG5cbiAgICAvLyBpbml0IHRoZSBwbGF5ZXJzIGFuc3dlcnMgZXZlcnkgcWNtXG4gICAgaWYgKHRoaXMuY29ycmVjdGlvbiA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICB0aGlzLnF1ZXN0aW9uU2VydmljZS5wbGF5ZXJBbnN3ZXJzID0gW107XG4gICAgfVxuXG4gIH1cblxuICBuZXh0Q29ycmVjdGlvbigpIHtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kZXgrKztcblxuICAgIC8vIGdvIGhvbWUgYWZ0ZXIgZW5kIG9mIGNvcnJlY3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID49IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Njb3JlJ10pXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuXG4gICAgdGhpcy5hbmltYXRlUXVlc3Rpb25JbmRpY2F0b3IoKTtcblxuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcblxuICAgIHRoaXMuZ29vZEFuc3dlciA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF0uYTtcbiAgICB0aGlzLnBsYXllckFuc3dlciA9IHRoaXMucGxheWVyQW5zd2Vyc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuICAgIC8vIHN3aXRjaCB0aGUgcGxheWVyIGFuc3dlciBmb3IgZmlyc3QgcXVlc3Rpb24gXCJuZWVkIHRvIGJlIG9uIG5nSW5pdCgpXCJcblxuICAgIHRoaXMudGVzdFBsYXllckFuc3dlcigpO1xuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHRlc3RQbGF5ZXJBbnN3ZXIoKSB7XG5cbiAgICAvLyByZWxvYWQgb3JpZ2luYWwgaW1hZ2VzXG4gICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL2Fuc3dlcjBcIjtcbiAgICB0aGlzLmFuc3dlckkxLnNyYyA9IFwicmVzOi8vYW5zd2VyMVwiO1xuICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9hbnN3ZXIyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL2Fuc3dlcjNcIjtcblxuICAgIHN3aXRjaCAodGhpcy5wbGF5ZXJBbnN3ZXIpIHtcbiAgICAgIGNhc2UgMDpcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gaWYgbm90IGFuZHJvaWQgcmV0dXJuXG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9ncmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5ncmlkTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX2dyaWRMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwgPSA8TGFiZWw+dGhpcy5xdWVzdGlvbkxhYmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gX3F1ZXN0aW9uLnRvcCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscyAvIDQ7XG5cbiAgICBjb25zdCBfcXVlc3Rpb25JbWcgPSA8SW1hZ2U+dGhpcy5pbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnN0IHggPSBfcXVlc3Rpb25JbWcuZ2V0QWN0dWFsU2l6ZSgpLmhlaWdodDtcblxuICAgIHRoaXMuYW5zd2VySTAgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMSA9IDxJbWFnZT50aGlzLmFuc3dlckltZzEubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkyID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTMgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWczLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBRdWl6IExvZ2ljXG5cbiAgICB0aGlzLmFuc3dlckwwID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMSA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDIgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwzID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwzLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBvcmllbnRhdGlvbi5kaXNhYmxlUm90YXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNvcnJlY3Rpb24gPT09IFwidHJ1ZVwiKSB7XG5cbiAgICAgIHRoaXMuYW5zd2VySTAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMuYW5zd2VySTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMuYW5zd2VySTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMuYW5zd2VySTMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICAgIHRoaXMucGxheWVyQW5zd2VycyA9IHRoaXMucXVlc3Rpb25TZXJ2aWNlLnBsYXllckFuc3dlcnM7XG5cbiAgICAgIHRoaXMuZ29vZEFuc3dlciA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF0uYTtcbiAgICAgIHRoaXMucGxheWVyQW5zd2VyID0gdGhpcy5wbGF5ZXJBbnN3ZXJzW3RoaXMucXVlc3Rpb25JbmRleF07XG4gICAgICAvLyBzd2l0Y2ggdGhlIHBsYXllciBhbnN3ZXIgZm9yIGZpcnN0IHF1ZXN0aW9uIFwibmVlZCB0byBiZSBvbiBuZ0luaXQoKVwiXG4gICAgICB0aGlzLnRlc3RQbGF5ZXJBbnN3ZXIoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XS5wbGF5ZXJBbnN3ZXJcbiAgfVxuXG4gIGFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpIHtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kaWNhdG9yID0gYFF1ZXN0aW9uICR7dGhpcy5xdWVzdGlvbkluZGV4ICsgMX1gO1xuICB9XG5cbiAgbmV4dFF1ZXN0aW9uKGFuc3dlcjogbnVtYmVyKTogdm9pZCB7XG5cblxuXG4gICAgLy8gdG9kbzFcbiAgICAvLyB0aGlzLnBsYXl3ZXJBbnN3ZXJUZW1wID0geyBpZDogdGhpcy5xdWVzdGlvbkluZGV4LCBxdWVzdGlvbjogdGhpcy5xdWVzdGlvbkN1cnJlbnQsIHBsYXllckFuc3dlcjogYW5zd2VyIH07XG4gICAgLy8gdGhpcy5wbGF5ZXJBbnN3ZXJzLnB1c2godGhpcy5wbGF5d2VyQW5zd2VyVGVtcCk7XG5cbiAgICB0aGlzLmFuc3dlckkwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMS5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG5cbiAgICBpZiAodGhpcy5jb3JyZWN0aW9uID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHRoaXMucXVlc3Rpb25TZXJ2aWNlLnBsYXllckFuc3dlcnMucHVzaChhbnN3ZXIpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFuc3dlcikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIwKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjEoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgUXVlc3Rpb24gSW5mb3JtYXRpb24gYWZ0ZXIgZW5kIG9mIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0UXVlc3Rpb25Mb2dpYyhhbnN3ZXIpO1xuICAgIH0sIDEyMDApO1xuXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbC5hbmltYXRlKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgIH0pO1xuXG4gIH1cblxuICBuZXh0UXVlc3Rpb25Mb2dpYyhfYW5zd2VyOiBudW1iZXIpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBuZXh0IHF1ZXN0aW9uXG4gICAgaWYgKHRoaXMucXVlc3Rpb25JbmRleCA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcblxuICAgICAgLy8gdG9kbyBmaW5pc2ggdGVzdCBkZWJ1Z1xuICAgICAgLy8gaWYgZ29vZCBhbnN3ZXJcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uQ3VycmVudC5hID09PSBfYW5zd2VyKSB7XG5cbiAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RvIGlmIHdhcyBoZXJlXG5cbiAgICAgIC8vIHRvZG8gVGV4dENoYW5nZSBBbmltYXRpb25cblxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHRoaXMucXVlc3Rpb25JbmRleCsrO1xuICAgICAgdGhpcy5hbmltYXRlUXVlc3Rpb25JbmRpY2F0b3IoKTtcbiAgICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAgIC8vIH0sIDEwMDApO1xuXG4gICAgICB0aGlzLl9xdWVzdGlvbkxhYmVsLmFuaW1hdGUoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbnN3ZXJJMC5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5zd2VySTEuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFuc3dlckkyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbnN3ZXJJMy5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IG9mIHF1ZXN0aW9uIGFuZCBzaG93IGl0IGFmdGVyIGZhZGVcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgaGVyZVxuXG4gICAgICB9KTtcblxuICAgICAgLy8gfSwgMTIwMCk7XG4gICAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID49IHRoaXMucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucXVlc3Rpb25JbmRleCA+PSAyKSB7XG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9zY29yZSddKVxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChgL3Njb3JlLyR7dGhpcy5zY29yZX0vJHt0aGlzLm1vZGV9YCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZHMgaW50ZXJ0aXNpZWxcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPT09IDggfHwgdGhpcy5xdWVzdGlvbkluZGV4ID09PSAxOFxuICAgICAgICB8fCB0aGlzLnF1ZXN0aW9uSW5kZXggPT09IDI4IHx8IHRoaXMucXVlc3Rpb25JbmRleCA9PT0gMzgpIHtcbiAgICAgICAgYWRtb2IuY3JlYXRlSW50ZXJzdGl0aWFsKHtcbiAgICAgICAgICB0ZXN0aW5nOiB0cnVlLFxuICAgICAgICAgIGlvc0ludGVyc3RpdGlhbElkOiBcImNhLWFwcC1wdWItWFhYWFhYL1lZWVlZMlwiLCAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgICBhbmRyb2lkSW50ZXJzdGl0aWFsSWQ6IFwiY2EtYXBwLXB1Yi0zOTQwMjU2MDk5OTQyNTQ0LzEwMzMxNzM3MTJcIiwgLy8gYWRkIHlvdXIgb3duXG4gICAgICAgICAgLy8gQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuICAgICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcImNlOTczMzAxMzBjOTA0N2NlMGQ0NDMwZDM3ZDcxM2IyXCJdLFxuICAgICAgICAgIGtleXdvcmRzOiBbXCJrZXl3b3JkMVwiLCBcImtleXdvcmQyXCJdIC8vIGFkZCBrZXl3b3JkcyBmb3IgYWQgdGFyZ2V0aW5nXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZG1vYiBjcmVhdGVJbnRlcnN0aXRpYWwgZG9uZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZG1vYiBjcmVhdGVJbnRlcnN0aXRpYWwgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIHRvZG8gcXVlc3Rpb25zIGZpbmlzaGVkXG5cbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKGAvc2NvcmUvJHt0aGlzLnNjb3JlfS8ke3RoaXMubW9kZX1gLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVBbnN3ZXIwKCkge1xuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcblxuICAgIH0sIDEyMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMSgpIHtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgfSwgMTIwMCk7XG5cbiAgfVxuXG4gIGFuaW1hdGVBbnN3ZXIyKCkge1xuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMjAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjMoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEyMDApO1xuICB9XG5cblxuICBsb2FkQmFubmVyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQmFubmVyXG4gICAgICBhZG1vYi5jcmVhdGVCYW5uZXIoe1xuICAgICAgICAvLyBpZiB0aGlzICd2aWV3JyBwcm9wZXJ0eSBpcyBub3Qgc2V0LCB0aGUgYmFubmVyIGlzIG92ZXJsYXllZCBvbiB0aGUgY3VycmVudCB0b3AgbW9zdCB2aWV3XG4gICAgICAgIC8vIHZpZXc6IFwiRmxleEJveExheW91dFwiLFxuICAgICAgICB0ZXN0aW5nOiB0cnVlLCAvLyBzZXQgdG8gZmFsc2UgdG8gZ2V0IHJlYWwgYmFubmVyc1xuICAgICAgICBzaXplOiBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gYW55dGhpbmcgaW4gYWRtb2IuQURfU0laRSwgbGlrZSBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUlxuICAgICAgICBpb3NCYW5uZXJJZDogXCJjYS1hcHAtcHViLVhYWFhYWC9ZWVlZWVlcIiwgLy8gYWRkIHlvdXIgb3duXG4gICAgICAgIGFuZHJvaWRCYW5uZXJJZDogXCJjYS1hcHAtcHViLTM5NDAyNTYwOTk5NDI1NDQvNjMwMDk3ODExMVwiLCAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgLy8gQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuICAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXCJ5b3VyVGVzdERldmljZVVESURzXCIsIFwiY2FuQmVBZGRlZEhlcmVcIl0sXG4gICAgICAgIG1hcmdpbnM6IHtcbiAgICAgICAgICAvLyBpZiBib3RoIGFyZSBzZXQsIHRvcCB3aW5zXG4gICAgICAgICAgdG9wOiA1MFxuICAgICAgICAgIC8vIGJvdHRvbTogNTBcbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZHM6IFtcImtleXdvcmQxXCIsIFwia2V5d29yZDJcIl0gLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBkb25lXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSwgNTAwKTtcblxuICB9XG5cbn1cbiJdfQ==