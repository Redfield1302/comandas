document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    // Coleta dos dados do pedido
    const size = document.getElementById('size').value;
    const flavors = Array.from(document.getElementById('flavor').selectedOptions)
        .map(option => option.value);  // Coleta todos os sabores selecionados
    const name = document.getElementById('name').value;
    const payment = document.getElementById('payment').value;

    // Exibe os detalhes do pedido na tela
    const orderDetails = `
        Nome do Cliente: ${name} <br>
        Tamanho da Pizza: ${size} <br>
        Sabores: ${flavors.join(', ')} <br>  <!-- Exibe todos os sabores selecionados -->
        Forma de Pagamento: ${payment}
    `;
    document.getElementById('orderDetails').innerHTML = orderDetails;

    // Exibe a confirmação do pedido
    document.getElementById('confirmation').style.display = 'block';

    // Exibe o botão de impressão
    document.getElementById('printBtn').style.display = 'inline';
});

// Função para imprimir a comanda
function printReceipt() {
    const content = document.getElementById('orderDetails').innerHTML;

    // Cria um documento para impressão
    const printWindow = window.open('', '', 'height=500,width=500');
    printWindow.document.write('<html><head><title>Comanda</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');

    // Chama a impressão
    printWindow.document.close();  // Fecha o documento
    printWindow.print();  // Abre a caixa de diálogo de impressão
}
