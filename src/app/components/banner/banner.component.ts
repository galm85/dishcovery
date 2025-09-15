import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-banner',
  imports: [CommonModule, RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  @Input() image?:string;
  @Input() title?:string;
  @Input() text?:string;
  @Input() link?:string;


}
