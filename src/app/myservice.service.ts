import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


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
data:any;
  text="Compare the 2 words and decide whether there meaning is almost the same, almost the opposite, or they have another relationship";
   quesarray=[{'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1},
    {'difficulty':1}]
  constructor(private firestore: AngularFirestore) { }

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
  readData() {
    return this.firestore.collection('linkswipe').snapshotChanges().subscribe(data => {

      this.data = data.map(e => {
        return {
          id: e.payload.doc.data()['id'],
          isEdit: false,
          word1: e.payload.doc.data()['word1'],
          word2: e.payload.doc.data()['word2'],
          relation: e.payload.doc.data()['relation'],
          difficulty: e.payload.doc.data()['difficulty'],
        };
      })
      console.log(this.data);

    });

}
}