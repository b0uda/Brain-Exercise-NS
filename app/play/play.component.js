"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var questions_service_1 = require("../questions.service");
var enums_1 = require("ui/enums");
var animation_1 = require("tns-core-modules/ui/animation/animation");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var result_dialog_component_1 = require("../result-dialog/result-dialog.component");
var tnsfx = require("nativescript-effects");
var orientation = require("nativescript-orientation");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(modalService, viewContainerRef, ngZone, routerExtensions, questionService) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.routerExtensions = routerExtensions;
        this.questionService = questionService;
        this.questions = questionService.questions;
        this.questionIndex = 0;
        this.questionCurrent = this.questions[0];
        this.score = 0;
    }
    PlayComponent.prototype.show = function () {
        var options = {
            context: { score: this.score },
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(result_dialog_component_1.ResultDialogComponent, options);
    };
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
        this.show();
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
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            core_1.NgZone,
            router_1.RouterExtensions,
            questions_service_1.QuestionsService])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRztBQUUxRywwREFBNEQ7QUFJNUQsc0RBQStEO0FBTy9ELG9DQUFzQztBQUd0QywwREFBbUU7QUFJbkUsa0NBQTBDO0FBRTFDLHFFQUF5RjtBQUV6RixrRUFBMkY7QUFFM0Ysb0ZBQWlGO0FBRWpGLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTlDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBUXhEO0lBOEJFLHVCQUNVLFlBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGVBQWlDO1FBSmpDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzlCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztRQUVGLElBQUksQ0FB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UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVO3dEQUFDO0lBQ2xDO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2dEQUFDO0lBQ2I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDdkI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDdkI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDdkI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDckI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFDekI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFYekMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FnQ3dCLGlDQUFrQjtZQUNkLHVCQUFnQjtZQUMxQixhQUFNO1lBQ0kseUJBQWdCO1lBQ2pCLG9DQUFnQjtPQW5DaEMsYUFBYSxDQTRhekI7SUFBRCxvQkFBQztDQUFBLEFBNWFELElBNGFDO0FBNWFZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSwgUG9pbnQgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IElRdWVzdGlvbiwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4uL3Jlc3VsdC1kaWFsb2cvcmVzdWx0LWRpYWxvZy5jb21wb25lbnRcIjtcblxuY29uc3QgdG5zZnggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWVmZmVjdHNcIik7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1wbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGxheS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uTGFiZWxcIikgcXVlc3Rpb25MYWJlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImltYWdlXCIpIGltYWdlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMFwiKSBhbnN3ZXJJbWcwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMVwiKSBhbnN3ZXJJbWcxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nMlwiKSBhbnN3ZXJJbWcyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VySW1nM1wiKSBhbnN3ZXJJbWczOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwwXCIpIGFuc3dlckxhYmVsMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMVwiKSBhbnN3ZXJMYWJlbDE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDJcIikgYW5zd2VyTGFiZWwyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwzXCIpIGFuc3dlckxhYmVsMzogRWxlbWVudFJlZjtcblxuICBhbnN3ZXJJMDogSW1hZ2U7XG4gIGFuc3dlckkxOiBJbWFnZTtcbiAgYW5zd2VySTI6IEltYWdlO1xuICBhbnN3ZXJJMzogSW1hZ2U7XG5cbiAgX3F1ZXN0aW9uTGFiZWw6IExhYmVsO1xuICBhbnN3ZXJMMDogTGFiZWw7XG4gIGFuc3dlckwxOiBMYWJlbDtcbiAgYW5zd2VyTDI6IExhYmVsO1xuICBhbnN3ZXJMMzogTGFiZWw7XG5cbiAgcm91dGVyO1xuICBxdWVzdGlvbnM6IEFycmF5PElRdWVzdGlvbj47XG4gIHF1ZXN0aW9uQ3VycmVudDogSVF1ZXN0aW9uO1xuICBxdWVzdGlvbkluZGV4O1xuICBzY29yZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2UucXVlc3Rpb25zO1xuICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDA7XG4gICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1swXTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgY29udGV4dDogeyBzY29yZTogdGhpcy5zY29yZSB9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZlxuICAgIH07XG5cbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoUmVzdWx0RGlhbG9nQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIHBhZ2VMb2FkZWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGNvbnN0IF9kZXZpY2VUeXBlID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGU7XG4gICAgY29uc3QgX2dyaWRMYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmdyaWRMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICBfZ3JpZExheW91dC5jbGFzc05hbWUgPSBfZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IDxMYWJlbD50aGlzLnF1ZXN0aW9uTGFiZWwubmF0aXZlRWxlbWVudDtcbiAgICAvLyBfcXVlc3Rpb24udG9wID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzIC8gNDtcblxuICAgIGNvbnN0IF9xdWVzdGlvbkltZyA9IDxJbWFnZT50aGlzLmltYWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gY29uc3QgeCA9IF9xdWVzdGlvbkltZy5nZXRBY3R1YWxTaXplKCkuaGVpZ2h0O1xuXG4gICAgdGhpcy5hbnN3ZXJJMCA9IDxJbWFnZT50aGlzLmFuc3dlckltZzAubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkxID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTIgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMyA9IDxJbWFnZT50aGlzLmFuc3dlckltZzMubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmRpcih0aGlzLmFuc3dlckkwKTtcbiAgICAvLyBRdWl6IExvZ2ljXG5cbiAgICB0aGlzLmFuc3dlckwwID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMSA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDIgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwzID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwzLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBvcmllbnRhdGlvbi5kaXNhYmxlUm90YXRpb24oKTtcblxuICB9XG5cbiAgbmV4dFF1ZXN0aW9uKGFuc3dlcjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICBjb25zb2xlLmxvZyhgYW5zd2VyICR7YW5zd2VyfWApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuXG4gICAgdGhpcy5zaG93KCk7XG5cbiAgICBzd2l0Y2ggKGFuc3dlcikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIwKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjEoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgUXVlc3Rpb24gSW5mb3JtYXRpb24gYWZ0ZXIgZW5kIG9mIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0UXVlc3Rpb25Mb2dpYyhhbnN3ZXIpO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBuZXh0UXVlc3Rpb25Mb2dpYyhfYW5zd2VyOiBudW1iZXIpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBuZXh0IHF1ZXN0aW9uXG4gICAgaWYgKHRoaXMucXVlc3Rpb25JbmRleCA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcblxuICAgICAgLy8gaWYgZ29vZCBhbnN3ZXJcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uQ3VycmVudC5hID09PSBfYW5zd2VyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieHh4IGdvb2QgYW5zd2VyXCIpO1xuICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInh4eCBiYWQgYW5zd2VyXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RvIFRleHRDaGFuZ2UgQW5pbWF0aW9uXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9xdWVzdGlvbkxhYmVsLmFuaW1hdGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uSW5kZXgrKztcbiAgICAgICAgdGhpcy5xdWVzdGlvbkN1cnJlbnQgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCBvZiBxdWVzdGlvbiBhbmQgc2hvdyBpdCBhZnRlciBmYWRlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCBoZXJlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ4eHggcmVsb2FkIHZpZXchISEhXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9xdWVzdGlvbkxhYmVsLmFuaW1hdGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYW5zd2VySTAuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuc3dlckkxLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbnN3ZXJJMi5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5zd2VySTMuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMyk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9LCAxMjAwKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBkaWFsb2dzLmFsZXJ0KGB5b3UgaGF2ZSBhIHNjb3JlIG9mIDogJHt0aGlzLnNjb3JlfWApLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dBbnN3ZXIoKSB7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgIGNvbnN0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmFuc3dlckwwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgY29uc3QgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuYW5zd2VyTDEsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG5cbiAgICBjb25zdCBhMzogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgIHRhcmdldDogdGhpcy5hbnN3ZXJMMixcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEzKTtcblxuICAgIGNvbnN0IGE0OiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmFuc3dlckwzLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTQpO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBoaWRlQW5zd2VyKCkge1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcbiAgICBjb25zdCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgIHRhcmdldDogdGhpcy5hbnN3ZXJMMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcblxuICAgIGNvbnN0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmFuc3dlckwxLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xuXG4gICAgY29uc3QgYTM6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICB0YXJnZXQ6IHRoaXMuYW5zd2VyTDIsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMyk7XG5cbiAgICBjb25zdCBhNDogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgIHRhcmdldDogdGhpcy5hbnN3ZXJMMyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGE0KTtcblxuICAgIGNvbnN0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuXG4gICAgYW5pbWF0aW9uU2V0LnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIGZpbmlzaGVkXCIpO1xuICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjAoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlQW5zd2VyKCk7XG4gICAgfSwgMTAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dBbnN3ZXIoKTtcbiAgICB9LCAxMjAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjEoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjIoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjMoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbn1cbiJdfQ==