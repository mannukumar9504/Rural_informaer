import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { loginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 loggedIn: boolean = false;
 userName: string =''; 
  constructor(private route: ActivatedRoute, private loginServ: loginService) { 
  }

  ngOnInit(): void {
    this.loginServ.currentApprovalStageMessage.subscribe((msg:any) => {
      this.loggedIn = msg;
      this.userName = msg.name;
    })
  }
}
