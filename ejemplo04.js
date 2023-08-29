class Document{
    data
    fileName

    constructor(data, fileName){
        this.data = data
        this.fileName = fileName
    }

    open(){
        console.log(`Archivo: ${this.fileName} abierto`)
    }
}

class WritableDocument extends Document{
    save(){
        console.log(`Archivo: ${this.fileName} guardado exitosamente`)
    }
}

class Project{
    allDocs
    writableDocs

    constructor(allDocs, writableDocs){
        this.allDocs = allDocs
        this.writableDocs = writableDocs
    }

    openAll(){
        for(let item of this.allDocs){
            item.open()
        }
    }

    saveAll(){
        for(let item of this.writableDocs){
            item.save()
        }
    }

}