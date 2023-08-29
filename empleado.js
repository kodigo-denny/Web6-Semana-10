class Empleado{
    nombre
    apellido
    telefono

    constructor(nombre, apellido, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
    }

    getName(){
        return this.nombre + " " + this.apellido
    }
}