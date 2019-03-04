export class Contact {
  id:any='';
  nom: string = '';
  prenom :string= '';
  email:string = '';
  tel:string = '';
  photo:string = '';
  datenaissance: Date = null;

  constructor() {

  }
  clear(){
    this.nom='';
    this.prenom='';
    this.tel='';
    this.datenaissance=null;
    this.photo='';
    this.email='';
  }

  // constructor(public nom1: string, public prenom1: string, public email1: string, public tel1: number, public photo1: string) {
  // this
  // }
}
