import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  filter(e:any){
    const buscardor : string = e.target.value;
    console.log({buscardor});
    console.log(buscardor);

  }

}
