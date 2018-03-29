"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var questions_service_1 = require("../questions.service");
var tnsfx = require("nativescript-effects");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(routerExtensions, questionService) {
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
        var _questionLabel = this.questionLabel.nativeElement;
        console.log(this.questionLabel.nativeElement);
        // _question.top = screen.mainScreen.heightPixels / 4;
        var _questionImg = this.image.nativeElement;
        // const x = _questionImg.getActualSize().height;
        // Quiz Logic
    };
    PlayComponent.prototype.nextQuestion = function (answer) {
        var _this = this;
        console.log("index : " + this.questionIndex + "\n      array length : " + this.questions.length + "\n    ");
        // if there is next question
        if (this.questionIndex < this.questions.length - 1) {
            // if good answer
            if (this.questionCurrent.a === answer) {
                // console.log("xxx good answer");
                this.score++;
            }
            else {
                // console.log("xxx bad answer");
            }
            this.questionIndex++;
            this.questionCurrent = this.questions[this.questionIndex];
        }
        else {
            dialogs.alert("you have a score of : " + this.score).then(function () {
                _this.routerExtensions.navigate(["/home"], { clearHistory: false });
            });
        }
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
    PlayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-play",
            templateUrl: "./play.component.html",
            styleUrls: ["./play.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, questions_service_1.QuestionsService])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRiwwREFBNEQ7QUFJNUQsc0RBQStEO0FBTy9ELG9DQUFzQztBQUd0QywwREFBbUU7QUFFbkUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFROUM7SUFVRSx1QkFBb0IsZ0JBQWtDLEVBQVUsZUFBaUM7UUFBN0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUMvRixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVFLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQU0sV0FBVyxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxELElBQU0sY0FBYyxHQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxzREFBc0Q7UUFFdEQsSUFBTSxZQUFZLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDckQsaURBQWlEO1FBRWpELGFBQWE7SUFFZixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE1BQWM7UUFBM0IsaUJBMEJDO1FBeEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxJQUFJLENBQUMsYUFBYSwrQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLFdBQ3ZDLENBQUMsQ0FBQztRQUVILDRCQUE0QjtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkQsaUJBQWlCO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLGlDQUFpQztZQUNuQyxDQUFDO1lBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBeUIsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBRUgsQ0FBQztJQS9Ed0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDcEI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVO3dEQUFDO0lBQ2xDO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO2dEQUFDO0lBSDNCLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBV3NDLHlCQUFnQixFQUEyQixvQ0FBZ0I7T0FWdEYsYUFBYSxDQWtFekI7SUFBRCxvQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IElRdWVzdGlvbiwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5jb25zdCB0bnNmeCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZWZmZWN0c1wiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1wbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGxheS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInF1ZXN0aW9uTGFiZWxcIikgcXVlc3Rpb25MYWJlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImltYWdlXCIpIGltYWdlOiBFbGVtZW50UmVmO1xuICByb3V0ZXI7XG4gIHF1ZXN0aW9uczogQXJyYXk8SVF1ZXN0aW9uPjtcbiAgcXVlc3Rpb25DdXJyZW50OiBJUXVlc3Rpb247XG4gIHF1ZXN0aW9uSW5kZXg7XG4gIHNjb3JlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBxdWVzdGlvblNlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2UpIHtcbiAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5xdWVzdGlvbnM7XG4gICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zWzBdO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9XG5cbiAgcGFnZUxvYWRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfZ3JpZExheW91dCA9IDxHcmlkTGF5b3V0PnRoaXMuZ3JpZExheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9ncmlkTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBfcXVlc3Rpb25MYWJlbCA9IDxMYWJlbD50aGlzLnF1ZXN0aW9uTGFiZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyg8TGFiZWw+dGhpcy5xdWVzdGlvbkxhYmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIF9xdWVzdGlvbi50b3AgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMgLyA0O1xuXG4gICAgY29uc3QgX3F1ZXN0aW9uSW1nID0gPEltYWdlPnRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zdCB4ID0gX3F1ZXN0aW9uSW1nLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG5cbiAgICAvLyBRdWl6IExvZ2ljXG5cbiAgfVxuXG4gIG5leHRRdWVzdGlvbihhbnN3ZXI6IG51bWJlcik6IHZvaWQge1xuXG4gICAgY29uc29sZS5sb2coYGluZGV4IDogJHt0aGlzLnF1ZXN0aW9uSW5kZXh9XG4gICAgICBhcnJheSBsZW5ndGggOiAke3RoaXMucXVlc3Rpb25zLmxlbmd0aH1cbiAgICBgKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIG5leHQgcXVlc3Rpb25cbiAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4IDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAvLyBpZiBnb29kIGFuc3dlclxuICAgICAgaWYgKHRoaXMucXVlc3Rpb25DdXJyZW50LmEgPT09IGFuc3dlcikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInh4eCBnb29kIGFuc3dlclwiKTtcbiAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4eHggYmFkIGFuc3dlclwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5xdWVzdGlvbkluZGV4Kys7XG4gICAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25JbmRleF07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgZGlhbG9ncy5hbGVydChgeW91IGhhdmUgYSBzY29yZSBvZiA6ICR7dGhpcy5zY29yZX1gKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=