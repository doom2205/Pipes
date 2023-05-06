import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="Cápitan America"  
  nombre2:string="eRiC däUmLER" 
  Url:string='https://www.youtube.com/embed/Ca5DHZ8bwvg' 
  activar: boolean=true
  arr=[1,2,3,4,5,6,7,8,9]
   pi:number=Math.PI
   porc:number=0.234
   salario:number=2345.5
   fecha: Date=new Date();
   idioma?:string
   
   heroe={
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Jilguero 5900',
      casa: 'Mansion'
    }
  }
  promesa=new Promise((resolve)=>{
    setTimeout(() => {
      resolve('Llego la info')
    }, 4500);
  })
}

