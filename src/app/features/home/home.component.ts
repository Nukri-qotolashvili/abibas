import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVIGATION_ITEMS } from '../../shared/consts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly navigationItems = NAVIGATION_ITEMS;
}
