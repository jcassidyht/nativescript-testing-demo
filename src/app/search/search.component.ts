import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import {DemoService} from '../services/demo.service';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor(private demo: DemoService) {
    // Use the component constructor to inject providers.
    const unused = <any>demo;  
  }

  ngOnInit(): void {
    
  }


  runPromise() {
    return Promise.reject("rejection reason");
  }
  
  foo_sonar_issue() {
    try { // Noncompliant, the catch clause of the 'try' will not be executed for the code inside promise
      this.runPromise();
    } catch (e) {
      console.log("Failed to run promise", e);
    }
  }

  doDemo(): string {
    return this.demo.doSomething();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
