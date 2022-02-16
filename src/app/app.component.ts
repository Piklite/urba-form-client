import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public error: string = '';
  public typesDossier$: any = this.httpClient
    .get('http://localhost:3000/types-dossier')
    .pipe(
      tap((res) => console.log(res)),
      catchError((e) => {
        console.log(e);
        return (this.error = e.message);
      })
    );

  public constructor(private httpClient: HttpClient) {}
}
