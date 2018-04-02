"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var orientation = require("nativescript-orientation");
var ResultDialogComponent = /** @class */ (function () {
    function ResultDialogComponent(params, routerExtensions) {
        this.params = params;
        this.routerExtensions = routerExtensions;
        this.score = "You have " + params.context.score + " good answers";
    }
    ResultDialogComponent.prototype.home = function () {
        console.log("xxxx");
        this.routerExtensions.navigate(["/home"], { clearHistory: false });
        this.params.closeCallback();
    };
    ResultDialogComponent.prototype.result = function () {
        this.params.closeCallback();
        this.routerExtensions.navigate(["/home"], { clearHistory: false });
    };
    ResultDialogComponent.prototype.ngOnInit = function () {
        var _deviceType = platformModule.device.deviceType;
        var _stackLayout = this.stackLayout.nativeElement;
        _stackLayout.className = _deviceType.toLowerCase();
        console.log(_deviceType);
    };
    __decorate([
        core_1.ViewChild("stackLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], ResultDialogComponent.prototype, "stackLayout", void 0);
    ResultDialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-result-dialog",
            templateUrl: "./result-dialog.component.html",
            styleUrls: ["./result-dialog.component.scss"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, router_1.RouterExtensions])
    ], ResultDialogComponent);
    return ResultDialogComponent;
}());
exports.ResultDialogComponent = ResultDialogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFDdEUsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUU1RCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU1FLCtCQUFvQixNQUF5QixFQUFVLGdCQUFrQztRQUFyRSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDdkYsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxrQkFBZSxDQUFDO0lBQy9ELENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQU0sWUFBWSxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNqRSxZQUFZLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF6QnlCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVOzhEQUFDO0lBRnZDLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQU80QixnQ0FBaUIsRUFBNEIseUJBQWdCO09BTjlFLHFCQUFxQixDQTZCakM7SUFBRCw0QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0XCI7XG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtcmVzdWx0LWRpYWxvZ1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Jlc3VsdC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3Jlc3VsdC1kaWFsb2cuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKFwic3RhY2tMYXlvdXRcIikgc3RhY2tMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIHNjb3JlO1xuICBfc3RhY2tMYXlvdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB0aGlzLnNjb3JlID0gYFlvdSBoYXZlICR7cGFyYW1zLmNvbnRleHQuc2NvcmV9IGdvb2QgYW5zd2Vyc2A7XG4gIH1cblxuICBob21lKCkge1xuICAgIGNvbnNvbGUubG9nKFwieHh4eFwiKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiBmYWxzZSB9KTtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG5cbiAgfVxuXG4gIHJlc3VsdCgpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogZmFsc2UgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBfZGV2aWNlVHlwZSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnN0IF9zdGFja0xheW91dCA9IDxTdGFja0xheW91dD50aGlzLnN0YWNrTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgX3N0YWNrTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2coX2RldmljZVR5cGUpO1xuICB9XG5cbn1cbiJdfQ==