import { Component, OnInit } from '@angular/core';
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
  rickMortyCopy: RyM[] | undefined;

  constructor(public http: HttpClient) {
    this.getRyM();
  }
  async getRyM() {
    await this.http.get<any>(environment.apiUrl).subscribe((res) => {
      this.rickMorty = res.results;
      this.rickMortyCopy = this.rickMorty;
    });
  }

  filtro(e: any) {
    const buscardor: string = e.target.value;
    console.log({ buscardor });
    this.rickMorty = this.rickMortyCopy?.filter(({ name }: RyM) => {
      return name.toLowerCase().includes(buscardor.toLowerCase());
    });
  }
}
