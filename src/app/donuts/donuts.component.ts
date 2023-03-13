import { Component } from '@angular/core';
import { Donut } from '../donut';
import { DonutAPIService } from '../donut-api.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  
  constructor(private donutAPI:DonutAPIService){}

  displayDonut: Donut= {} as Donut;

  ngOnInit(){
    this.donutAPI.getDonut().subscribe((result:Donut) => {
        this.displayDonut = result;
        console.log(result);
    });
  }
}
