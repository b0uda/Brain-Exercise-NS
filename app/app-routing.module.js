"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var play_component_1 = require("./play/play.component");
var result_dialog_component_1 = require("./result-dialog/result-dialog.component");
var score_component_1 = require("./score/score.component");
var routes = [
    { path: "home", component: home_component_1.HomeComponent },
    { path: "play/:correction/:mode", component: play_component_1.PlayComponent },
    { path: "dialog", component: result_dialog_component_1.ResultDialogComponent },
    { path: "score/:score/:mode", component: score_component_1.ScoreComponent },
    { path: "", redirectTo: "play/false/geo", pathMatch: "full" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELG1GQUFnRjtBQUNoRiwyREFBeUQ7QUFFekQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7Q0FDbEUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheUNvbXBvbmVudCB9IGZyb20gXCIuL3BsYXkvcGxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVzdWx0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdWx0LWRpYWxvZy9yZXN1bHQtZGlhbG9nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCB9IGZyb20gXCIuL3Njb3JlL3Njb3JlLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJwbGF5Lzpjb3JyZWN0aW9uLzptb2RlXCIsIGNvbXBvbmVudDogUGxheUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImRpYWxvZ1wiLCBjb21wb25lbnQ6IFJlc3VsdERpYWxvZ0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInNjb3JlLzpzY29yZS86bW9kZVwiLCBjb21wb25lbnQ6IFNjb3JlQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwicGxheS9mYWxzZS9nZW9cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcInRhYnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vdGFicy90YWJzLm1vZHVsZSNUYWJzTW9kdWxlXCIgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=