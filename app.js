/**
 * @author Samuelgadelha
 * @version 1.0
 */

// Variáveis
let salario, agua, luz, saldo, internet, gas, extra, mercado;

function calcular() {
    // Validação dos campos obrigatórios (todos)
    if (frmSaldo.txtSalario.value === "") {
        alert("Informe quanto é seu salário");
        frmSaldo.txtSalario.focus();
        return;
    } 
    if (frmSaldo.txtAgua.value === "") {
        alert("Informe quanto paga de Água");
        frmSaldo.txtAgua.focus();
        return;
    } 
    if (frmSaldo.txtLuz.value === "") {
        alert("Informe quanto paga de Luz");
        frmSaldo.txtLuz.focus();
        return;
    } 
    if (frmSaldo.txtInternet.value === "") {
        alert("Informe quanto paga de Internet");
        frmSaldo.txtInternet.focus();
        return;
    } 
    if (frmSaldo.txtGas.value === "") {
        alert("Informe quanto paga de Gás");
        frmSaldo.txtGas.focus();
        return;
    } 
    if (frmSaldo.txtMercado.value === "") {
        alert("Informe quanto paga em compras");
        frmSaldo.txtMercado.focus();
        return;
    }
    else if (frmSaldo.txtExtra.value === "") {
        alert("Informe quanto paga em custos extras");
        return;
    } 
    

    // Captura das variáveis salário, água, luz e despesas
    salario = parseFloat(frmSaldo.txtSalario.value);
    agua = parseFloat(frmSaldo.txtAgua.value);
    luz = parseFloat(frmSaldo.txtLuz.value);
    internet = parseFloat(frmSaldo.txtInternet.value);
    gas = parseFloat(frmSaldo.txtGas.value);
    extra = parseFloat(frmSaldo.txtExtra.value);
    mercado = parseFloat(frmSaldo.txtMercado.value);



    // Mensalidade valor

    // Cálculo do Saldo
    saldo = salario - (luz + agua + internet + gas + extra + mercado);
    document.getElementById("saldo").innerHTML = `R$ ${saldo.toFixed(2)}`;

    // Verificação de status financeiro
    if (saldo >= 2000) {
        document.getElementById("status").innerHTML = "Tá esbanjando grana";
        document.getElementById("grafico").src = "img/esbanjando.png";
    } else if (saldo >= 900) {
        document.getElementById("status").innerHTML = "Sobra dinheiro pra um churrasquinho";
        document.getElementById("grafico").src = "img/churrasco.png";
    } else if (saldo >= 0) {
        document.getElementById("status").innerHTML = "Tá em dia";
        document.getElementById("grafico").src = "img/emdia.png";
    } else if (saldo >= -2000) {
        document.getElementById("status").innerHTML = "Devendo";
        document.getElementById("grafico").src = "img/demais.png";
    } else {
        document.getElementById("status").innerHTML = "Devendo Demais";
        document.getElementById("grafico").src = "img/devendo.png";
    } 

}

function limpar() {
    document.getElementById("saldo").innerHTML = "💰";
    document.getElementById("status").innerHTML = "Status";
    document.getElementById("desc").innerHTML = "mensalidade no Senac";
    document.getElementById("grafico").src = "img/reset.png";
}
