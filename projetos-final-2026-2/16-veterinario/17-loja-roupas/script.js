function mostrarProdutos() {

  lista.innerHTML = "";

  PRODUTOS.forEach((produto, index) => {

    const card = document.createElement("article");

    card.className = "produto";

    let categoria = "Moda";

    if (
      produto.nome.includes("Saia") ||
      produto.nome.includes("Short") ||
      produto.nome.includes("Calça")
    ) {
      categoria = "Parte de baixo";
    }

    if (
      produto.nome.includes("Cropped") ||
      produto.nome.includes("Body") ||
      produto.nome.includes("Blusa") ||
      produto.nome.includes("Regata")
    ) {
      categoria = "Parte de cima";
    }

    if (
      produto.nome.includes("Moletom") ||
      produto.nome.includes("Jaqueta") ||
      produto.nome.includes("Cardigan")
    ) {
      categoria = "Inverno";
    }

    if (
      produto.nome.includes("Tênis") ||
      produto.nome.includes("Bolsa")
    ) {
      categoria = "Acessórios";
    }

    card.innerHTML = `
      ${index < 6 ? '<span class="produto-destaque">DESTAQUE</span>' : ""}

      <div class="produto-img">
        ${produto.emoji}
      </div>

      <span class="produto-categoria">
        ${categoria}
      </span>

      <h3>${produto.nome}</h3>

      <p>${produto.desc}</p>

      <div class="preco">
        ${MOEDA} ${produto.preco.toFixed(2).replace(".", ",")}
      </div>

      <button onclick="adicionarCarrinho(${produto.id})">
        🛍️ ${CTA}
      </button>
    `;

    lista.appendChild(card);
  });
}