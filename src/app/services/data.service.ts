import { Injectable } from '@angular/core';
import {Question} from '../models/Question';
import {P} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DataService {
questions:Question[];
  constructor() {
    this.questions = [
      {
        text: "What is your name ?",
        answer: "My name is Lyes.",
        hide:true
      },
      {
        text: "What is your Favorite color ?",
        answer: "My favorite color is blue.",
        hide:true
      },
      {
        text: "What is your favorite language ?",
        answer: "My favorite language is Javascript.",
        hide:true
      },
    ];
  }
  // get question from local storage
  getQuestions(){
    if (localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  //add question to localstorage
  addQuestion(question:Question){
    this.questions.unshift(question);

    // Init local var
    let questions;
    if (localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      //Set new array to local storage
      localStorage.setItem('questions',JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('question'));
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
  }

  removeQuestion(question:Question){
    for (let i = 0; i < this.questions.length; i++){
      if (question == this.questions[i]){
        this.questions.splice(i,1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }
}
