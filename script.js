var carta1 = {
  foto:
    "https://s5.static.brasilescola.uol.com.br/be/2020/10/bandeira-da-alemanha.jpg",
  nome: "Alemanha",
  atributos: {
    cultura: 7,
    comida: 5,
    natureza: 4,
    população: 8
  }
};

var carta2 = {
  foto:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
  nome: "Argentina",
  atributos: {
    cultura: 7,
    comida: 9,
    natureza: 6,
    população: 6
  }
};

var carta3 = {
  foto:
    "https://confap.org.br/public/uploads/57bc03a0727f9739bedb4a94cc88e2a9.jpg",
  nome: "Australia",
  atributos: {
    cultura: 5,
    comida: 5,
    natureza: 9,
    população: 7
  }
};

var carta4 = {
  foto:
    "https://s3.static.brasilescola.uol.com.br/be/2021/11/bandeira-do-brasil.jpg",
  nome: "Brasil",
  atributos: {
    cultura: 8,
    comida: 8,
    natureza: 10,
    população: 7
  }
};

var carta5 = {
  foto:
    "https://www.estudopratico.com.br/wp-content/uploads/2017/03/significado-da-bandeira-do-catar.jpg",
  nome: "Catar",
  atributos: {
    cultura: 5,
    comida: 4,
    natureza: 6,
    população: 8
  }
};

var carta6 = {
  foto:
    "https://www.infoescola.com/wp-content/uploads/2010/07/coreia-do-sul-bandeira.jpg",
  nome: "Coréia do sul",
  atributos: {
    cultura: 7,
    comida: 2,
    natureza: 3,
    população: 10
  }
};

var carta7 = {
  foto: "https://static.todamateria.com.br/upload/fr/an/frana_a.jpg",
  nome: "França",
  atributos: {
    cultura: 7,
    comida: 9,
    natureza: 6,
    população: 7
  }
};

var carta8 = {
  foto: "https://www.br.emb-japan.go.jp/cultura/bandeira.jpg",
  nome: "Japão",
  atributos: {
    cultura: 9,
    comida: 5,
    natureza: 4,
    população: 10
  }
};

var carta9 = {
  foto:
    "https://static.significados.com.br/foto/bandeira-atual-de-portugal.png",
  nome: "Portugal",
  atributos: {
    cultura: 7,
    comida: 6,
    natureza: 6,
    população: 7
  }
};

var carta10 = {
  foto:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/255px-Flag_of_Uruguay.svg.png",
  nome: "Uruguai",
  atributos: {
    cultura: 6,
    comida: 6,
    natureza: 9,
    população: 7
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
var cartaMaquina;
var cartaJogador;
var pontosJogador = 0;
var pontosMaquina = 0;

exibePlacar();

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];
  //console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  exibirOpcoes();
  limparResultado();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto =
    "<img src='" + cartaJogador.foto + "' height='150' width='250'><br>";
  opcoesTexto += "<h2>" + cartaJogador.nome + "</h2>";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<h3><input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br></h3>";
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<h1>Você Venceu<h1><br>";
    pontosJogador = pontosJogador + 1;
    exibeResultadoNaTela();
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "<h1>Você Perdeu, a carta da maquina é maior<h1><br>";
    pontosMaquina = pontosMaquina + 1;
    exibeResultadoNaTela();
  } else if ((valorCartaMaquina = valorCartaJogador)) {
    elementoResultado.innerHTML = "<h1>Empatou<h1><br>";
    exibeResultadoNaTela();
  } else {
    alert("Selecione um atributo");
  }
}

function exibeResultadoNaTela() {
  mostrarCartaMaquina();
  exibePlacar();

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function mostrarCartaMaquina() {
  //mostrando carta maquina
  var elementoResultado1 = document.getElementById("resultadoMaquina");
  console.log(cartaMaquina);
  elementoResultado1.innerHTML +=
    "<img src='" + cartaMaquina.foto + "' height='150' width='250'>";
  elementoResultado1.innerHTML += "<h2>" + cartaMaquina.nome + "</h2>";
  for (var atributo in cartaMaquina.atributos) {
    elementoResultado1.innerHTML +=
      "<h3>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</h3>";
  }
}

function limparResultado() {
  var elementoResultado = document.getElementById("resultado");
  var elementoResultado1 = document.getElementById("resultadoMaquina");
  elementoResultado.innerHTML = "";
  elementoResultado1.innerHTML = "";
}

function exibePlacar() {
  var elementoPlacar = document.getElementById("placar");
  elementoPlacar.innerHTML =
    "<h1>Placar do jogo</h1><h3>Jogador:" +
    pontosJogador +
    " <h3><h3>Maquina:" +
    pontosMaquina +
    " <h3>";
}