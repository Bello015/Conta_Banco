class contaBanco {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo(){
        return this.saldo;
    }

    set saldo(valor){
        this.saldo = valor;
    }

    sacar (valor){
        if(valor > this.saldo){
            return 'Operação negada!';
        }
        this.saldo = this.saldo - valor;

        return this.saldo;
    }

    depositar (valor){
        this.saldo = this.saldo = valor;

        return this.saldo;
    }
}

class contaCorrente extends contaBanco{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);

        this.tipo = "corrente";
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this.cartaoCredito;
    }

    set cartaoCredito(valor){
        this.cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBanco{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Poupança";
    }
}

class contaUniversitaria extends contaBanco{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = "Universitaria";
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada";
        }

        this.saldo = this.saldo - valor;
    }
}