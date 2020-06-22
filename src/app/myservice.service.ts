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
intervalId: number = 0;
seconds: number = 5;
score=0;

  text="Compare the 2 words and decide whether there meaning is almost the same, almost the opposite, or they have another relationship";
    quesarray=[{'word1':'Tale','word2':'Yarn','answer':'same'},{'word1':'Eschew','word2':'Welcome','answer':'opposite'},
    {'word1':'Sharp','word2':'Unwieldy','answer':'other'},
    {'word1':'Cynical','word2':'Trusting','answer':'opposite'},
    {'word1':'Right','word2':'Proper','answer':'same'},
    {'word1':'Odd','word2':'Peculiar','answer':'same'},
    {'word1':'Relevant','word2':'Mountainous','answer':'other'},
    {'word1':'Unpleasant','word2':'Monstrous','answer':'same'},
    {'word1':'Delicate','word2':'Madly','answer':'other'},
    {'word1':'Lovely','word2':'Lippant','answer':'other'},
    {'word1':'Spotty','word2':'Heavy','answer':'other'},
    {'word1':'Differentiate','word2':'Combine','answer':'opposite'},
    {'word1':'Ambigous','word2':'Clear','answer':'opposite'},
    {'word1':'Hold','word2':'Cache','answer':'same'},
    {'word1':'Enmity','word2':'Affection','answer':'opposite'}]
  constructor() { }

  changetext(){
    this.text="If they have the same meaning, swipe left. For almost opposites, swipe right. For all other words pairs, swipe down";
  
  }

  question(){
    if(this.i>=0 &&  this.i<9){
      this.seconds=12;
    }
    else{
  this.seconds=8;
    }
    this.word1=this.quesarray[this.i].word1;
    this.word2=this.quesarray[this.i].word2;
    this.answer=this.quesarray[this.i].answer;
    this.i=this.i+1;
  }

  userData(data){
    console.log(data);

  }


  clearTimer() { clearInterval(this.intervalId); }

  getAnswer(eventtext){
    switch(eventtext) { 
          case 'left': { 
            this.anstext=this.answer=='same' ? 'Correct Answer' : 'Incorrect Answer';
             break; 
          } 
          case 'right': { 
            this.anstext=this.answer=='opposite' ? 'Correct Answer' : 'Incorrect Answer';
            break; 
         } case 'down': { 
          this.anstext=this.answer=='other' ? 'Correct Answer' : 'Incorrect Answer';
          break; 
          } 
       }
       if(this.anstext=='Correct Answer'){
         this.score=this.score+this.seconds;
       }
  }

}
