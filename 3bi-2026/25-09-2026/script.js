function calcularPedido() {
    let produto = document.getElementById("produto").value;
    let preco = Number(document.getElementById("preco").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let total = preco * quantidade;

    console.log("Produto: " + produto);
    console.log("Preço: R$ " + preco.toFixed(2));
    console.log("Quantidade: " + quantidade);
    console.log("Total do pedido: R$ " + total.toFixed(2));
}
