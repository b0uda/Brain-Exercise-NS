"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var play_component_1 = require("./play/play.component");
var questions_service_1 = require("./questions.service");
var result_dialog_component_1 = require("./result-dialog/result-dialog.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                play_component_1.PlayComponent,
                result_dialog_component_1.ResultDialogComponent
            ],
            providers: [
                questions_service_1.QuestionsService,
                modal_dialog_1.ModalDialogService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0Msd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCx5REFBdUQ7QUFDdkQsbUZBQWdGO0FBRWhGLGtFQUF1RTtBQXlCdkU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsK0NBQXFCO2FBRXhCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLG9DQUFnQjtnQkFDaEIsaUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9wbGF5L3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9xdWVzdGlvbnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZXN1bHREaWFsb2dDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQtZGlhbG9nL3Jlc3VsdC1kaWFsb2cuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgUGxheUNvbXBvbmVudCxcclxuICAgICAgICBSZXN1bHREaWFsb2dDb21wb25lbnRcclxuXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUXVlc3Rpb25zU2VydmljZSxcclxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=