import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { Contacto } from 'src/app/models/contacto';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  contactos: Contacto[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
 

  constructor(
    private _contactoService: ContactoService
  ) { }

  ngOnInit():void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Buscar producto",
        info: "Mostrando _END_ de _TOTAL_",
        infoEmpty: "Mostrando desde el 0 al 0 del total de  0 registros",
        processing: "Procesando...",
        paginate: {
            first: "Primera",
            last: "Última",
            next: "Siguiente",
            previous: "Anterior"
          },
    },

    };

    this.contactosAll();
  }


  contactosAll(){

  
    this._contactoService.contacto().subscribe(
      response => {
        console.log(response.data);
        this.contactos = response.data;
        this.dtTrigger.next();
      
      },
      error => {
        // this.loading = false;
        // this.status = "error";
        console.log(<any>error);
      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }



}
