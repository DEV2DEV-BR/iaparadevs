interface Cliente {
    idade: number;
    vip: boolean;
    saldoDisponivel: number;
}

interface Produto {
    nome: string;
    preco: number;
    tipo: "produto" | "servico";
    promocao: boolean;
    estoque: number;
}

interface Pedido {
    cliente: Cliente;
    produtos: Produto[];
    data: Date;
    pagamentoConfirmado: boolean;
}

function processarPedido(pedido: Pedido): string {
    let total = 0;

    for (const produto of pedido.produtos) {
        if (produto.estoque === 0) continue;

        let precoFinal = produto.preco;

        if (produto.promocao) {
            precoFinal *= 0.85;
        }

        if (pedido.cliente.vip && produto.tipo === "servico") {
            precoFinal -= 50;
        }

        const dia = pedido.data.getDay();
        if (dia === 0 || dia === 6) {
            precoFinal *= 1.1;
        }

        if (precoFinal < 0) precoFinal = 0;

        total += precoFinal;
    }

    if (pedido.cliente.saldoDisponivel < total) {
        return "Saldo insuficiente para concluir o pedido.";
    }

    if (!pedido.pagamentoConfirmado) {
        return "Pagamento não confirmado.";
    }

    return `Pedido aprovado. Total a cobrar: R$ ${total.toFixed(2)}`;
}
