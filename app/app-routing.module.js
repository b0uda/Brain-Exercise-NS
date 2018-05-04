"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var play_component_1 = require("./play/play.component");
var score_component_1 = require("./score/score.component");
var routes = [
    { path: "home", component: home_component_1.HomeComponent },
    { path: "play/:correction/:mode", component: play_component_1.PlayComponent },
    { path: "score/:score/:mode", component: score_component_1.ScoreComponent },
    { path: "", redirectTo: "score/11/geo", pathMatch: "full" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELDJEQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDNUQsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0NBQ2xFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9wbGF5L3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50IH0gZnJvbSBcIi4vc2NvcmUvc2NvcmUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInBsYXkvOmNvcnJlY3Rpb24vOm1vZGVcIiwgY29tcG9uZW50OiBQbGF5Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2NvcmUvOnNjb3JlLzptb2RlXCIsIGNvbXBvbmVudDogU2NvcmVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJzY29yZS8xMS9nZW9cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcInRhYnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vdGFicy90YWJzLm1vZHVsZSNUYWJzTW9kdWxlXCIgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=