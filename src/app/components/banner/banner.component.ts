import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
name: string = 'Lorena Garcia C. Flores';
urlImgBanner : string = '../../../assets/img/6-fotoperfildeveloper.png'; 

/*------------------------------------ */ 
/*esta variable se va a usar cuando cambie las imagenes a url, se tiene que cambiar en urlImgBanner en el html por est variable 19 minutos

photoImgBanner : string = `url('${this.urlImgBanner}')`;*/

}
