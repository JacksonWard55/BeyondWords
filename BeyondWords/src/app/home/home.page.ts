import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private isDisplayPill: boolean = false;
  displayPill() {
  this.isDisplayPill = !this.isDisplayPill;
  }
private isDisplayX: boolean = false;
  displayX() {
    this.isDisplayX = !this.isDisplayX;
      }
private isDisplayCheck: boolean = false;
      displayCheck() {
        this.isDisplayCheck = !this.isDisplayCheck;
          }
private isDisplayBackPain: boolean = false;
          displayBackPain() {
            this.isDisplayBackPain = !this.isDisplayBackPain;
              }
private isDisplayBreathe: boolean = false;
              displayBreathe() {
                this.isDisplayBreathe = !this.isDisplayBreathe;
                  }
private isDisplayStummy: boolean = false;
                  displayStummy() {
                    this.isDisplayStummy = !this.isDisplayStummy;
                      }
private isDisplayThermo: boolean = false;
          displayThermo() {
            this.isDisplayThermo = !this.isDisplayThermo;
              }

  menuType: string = 'overlay';


 
  dragPosition = {x:0, y:0};
  changePosition() {
this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y}
  };

  constructor() {}

}
