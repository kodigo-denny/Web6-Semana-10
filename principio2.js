class Order{
    items
    shipping
    total
    peso

    constructor(items, shipping, total, peso){
        this.items = items
        this.shipping = shipping
        this.total = total
        this.peso = peso
    }

    getTotal(){
        return this.total
    }

    getPeso(){
        return this.peso
    }

    setShippingType(tipo){
        this.shipping = tipo
    }

    getShippingCost(){
        return this.shipping.getCost(this)
    }

    getShippingDate(){
        return new Date()
    }
}

class Shipping{
    getCost(orden){

    }

    getDate(order){
        return new Date()
    }

}

class Ground extends Shipping{
    getCost(orden){
        if(orden.getTotal() > 100)
            return 0
        return orden.getPeso() * 1.5
    }
}

class Air extends Shipping{
    getCost(orden){
        return orden.getPeso() * 3
    }
}

// YA esta implentado

class Drone extends Shipping{
    getCost(orden){
        return orden.getPeso() * 7
    }
}

class Bicicleta extends Shipping{
    getCost(orden){
        return orden.getPeso() * 5
    }
}


        /*if(this.shipping == "drone"){
            return this.getPeso() * 7
        }

        if(this.shipping == "bicicleta"){
            return this.getPeso() * 5
        }*/