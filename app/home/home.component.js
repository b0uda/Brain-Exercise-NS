"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var orientation = require("nativescript-orientation");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.startAlphabet = function ($event) {
        this.routerExtensions.navigate(["/play"], { clearHistory: false });
    };
    // Change Buttons Layout if orientation Changed
    HomeComponent.prototype.orientationChangedCallback = function (args) {
        if (args.landscape) {
            // Do something landscap-y
            console.log("landscape");
            this.stackBtn.orientation = "horizontal";
            return;
        }
        // Do something portrait-y
        // Assume this includes updating boundProperty on this module's scope
        console.log("portrait");
        this.stackBtn.orientation = "vertical";
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _deviceType = platformModule.device.deviceType;
        var _gridLayout = this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();
        console.log(_deviceType);
        this.stackBtn = this.containerBtn.nativeElement;
        orientation.addOrientationApplier(this.orientationChangedCallback.bind(this));
    };
    __decorate([
        core_1.ViewChild("gridLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "gridLayout", void 0);
    __decorate([
        core_1.ViewChild("containerBtn"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "containerBtn", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-home",
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRiw2RUFBK0U7QUFDL0UsMERBQTREO0FBRTVELHNEQUErRDtBQUsvRCxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUVuRyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU1FLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QscUNBQWEsR0FBYixVQUFjLE1BQU07UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELCtDQUErQztJQUMvQyxrREFBMEIsR0FBMUIsVUFBMkIsSUFBSTtRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQiwwQkFBMEI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7WUFFekMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELDBCQUEwQjtRQUMxQixxRUFBcUU7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNLFdBQVcsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxRQUFRLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBRTdELFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFaEYsQ0FBQztJQXJDd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDckI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7dURBQUM7SUFGekMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FPc0MseUJBQWdCO09BTjNDLGFBQWEsQ0F3Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lckJ0blwiKSBjb250YWluZXJCdG46IEVsZW1lbnRSZWY7XG4gIHJvdXRlcjtcbiAgc3RhY2tCdG47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBzdGFydEFscGhhYmV0KCRldmVudCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICB9XG5cbiAgLy8gQ2hhbmdlIEJ1dHRvbnMgTGF5b3V0IGlmIG9yaWVudGF0aW9uIENoYW5nZWRcbiAgb3JpZW50YXRpb25DaGFuZ2VkQ2FsbGJhY2soYXJncykge1xuICAgIGlmIChhcmdzLmxhbmRzY2FwZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIGxhbmRzY2FwLXlcbiAgICAgIGNvbnNvbGUubG9nKFwibGFuZHNjYXBlXCIpO1xuICAgICAgdGhpcy5zdGFja0J0bi5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc29tZXRoaW5nIHBvcnRyYWl0LXlcbiAgICAvLyBBc3N1bWUgdGhpcyBpbmNsdWRlcyB1cGRhdGluZyBib3VuZFByb3BlcnR5IG9uIHRoaXMgbW9kdWxlJ3Mgc2NvcGVcbiAgICBjb25zb2xlLmxvZyhcInBvcnRyYWl0XCIpO1xuICAgIHRoaXMuc3RhY2tCdG4ub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9ncmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5ncmlkTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX2dyaWRMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyhfZGV2aWNlVHlwZSk7XG5cbiAgICB0aGlzLnN0YWNrQnRuID0gPFN0YWNrTGF5b3V0PnRoaXMuY29udGFpbmVyQnRuLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBvcmllbnRhdGlvbi5hZGRPcmllbnRhdGlvbkFwcGxpZXIodGhpcy5vcmllbnRhdGlvbkNoYW5nZWRDYWxsYmFjay5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cbiJdfQ==