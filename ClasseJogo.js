class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

   atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                aa
              break;
            default:
                ataque = "não possui um ataque definido";
              break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const nomeHeroi = prompt("Digite o nome do herói: ");
const tipoHeroi = prompt("Digite o tipo do herói (mago, guerreiro, monge ou ninja): ");
const idadeHeroi = parseInt(prompt("Digite a idade do herói: "));

const heroi = new Hero(nomeHeroi, idadeHeroi, tipoHeroi);
heroi.atacar();
