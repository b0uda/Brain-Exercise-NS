import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { QuestionsService } from "./questions.service";

import { FormsModule } from "@angular/forms";

import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ScoreComponent } from "./score/score.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PlayComponent,
        ScoreComponent

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
