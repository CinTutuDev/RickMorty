import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData() {
    await this.http
      .get<any>(environment.apiUrl + '/characters')
      .subscribe((res) => {
        console.table(res);
      });
  }

  filter(e: any) {
    const buscardor: string = e.target.value;
    console.log({ buscardor });
    console.log(buscardor);
    //TODO:hacer filter
  }
}
