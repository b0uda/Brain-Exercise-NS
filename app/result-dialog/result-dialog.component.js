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
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        this.params.closeCallback();
    };
    ResultDialogComponent.prototype.result = function () {
        this.params.closeCallback();
        this.routerExtensions.navigate(["/play", true], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFDdEUsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUU1RCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQU1FLCtCQUFvQixNQUF5QixFQUFVLGdCQUFrQztRQUFyRSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDdkYsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxrQkFBZSxDQUFDO0lBQy9ELENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckQsSUFBTSxZQUFZLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ2pFLFlBQVksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXhCeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7OERBQUM7SUFGdkMscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBTzRCLGdDQUFpQixFQUE0Qix5QkFBZ0I7T0FOOUUscUJBQXFCLENBNEJqQztJQUFELDRCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcbmNvbnN0IG9yaWVudGF0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1vcmllbnRhdGlvblwiKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1yZXN1bHQtZGlhbG9nXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcmVzdWx0LWRpYWxvZy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcmVzdWx0LWRpYWxvZy5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoXCJzdGFja0xheW91dFwiKSBzdGFja0xheW91dDogRWxlbWVudFJlZjtcbiAgc2NvcmU7XG4gIF9zdGFja0xheW91dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMuc2NvcmUgPSBgWW91IGhhdmUgJHtwYXJhbXMuY29udGV4dC5zY29yZX0gZ29vZCBhbnN3ZXJzYDtcbiAgfVxuXG4gIGhvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG5cbiAgfVxuXG4gIHJlc3VsdCgpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wbGF5XCIsIHRydWVdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IF9kZXZpY2VUeXBlID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGU7XG4gICAgY29uc3QgX3N0YWNrTGF5b3V0ID0gPFN0YWNrTGF5b3V0PnRoaXMuc3RhY2tMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICBfc3RhY2tMYXlvdXQuY2xhc3NOYW1lID0gX2RldmljZVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyhfZGV2aWNlVHlwZSk7XG4gIH1cblxufVxuIl19