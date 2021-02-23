import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // model: {
  //   username: string;
  //   password: string;  
  // };
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  validationErrors: string[] = [];
  

  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  // register(){
  //   this.accountService.register(this.model).subscribe(response => {
  //     console.log(response);
  //     this.cancel();
  //   }, error => {
  //     console.log(error);
  //     for (let key in error) {
  //       this.toastr.error(error[key]);  
  //     }
  //   })
  // }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      this.router.navigateByUrl('/members')
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
