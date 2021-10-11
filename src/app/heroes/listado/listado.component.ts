import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman', 'Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    //console.log('Borrando...');
    //const heroeBorrado = this.heroes.shift();
    //console.log(heroBorrado);
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
