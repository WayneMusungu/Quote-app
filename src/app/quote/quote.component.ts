import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
// import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Wayne Musungu', new Date(2021, 2, 2), 0, 0),
    new Quotes(2, 'Phoebe', 'Happiness', 'Happiness is a direction not a place.',  'Sydney J. Harris', new Date (2021, 9, 28), 0,0),
    new Quotes(3, 'Chelsea', 'Love', "Since I can't be with you right now I will have to be content just dreaming about when we will be together again", 'Susan Polis Schutz', new Date(2022, 1, 31), 0, 0),

  ];

  get Quotes(){
    return this.quotes.sort((a,b) =>{
      return <any>new Date (b.datePosted) - <any>new Date(a.datePosted)
    });
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title} quoted by ${this.quotes[index].author}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  displayContent(index: any) {
    this.quotes[index].showInformation = !this.quotes[index].showInformation;
  }
  addNewQuote (quote){
    let arraysize = this.Quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  
  constructor() { }


  ngOnInit(): void {
  }

}
