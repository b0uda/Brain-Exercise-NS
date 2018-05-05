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
        this.questionIndex = 35;
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
            if (this.questionIndex > this.questions.length - 1) {
                // if (this.questionIndex >= 2) {
                // this.routerExtensions.navigate(['/score'])
                this.routerExtensions.navigateByUrl("/score/" + this.score + "/" + this.mode, { clearHistory: true });
            }
            // adds intertisiel
            if (this.questionIndex === 8 || this.questionIndex === 18
                || this.questionIndex === 28 || this.questionIndex === 37) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCwwREFBNEQ7QUFFNUQscUNBQXFDO0FBRXJDLHNEQUErRDtBQU8vRCwwREFBNEU7QUFFNUUsa0NBQTBDO0FBRzFDLDBDQUF5RDtBQUN6RCx5Q0FBMkM7QUFFM0MsMkNBQXNGO0FBRXRGLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRXhELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBUTFDO0lBbUNFLHVCQUNVLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxlQUFpQztRQU4zQyxpQkF1Q0M7UUF0Q1MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNkLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUwsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztnQkFDOUMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxTQUFT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Q0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDdkI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDdkI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDdkI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDckI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFYekMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FxQzRCLHVCQUFnQjtZQUMxQixhQUFNO1lBQ1AsdUJBQWM7WUFDYixlQUFNO1lBQ0kseUJBQWdCO1lBQ2pCLG9DQUFnQjtPQXpDaEMsYUFBYSxDQTZnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdnQkQsSUE2Z0JDO0FBN2dCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgTmdNb2R1bGUsIE5nWm9uZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IElBbnN3ZXIsIElRdWVzdGlvbiwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbnZhciBhZG1vYiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYWRtb2JcIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtcGxheVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BsYXkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BsYXkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJncmlkTGF5b3V0XCIpIGdyaWRMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkxhYmVsXCIpIHF1ZXN0aW9uTGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzBcIikgYW5zd2VySW1nMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzFcIikgYW5zd2VySW1nMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzJcIikgYW5zd2VySW1nMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzNcIikgYW5zd2VySW1nMzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMFwiKSBhbnN3ZXJMYWJlbDA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDFcIikgYW5zd2VyTGFiZWwxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwyXCIpIGFuc3dlckxhYmVsMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsM1wiKSBhbnN3ZXJMYWJlbDM6IEVsZW1lbnRSZWY7XG5cbiAgYW5zd2VySTA6IEltYWdlO1xuICBhbnN3ZXJJMTogSW1hZ2U7XG4gIGFuc3dlckkyOiBJbWFnZTtcbiAgYW5zd2VySTM6IEltYWdlO1xuXG4gIF9xdWVzdGlvbkxhYmVsOiBMYWJlbDtcbiAgYW5zd2VyTDA6IExhYmVsO1xuICBhbnN3ZXJMMTogTGFiZWw7XG4gIGFuc3dlckwyOiBMYWJlbDtcbiAgYW5zd2VyTDM6IExhYmVsO1xuXG4gIG1vZGU6IHN0cmluZztcbiAgcXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+O1xuICBxdWVzdGlvbkN1cnJlbnQ6IElRdWVzdGlvbjtcbiAgcXVlc3Rpb25JbmRleDtcbiAgc2NvcmU7XG4gIHF1ZXN0aW9uSW5kaWNhdG9yOiBzdHJpbmc7XG4gIGNvcnJlY3Rpb247XG4gIHBsYXllckFuc3dlcnM6IEFycmF5PG51bWJlcj47XG4gIGdvb2RBbnN3ZXI6IG51bWJlcjtcbiAgcGxheWVyQW5zd2VyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBxdWVzdGlvblNlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2UpIHtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuY29ycmVjdGlvbiA9IHBhcmFtcy5jb3JyZWN0aW9uO1xuICAgICAgICB0aGlzLm1vZGUgPSBwYXJhbXMubW9kZTtcbiAgICAgIH0pO1xuXG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgXCJnZW9cIjpcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2UuZ2VvUXVlc3Rpb25zO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJnZW5lcmFsXCI6XG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gcXVlc3Rpb25TZXJ2aWNlLmdlbmVyYWxRdWVzdGlvbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjaWVuY2VcIjpcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2Uuc2NpZW5jZVF1ZXN0aW9ucztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDM1O1xuICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbMF07XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5xdWVzdGlvbkluZGljYXRvciA9IGBRdWVzdGlvbiAke3RoaXMucXVlc3Rpb25JbmRleCArIDF9YDtcblxuICAgIC8vIGluaXQgdGhlIHBsYXllcnMgYW5zd2VycyBldmVyeSBxY21cbiAgICBpZiAodGhpcy5jb3JyZWN0aW9uID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHRoaXMucXVlc3Rpb25TZXJ2aWNlLnBsYXllckFuc3dlcnMgPSBbXTtcbiAgICB9XG5cbiAgfVxuXG4gIG5leHRDb3JyZWN0aW9uKCkge1xuICAgIHRoaXMucXVlc3Rpb25JbmRleCsrO1xuXG4gICAgLy8gZ28gaG9tZSBhZnRlciBlbmQgb2YgY29ycmVjdGlvblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPj0gdGhpcy5xdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvc2NvcmUnXSlcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF07XG5cbiAgICB0aGlzLmFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpO1xuXG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuXG4gICAgdGhpcy5nb29kQW5zd2VyID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XS5hO1xuICAgIHRoaXMucGxheWVyQW5zd2VyID0gdGhpcy5wbGF5ZXJBbnN3ZXJzW3RoaXMucXVlc3Rpb25JbmRleF07XG4gICAgLy8gc3dpdGNoIHRoZSBwbGF5ZXIgYW5zd2VyIGZvciBmaXJzdCBxdWVzdGlvbiBcIm5lZWQgdG8gYmUgb24gbmdJbml0KClcIlxuXG4gICAgdGhpcy50ZXN0UGxheWVyQW5zd2VyKCk7XG4gIH1cblxuICBnb0hvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImhvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgdGVzdFBsYXllckFuc3dlcigpIHtcblxuICAgIC8vIHJlbG9hZCBvcmlnaW5hbCBpbWFnZXNcbiAgICB0aGlzLmFuc3dlckkwLnNyYyA9IFwicmVzOi8vYW5zd2VyMFwiO1xuICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9hbnN3ZXIxXCI7XG4gICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL2Fuc3dlcjJcIjtcbiAgICB0aGlzLmFuc3dlckkzLnNyYyA9IFwicmVzOi8vYW5zd2VyM1wiO1xuXG4gICAgc3dpdGNoICh0aGlzLnBsYXllckFuc3dlcikge1xuICAgICAgY2FzZSAwOlxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICB0aGlzLmFuc3dlckkwLnNyYyA9IFwicmVzOi8vd3JvbmdcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICB0aGlzLmFuc3dlckkxLnNyYyA9IFwicmVzOi8vd3JvbmdcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICB0aGlzLmFuc3dlckkyLnNyYyA9IFwicmVzOi8vd3JvbmdcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckFuc3dlciA9PT0gdGhpcy5nb29kQW5zd2VyKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9pbmNvcnJlY3RcIjtcbiAgICAgICAgICB0aGlzLmFuc3dlckkzLnNyYyA9IFwicmVzOi8vd3JvbmdcIjtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsX2NvcnJlY3RcIjtcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3JpZ2h0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBpZiBub3QgYW5kcm9pZCByZXR1cm5cbiAgICBpZiAoIWlzQW5kcm9pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xuICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IF9kZXZpY2VUeXBlID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGU7XG4gICAgY29uc3QgX2dyaWRMYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmdyaWRMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICBfZ3JpZExheW91dC5jbGFzc05hbWUgPSBfZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IDxMYWJlbD50aGlzLnF1ZXN0aW9uTGFiZWwubmF0aXZlRWxlbWVudDtcbiAgICAvLyBfcXVlc3Rpb24udG9wID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzIC8gNDtcblxuICAgIGNvbnN0IF9xdWVzdGlvbkltZyA9IDxJbWFnZT50aGlzLmltYWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gY29uc3QgeCA9IF9xdWVzdGlvbkltZy5nZXRBY3R1YWxTaXplKCkuaGVpZ2h0O1xuXG4gICAgdGhpcy5hbnN3ZXJJMCA9IDxJbWFnZT50aGlzLmFuc3dlckltZzAubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkxID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTIgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMyA9IDxJbWFnZT50aGlzLmFuc3dlckltZzMubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIFF1aXogTG9naWNcblxuICAgIHRoaXMuYW5zd2VyTDAgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDAubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwxID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMiA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDMgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDMubmF0aXZlRWxlbWVudDtcblxuICAgIG9yaWVudGF0aW9uLmRpc2FibGVSb3RhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY29ycmVjdGlvbiA9PT0gXCJ0cnVlXCIpIHtcblxuICAgICAgdGhpcy5hbnN3ZXJJMC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5wbGF5ZXJBbnN3ZXJzID0gdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2VycztcblxuICAgICAgdGhpcy5nb29kQW5zd2VyID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XS5hO1xuICAgICAgdGhpcy5wbGF5ZXJBbnN3ZXIgPSB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAgIC8vIHN3aXRjaCB0aGUgcGxheWVyIGFuc3dlciBmb3IgZmlyc3QgcXVlc3Rpb24gXCJuZWVkIHRvIGJlIG9uIG5nSW5pdCgpXCJcbiAgICAgIHRoaXMudGVzdFBsYXllckFuc3dlcigpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQmFubmVyXG4gICAgICBhZG1vYi5jcmVhdGVCYW5uZXIoe1xuICAgICAgICAvLyBpZiB0aGlzICd2aWV3JyBwcm9wZXJ0eSBpcyBub3Qgc2V0LCB0aGUgYmFubmVyIGlzIG92ZXJsYXllZCBvbiB0aGUgY3VycmVudCB0b3AgbW9zdCB2aWV3XG4gICAgICAgIC8vIHZpZXc6IFwiRmxleEJveExheW91dFwiLFxuICAgICAgICB0ZXN0aW5nOiB0cnVlLCAvLyBzZXQgdG8gZmFsc2UgdG8gZ2V0IHJlYWwgYmFubmVyc1xuICAgICAgICBzaXplOiBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gYW55dGhpbmcgaW4gYWRtb2IuQURfU0laRSwgbGlrZSBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUlxuICAgICAgICBpb3NCYW5uZXJJZDogXCJjYS1hcHAtcHViLVhYWFhYWC9ZWVlZWVlcIiwgLy8gYWRkIHlvdXIgb3duXG4gICAgICAgIGFuZHJvaWRCYW5uZXJJZDogXCJjYS1hcHAtcHViLTM5NDAyNTYwOTk5NDI1NDQvNjMwMDk3ODExMVwiLCAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgLy8gQW5kcm9pZCBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIGNvbm5lY3RlZCBkZXZpY2UgYXMgdGVzdCBkZXZpY2Ugd2l0aCB0ZXN0aW5nOnRydWUsIGlPUyBkb2VzIG5vdFxuICAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXCJ5b3VyVGVzdERldmljZVVESURzXCIsIFwiY2FuQmVBZGRlZEhlcmVcIl0sXG4gICAgICAgIG1hcmdpbnM6IHtcbiAgICAgICAgICAvLyBpZiBib3RoIGFyZSBzZXQsIHRvcCB3aW5zXG4gICAgICAgICAgdG9wOiA1MFxuICAgICAgICAgIC8vIGJvdHRvbTogNTBcbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZHM6IFtcImtleXdvcmQxXCIsIFwia2V5d29yZDJcIl0gLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBkb25lXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSwgNTAwKTtcblxuICAgIC8vIHRoaXMucGxheWVyQW5zd2Vyc1t0aGlzLnF1ZXN0aW9uSW5kZXhdLnBsYXllckFuc3dlclxuICB9XG5cbiAgYW5pbWF0ZVF1ZXN0aW9uSW5kaWNhdG9yKCkge1xuICAgIHRoaXMucXVlc3Rpb25JbmRpY2F0b3IgPSBgUXVlc3Rpb24gJHt0aGlzLnF1ZXN0aW9uSW5kZXggKyAxfWA7XG4gIH1cblxuICBuZXh0UXVlc3Rpb24oYW5zd2VyOiBudW1iZXIpOiB2b2lkIHtcblxuXG5cbiAgICAvLyB0b2RvMVxuICAgIC8vIHRoaXMucGxheXdlckFuc3dlclRlbXAgPSB7IGlkOiB0aGlzLnF1ZXN0aW9uSW5kZXgsIHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uQ3VycmVudCwgcGxheWVyQW5zd2VyOiBhbnN3ZXIgfTtcbiAgICAvLyB0aGlzLnBsYXllckFuc3dlcnMucHVzaCh0aGlzLnBsYXl3ZXJBbnN3ZXJUZW1wKTtcblxuICAgIHRoaXMuYW5zd2VySTAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcblxuICAgIGlmICh0aGlzLmNvcnJlY3Rpb24gPT09IFwiZmFsc2VcIikge1xuICAgICAgdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2Vycy5wdXNoKGFuc3dlcik7XG4gICAgfVxuICAgIHN3aXRjaCAoYW5zd2VyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjAoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjMoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSBRdWVzdGlvbiBJbmZvcm1hdGlvbiBhZnRlciBlbmQgb2YgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHRRdWVzdGlvbkxvZ2ljKGFuc3dlcik7XG4gICAgfSwgMTIwMCk7XG5cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsLmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5leHRRdWVzdGlvbkxvZ2ljKF9hbnN3ZXI6IG51bWJlcikge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5leHQgcXVlc3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4IDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAvLyB0b2RvIGZpbmlzaCB0ZXN0IGRlYnVnXG4gICAgICAvLyBpZiBnb29kIGFuc3dlclxuICAgICAgaWYgKHRoaXMucXVlc3Rpb25DdXJyZW50LmEgPT09IF9hbnN3ZXIpIHtcblxuICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB9XG5cbiAgICAgIC8vIHRvZG8gaWYgd2FzIGhlcmVcblxuICAgICAgLy8gdG9kbyBUZXh0Q2hhbmdlIEFuaW1hdGlvblxuXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgdGhpcy5xdWVzdGlvbkluZGV4Kys7XG4gICAgICB0aGlzLmFuaW1hdGVRdWVzdGlvbkluZGljYXRvcigpO1xuICAgICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuICAgICAgLy8gfSwgMTAwMCk7XG5cbiAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuc3dlckkwLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigwKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5zd2VySTIuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDIpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFuc3dlckkzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigzKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgb2YgcXVlc3Rpb24gYW5kIHNob3cgaXQgYWZ0ZXIgZmFkZVxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCBoZXJlXG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyB9LCAxMjAwKTtcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPiB0aGlzLnF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPj0gMikge1xuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvc2NvcmUnXSlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoYC9zY29yZS8ke3RoaXMuc2NvcmV9LyR7dGhpcy5tb2RlfWAsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGRzIGludGVydGlzaWVsXG4gICAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID09PSA4IHx8IHRoaXMucXVlc3Rpb25JbmRleCA9PT0gMThcbiAgICAgICAgfHwgdGhpcy5xdWVzdGlvbkluZGV4ID09PSAyOCB8fCB0aGlzLnF1ZXN0aW9uSW5kZXggPT09IDM3KSB7XG4gICAgICAgIGFkbW9iLmNyZWF0ZUludGVyc3RpdGlhbCh7XG4gICAgICAgICAgdGVzdGluZzogdHJ1ZSxcbiAgICAgICAgICBpb3NJbnRlcnN0aXRpYWxJZDogXCJjYS1hcHAtcHViLVhYWFhYWC9ZWVlZWTJcIiwgLy8gYWRkIHlvdXIgb3duXG4gICAgICAgICAgYW5kcm9pZEludGVyc3RpdGlhbElkOiBcImNhLWFwcC1wdWItMzk0MDI1NjA5OTk0MjU0NC8xMDMzMTczNzEyXCIsIC8vIGFkZCB5b3VyIG93blxuICAgICAgICAgIC8vIEFuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbXCJjZTk3MzMwMTMwYzkwNDdjZTBkNDQzMGQzN2Q3MTNiMlwiXSxcbiAgICAgICAgICBrZXl3b3JkczogW1wia2V5d29yZDFcIiwgXCJrZXl3b3JkMlwiXSAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlSW50ZXJzdGl0aWFsIGRvbmVcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlSW50ZXJzdGl0aWFsIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyB0b2RvIHF1ZXN0aW9ucyBmaW5pc2hlZFxuXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChgL3Njb3JlLyR7dGhpcy5zY29yZX0vJHt0aGlzLm1vZGV9YCwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG5cbiAgICB9XG4gIH1cblxuICBhbmltYXRlQW5zd2VyMCgpIHtcbiAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwyLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG5cbiAgICB9LCAxMjAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjEoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIH0sIDEyMDApO1xuXG4gIH1cblxuICBhbmltYXRlQW5zd2VyMigpIHtcbiAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfYmlnZ2VyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgfSwgMTIwMCk7XG5cbiAgfVxuXG4gIGFuaW1hdGVBbnN3ZXIzKCkge1xuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICB0aGlzLmFuc3dlckwxLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsIGFuaW1hdGVfc21hbGxlclwiO1xuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXJcIjtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMjAwKTtcbiAgfVxuXG5cblxufVxuIl19