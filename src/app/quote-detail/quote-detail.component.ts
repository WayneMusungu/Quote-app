import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input () quote! : Quotes;
  @Output () isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote() {
    this.quote.likes += 1;
  }
  downvote() {
    this.quote.dislikes += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
