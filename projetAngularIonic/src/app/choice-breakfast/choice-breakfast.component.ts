import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choice-breakfast',
  templateUrl: './choice-breakfast.component.html',
  styleUrls: ['./choice-breakfast.component.scss'],
})
export class ChoiceBreakfastComponent implements OnInit {

  myId = null;
  title = '';
  boolSugar = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
    switch(this.myId){
      case 'expresso': {
        this.title = 'Expresso';
        this.boolSugar = true;
        break;
      }
      case 'capuccino': {
        this.title = 'Capuccino';
        this.boolSugar = true;
        break;
      }
      case 'chocolat': {
        this.title = 'Chocolat';
        this.boolSugar = true;
        break;
      }
      case 'the': {
        this.title = 'Thé';
        this.boolSugar = true;
        break;
      }
      case 'vieinnoiseries': {
        this.title = 'Vieinnoiseries';
        this.boolSugar = false;
        break;
      }
      case 'jusdefruit': {
        this.title = 'Jus de fruit';
        this.boolSugar = false;
        break;
      }
    }
  }

}
