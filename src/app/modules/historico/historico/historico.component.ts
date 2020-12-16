import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HistoricoService } from 'src/app/servicios/historico.service';
import { Historico } from 'src/app/models/historico';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  historicos: Historico[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  loading:boolean;
  // idsContactos = [];


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })




  });



  constructor(
    private _historicoService: HistoricoService,
    private chRef: ChangeDetectorRef,
  ) { 
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

    this.listarHistorico();
  }

  listarHistorico() { 
    this._historicoService.listarHistorico().subscribe(
      response => {
        this.loading = false;
        this.historicos = response.data;
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

}
