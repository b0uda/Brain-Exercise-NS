"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var questions_service_1 = require("../questions.service");
var router_2 = require("@angular/router");
var application = require("application");
var application_1 = require("application");
var platform_1 = require("platform");
var orientation = require("nativescript-orientation");
var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(routerExtensions, route, questionsService) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.questionsService = questionsService;
        this.route.params
            .forEach(function (params) {
            _this.score = "U have " + params.score + " correct answers";
        });
        console.log(questionsService.playerAnswers);
    }
    ScoreComponent.prototype.home = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    ScoreComponent.prototype.result = function () {
        // bouda
        this.routerExtensions.navigateByUrl("/play/" + true, { clearHistory: true });
        // this.routerExtensions.navigate(["/play", [true, this.playerAnswers]], { clearHistory: true });
    };
    ScoreComponent.prototype.ngOnInit = function () {
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
        var _stackLayout = this.stackLayout.nativeElement;
        _stackLayout.className = _deviceType.toLowerCase();
        console.log(_deviceType);
    };
    __decorate([
        core_1.ViewChild("stackLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], ScoreComponent.prototype, "stackLayout", void 0);
    ScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-score",
            templateUrl: "./score.component.html",
            styleUrls: ["./score.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            questions_service_1.QuestionsService])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUErRDtBQUMvRCwwREFBNEQ7QUFFNUQsMERBQWlFO0FBRWpFLDBDQUFpRDtBQUVqRCx5Q0FBMkM7QUFFM0MsMkNBQXNGO0FBRXRGLHFDQUFxQztBQUVyQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU1FLHdCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixnQkFBa0M7UUFINUMsaUJBV0M7UUFWUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBVSxNQUFNLENBQUMsS0FBSyxxQkFBa0IsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLFFBQVE7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVMsSUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0UsaUdBQWlHO0lBQ25HLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZEMsd0JBQXdCO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsd0JBQXdCLEVBQUUsVUFBQyxJQUF5QztZQUM1RyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQU0sWUFBWSxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNqRSxZQUFZLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUEzQ3lCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3VEQUFDO0lBRnZDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBUTRCLHlCQUFnQjtZQUMzQix1QkFBYztZQUNILG9DQUFnQjtPQVRqQyxjQUFjLENBK0MxQjtJQUFELHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgSUFuc3dlciwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhLCBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1zY29yZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Njb3JlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zY29yZS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTY29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChcInN0YWNrTGF5b3V0XCIpIHN0YWNrTGF5b3V0OiBFbGVtZW50UmVmO1xuICBzY29yZTtcbiAgX3N0YWNrTGF5b3V0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHF1ZXN0aW9uc1NlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2UpIHtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBgVSBoYXZlICR7cGFyYW1zLnNjb3JlfSBjb3JyZWN0IGFuc3dlcnNgO1xuICAgICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnNTZXJ2aWNlLnBsYXllckFuc3dlcnMpO1xuICB9XG5cbiAgaG9tZSgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgcmVzdWx0KCkge1xuICAgIC8vIGJvdWRhXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoYC9wbGF5LyR7dHJ1ZX1gLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3BsYXlcIiwgW3RydWUsIHRoaXMucGxheWVyQW5zd2Vyc11dLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gaWYgbm90IGFuZHJvaWQgcmV0dXJuXG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9zdGFja0xheW91dCA9IDxTdGFja0xheW91dD50aGlzLnN0YWNrTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX3N0YWNrTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2coX2RldmljZVR5cGUpO1xuXG4gIH1cblxufVxuIl19