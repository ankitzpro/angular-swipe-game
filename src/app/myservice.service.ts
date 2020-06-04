import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  anstext='';
  pageno=0;
  word1='';
  word2='';
  answer='';
  i=0;

  text="Compare the 2 words and decide whether there meaning is almost the same, almost the opposite, or they have another relationship";
  quesarray=[{'word1':'Old','word2':'New','answer':'opposite'},{'word1':'Up','word2':'Down','answer':'opposite'},{'word1':'Hello','word2':'Hi','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'},{'word1':'Old','word2':'New','answer':'same'}]
  constructor() { }

  changetext(){
    this.text="If they have the same meaning, swipe left. For almost opposites, swipe right. For all other words pairs, swipe down";
  
  }

  question(){
    this.word1=this.quesarray[this.i].word1;
    this.word2=this.quesarray[this.i].word2;
    this.answer=this.quesarray[this.i].answer;
    this.i=this.i+1;
  }
}
