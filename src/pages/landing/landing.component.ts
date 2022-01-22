import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public teams: any = [];

  constructor() {

    this.teams = [
      {
        name: "Pankaj Chauhan",
        position: "Product Manager",
        imageurl:"assets/images/pankaj.jpg"
      },
      {
        name: "Victor Singha",
        position: "Software Engineer",
        imageurl:"assets/images/victor.jpg"
      },
      {
        name: "Abhisekh",
        position: "Product Designer",
        imageurl:"assets/images/pankaj.jpg"
      },
      // {
      //   name: "Himanshu Nete",
      //   position: "Software Engineer",
      //   imageurl:"assets/images/himanshu.jpg"
      // }
    ]

  }

  ngOnInit(): void {
  }


  aboutus(){
    let aboutus = document.getElementById("aboutus");
    if(aboutus){
      aboutus.scrollIntoView({behavior:"smooth"});
    }
  }
}
