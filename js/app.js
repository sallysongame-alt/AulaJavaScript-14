const formulario = document.querySelector("#form-reserva");
const campoLivro = document.querySelector("#livro");
const mensagem = document.querySelector("#mensagem");

const estadoAcervo = document.querySelector("#estado-acervo");
const listaLivros = document.querySelector("#lista-livros");
const botaoReservar = document.querySelector("#botao-reservar");
const botaoRestaurar = document.querySelector("#botao-restaurar");

if (
  !formulario ||
  !campoLivro ||
  !mensagem ||
  !estadoAcervo ||
  !listaLivros ||
  !botaoReservar ||
  !botaoRestaurar
) {
  throw new Error("Elementos obrigatórios não encontrados.");
}



// const listaLivros = document.querySelector("#lista-livros");

// const livro = {
//   id: 1,
//   titulo: "JavaScript para iniciantes",
//   categoria: "Tecnologia",
//   total: 8,
//   emprestados: 5,
//   ativo: true,
// };

// if (!listaLivros) {
//   console.error("Elemento #lista-livros não encontrado.");
// }

// const item = document.createElement("li");
// const titulo = document.createElement("h3");
// const detalhes = document.createElement("p");

// titulo.textContent = livro.titulo;
// detalhes.textContent =
//   `${livro.categoria} - ${livro.total - livro.emprestados} disponível(is)`;

// item.appendChild(titulo);
// item.appendChild(detalhes);
// listaLivros.append(item);