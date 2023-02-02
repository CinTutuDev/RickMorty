import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RyM } from 'src/app/interfaces/RyM';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  rickMorty: RyM[] | undefined;


  constructor(public http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.http.get<any>(environment.apiUrl).subscribe(res => {
    console.log(res);
    this.rickMorty = res.results;
    })
  }

   
  
  
  filtro(e: any) {
    const buscardor: string = e.target.value;
    console.log({ buscardor });
    console.log(buscardor);
    //TODO:hacer filter
  }
}
