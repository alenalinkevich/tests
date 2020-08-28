import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/interfaces/app.state.interfaces'
import { userAuthentication } from '../store/actions/collections.actions';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      const code = params['code'];
      if (code) {
        this.store.dispatch(userAuthentication({ authToken: code }));
      }
    })
  }

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }
}
