import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Milton Berle', new Date(2022, 2, 2), 0, 0),
    new Quotes(1, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Milton Berle', new Date(2022, 2, 2), 0, 0),
    new Quotes(1, 'Otima', 'Skills', 'Learn a skill, master and monetize it. Work anywhere you want, how you want and with anyone you want. Small incremental steps.', 'Milton Berle', new Date(2022, 2, 2), 0, 0),

  ];
  toggleDetails(index){
    this.quotes[index].showInformation = !this.quotes[index].showInformation;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
