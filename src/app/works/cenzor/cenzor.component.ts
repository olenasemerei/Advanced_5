import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss'],
})
export class CenzorComponent implements OnInit {
  public badContent: string[] = [];
  public badWord: string = '';
  public cenzorText: string = '';
  public textHere = 'text here...';
  public wordHere = 'word here ...';
  public isEmptyCenzor = false;
  public isEmpty = false;
  private re = /\w/g;

  constructor() {}

  ngOnInit(): void {}

  addBadWord(): void {
    if (this.badWord.trim()) {
      this.badContent.push(this.badWord.trim());
      this.badWord = '';
      this.wordHere = 'word here...';
      this.isEmpty = false;
    } else {
      this.wordHere = 'Please write word here...';
      this.isEmpty = true;
    }
  }

  removeBadWord(): void {
    this.badContent.length = 0;
    this.cenzorText = '';
    this.isEmpty = false;
    this.wordHere = 'word here...';
    this.textHere = 'text here...';
  }

  cenzor(): void {
    if (this.cenzorText.length > 0) {
      const textCenzor: string[] = this.cenzorText.split(' ');
      this.cenzorText = textCenzor
        .map((elem) =>
          this.badContent.includes(elem) ? elem.replace(this.re, '*') : elem
        )
        .join(' ');
      this.textHere = `text here.. `;
      this.isEmptyCenzor = false;
    } else {
      this.textHere = `Please write a text!`;
      this.isEmptyCenzor = true;
    }
  }
}
