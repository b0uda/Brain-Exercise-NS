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
            _this.routerExtensions.navigate(["/play"], { clearHistory: false });
        }, 1000);
    };
    HomeComponent.prototype.startNumber = function ($event) {
        var _this = this;
        this.number.className = "mode animate_big";
        setTimeout(function () {
            _this.number.className = "mode";
            _this.routerExtensions.navigate(["/play"], { clearHistory: false });
        }, 1000);
    };
    HomeComponent.prototype.startSymbol = function ($event) {
        var _this = this;
        this.symbol.className = "mode animate_big";
        setTimeout(function () {
            _this.number.className = "mode";
            _this.routerExtensions.navigate(["/play"], { clearHistory: false });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRiw2RUFBK0U7QUFDL0UsMERBQTREO0FBRTVELHNEQUErRDtBQVMvRCxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUVuRyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQVlFLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QscUNBQWEsR0FBYixVQUFjLE1BQWlCO1FBQS9CLGlCQVNDO1FBUEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFN0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBaUI7UUFBN0IsaUJBU0M7UUFQQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUUzQyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDL0IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxNQUFpQjtRQUE3QixpQkFTQztRQVBDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBRTNDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUMvQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFWCxDQUFDO0lBR0QsK0NBQStDO0lBQy9DLGtEQUEwQixHQUExQixVQUEyQixJQUFJO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLDBCQUEwQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXpCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCwwQkFBMEI7UUFDMUIscUVBQXFFO1FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNLFdBQVcsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxRQUFRLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBRTdELElBQUksQ0FBQyxRQUFRLEdBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRWxELFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUUsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRWhDLENBQUM7SUE3RXdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVO3FEQUFDO0lBQ3JCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVO3VEQUFDO0lBQzdCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFjLGlCQUFVO3NEQUFDO0lBQzFCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBQ3RCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBTGhDLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBYXNDLHlCQUFnQjtPQVozQyxhQUFhLENBZ0Z6QjtJQUFELG9CQUFDO0NBQUEsQUFoRkQsSUFnRkM7QUFoRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UvaW1hZ2VcIjtcblxuZWxlbWVudFJlZ2lzdHJ5TW9kdWxlLnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJncmlkTGF5b3V0XCIpIGdyaWRMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJCdG5cIikgY29udGFpbmVyQnRuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWxwaGFiZXRcIikgYWxwaGFiZXRSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJudW1iZXJcIikgbnVtYmVyUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic3ltYm9sXCIpIHN5bWJvbFJlZjogRWxlbWVudFJlZjtcbiAgYWxwaGFiZXQ6IEltYWdlO1xuICBudW1iZXI6IEltYWdlO1xuICBzeW1ib2w6IEltYWdlO1xuICByb3V0ZXI7XG4gIHN0YWNrQnRuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgc3RhcnRBbHBoYWJldCgkZXZlbnQ6IEV2ZW50RGF0YSkge1xuXG4gICAgdGhpcy5hbHBoYWJldC5jbGFzc05hbWUgPSBcIm1vZGUgYW5pbWF0ZV9iaWdcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbHBoYWJldC5jbGFzc05hbWUgPSBcIm1vZGVcIjtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBzdGFydE51bWJlcigkZXZlbnQ6IEV2ZW50RGF0YSkge1xuXG4gICAgdGhpcy5udW1iZXIuY2xhc3NOYW1lID0gXCJtb2RlIGFuaW1hdGVfYmlnXCI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnVtYmVyLmNsYXNzTmFtZSA9IFwibW9kZVwiO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wbGF5XCJdLCB7IGNsZWFySGlzdG9yeTogZmFsc2UgfSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIHN0YXJ0U3ltYm9sKCRldmVudDogRXZlbnREYXRhKSB7XG5cbiAgICB0aGlzLnN5bWJvbC5jbGFzc05hbWUgPSBcIm1vZGUgYW5pbWF0ZV9iaWdcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5udW1iZXIuY2xhc3NOYW1lID0gXCJtb2RlXCI7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3BsYXlcIl0sIHsgY2xlYXJIaXN0b3J5OiBmYWxzZSB9KTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cblxuICAvLyBDaGFuZ2UgQnV0dG9ucyBMYXlvdXQgaWYgb3JpZW50YXRpb24gQ2hhbmdlZFxuICBvcmllbnRhdGlvbkNoYW5nZWRDYWxsYmFjayhhcmdzKSB7XG4gICAgaWYgKGFyZ3MubGFuZHNjYXBlKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgbGFuZHNjYXAteVxuICAgICAgY29uc29sZS5sb2coXCJsYW5kc2NhcGVcIik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBzb21ldGhpbmcgcG9ydHJhaXQteVxuICAgIC8vIEFzc3VtZSB0aGlzIGluY2x1ZGVzIHVwZGF0aW5nIGJvdW5kUHJvcGVydHkgb24gdGhpcyBtb2R1bGUncyBzY29wZVxuICAgIGNvbnNvbGUubG9nKFwicG9ydHJhaXRcIik7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IF9kZXZpY2VUeXBlID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGU7XG4gICAgY29uc3QgX2dyaWRMYXlvdXQgPSA8R3JpZExheW91dD50aGlzLmdyaWRMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICBfZ3JpZExheW91dC5jbGFzc05hbWUgPSBfZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKF9kZXZpY2VUeXBlKTtcblxuICAgIHRoaXMuc3RhY2tCdG4gPSA8U3RhY2tMYXlvdXQ+dGhpcy5jb250YWluZXJCdG4ubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuYWxwaGFiZXQgPSA8SW1hZ2U+dGhpcy5hbHBoYWJldFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubnVtYmVyID0gPEltYWdlPnRoaXMubnVtYmVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zeW1ib2wgPSA8SW1hZ2U+dGhpcy5zeW1ib2xSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIG9yaWVudGF0aW9uLmFkZE9yaWVudGF0aW9uQXBwbGllcih0aGlzLm9yaWVudGF0aW9uQ2hhbmdlZENhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgIG9yaWVudGF0aW9uLmRpc2FibGVSb3RhdGlvbigpO1xuXG4gIH1cblxufVxuIl19