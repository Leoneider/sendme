import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Activador } from "src/app/models/activador";
import { CampopersonalizadoService } from "src/app/servicios/campopersonalizado.service";
import { CampoPersonalizado } from "src/app/models/campopersonalizado";
import { CampaniaService } from "src/app/servicios/campania.service";
import { ActivadorForm } from "src/app/models/activadorform";
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: "app-agregarcampanas",
  templateUrl: "./agregarcampanas.component.html",
  styleUrls: ["./agregarcampanas.component.scss"]
})
export class AgregarcampanasComponent implements OnInit {
  contador: number;
  isActive: boolean;
  dias = [];
  diasValid: boolean = true;
  combo = [];
  noMostrarValor = true;
  tipodato = "date";

  activador = new Activador();
  activadores: Activador[] = [];

  activadorForm = new ActivadorForm();
  activadoresForm: ActivadorForm[] = [];

  camposPersonalizado = new CampoPersonalizado();
  camposPersonalizados: CampoPersonalizado[] = [];
  camposMensajes = [];

  datos = {
    nombre: "",
    descripcion: "",
    fecha_inicio: "",
    fecha_fin: "",
    mensaje: "",
    dias: [],
    activadores: []
  };

  campanaForm;

  constructor(
    private fb: FormBuilder,
    private _campoService: CampopersonalizadoService,
    private _campaniaService: CampaniaService,
    private _router: Router
  ) {
    this.activadores = [];

    this.campanaForm = this.fb.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      fechainicial: ["", Validators.required],
      fechafinal: [""],
      hora: [""],
      dias: this.fb.group({
        lunes: [""],
        martes: [""],
        miercoles: [""],
        jueves: [""],
        viernes: [""],
        sabado: [""],
        domingo: [""]
      }),
      activadores: this.fb.group({
        id: [""],
        campo: [""],
        condicion: [""],
        valor: [""]
      }),
      usuario: [""],
      fechacreacion: [""],
      estado: [""],
      campoMensaje: [""],
      mensaje: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.camposAll();
    this.camposMensaje();
  }

  onKey(event: any) {
    this.contador = event.target.value.length;
    if (this.contador > 160) {
      this.isActive = true;
      this.contador = 160 - this.contador;
    } else {
      this.isActive = false;
    }
  }

  onSubmit(customerData) {
    this.datos["nombre"] = this.campanaForm.value.nombre;
    this.datos.descripcion = this.campanaForm.value.descripcion;
    this.datos.fecha_inicio = this.campanaForm.value.fechainicial;
    this.datos.fecha_fin = this.campanaForm.value.fechafinal;
    this.datos.mensaje = this.campanaForm.value.mensaje;
    this.agregarDias();

    this.datos["activadores"] = this.activadoresForm;

    if (this.diasValid) {
      // this.items = this.cartService.clearCart();

      console.log(this.datos);
      this._campaniaService.agregarCampania(this.datos).subscribe(
        response => {
          console.log(response);
          this.showNotification("success");
     
          this._router.navigateByUrl("campanas");
        },
        error => {
          this.showNotification("danger");
    
          console.log(<any>error);
        }
      );

      this.campanaForm.reset();
      this.activadores = [];
      this.activadoresForm = [];
      this.contador = 0;
      this.dias = [];
      this.diasValid = true;
    }
  }

  showNotification(type) {
    let mensaje: any;

    if (type == "success") {
      mensaje = "La campaña se ha creado correctamente";
    } else {
      mensaje = "Ocurrio un error en el proceso";
    }

    $.notify(
      {
        // icon: "fas fa-check",
        message: "<b>" + mensaje
      },
      {
        type: type,
        timer: 3000,
        placement: {
          from: "top",
          align: "right"
        }
      }
    );
  }

  agregarDias() {
    let dias = this.campanaForm.value.dias;

    for (const dia in dias) {
      if (dias.hasOwnProperty(dia) && dias[dia] == true) {
        this.dias.push(dia);
      }
    }

    console.log(this.dias.length);
    if (this.dias.length == 0) {
      this.diasValid = false;
    } else {
      this.diasValid = true;
    }

    this.datos["dias"] = this.dias;
  }

  agregarActivadores() {
    let continuar = this.campanaForm.value.activadores.id;

    if (continuar) {
      this.activador = this.campanaForm.value.activadores;

      const resultado = this.camposPersonalizados.find(
        campo => campo.id === this.activador.id
      );

      this.activadorForm.campos_personalizado_id = this.activador.id;
      this.activadorForm.condicion = this.activador.condicion;
      this.activadorForm.valor = this.activador.valor;

      this.activador.campo = resultado.etiqueta;

      this.activadores.push(this.activador);
      this.activadoresForm.push(this.activadorForm);

      this.campanaForm.patchValue({
        activadores: {
          id: "",
          campo: "",
          condicion: "",
          valor: ""
        }
      });
    }
  }

  cambiarTipoDatoInput() {
    this.campanaForm.patchValue({
      activadores: {
        condicion: ""
      }
    });

    this.mostrarValor();
    let comboId = this.campanaForm.value.activadores.id;

    if (comboId) {
      const tipodato = this.camposPersonalizados.find(
        campo => campo.id === comboId
      );

      switch (tipodato.tipo) {
        case "date":
          this.combo = ["Hoy", "Ayer", "Mañana", "Igual a", "Menor que"];
          break;
        case "string":
          this.combo = [
            "Diferente",
            "Inicia con",
            "Contiene",
            "Esta vacio",
            "No esta vacio"
          ];
          break;
        case "int":
          this.combo = [
            "Igual",
            "Diferente",
            "Menor",
            "Mayor",
            "Menor o igual",
            "Mayor o igual"
          ];
          break;
      }

      let valor: any = document.getElementById("valor");
      if (valor) {
        valor.type = tipodato.tipo;
      }
    }
  }

  deleteActivador(i) {
    this.activadores.splice(i, 1);
  }

  camposAll() {
    this._campoService.campos().subscribe(
      response => {
        this.camposPersonalizados = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  camposMensaje(){
    this._campoService.camposMensaje().subscribe(
      response => {
        this.camposMensajes = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  mostrarValor() {
    if (
      this.campanaForm.value.activadores.condicion === "Hoy" ||
      this.campanaForm.value.activadores.condicion === "Ayer" ||
      this.campanaForm.value.activadores.condicion === "Mañana"
    ) {
      this.noMostrarValor = false;
    } else {
      this.noMostrarValor = true;

      let comboId = this.campanaForm.value.activadores.id;

      if (comboId) {
        const tipodato = this.camposPersonalizados.find(
          campo => campo.id === comboId
        );

        let valor: any = document.getElementById("valor");
        if (valor) {
          valor.type = tipodato.tipo;
        }
      }
    }
  }

  agregarDatoDinamico() {
    let nuevo = this.campanaForm.value.mensaje
    nuevo += '{'+ this.campanaForm.value.campoMensaje+'}'
    this.campanaForm.patchValue({
      mensaje: nuevo
    });
  }
}
