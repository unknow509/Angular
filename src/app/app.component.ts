import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MobileStore';
  constructor(private router: Router) { }

  moveToLogin(){
    this.router.navigateByUrl('/login');
  }
  ngOnInit( ){
    this.moveToLogin();
   }
}
