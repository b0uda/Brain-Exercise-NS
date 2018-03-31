"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var play_component_1 = require("./play/play.component");
var result_dialog_component_1 = require("./result-dialog/result-dialog.component");
var routes = [
    { path: "home", component: home_component_1.HomeComponent },
    { path: "play", component: play_component_1.PlayComponent },
    { path: "dialog", component: result_dialog_component_1.ResultDialogComponent },
    { path: "", redirectTo: "/play", pathMatch: "full" },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELG1GQUFnRjtBQUVoRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0NBQ2xFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9wbGF5L3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlc3VsdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdC1kaWFsb2cvcmVzdWx0LWRpYWxvZy5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicGxheVwiLCBjb21wb25lbnQ6IFBsYXlDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJkaWFsb2dcIiwgY29tcG9uZW50OiBSZXN1bHREaWFsb2dDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcGxheVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwidGFic1wiLCBsb2FkQ2hpbGRyZW46IFwiLi90YWJzL3RhYnMubW9kdWxlI1RhYnNNb2R1bGVcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==