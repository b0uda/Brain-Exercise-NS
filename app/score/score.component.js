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
        console.log(questionsService.playerAnswers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUErRDtBQUMvRCwwREFBNEQ7QUFFNUQsMERBQWlFO0FBRWpFLDBDQUFpRDtBQUVqRCx5Q0FBMkM7QUFFM0MsMkNBQXNGO0FBRXRGLHFDQUFxQztBQUVyQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU9FLHdCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixnQkFBa0M7UUFINUMsaUJBYUM7UUFaUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBVSxNQUFNLENBQUMsS0FBSyxxQkFBa0IsQ0FBQztZQUN0RCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsUUFBUTtRQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBUyxJQUFJLFNBQUksSUFBSSxDQUFDLElBQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLGlHQUFpRztJQUNuRyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWRDLHdCQUF3QjtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBeUM7WUFDNUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNLFlBQVksR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDakUsWUFBWSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUUzQixDQUFDO0lBOUN5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTt1REFBQztJQUZ2QyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQVM0Qix5QkFBZ0I7WUFDM0IsdUJBQWM7WUFDSCxvQ0FBZ0I7T0FWakMsY0FBYyxDQWtEMUI7SUFBRCxxQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IElBbnN3ZXIsIFF1ZXN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vcXVlc3Rpb25zLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSwgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtc2NvcmVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zY29yZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2NvcmUuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2NvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoXCJzdGFja0xheW91dFwiKSBzdGFja0xheW91dDogRWxlbWVudFJlZjtcbiAgc2NvcmU7XG4gIF9zdGFja0xheW91dDtcbiAgbW9kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHF1ZXN0aW9uc1NlcnZpY2U6IFF1ZXN0aW9uc1NlcnZpY2UpIHtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBgVSBoYXZlICR7cGFyYW1zLnNjb3JlfSBjb3JyZWN0IGFuc3dlcnNgO1xuICAgICAgICB0aGlzLnNjb3JlID0gcGFyYW1zLnNjb3JlO1xuICAgICAgICB0aGlzLm1vZGUgPSBwYXJhbXMubW9kZTtcbiAgICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zU2VydmljZS5wbGF5ZXJBbnN3ZXJzKTtcbiAgfVxuXG4gIGhvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlc3VsdCgpIHtcbiAgICAvLyBib3VkYVxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKGAvcGxheS8ke3RydWV9LyR7dGhpcy5tb2RlfWAsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBbdHJ1ZSwgdGhpcy5wbGF5ZXJBbnN3ZXJzXV0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBpZiBub3QgYW5kcm9pZCByZXR1cm5cbiAgICBpZiAoIWlzQW5kcm9pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xuICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IF9kZXZpY2VUeXBlID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGU7XG4gICAgY29uc3QgX3N0YWNrTGF5b3V0ID0gPFN0YWNrTGF5b3V0PnRoaXMuc3RhY2tMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICBfc3RhY2tMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyhfZGV2aWNlVHlwZSk7XG5cbiAgfVxuXG59XG4iXX0=