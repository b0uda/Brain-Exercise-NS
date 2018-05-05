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
        }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRiwwREFBNEQ7QUFFNUQsc0RBQStEO0FBUS9ELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRXhELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBUTFDO0lBV0UsdUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxnQ0FBUSxHQUFSLFVBQVMsTUFBaUI7UUFBMUIsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFN0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxZQUFZLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBaUI7UUFBOUIsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFM0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFP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QUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUF0SHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVO3FEQUFDO0lBQ3pCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFjLGlCQUFVO3NEQUFDO0lBQzFCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBQ3RCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBSmhDLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBWXNDLHlCQUFnQjtPQVgzQyxhQUFhLENBeUh6QjtJQUFELG9CQUFDO0NBQUEsQUF6SEQsSUF5SEM7QUF6SFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS9pbWFnZVwiO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbnZhciBhZG1vYiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYWRtb2JcIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJncmlkTGF5b3V0XCIpIGdyaWRMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbHBoYWJldFwiKSBhbHBoYWJldFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIm51bWJlclwiKSBudW1iZXJSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzeW1ib2xcIikgc3ltYm9sUmVmOiBFbGVtZW50UmVmO1xuICBhbHBoYWJldDogSW1hZ2U7XG4gIG51bWJlcjogSW1hZ2U7XG4gIHN5bWJvbDogSW1hZ2U7XG4gIHJvdXRlcjtcbiAgc3RhY2tCdG47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBzdGFydEdlbygkZXZlbnQ6IEV2ZW50RGF0YSkge1xuXG4gICAgdGhpcy5hbHBoYWJldC5jbGFzc05hbWUgPSBcIm1vZGUgYW5pbWF0ZV9iaWdcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbHBoYWJldC5jbGFzc05hbWUgPSBcIm1vZGVcIjtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBmYWxzZSwgXCJnZW9cIl0sIHtcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiA5MDAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBzdGFydEdlbmVyYWwoJGV2ZW50OiBFdmVudERhdGEpIHtcblxuICAgIHRoaXMubnVtYmVyLmNsYXNzTmFtZSA9IFwibW9kZSBhbmltYXRlX2JpZ1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm51bWJlci5jbGFzc05hbWUgPSBcIm1vZGVcIjtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBmYWxzZSwgXCJnZW5lcmFsXCJdLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICBkdXJhdGlvbjogOTAwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgc3RhcnRTY2llbmNlKCRldmVudDogRXZlbnREYXRhKSB7XG5cbiAgICB0aGlzLnN5bWJvbC5jbGFzc05hbWUgPSBcIm1vZGUgYW5pbWF0ZV9iaWdcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5udW1iZXIuY2xhc3NOYW1lID0gXCJtb2RlXCI7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3BsYXlcIiwgZmFsc2UsIFwic2NpZW5jZVwiXSwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDkwMCxcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIC8vIENoYW5nZSBCdXR0b25zIExheW91dCBpZiBvcmllbnRhdGlvbiBDaGFuZ2VkXG4gIG9yaWVudGF0aW9uQ2hhbmdlZENhbGxiYWNrKGFyZ3MpIHtcbiAgICBpZiAoYXJncy5sYW5kc2NhcGUpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyBsYW5kc2NhcC15XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc29tZXRoaW5nIHBvcnRyYWl0LXlcbiAgICAvLyBBc3N1bWUgdGhpcyBpbmNsdWRlcyB1cGRhdGluZyBib3VuZFByb3BlcnR5IG9uIHRoaXMgbW9kdWxlJ3Mgc2NvcGVcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfZ3JpZExheW91dCA9IDxHcmlkTGF5b3V0PnRoaXMuZ3JpZExheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9ncmlkTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLmFscGhhYmV0ID0gPEltYWdlPnRoaXMuYWxwaGFiZXRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLm51bWJlciA9IDxJbWFnZT50aGlzLm51bWJlclJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc3ltYm9sID0gPEltYWdlPnRoaXMuc3ltYm9sUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBvcmllbnRhdGlvbi5hZGRPcmllbnRhdGlvbkFwcGxpZXIodGhpcy5vcmllbnRhdGlvbkNoYW5nZWRDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICBvcmllbnRhdGlvbi5zZXRPcmllbnRhdGlvbihcInBvcnRyYWl0XCIpO1xuICAgIG9yaWVudGF0aW9uLmRpc2FibGVSb3RhdGlvbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBCYW5uZXJcbiAgICAgIGFkbW9iLmNyZWF0ZUJhbm5lcih7XG4gICAgICAgIC8vIGlmIHRoaXMgJ3ZpZXcnIHByb3BlcnR5IGlzIG5vdCBzZXQsIHRoZSBiYW5uZXIgaXMgb3ZlcmxheWVkIG9uIHRoZSBjdXJyZW50IHRvcCBtb3N0IHZpZXdcbiAgICAgICAgLy8gdmlldzogXCJGbGV4Qm94TGF5b3V0XCIsXG4gICAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHNldCB0byBmYWxzZSB0byBnZXQgcmVhbCBiYW5uZXJzXG4gICAgICAgIHNpemU6IGFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSLCAvLyBhbnl0aGluZyBpbiBhZG1vYi5BRF9TSVpFLCBsaWtlIGFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSXG4gICAgICAgIGlvc0Jhbm5lcklkOiBcImNhLWFwcC1wdWItWFhYWFhYL1lZWVlZWVwiLCAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgYW5kcm9pZEJhbm5lcklkOiBcImNhLWFwcC1wdWItMzk0MDI1NjA5OTk0MjU0NC82MzAwOTc4MTExXCIsIC8vIGFkZCB5b3VyIG93blxuICAgICAgICAvLyBBbmRyb2lkIGF1dG9tYXRpY2FsbHkgYWRkcyB0aGUgY29ubmVjdGVkIGRldmljZSBhcyB0ZXN0IGRldmljZSB3aXRoIHRlc3Rpbmc6dHJ1ZSwgaU9TIGRvZXMgbm90XG4gICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcInlvdXJUZXN0RGV2aWNlVURJRHNcIiwgXCJjYW5CZUFkZGVkSGVyZVwiXSxcbiAgICAgICAgbWFyZ2luczoge1xuICAgICAgICAgIC8vIGlmIGJvdGggYXJlIHNldCwgdG9wIHdpbnNcbiAgICAgICAgICB0b3A6IDEwMFxuICAgICAgICAgIC8vIGJvdHRvbTogNTBcbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZHM6IFtcImtleXdvcmQxXCIsIFwia2V5d29yZDJcIl0gLy8gYWRkIGtleXdvcmRzIGZvciBhZCB0YXJnZXRpbmdcbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBkb25lXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG59XG4iXX0=