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
  idioma:number = 1
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


  idiomaPagina: any = []
  textos = [
    "¡Seguro que te da tranquilidad!",
    "Seguro de auto",
    "Seguro de Propiedad",
    "Seguro Comercial",
    "Seguro de Vida",
    "Seguro de Salud",
    "Seguros Dentales",
    "Beneficios de Empleados",
    "Taxes" ,
    "Brindamos soluciones excepcionales para los clientes",
    "Tranquilidad mental",
    "Control para la vida",
    "100% de satisfacion",
    "Compañia confiable",
    "¿Preguntas? Llame a Servicio al Cliente",
    "- Tenemos agentes certificados por el mercado de salud que están disponibles para escuchar y dar respuestas que puedas tener con toda la eficiencia y profesionalismo que tú y tus seres queridos se merecen",
    "- Nuestros especialistas en servicio al cliente están disponible las 24 horas del día, los 7 días a la semana, en los 365 días del año. Asistencia bilingüe (Inglés / Español) a todos nuestros clientes.",
    "- Más de 10 años de experiencia en la industria de seguros.",
    "¿Por que MIT services es su mejor opción?",
    "- Tenemos agentes certificados por el mercado de salud.",
    "- Especialistas disponibles 24/7.",
    "- ¡Puedes ahorrar hasta un 40% con nosotros!",
    "- No tenemos fees escondidos.",
    "- Si tienes algún problema estaremos hay para ti.",
    "Somos su mejor opcion para su seguro de salud",
    "Compara pólizas entre más de 10 compañías",
    "Trabajamos con las mejores aseguradoras para ofrecerte las coberturas más extensas y completas en seguros realmente competitivos que te ofrecen la tranquilidad de estar en buenas manos.",
    "CONTACTANOS",
    "REDES SOCIALES"

  ]

  texts = [
    "¡Insurance that gives you a piece of mind!",
    "Auto ",
    "Home ",
    "Commercial ",
    "Life ",
    "Health ",
    "Dental ",
    "Employment benefits",
    "Tax" ,
    "We bring exceptional solutions for our clients",
    "Piece of mind",
    "Control of your future",
    "100% satisfaction",
    "Exceptional service",
    "¿ questions ? Call customer service",
    "- we have agents certified by the marketplace que that available to hear and answer any questions with the professionalism that you and your love ones deserve.",
    "- our specialists in customer service are available 24 hours the seven days of the week,  365  days of the year. We have bilingual (English/Spanish) agents.",
    "- Mote than 10 years of experience in the industry",
    "¿ why  Is MIT services your best option?",
    "- our agents are certified by the marketplace ",
    "- specialists available 24/7",
    "-¡ you can save up to 40% with us ",
    "- we don’t have any hidden fees ",
    "- if you encounter any problem we’ll be there for you.",
    "We are your best option for  healthcare!",
    "Compare policies with 10 different companies",
    "We work with the best companies out there to offer the best coverage for your love ones, we offer tranquillity and great savings! You’re in good hands",
    "CONTACT US",
    "SOCIAL MEDIA"

  ]






  titulo: string = "INGRESE SUS DATOS"
  texto: string = "* Al momento del envio de sus datos, le contactaremos a la brevedad posible."

  constructor(private enviocorreoService :EnviocorreoService ) { }

  ngOnInit(){
    this.cambioIdioma()
  }

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

  cambioIdioma(){
    if(this.idioma == 1){
      this.idiomaPagina = this.textos
    }else{
      this.idiomaPagina = this.texts
    }
  }
 
}


