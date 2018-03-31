"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
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
        this.routerExtensions.navigate(["/play"], { clearHistory: false });
    };
    ResultDialogComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFDdEUsc0RBQStEO0FBUS9EO0lBSUUsK0JBQW9CLE1BQXlCLEVBQVUsZ0JBQWtDO1FBQXJFLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN2RixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLGtCQUFlLENBQUM7SUFDL0QsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCx3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQXBCSCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FLNEIsZ0NBQWlCLEVBQTRCLHlCQUFnQjtPQUo5RSxxQkFBcUIsQ0FzQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtcmVzdWx0LWRpYWxvZ1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Jlc3VsdC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3Jlc3VsdC1kaWFsb2cuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzY29yZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMuc2NvcmUgPSBgWW91IGhhdmUgJHtwYXJhbXMuY29udGV4dC5zY29yZX0gZ29vZCBhbnN3ZXJzYDtcbiAgfVxuXG4gIGhvbWUoKSB7XG4gICAgY29uc29sZS5sb2coXCJ4eHh4XCIpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcblxuICB9XG5cbiAgcmVzdWx0KCkge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3BsYXlcIl0sIHsgY2xlYXJIaXN0b3J5OiBmYWxzZSB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==