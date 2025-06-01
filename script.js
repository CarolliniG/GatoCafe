document.querySelectorAll(".produto").forEach((produto) => {
  const btnMais = produto.querySelector(".mais");
  const btnMenos = produto.querySelector(".menos");
  const inputQtd = produto.querySelector('input[type="number"]');

  btnMais.addEventListener("click", () => {
    inputQtd.value = parseInt(inputQtd.value) + 1;
  });

  btnMenos.addEventListener("click", () => {
    if (parseInt(inputQtd.value) > 1) {
      inputQtd.value = parseInt(inputQtd.value) - 1;
    }
  });
});

// Inicializa contador do carrinho
let totalCarrinho = 0;

// Seleciona todos os botões "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll(".btn.adicionar");
const contadorCarrinho = document.getElementById("contador-carrinho");

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Encontra o input de quantidade no mesmo produto
    const produto = botao.closest(".produto");
    const inputQtd = produto.querySelector('input[type="number"]');
    const quantidade = parseInt(inputQtd.value);

    if (!isNaN(quantidade) && quantidade > 0) {
      totalCarrinho += quantidade;
      contadorCarrinho.textContent = totalCarrinho;
    }
  });
});
