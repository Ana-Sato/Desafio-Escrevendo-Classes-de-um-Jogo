class propriedadesHeroi {
    constructor(nome,idade,tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;  
    }

    atacar() {

        if(this.tipo === "guerreiro"){
            var ataque = "espada";

        } else if(this.tipo === "mago"){
            var ataque = "magia";

        } else if(this.tipo === "monge"){
            var ataque = "artes marciais";

        } else if(this.tipo === "ninja"){
            var ataque = "shuriken";

        } else {
            console.log("Tipo nao identificado")
        }

        console.log(`O herói ${this.nome} é um ${this.tipo} e atacou usando ${ataque}!`)
    }
}


let heroi1Aventura = new propriedadesHeroi("Siegfried", 50, "guerreiro")

heroi1Aventura.atacar()

let heroi2Aventura = new propriedadesHeroi("Gandolf", 100, "mago")

heroi2Aventura.atacar()

let heroi3Aventura = new propriedadesHeroi("KHARAZIM", 90, "monge")

heroi3Aventura.atacar()

let heroi4Aventura = new propriedadesHeroi("Jiraiya", 90, "ninja")

heroi4Aventura.atacar()
