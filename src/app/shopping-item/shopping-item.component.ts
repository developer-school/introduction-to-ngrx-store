import { Component, OnInit, Output } from '@angular/core';
import { DeleteItemAction } from '../store/actions/shopping.actions';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    
  }

}
