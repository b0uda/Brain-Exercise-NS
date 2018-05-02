import { Component, ElementRef, Input, NgModule, OnInit, NgZone, ViewContainerRef, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { isAndroid, screen } from "platform";

import { RouterExtensions } from "nativescript-angular/router";

import { Image } from "ui/image";
import { Label } from "ui/label";
import { GridLayout } from "ui/layouts/grid-layout";
import { Page, Point } from "ui/page";

import * as dialogs from "ui/dialogs";

import { EventData } from "data/observable";
import { IAnswer, IQuestion, QuestionsService } from "../questions.service";

import { GestureEventData, GestureTypes } from "ui/gestures";

import { AnimationCurve } from "ui/enums";

import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation/animation";

import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { HomeComponent } from "../home/home.component";
import { ResultDialogComponent } from "../result-dialog/result-dialog.component";

import { ActivatedRoute, Router } from "@angular/router";

import * as application from "application";

import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";



const tnsfx = require("nativescript-effects");

const orientation = require("nativescript-orientation");

@Component({
  moduleId: module.id,
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"]
})
export class PlayComponent implements OnInit {
  @ViewChild("gridLayout") gridLayout: ElementRef;
  @ViewChild("questionLabel") questionLabel: ElementRef;
  @ViewChild("image") image: ElementRef;
  @ViewChild("answerImg0") answerImg0: ElementRef;
  @ViewChild("answerImg1") answerImg1: ElementRef;
  @ViewChild("answerImg2") answerImg2: ElementRef;
  @ViewChild("answerImg3") answerImg3: ElementRef;
  @ViewChild("answerLabel0") answerLabel0: ElementRef;
  @ViewChild("answerLabel1") answerLabel1: ElementRef;
  @ViewChild("answerLabel2") answerLabel2: ElementRef;
  @ViewChild("answerLabel3") answerLabel3: ElementRef;

  answerI0: Image;
  answerI1: Image;
  answerI2: Image;
  answerI3: Image;

  _questionLabel: Label;
  answerL0: Label;
  answerL1: Label;
  answerL2: Label;
  answerL3: Label;

  mode: string;
  questions: Array<IQuestion>;
  questionCurrent: IQuestion;
  questionIndex;
  score;
  questionIndicator: string;
  correction;
  playerAnswers: Array<number>;
  goodAnswer: number;
  playerAnswer: number;

  constructor(
    private modalService: ModalDialogService,
    private viewContainerRef: ViewContainerRef,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private routerExtensions: RouterExtensions,
    private questionService: QuestionsService) {

    this.route.params
      .forEach((params) => {
        this.correction = params.correction;
        this.mode = params.mode;
      });

    switch (this.mode) {
      case "geo":
        this.questions = questionService.geoQuestions;
        break;
      case "math":
        this.questions = questionService.mathQuestions;
        break;
      case "science":
        this.questions = questionService.mathQuestions;
        break;

      default:
        break;
    }

    this.questionIndex = 0;
    this.questionCurrent = this.questions[0];
    this.score = 0;
    this.questionIndicator = `Question ${this.questionIndex + 1}`;

    // init the players answers every qcm

    if (this.correction === "false") {
      console.log("answers initialized !!!!");
      this.questionService.playerAnswers = [];
    }

    console.log(`corection value is : ${this.correction}`);
    console.dir(this.questionService.playerAnswers);

    // second way to find if correction mode
    if (this.questionService.playerAnswers.length > 0) {
      console.log("mode correcton");
    } else {
      console.log("mode NO correcton");
    }

    // correction debug value
  }

  nextCorrection() {
    this.questionIndex++;
    this.questionCurrent = this.questions[this.questionIndex];

    this.animateQuestionIndicator();

    this.answerL0.className = "answer_label";
    this.answerL1.className = "answer_label";
    this.answerL2.className = "answer_label";
    this.answerL3.className = "answer_label";

    this.goodAnswer = this.questions[this.questionIndex].a;
    this.playerAnswer = this.playerAnswers[this.questionIndex];
    // switch the player answer for first question "need to be on ngInit()"

    this.testPlayerAnswer();

  }

  goHome() {
    this.routerExtensions.navigate(["home"], { clearHistory: true });
  }

  testPlayerAnswer() {

    // reload original images
    this.answerI0.src = "res://answer0";
    this.answerI1.src = "res://answer1";
    this.answerI2.src = "res://answer2";
    this.answerI3.src = "res://answer3";

    switch (this.playerAnswer) {
      case 0:

        if (this.playerAnswer === this.goodAnswer) {
          this.answerL0.className = "answer_label_correct";
          this.answerI0.src = "res://right";
        } else {
          this.answerL0.className = "answer_label_incorrect";
          this.answerI0.src = "res://wrong";
          switch (this.goodAnswer) {
            case 1:
              this.answerL1.className = "answer_label_correct";
              this.answerI1.src = "res://right";
              break;
            case 2:
              this.answerL2.className = "answer_label_correct";
              this.answerI2.src = "res://right";
              break;
            case 3:
              this.answerL3.className = "answer_label_correct";
              this.answerI3.src = "res://right";
              break;

            default:
              break;
          }
        }
        break;
      case 1:
        if (this.playerAnswer === this.goodAnswer) {
          this.answerL1.className = "answer_label_correct";
          this.answerI1.src = "res://right";
        } else {
          this.answerL1.className = "answer_label_incorrect";
          this.answerI1.src = "res://wrong";
          switch (this.goodAnswer) {
            case 0:
              this.answerL0.className = "answer_label_correct";
              this.answerI0.src = "res://right";
              break;
            case 2:
              this.answerL2.className = "answer_label_correct";
              this.answerI2.src = "res://right";
              break;
            case 3:
              this.answerL3.className = "answer_label_correct";
              this.answerI3.src = "res://right";
              break;

            default:
              break;
          }
        }
        break;
      case 2:
        if (this.playerAnswer === this.goodAnswer) {
          this.answerL2.className = "answer_label_correct";
          this.answerI2.src = "res://right";
        } else {
          this.answerL2.className = "answer_label_incorrect";
          this.answerI2.src = "res://wrong";
          switch (this.goodAnswer) {
            case 0:
              this.answerL0.className = "answer_label_correct";
              this.answerI0.src = "res://right";
              break;
            case 1:
              this.answerL1.className = "answer_label_correct";
              this.answerI1.src = "res://right";
              break;
            case 3:
              this.answerL3.className = "answer_label_correct";
              this.answerI3.src = "res://right";
              break;

            default:
              break;
          }
        }
        break;
      case 3:
        if (this.playerAnswer === this.goodAnswer) {
          this.answerL3.className = "answer_label_correct";
          this.answerI3.src = "res://right";
        } else {
          this.answerL3.className = "answer_label_incorrect";
          this.answerI3.src = "res://wrong";
          switch (this.goodAnswer) {
            case 0:
              this.answerL0.className = "answer_label_correct";
              this.answerI0.src = "res://right";
              break;
            case 1:
              this.answerL1.className = "answer_label_correct";
              this.answerI1.src = "res://right";
              break;
            case 2:
              this.answerL2.className = "answer_label_correct";
              this.answerI2.src = "res://right";
              break;

            default:
              break;
          }
        }
        break;

      default:
        break;
    }

  }

  ngOnInit() {

    console.log(`mode is : ${this.mode}`);

    // if not android return
    if (!isAndroid) {
      return;
    }
    application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
      data.cancel = true;
      this.routerExtensions.navigate(["/home"], { clearHistory: true });
    });

    const _deviceType = platformModule.device.deviceType;
    const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
    _gridLayout.className = _deviceType.toLowerCase();

    this._questionLabel = <Label>this.questionLabel.nativeElement;
    // _question.top = screen.mainScreen.heightPixels / 4;

    const _questionImg = <Image>this.image.nativeElement;
    // const x = _questionImg.getActualSize().height;

    this.answerI0 = <Image>this.answerImg0.nativeElement;
    this.answerI1 = <Image>this.answerImg1.nativeElement;
    this.answerI2 = <Image>this.answerImg2.nativeElement;
    this.answerI3 = <Image>this.answerImg3.nativeElement;
    // console.dir(this.answerI0);
    // Quiz Logic

    this.answerL0 = <Label>this.answerLabel0.nativeElement;
    this.answerL1 = <Label>this.answerLabel1.nativeElement;
    this.answerL2 = <Label>this.answerLabel2.nativeElement;
    this.answerL3 = <Label>this.answerLabel3.nativeElement;

    orientation.disableRotation();

    if (this.correction === "true") {

      this.answerI0.removeEventListener("tap");
      this.answerI1.removeEventListener("tap");
      this.answerI2.removeEventListener("tap");
      this.answerI3.removeEventListener("tap");
      this.playerAnswers = this.questionService.playerAnswers;

      this.goodAnswer = this.questions[this.questionIndex].a;
      this.playerAnswer = this.playerAnswers[this.questionIndex];
      // switch the player answer for first question "need to be on ngInit()"
      this.testPlayerAnswer();
    }

    // this.playerAnswers[this.questionIndex].playerAnswer
  }

  animateQuestionIndicator() {
    this.questionIndicator = `Question ${this.questionIndex + 1}`;
  }

  nextQuestion(answer: number): void {

    // todo1
    // this.playwerAnswerTemp = { id: this.questionIndex, question: this.questionCurrent, playerAnswer: answer };
    // this.playerAnswers.push(this.playwerAnswerTemp);

    this.answerI0.removeEventListener("tap");
    this.answerI1.removeEventListener("tap");
    this.answerI2.removeEventListener("tap");
    this.answerI3.removeEventListener("tap");

    if (this.correction === "false") {
      this.questionService.playerAnswers.push(answer);
    }

    // console.dir(this.playerAnswers);

    switch (answer) {
      case 0:
        this.animateAnswer0();
        break;

      case 1:
        this.animateAnswer1();
        break;

      case 2:
        this.animateAnswer2();
        break;

      case 3:
        this.animateAnswer3();
        break;

      default:
        break;
    }

    // Change Question Information after end of animation
    setTimeout(() => {
      this.nextQuestionLogic(answer);
    }, 1000);

  }

  nextQuestionLogic(_answer: number) {
    // if there is next question
    if (this.questionIndex < this.questions.length - 1) {

      // todo finish test debug
      // if good answer
      if (this.questionCurrent.a === _answer) {
        // console.log("xxx good answer");
        this.score++;
      } else {
        // console.log("xxx bad answer");
      }

      // todo if was here



      // todo TextChange Animation

      setTimeout(() => {
        this._questionLabel.animate({
          opacity: 0,
          duration: 200,
          curve: AnimationCurve.easeInOut
        });
        this.questionIndex++;
        this.animateQuestionIndicator();
        this.questionCurrent = this.questions[this.questionIndex];
      }, 1000);

      // change the text of question and show it after fade
      setTimeout(() => {
        this.ngZone.run(() => {
          // Do whatever you want here

        });

        this._questionLabel.animate({
          opacity: 1,
          duration: 200,
          curve: AnimationCurve.easeInOut
        });

        this.answerI0.addEventListener("tap", () => {
          this.nextQuestion(0);
        });
        this.answerI1.addEventListener("tap", () => {
          this.nextQuestion(1);
        });
        this.answerI2.addEventListener("tap", () => {
          this.nextQuestion(2);
        });
        this.answerI3.addEventListener("tap", () => {
          this.nextQuestion(3);
        });

      }, 1200);

      console.log(`index : ${this.questionIndex}  lenght: ${this.questions.length}`);
      if (this.questionIndex >= this.questions.length - 1) {

        // this.routerExtensions.navigate(['/score'])
        this.routerExtensions.navigateByUrl(`/score/${this.score}/${this.mode}`, { clearHistory: true });
      }

    } else {

      // todo questions finished

      this.routerExtensions.navigateByUrl(`/score/${this.score}/${this.mode}`, { clearHistory: true });

    }
  }

  animateAnswer0() {
    this.answerI0.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 1000);
    this.answerL0.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 1000);

    this.answerI1.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 1000);
    this.answerL1.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 1000);

    this.answerI2.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 1000);
    this.answerL2.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 1000);

    this.answerI3.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 1000);
    this.answerL3.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 1000);

  }

  animateAnswer1() {
    this.answerI1.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 1000);
    this.answerL1.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 1000);

    this.answerI0.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 1000);
    this.answerL0.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 1000);

    this.answerI2.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 1000);
    this.answerL2.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 1000);

    this.answerI3.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 1000);
    this.answerL3.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 1000);

  }

  animateAnswer2() {
    this.answerI2.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 1000);
    this.answerL2.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 1000);

    this.answerI0.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 1000);
    this.answerL0.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 1000);

    this.answerI1.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 1000);
    this.answerL1.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 1000);

    this.answerI3.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 1000);
    this.answerL3.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 1000);

  }

  animateAnswer3() {
    this.answerI3.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 1000);
    this.answerL3.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 1000);

    this.answerI0.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 1000);
    this.answerL0.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 1000);

    this.answerI1.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 1000);
    this.answerL1.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 1000);

    this.answerI2.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 1000);
    this.answerL2.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 1000);

  }

}
