import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MsgService } from './../services/msg/msg.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name = '';
  pwd = '';

  constructor(
    private http: HttpClient,
    private msg: MsgService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  login() {
    // this.router.navigate(['/home']);
    this.http.post('/api/login', {
      name: this.name,
      pwd: this.pwd
    }).subscribe((res) => {
      if (res['code'] !== 200) {
        this.msg.info( res['msg'] );
      } else {
        this.router.navigate(['/addLinkNote']);
        localStorage.setItem('userName', this.name);
      }
    });
  }
}
