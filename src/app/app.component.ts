import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { faCarCrash,faHeart,faBuilding,faPhone,faEnvelope,faHome,faTruck,faUserMd,faTooth,faCheck,faHardHat,faCoins  } from '@fortawesome/free-solid-svg-icons';
import {datos} from './models/datos'
import {EnviocorreoService} from './services/enviocorreo.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mit';
  faCarCrash = faCarCrash;
  faHeart = faHeart;
  faHeartbeat = faUserMd;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHome = faHome
  faTruck=faTruck
  faBriefcaseMedical = faTooth
  faCheck = faCheck
  faHardHat = faHardHat
  faCoins = faCoins

  datos: datos = {
    nombre:"",
    apellido:"",
    telefono:"",
    correo:"",
    codigopostal:"",
  }

  opciones = [
    {
      id:1,
      titulo: "Seguro de auto",
      texto: "Le ofrece la forma más fácil para que pueda encontrar la cobertura más completa de seguro de auto que más se adecúa a sus necesidades y presupuesto."
    },
    {
      id:2,
      titulo: "Seguro de Propiedad",
      texto: "Una casa es una de las inversiones más importantes que uno puede hacer. Cuando obtenga un seguro de casa, tendrá la tranquilidad de saber que su hogar está debidamente asegurado. Nuestro objetivo es brindarle cobertura de seguro para su hogar a un precio asequible que sea adecuado para usted y su billetera."
    },
    {
      id:3,
      titulo: "Seguro Comercial",
      texto: "Empresas de todos los tamaños impulsan la economía estadounidense. Entendemos que los dueños de negocios como usted trabajan duro todos los días, asumiendo riesgos para servir mejor a sus clientes, emplear a más personas y esforzarse por tener éxito."
    },
    {
      id:4,
      titulo: "Seguro de Vida",
      texto: "Si necesita un seguro de vida con beneficios en vida, planificación de jubilación, protección hipotecaria o planificación universitaria, ¡ha venido al lugar correcto!"
    },
    {
      id:5,
      titulo: "Seguro de Salud",
      texto: ""
    },
    {
      id:6,
      titulo: "Seguros Dentales",
      texto: ""
    },
    {
      id:7,
      titulo: "Beneficios de Empleados",
      texto: ""
    },
    {
      id:8,
      titulo: "Impuestos",
      texto: ""
    },
    {
      id:0,
      titulo: "INGRESE SUS DATOS",
      texto: "* Al momento del envio de sus datos, le contactaremos a la brevedad posible."
    },

  ]

  titulo: string = "INGRESE SUS DATOS"
  texto: string = "* Al momento del envio de sus datos, le contactaremos a la brevedad posible."

  constructor(private enviocorreoService :EnviocorreoService ) { }


  closeModal() {
    
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "none";

  }


  openModal(id:number) {

    this.opciones.forEach(e => {
      if(e.id == id){
        this.titulo = e.titulo
        this.texto = e.texto
      }
    });

    // Get the modal
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "block";
      
   console.log("algo")

   
  }

  enviarCotizacion(){
   
   
    this.enviocorreoService.enviarDatosCotizacion(this.datos).subscribe(
      res => {
        console.log(res),
        Swal.fire(
          'Datos Enviados',
          'Sus datos fueron enviados Correctamente!',
          'success'
        ),
        this.closeModal()
      }, err => console.log(err))


    this.datos = {
      nombre:"",
      apellido:"",
      telefono:"",
      correo:"",
      codigopostal:""
    }
    
  }
 
}


