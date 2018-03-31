import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { ResultDialogComponent } from "./result-dialog/result-dialog.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "play", component: PlayComponent },
    { path: "dialog", component: ResultDialogComponent },
    { path: "", redirectTo: "/play", pathMatch: "full" },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
