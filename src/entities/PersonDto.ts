export class PersonDto {
  añoNacimiento: string;
  colorOjos: string;
  peliculas: string[];
  genero: string;
  colorCabello: string;
  altura: string;
  planetaNatal: string;
  masa: string;
  nombre: string;
  colorPiel: string;
  creado: string;
  editado: string;
  especies: string[];
  navesEstelares: string[];
  url: string;
  vehiculos: string[];

  constructor(data: any) {
    this.añoNacimiento = data.birth_year;
    this.colorOjos = data.eye_color;
    this.peliculas = data.films;
    this.genero = data.gender;
    this.colorCabello = data.hair_color;
    this.altura = data.height;
    this.planetaNatal = data.homeworld;
    this.masa = data.mass;
    this.nombre = data.name;
    this.colorPiel = data.skin_color;
    this.creado = data.created;
    this.editado = data.edited;
    this.especies = data.species;
    this.navesEstelares = data.starships;
    this.url = data.url;
    this.vehiculos = data.vehicles;
  }

}