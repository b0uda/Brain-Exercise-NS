"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var questions_service_1 = require("../questions.service");
var router_2 = require("@angular/router");
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
        this.routerExtensions.navigateByUrl("/play/" + true);
        // this.routerExtensions.navigate(["/play", [true, this.playerAnswers]], { clearHistory: true });
    };
    ScoreComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUErRDtBQUMvRCwwREFBNEQ7QUFFNUQsMERBQWlFO0FBRWpFLDBDQUFpRDtBQUNqRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU1FLHdCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixnQkFBa0M7UUFINUMsaUJBV0M7UUFWUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBVSxNQUFNLENBQUMsS0FBSyxxQkFBa0IsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLFFBQVE7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVMsSUFBTSxDQUFDLENBQUM7UUFDckQsaUdBQWlHO0lBQ25HLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckQsSUFBTSxZQUFZLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ2pFLFlBQVksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFHM0IsQ0FBQztJQWxDeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7dURBQUM7SUFGdkMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FRNEIseUJBQWdCO1lBQzNCLHVCQUFjO1lBQ0gsb0NBQWdCO09BVGpDLGNBQWMsQ0FzQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBJQW5zd2VyLCBRdWVzdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3F1ZXN0aW9ucy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuY29uc3Qgb3JpZW50YXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLXNjb3JlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2NvcmUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3Njb3JlLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKFwic3RhY2tMYXlvdXRcIikgc3RhY2tMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIHNjb3JlO1xuICBfc3RhY2tMYXlvdXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcXVlc3Rpb25zU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zY29yZSA9IGBVIGhhdmUgJHtwYXJhbXMuc2NvcmV9IGNvcnJlY3QgYW5zd2Vyc2A7XG4gICAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uc1NlcnZpY2UucGxheWVyQW5zd2Vycyk7XG4gIH1cblxuICBob21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cblxuICByZXN1bHQoKSB7XG4gICAgLy8gYm91ZGFcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChgL3BsYXkvJHt0cnVlfWApO1xuICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBbdHJ1ZSwgdGhpcy5wbGF5ZXJBbnN3ZXJzXV0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfc3RhY2tMYXlvdXQgPSA8U3RhY2tMYXlvdXQ+dGhpcy5zdGFja0xheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9zdGFja0xheW91dC5jbGFzc05hbWUgPSBfZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKF9kZXZpY2VUeXBlKTtcblxuXG4gIH1cblxufVxuIl19