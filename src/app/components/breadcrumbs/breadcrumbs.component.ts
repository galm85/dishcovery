import { Component, Input } from '@angular/core';
import { Breadcrumbs, BreadcrumbsLinks } from '../../interfaces/breadcrumbs';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

  @Input() breadcrumbs:Breadcrumbs = {} as Breadcrumbs;


}
