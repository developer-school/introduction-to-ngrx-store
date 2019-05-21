import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { LoadShoppingAction, ShoppingActionTypes, LoadShoppingSuccessAction } from '../actions/shopping.actions'
import { of } from 'rxjs';
import { ShoppingService } from 'src/app/shopping.service';

@Injectable()
export class ShoppingEffects {

  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(
        () => this.shoppingService.getShoppingItems()
          .pipe(
            map(data => {
              return new LoadShoppingSuccessAction(data)
            })
          )
      ),
    )

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) { }
}