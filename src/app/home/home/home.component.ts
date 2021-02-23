import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { AuthService } from '../../services/auth.service';
import { controlZoneReponse } from '../../models/controlZone-reponse'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public data: controlZoneReponse;
  public correo: string;

  constructor(private homeService:HomeService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getData();
    this.correo = localStorage.getItem('correo');
  }  

  arrayOne(n: number): any[] {
    return Array(n);
  }

  getData():void{
    this.homeService.getData().subscribe((data: controlZoneReponse) => {
      this.data = data; 
    })
  }

  logout():void {
    console.log('entró');
    this.authService.logout();
    this.router.navigateByUrl('/auth/login')
  }

}
