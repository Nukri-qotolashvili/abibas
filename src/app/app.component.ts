import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { APP_NAME, NAVIGATION_ITEMS } from './shared/consts';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    NotFoundComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly appNAME = APP_NAME;
  readonly navigationItems = NAVIGATION_ITEMS;
  private readonly http = inject(HttpClient);
  text = 'https://abibas-n1.firebaseapp.com/';
  imgUrl = '';
  ngOnInit(): void {
    this.generateQR();
  }
  generateQR() {
    this.http
      .post('https://api.everrest.educata.dev/qrcode/generate', {
        text: this.text,
      })
      .subscribe((response: any) => {
        this.imgUrl = response.result;
        console.log(this.imgUrl, response);
      });
  }
}
