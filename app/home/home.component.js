"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
var orientation = require("nativescript-orientation");
var admob = require("nativescript-admob");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.startGeo = function ($event) {
        var _this = this;
        this.alphabet.className = "mode animate_big";
        setTimeout(function () {
            _this.alphabet.className = "mode";
            _this.routerExtensions.navigate(["/play", false, "geo"], {
                clearHistory: false,
                transition: {
                    name: "fade",
                    duration: 900,
                    curve: "easeOut"
                }
            });
        }, 1000);
    };
    HomeComponent.prototype.startGeneral = function ($event) {
        var _this = this;
        this.number.className = "mode animate_big";
        setTimeout(function () {
            _this.number.className = "mode";
            _this.routerExtensions.navigate(["/play", false, "general"], {
                clearHistory: false,
                transition: {
                    name: "fade",
                    duration: 900,
                    curve: "easeOut"
                }
            });
        }, 1000);
    };
    HomeComponent.prototype.startScience = function ($event) {
        var _this = this;
        this.symbol.className = "mode animate_big";
        setTimeout(function () {
            _this.number.className = "mode";
            _this.routerExtensions.navigate(["/play", false, "science"], {
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
            return;
        }
        // Do something portrait-y
        // Assume this includes updating boundProperty on this module's scope
    };
    HomeComponent.prototype.loadBanner = function () {
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
                    top: 100
                    // bottom: 50
                },
                keywords: ["keyword1", "keyword2"] // add keywords for ad targeting
            }).then(function () {
                console.log("admob createBanner done");
            }, function (error) {
                console.log("admob createBanner error: " + error);
            });
        }, 500);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _deviceType = platformModule.device.deviceType;
        var _gridLayout = this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRiwwREFBNEQ7QUFFNUQsc0RBQStEO0FBUS9ELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRXhELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBUTFDO0lBV0UsdUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxnQ0FBUSxHQUFSLFVBQVMsTUFBaUI7UUFBMUIsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFN0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxZQUFZLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBaUI7UUFBOUIsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFM0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFP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QUMsQ0FBQztRQUN2QyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFaEMsQ0FBQztJQTNId0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDekI7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQWMsaUJBQVU7c0RBQUM7SUFDMUI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVksaUJBQVU7b0RBQUM7SUFDdEI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVksaUJBQVU7b0RBQUM7SUFKaEMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FZc0MseUJBQWdCO09BWDNDLGFBQWEsQ0E4SHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlIRCxJQThIQztBQTlIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlL2ltYWdlXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxudmFyIGFkbW9iID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hZG1vYlwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFscGhhYmV0XCIpIGFscGhhYmV0UmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibnVtYmVyXCIpIG51bWJlclJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInN5bWJvbFwiKSBzeW1ib2xSZWY6IEVsZW1lbnRSZWY7XG4gIGFscGhhYmV0OiBJbWFnZTtcbiAgbnVtYmVyOiBJbWFnZTtcbiAgc3ltYm9sOiBJbWFnZTtcbiAgcm91dGVyO1xuICBzdGFja0J0bjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIHN0YXJ0R2VvKCRldmVudDogRXZlbnREYXRhKSB7XG5cbiAgICB0aGlzLmFscGhhYmV0LmNsYXNzTmFtZSA9IFwibW9kZSBhbmltYXRlX2JpZ1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFscGhhYmV0LmNsYXNzTmFtZSA9IFwibW9kZVwiO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wbGF5XCIsIGZhbHNlLCBcImdlb1wiXSwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDkwMCxcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIHN0YXJ0R2VuZXJhbCgkZXZlbnQ6IEV2ZW50RGF0YSkge1xuXG4gICAgdGhpcy5udW1iZXIuY2xhc3NOYW1lID0gXCJtb2RlIGFuaW1hdGVfYmlnXCI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnVtYmVyLmNsYXNzTmFtZSA9IFwibW9kZVwiO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wbGF5XCIsIGZhbHNlLCBcImdlbmVyYWxcIl0sIHtcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiA5MDAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBzdGFydFNjaWVuY2UoJGV2ZW50OiBFdmVudERhdGEpIHtcblxuICAgIHRoaXMuc3ltYm9sLmNsYXNzTmFtZSA9IFwibW9kZSBhbmltYXRlX2JpZ1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm51bWJlci5jbGFzc05hbWUgPSBcIm1vZGVcIjtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBmYWxzZSwgXCJzY2llbmNlXCJdLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICBkdXJhdGlvbjogOTAwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgLy8gQ2hhbmdlIEJ1dHRvbnMgTGF5b3V0IGlmIG9yaWVudGF0aW9uIENoYW5nZWRcbiAgb3JpZW50YXRpb25DaGFuZ2VkQ2FsbGJhY2soYXJncykge1xuICAgIGlmIChhcmdzLmxhbmRzY2FwZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIGxhbmRzY2FwLXlcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBzb21ldGhpbmcgcG9ydHJhaXQteVxuICAgIC8vIEFzc3VtZSB0aGlzIGluY2x1ZGVzIHVwZGF0aW5nIGJvdW5kUHJvcGVydHkgb24gdGhpcyBtb2R1bGUncyBzY29wZVxuXG5cbiAgfVxuXG5cbiAgbG9hZEJhbm5lcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIEJhbm5lclxuICAgICAgYWRtb2IuY3JlYXRlQmFubmVyKHtcbiAgICAgICAgLy8gaWYgdGhpcyAndmlldycgcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGJhbm5lciBpcyBvdmVybGF5ZWQgb24gdGhlIGN1cnJlbnQgdG9wIG1vc3Qgdmlld1xuICAgICAgICAvLyB2aWV3OiBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgdGVzdGluZzogdHJ1ZSwgLy8gc2V0IHRvIGZhbHNlIHRvIGdldCByZWFsIGJhbm5lcnNcbiAgICAgICAgc2l6ZTogYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsIC8vIGFueXRoaW5nIGluIGFkbW9iLkFEX1NJWkUsIGxpa2UgYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVJcbiAgICAgICAgaW9zQmFubmVySWQ6IFwiY2EtYXBwLXB1Yi1YWFhYWFgvWVlZWVlZXCIsIC8vIGFkZCB5b3VyIG93blxuICAgICAgICBhbmRyb2lkQmFubmVySWQ6IFwiY2EtYXBwLXB1Yi0zOTQwMjU2MDk5OTQyNTQ0LzYzMDA5NzgxMTFcIiwgLy8gYWRkIHlvdXIgb3duXG4gICAgICAgIC8vIEFuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgaW9zVGVzdERldmljZUlkczogW1wieW91clRlc3REZXZpY2VVRElEc1wiLCBcImNhbkJlQWRkZWRIZXJlXCJdLFxuICAgICAgICBtYXJnaW5zOiB7XG4gICAgICAgICAgLy8gaWYgYm90aCBhcmUgc2V0LCB0b3Agd2luc1xuICAgICAgICAgIHRvcDogMTAwXG4gICAgICAgICAgLy8gYm90dG9tOiA1MFxuICAgICAgICB9LFxuICAgICAgICBrZXl3b3JkczogW1wia2V5d29yZDFcIiwgXCJrZXl3b3JkMlwiXSAvLyBhZGQga2V5d29yZHMgZm9yIGFkIHRhcmdldGluZ1xuICAgICAgfSkudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlQmFubmVyIGRvbmVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlQmFubmVyIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LCA1MDApO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9ncmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+dGhpcy5ncmlkTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX2dyaWRMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuYWxwaGFiZXQgPSA8SW1hZ2U+dGhpcy5hbHBoYWJldFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubnVtYmVyID0gPEltYWdlPnRoaXMubnVtYmVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zeW1ib2wgPSA8SW1hZ2U+dGhpcy5zeW1ib2xSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIG9yaWVudGF0aW9uLmFkZE9yaWVudGF0aW9uQXBwbGllcih0aGlzLm9yaWVudGF0aW9uQ2hhbmdlZENhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIik7XG4gICAgb3JpZW50YXRpb24uZGlzYWJsZVJvdGF0aW9uKCk7XG5cbiAgfVxuXG59XG4iXX0=