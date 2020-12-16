import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  loading:boolean;
  idsContactos = [];
 

  constructor(
    private _contactoService: ContactoService,
    private chRef: ChangeDetectorRef,
  ) { 
    this.loading = true;
  }

  ngOnInit():void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength : 15,
      lengthChange: false,
			
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
        this.loading = false;
        this.contactos = response.data;
        this.chRef.detectChanges();
        this.dtTrigger.next();
      },
      error => {
        this.loading = false;
        // this.status = "error";
        console.log(<any>error);
      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  eliminarContacto(event: any, id){
   
    if (event.target.checked) {
      this.idsContactos.push(id)
      this.idsContactos = [... new Set(this.idsContactos)] 
      console.log(this.idsContactos.sort()) 
    }else{
      let number = this.idsContactos.indexOf(id)
      console.log(number);
      this.idsContactos.splice(number,1);
    }
   



  }



}
