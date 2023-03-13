import { Component } from '@angular/core';
import { DevAPIService } from '../dev-api.service';
import { devs } from '../devs';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {
  
  constructor(private devAPI:DevAPIService){}

  displayDevs: devs= {} as devs;

  ngOnInit(){
    this.devAPI.getDevs().subscribe((result:devs) => {
        this.displayDevs = result;
        console.log(result);
    });
  }
}


