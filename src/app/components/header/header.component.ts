import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  isUserMenuOpen:boolean = false;


  toggleUserMenu(){
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  onSearch(searchValue:string){
    // TODO: Implements filters
    console.log('search value: ',searchValue);
  }

}
