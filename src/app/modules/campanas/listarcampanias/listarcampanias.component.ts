import { Component, OnDestroy, OnInit } from '@angular/core';
import { Campania } from 'src/app/models/campania';
import { Subject } from 'rxjs';
import { CampaniaService } from 'src/app/servicios/campania.service';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-listarcampanias',
  templateUrl: './listarcampanias.component.html',
  styleUrls: ['./listarcampanias.component.scss']
})
export class ListarcampaniasComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  campanias: Campania[] = [];
  loading:boolean;
  dtTrigger: Subject<any> = new Subject();
  idsCampaña = [];

  @Output() campaniaSeleccionada = new EventEmitter<any>();

  constructor(private _campaniaService: CampaniaService) { 
    this.loading = true;
    
  }

  ngOnInit() {
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
    this._campaniaService.listarCampanias()
    //   .map(this.extractData)
      .subscribe(campanias => {
        this.campanias = campanias.data;
        this.loading = false;
    //     // Calling the DT trigger to manually render the table
        console.log(this.campanias);
        this.dtTrigger.next();
        
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  seleccionarCampania(id){
    this.campaniaSeleccionada.emit(id)
  }
  
  // seleccionarCampania(event: any, id){
   
  //   if (event.target.checked) {
  //     this.idsCampaña.push(id)
  //     this.idsCampaña = [... new Set(this.idsCampaña)] 
  //     console.log(this.idsCampaña.sort()) 
  //   }else{
  //     let number = this.idsCampaña.indexOf(id)
  //     console.log(number);
  //     this.idsCampaña.splice(number,1);
  //   }

  // }

}

