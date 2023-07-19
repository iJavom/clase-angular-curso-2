import { Estudiante } from "./estudiante.model";


export interface Clase{
    nombre: string;
    duracion:number;
    alumnos: Estudiante[];
}

