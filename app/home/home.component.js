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
        var _this = this;
        this.alphabet.className = "mode animate_big";
        setTimeout(function () {
            _this.alphabet.className = "mode";
            _this.routerExtensions.navigate(["/play", false], {
                clearHistory: false,
                transition: {
                    name: "fade",
                    duration: 900,
                    curve: "easeOut"
                }
            });
        }, 1000);
    };
    HomeComponent.prototype.startNumber = function ($event) {
        var _this = this;
        this.number.className = "mode animate_big";
        setTimeout(function () {
            _this.number.className = "mode";
            _this.routerExtensions.navigate(["/play", false], {
                clearHistory: false,
                transition: {
                    name: "fade",
                    duration: 900,
                    curve: "easeOut"
                }
            });
        }, 1000);
    };
    HomeComponent.prototype.startSymbol = function ($event) {
        var _this = this;
        this.symbol.className = "mode animate_big";
        setTimeout(function () {
            _this.number.className = "mode";
            _this.routerExtensions.navigate(["/play", false], {
                clearHistory: false,
                transition: {
                    name: "fade",
                    duration: 900,
                    curve: "easeOut"
                }
            });
        }, 1000);
    };
    // Change Buttons Layout if orientation Changed
    HomeComponent.prototype.orientationChangedCallback = function (args) {
        if (args.landscape) {
            // Do something landscap-y
            console.log("landscape");
            return;
        }
        // Do something portrait-y
        // Assume this includes updating boundProperty on this module's scope
        console.log("portrait");
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _deviceType = platformModule.device.deviceType;
        var _gridLayout = this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();
        console.log(_deviceType);
        this.stackBtn = this.containerBtn.nativeElement;
        this.alphabet = this.alphabetRef.nativeElement;
        this.number = this.numberRef.nativeElement;
        this.symbol = this.symbolRef.nativeElement;
        orientation.addOrientationApplier(this.orientationChangedCallback.bind(this));
        orientation.setOrientation("portrait");
        orientation.disableRotation();
    };
    __decorate([
        core_1.ViewChild("gridLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "gridLayout", void 0);
    __decorate([
        core_1.ViewChild("containerBtn"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "containerBtn", void 0);
    __decorate([
        core_1.ViewChild("alphabet"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "alphabetRef", void 0);
    __decorate([
        core_1.ViewChild("number"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "numberRef", void 0);
    __decorate([
        core_1.ViewChild("symbol"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "symbolRef", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRiw2RUFBK0U7QUFDL0UsMERBQTREO0FBRTVELHNEQUErRDtBQVMvRCxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUVuRyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQVlFLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QscUNBQWEsR0FBYixVQUFjLE1BQWlCO1FBQS9CLGlCQWdCQztRQWRDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBRTdDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUNqQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUMvQyxZQUFZLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBaUI7UUFBN0IsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFM0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcs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QUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0Fhc0MseUJBQWdCO09BWjNDLGFBQWEsQ0FxR3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXJHRCxJQXFHQztBQXJHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS9pbWFnZVwiO1xuXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lckJ0blwiKSBjb250YWluZXJCdG46IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbHBoYWJldFwiKSBhbHBoYWJldFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIm51bWJlclwiKSBudW1iZXJSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzeW1ib2xcIikgc3ltYm9sUmVmOiBFbGVtZW50UmVmO1xuICBhbHBoYWJldDogSW1hZ2U7XG4gIG51bWJlcjogSW1hZ2U7XG4gIHN5bWJvbDogSW1hZ2U7XG4gIHJvdXRlcjtcbiAgc3RhY2tCdG47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBzdGFydEFscGhhYmV0KCRldmVudDogRXZlbnREYXRhKSB7XG5cbiAgICB0aGlzLmFscGhhYmV0LmNsYXNzTmFtZSA9IFwibW9kZSBhbmltYXRlX2JpZ1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFscGhhYmV0LmNsYXNzTmFtZSA9IFwibW9kZVwiO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wbGF5XCIsIGZhbHNlXSwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDkwMCxcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIHN0YXJ0TnVtYmVyKCRldmVudDogRXZlbnREYXRhKSB7XG5cbiAgICB0aGlzLm51bWJlci5jbGFzc05hbWUgPSBcIm1vZGUgYW5pbWF0ZV9iaWdcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5udW1iZXIuY2xhc3NOYW1lID0gXCJtb2RlXCI7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3BsYXlcIiwgZmFsc2VdLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICBkdXJhdGlvbjogOTAwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgc3RhcnRTeW1ib2woJGV2ZW50OiBFdmVudERhdGEpIHtcblxuICAgIHRoaXMuc3ltYm9sLmNsYXNzTmFtZSA9IFwibW9kZSBhbmltYXRlX2JpZ1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm51bWJlci5jbGFzc05hbWUgPSBcIm1vZGVcIjtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBmYWxzZV0sIHtcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiA5MDAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICAvLyBDaGFuZ2UgQnV0dG9ucyBMYXlvdXQgaWYgb3JpZW50YXRpb24gQ2hhbmdlZFxuICBvcmllbnRhdGlvbkNoYW5nZWRDYWxsYmFjayhhcmdzKSB7XG4gICAgaWYgKGFyZ3MubGFuZHNjYXBlKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgbGFuZHNjYXAteVxuICAgICAgY29uc29sZS5sb2coXCJsYW5kc2NhcGVcIik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBzb21ldGhpbmcgcG9ydHJhaXQteVxuICAgIC8vIEFzc3VtZSB0aGlzIGluY2x1ZGVzIHVwZGF0aW5nIGJvdW5kUHJvcGVydHkgb24gdGhpcyBtb2R1bGUncyBzY29wZVxuICAgIGNvbnNvbGUubG9nKFwicG9ydHJhaXRcIik7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IF9kZXZpY2VUeXBlID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGU7XG4gICAgY29uc3QgX2dyaWRMYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmdyaWRMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICBfZ3JpZExheW91dC5jbGFzc05hbWUgPSBfZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKF9kZXZpY2VUeXBlKTtcblxuICAgIHRoaXMuc3RhY2tCdG4gPSA8U3RhY2tMYXlvdXQ+dGhpcy5jb250YWluZXJCdG4ubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuYWxwaGFiZXQgPSA8SW1hZ2U+dGhpcy5hbHBoYWJldFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubnVtYmVyID0gPEltYWdlPnRoaXMubnVtYmVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zeW1ib2wgPSA8SW1hZ2U+dGhpcy5zeW1ib2xSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIG9yaWVudGF0aW9uLmFkZE9yaWVudGF0aW9uQXBwbGllcih0aGlzLm9yaWVudGF0aW9uQ2hhbmdlZENhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIik7XG4gICAgb3JpZW50YXRpb24uZGlzYWJsZVJvdGF0aW9uKCk7XG5cbiAgfVxuXG59XG4iXX0=