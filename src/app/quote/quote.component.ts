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
    new Quotes(1, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Milton Berle', new Date(2022, 2, 2), 0, 0),
    new Quotes(2, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Milton Berle', new Date(2022, 2, 2), 0, 0),
    new Quotes(3, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Milton Berle', new Date(2022, 2, 2), 0, 0),

  ];

  get Quotes(){
    return this.quotes.sort((a,b) =>{
      return <any>new Date (b.datePosted) - <any>new Date(a.datePosted)
    });
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
