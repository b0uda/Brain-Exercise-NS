import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { QuestionsService } from "./questions.service";
import { ResultDialogComponent } from "./result-dialog/result-dialog.component";

import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PlayComponent,
        ResultDialogComponent

    ],
    providers: [
        QuestionsService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
