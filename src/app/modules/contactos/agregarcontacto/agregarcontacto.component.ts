import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { iif } from "rxjs";
import { ContactoService } from 'src/app/servicios/contacto.service';
import { Etiqueta } from 'src/app/models/etiqueta';
declare var $: any;

@Component({
  selector: "app-agregarcontacto",
  templateUrl: "./agregarcontacto.component.html",
  styleUrls: ["./agregarcontacto.component.scss"]
})
export class AgregarcontactoComponent implements OnInit {
  contactoForm;
  etiqueta = new Etiqueta();
  etiquetas: Etiqueta[] = [];

  datos = {
    nombre: "",
    apellido: "",
    documento: "",
    celular: "",
    correo: "",
    estado: "",
    campo_pers_1: "",
    campo_pers_2: "",
    campo_pers_3: "",
    campo_pers_4: "",
    campo_pers_5: "",
    campo_pers_6: "",
    campo_pers_7: "",
    campo_pers_8: "",
    campo_pers_9: "",
    campo_pers_10: ""
  };

  constructor(private _fb: FormBuilder, private _router: Router,private _contactoService: ContactoService) {
    this.contactoForm = this._fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      documento: ["", Validators.required],
      celular: [""],
      correo: [""],
      estado: [""],
      nombreEtiqueta: [""],
      tipoDatoEtiqueta: [""],
      datoEtiqueta: [""]
      // campo_pers_1: [""],
      // campo_pers_2:[""] ,
      // campo_pers_3:[""] ,
      // campo_pers_4:[""] ,
      // campo_pers_5:[""] ,
      // campo_pers_6:[""] ,
      // campo_pers_7:[""] ,
      // campo_pers_8:[""] ,
      // campo_pers_9:[""] ,
      // campo_pers_10:[""]
    });
  }

  ngOnInit() {}

  
  agregarCamposPersonalizados() {

  
    this.etiqueta.nombre = this.contactoForm.value.nombreEtiqueta;
    this.etiqueta.tipo = this.contactoForm.value.tipoDatoEtiqueta;
    if (!this.etiqueta.tipo) {
      this.etiqueta.tipo = "string";
    }
    this.etiqueta.dato = this.contactoForm.value.datoEtiqueta;

    console.log(this.contactoForm);
    if (
      (this.contactoForm.value.nombreEtiqueta &&
        this.contactoForm.value.datoEtiqueta) ||
      this.etiquetas.length < 10
    ) {
      this.etiquetas.push(this.etiqueta);

      this.contactoForm.patchValue({
        nombreEtiqueta: "",
        tipoDatoEtiqueta: "string",
        datoEtiqueta: ""
      });
    }

    // let continuar = this.campanaForm.value.activadores.id;

    // if (continuar) {
    //   this.activador = this.campanaForm.value.activadores;

    //   const resultado = this.camposPersonalizados.find(
    //     campo => campo.id === this.activador.id
    //   );

    //   this.activadorForm.campos_personalizado_id = this.activador.id;
    //   this.activadorForm.condicion = this.activador.condicion;
    //   this.activadorForm.valor = this.activador.valor;

    //   this.activador.campo = resultado.etiqueta;

    //   this.activadores.push(this.activador);
    //   this.activadoresForm.push(this.activadorForm);

    //   this.campanaForm.patchValue({
    //     activadores: {
    //       id: "",
    //       campo: "",
    //       condicion: "",
    //       valor: ""
    //     }
    //   });

    // }
  }

  deleteCampoPersonalizado(i) {
    this.etiquetas.splice(i, 1);
  }

  onSubmit(customerData) {
    this.datos["nombre"] = this.contactoForm.value.nombre;
    this.datos["apellido"] = this.contactoForm.value.apellido;
    this.datos["documento"] = this.contactoForm.value.documento;
    this.datos["celular"] = this.contactoForm.value.celular;
    this.datos["correo"] = this.contactoForm.value.correo;
    this.datos["estado"] = 'Activo';

    for (const key in this.etiquetas) {
      if (this.etiquetas.hasOwnProperty(key)) {
        const element = this.etiquetas[key];
      

        switch (key) {
          case "0":
            this.datos["campo_pers_1"] = element.nombre;
            break;
          case "1":
            this.datos["campo_pers_2"] = element.nombre;
            break;
          case "2":
            this.datos["campo_pers_3"] = element.nombre;
            break;
          case "3":
            this.datos["campo_pers_4"] = element.nombre;
            break;
          case "4":
            this.datos["campo_pers_5"] = element.nombre;
            break;
          case "5":
            this.datos["campo_pers_6"] = element.nombre;
            break;
          case "6":
            this.datos["campo_pers_7"] = element.nombre;
            break;
          case "7":
            this.datos["campo_pers_8"] = element.nombre;
            break;
          case "8":
            this.datos["campo_pers_9"] = element.nombre;
            break;
          default:
            this.datos["campo_pers_10"] = element.nombre;
            break;
        }
      }
    }

    console.log(this.datos);
    this._contactoService.guardarContacto(this.datos).subscribe(
      response => {
        console.log(response);
        this.showNotification("success");
   
        // this._router.navigateByUrl("contactos");
      },
      error => {
        this.showNotification("danger");
  
        console.log(<any>error);
      }
    );

    // this.campanaForm.reset();



    
    
    
    
    
   
    
    
    
    

    
    
  }

  showNotification(type) {
    let mensaje: any;

    if (type == "success") {
      mensaje = "El contacto se ha creado correctamente";
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
}
