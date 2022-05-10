let btn = document.getElementById('btn-cpf')

btn.addEventListener('click', () => {
    let input = document.getElementById('input-cpf')
    let cpf = input.value
    let resultadoValidacao = validaCPF(cpf)

    if(resultadoValidacao){
        $('#modalSuccess').modal('show')
        input.value = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`
    }else{
        $('#modalError').modal('show')
    }
})

function validaCPF(cpf){
    if(cpf.length != 11){
        // Validação tamanho do CPF (== 11)
        return false
    }else{
        let numeros = cpf.substring(0, 9)
        let digitos = cpf.substring(9)
        
        // Validação 1° dígito
        let soma = 0
        for(var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i
        }
        let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)
        if (resultado != digitos.charAt(0)){
            return false
        }

        // Validação 2° dígito
        soma = 0
        numeros = cpf.substring(0, 10)
        for(var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k
        }
        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)
        if (resultado != digitos.charAt(1)){
            return false
        }

        return true
    }
}