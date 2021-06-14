
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  username=""
  useremail=""
  password=""
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.username=this.activatedRoute.snapshot.params.id;
    if (this.username=="Abhinash") {
      this.useremail="abhi@gmail.com";
      this.password="@mdo";
      
    }
    if (this.username=="Shrutee") {
      this.useremail="shrutee@gmail.com";
      this.password="1478";
      
    }
    if (this.username=="Ketan") {
      this.useremail="ketan@gmail.com"; 
      this.password="1234";
      
    }


  }

}
