import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RyM } from 'src/app/interfaces/RyM';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  rickMorty: RyM[] | undefined; 

  constructor(public http: HttpClient) {
    this.dameRyM();
  }

   async dameRyM(){
    await this.http.get<any>(environment.apiUrl).subscribe(res => {
      console.table(res);
      console.log(res);
      this.dameRyM = res.results;
     })
   }

  filtro(e: any) {
    const buscardor: string = e.target.value;
    console.log({ buscardor });
    console.log(buscardor);
    //TODO:hacer filter
  }
}
