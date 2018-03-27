"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var platform_1 = require("platform");
var router_1 = require("nativescript-angular/router");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _deviceType = platformModule.device.deviceType;
        var _gridLayout = this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();
        var _question = this.label.nativeElement;
        console.log(this.label.nativeElement);
        _question.top = platform_1.screen.mainScreen.heightPixels / 4;
        // const _questionImg = <Image>this.image.nativeElement;
        // const x = _questionImg.getActualSize().height;
        console.log("heigth : " + platform_1.screen.mainScreen.heightPixels / 4);
    };
    __decorate([
        core_1.ViewChild("gridLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "gridLayout", void 0);
    __decorate([
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "label", void 0);
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
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRiwwREFBNEQ7QUFFNUQscUNBQWtDO0FBRWxDLHNEQUErRDtBQWMvRDtJQU1FLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV0RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQU0sV0FBVyxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxELElBQU0sU0FBUyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFbkQsd0RBQXdEO1FBQ3hELGlEQUFpRDtRQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXRCd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFDNUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7Z0RBQUM7SUFDbEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7Z0RBQUM7SUFIM0IsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FPc0MseUJBQWdCO09BTjNDLGFBQWEsQ0F5QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1wbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGxheS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImdyaWRMYXlvdXRcIikgZ3JpZExheW91dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImxhYmVsXCIpIGxhYmVsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiaW1hZ2VcIikgaW1hZ2U6IEVsZW1lbnRSZWY7XG4gIHJvdXRlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfZ3JpZExheW91dCA9IDxHcmlkTGF5b3V0PnRoaXMuZ3JpZExheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9ncmlkTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBfcXVlc3Rpb24gPSA8TGFiZWw+dGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnNvbGUubG9nKDxMYWJlbD50aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIF9xdWVzdGlvbi50b3AgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMgLyA0O1xuXG4gICAgLy8gY29uc3QgX3F1ZXN0aW9uSW1nID0gPEltYWdlPnRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zdCB4ID0gX3F1ZXN0aW9uSW1nLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG5cbiAgICBjb25zb2xlLmxvZyhcImhlaWd0aCA6IFwiICsgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzIC8gNCk7XG4gIH1cblxufVxuIl19