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
    { path: "play/:correction", component: play_component_1.PlayComponent },
    { path: "dialog", component: result_dialog_component_1.ResultDialogComponent },
    { path: "score/:score", component: score_component_1.ScoreComponent },
    { path: "", redirectTo: "/play/false", pathMatch: "full" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELG1GQUFnRjtBQUNoRiwyREFBeUQ7QUFFekQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDMUQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtDQUNsRSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGxheS9wbGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXN1bHREaWFsb2dDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN1bHQtZGlhbG9nL3Jlc3VsdC1kaWFsb2cuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50IH0gZnJvbSBcIi4vc2NvcmUvc2NvcmUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInBsYXkvOmNvcnJlY3Rpb25cIiwgY29tcG9uZW50OiBQbGF5Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZGlhbG9nXCIsIGNvbXBvbmVudDogUmVzdWx0RGlhbG9nQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2NvcmUvOnNjb3JlXCIsIGNvbXBvbmVudDogU2NvcmVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcGxheS9mYWxzZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwidGFic1wiLCBsb2FkQ2hpbGRyZW46IFwiLi90YWJzL3RhYnMubW9kdWxlI1RhYnNNb2R1bGVcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==