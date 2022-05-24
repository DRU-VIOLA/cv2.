export class Persona { 
    id? : number;
    nombre: String;
    apellido: String;
    email: String;
    localidad: String;
    profesion: String;
    sobre_mi: String;
    url_foto: String;

    

    constructor (nombre : String, apellido : String, email : String, localidad : String, profesion : String, sobre_mi : String, url_foto : String) {
           
        this.nombre = nombre;
        this.apellido= apellido;
        this.email= email;
        this.localidad= localidad;
        this.profesion= profesion;
        this.sobre_mi= sobre_mi;
        this.url_foto= url_foto;
}
}
