class TimeSheetReport{

    static print(empleado){
        console.log("Reporte de tiempos Mensual: " + empleado.getName())
    }

    static print15(empleado){
        console.log("Reporte de tiempos Quincenal: " + empleado.getName())
    }

    static printHoras(empleado){
        console.log("Reporte de tiempos por hora: " + empleado.getName())
    }
}