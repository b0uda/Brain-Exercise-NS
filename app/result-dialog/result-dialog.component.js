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
        this.playerAnswers = params.context.playerAnswers;
        console.dir(this.playerAnswers);
    }
    ResultDialogComponent.prototype.home = function () {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        this.params.closeCallback();
    };
    ResultDialogComponent.prototype.result = function () {
        this.params.closeCallback();
        this.routerExtensions.navigate(["/play", [true, this.playerAnswers]], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFDdEUsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUc1RCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU9FLCtCQUFvQixNQUF5QixFQUFVLGdCQUFrQztRQUFyRSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDdkYsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxrQkFBZSxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNLFlBQVksR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDakUsWUFBWSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBM0J5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTs4REFBQztJQUZ2QyxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FRNEIsZ0NBQWlCLEVBQTRCLHlCQUFnQjtPQVA5RSxxQkFBcUIsQ0ErQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgSUFuc3dlciB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuY29uc3Qgb3JpZW50YXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLXJlc3VsdC1kaWFsb2dcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9yZXN1bHQtZGlhbG9nLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9yZXN1bHQtZGlhbG9nLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChcInN0YWNrTGF5b3V0XCIpIHN0YWNrTGF5b3V0OiBFbGVtZW50UmVmO1xuICBzY29yZTtcbiAgcGxheWVyQW5zd2VyczogQXJyYXk8SUFuc3dlcj47XG4gIF9zdGFja0xheW91dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMuc2NvcmUgPSBgWW91IGhhdmUgJHtwYXJhbXMuY29udGV4dC5zY29yZX0gZ29vZCBhbnN3ZXJzYDtcbiAgICB0aGlzLnBsYXllckFuc3dlcnMgPSBwYXJhbXMuY29udGV4dC5wbGF5ZXJBbnN3ZXJzO1xuICAgIGNvbnNvbGUuZGlyKHRoaXMucGxheWVyQW5zd2Vycyk7XG4gIH1cblxuICBob21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuXG4gIH1cblxuICByZXN1bHQoKSB7XG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcGxheVwiLCBbdHJ1ZSwgdGhpcy5wbGF5ZXJBbnN3ZXJzXV0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfc3RhY2tMYXlvdXQgPSA8U3RhY2tMYXlvdXQ+dGhpcy5zdGFja0xheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9zdGFja0xheW91dC5jbGFzc05hbWUgPSBfZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKF9kZXZpY2VUeXBlKTtcbiAgfVxuXG59XG4iXX0=