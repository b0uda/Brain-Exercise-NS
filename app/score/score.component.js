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
            _this.score = params.score;
            _this.mode = params.mode;
        });
    }
    ScoreComponent.prototype.home = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    ScoreComponent.prototype.result = function () {
        // bouda
        this.routerExtensions.navigateByUrl("/play/" + true + "/" + this.mode, { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUMvRCwwREFBNEQ7QUFFNUQsMERBQWlFO0FBRWpFLDBDQUFpRDtBQUVqRCx5Q0FBMkM7QUFFM0MsMkNBQXNGO0FBRXRGLHFDQUFxQztBQUVyQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU9FLHdCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixnQkFBa0M7UUFINUMsaUJBV0M7UUFWUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBVSxNQUFNLENBQUMsS0FBSyxxQkFBa0IsQ0FBQztZQUN0RCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLFFBQVE7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVMsSUFBSSxTQUFJLElBQUksQ0FBQyxJQUFNLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRixpR0FBaUc7SUFDbkcsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWJDLHdCQUF3QjtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBeUM7WUFDNUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNLFlBQVksR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDakUsWUFBWSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckQsQ0FBQztJQTNDeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7dURBQUM7SUFGdkMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FTNEIseUJBQWdCO1lBQzNCLHVCQUFjO1lBQ0gsb0NBQWdCO09BVmpDLGNBQWMsQ0ErQzFCO0lBQUQscUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgSUFuc3dlciwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhLCBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1zY29yZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Njb3JlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zY29yZS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTY29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChcInN0YWNrTGF5b3V0XCIpIHN0YWNrTGF5b3V0OiBFbGVtZW50UmVmO1xuICBzY29yZTtcbiAgX3N0YWNrTGF5b3V0O1xuICBtb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcXVlc3Rpb25zU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5zY29yZSA9IGBVIGhhdmUgJHtwYXJhbXMuc2NvcmV9IGNvcnJlY3QgYW5zd2Vyc2A7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBwYXJhbXMuc2NvcmU7XG4gICAgICAgIHRoaXMubW9kZSA9IHBhcmFtcy5tb2RlO1xuICAgICAgfSk7XG4gIH1cblxuICBob21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cblxuICByZXN1bHQoKSB7XG4gICAgLy8gYm91ZGFcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChgL3BsYXkvJHt0cnVlfS8ke3RoaXMubW9kZX1gLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3BsYXlcIiwgW3RydWUsIHRoaXMucGxheWVyQW5zd2Vyc11dLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gaWYgbm90IGFuZHJvaWQgcmV0dXJuXG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9zdGFja0xheW91dCA9IDxTdGFja0xheW91dD50aGlzLnN0YWNrTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX3N0YWNrTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgfVxuXG59XG4iXX0=