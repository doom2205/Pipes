import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string,todas:boolean=true): string {
    value=value.toLowerCase()
    let n = value.split(' ')
    if(todas){
      n=n.map(nombre=>{return nombre[0].toUpperCase() + nombre.substring(1)})
    }else{
      n[0]=n[0][0].toUpperCase()+ n[0].substring(1)
    }
    return n.join(' ')
  }

}
