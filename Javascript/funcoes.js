function somar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por número menores ou iguais a zero!";
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

//Faça uma função para calcular a potência
function potencia(){
    var num1;
    var num2;
 
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
 
    var resNum1 = "Potência do " + num1 + " Elevado à:" + num2 + "º Potência" + resNum1;
   
    var resNum1 = Math.pow ( num1,num2);
 
    document.getElementById("resultado").value = "\n" + "Potência do " + num1 + " Elevado à " + num2 + "º Potência:  " + resNum1;
}


//Faça uma função para calcular a raiz dos dois números

function raiz(){
    var num1;
    var num2;
    
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("TsNum").value);

    var resNum1 = Math.sqrt (num1);
    var resNum2 = Math.sqrt (num2);

    document.getElementById("resultado").value = "\n" + " A raíz do primeiro : " + resNum1 + "\n\n" + "Raiz do segundo número" + resNum2;
}

function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;

    a = parseInt(document.getElementById("tpNum").value);
    b = parseInt(document.getElementById("tsNum").value);
    c = parseInt(document.getElementById("ttNum").value);
    //calcular delta
    delta = Math.pow(b,2) - 4 * a * c;

    //2 parte: calcular x1 e x2 se delta n for negativo
    if(delta >= 0){
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
    }else{
        x1 = "Impossível calcular x1, pois o delta é negativo";
        x2 = "Impossível calcular x2, pois o delta é negativo";
    }
    //mostrar tela
    document.getElementById("resultado").innerHTML = "\nDelta: " + delta + "\n\nX1: " + x1 + "\nX2: " + x2;

}

function parImpar(){
    var num1 = parseInt(document.getElementById("tpNum").value);
    var num2 = parseInt(document.getElementById("tsNum").value);
 
    if(num1 % 2 == 0 && num2 % 2 == 0){
        document.getElementById("resultado").value = "Ambos os números são pares" ;
    } else if (num1 % 2 != 0 && num2 % 2 != 0) {
        document.getElementById("resultado").value = "Ambos os números são ímpares" ;
    } else if (num1 % 2 == 0 && num2 % 2 != 0) {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " ,é par." + " E o segundo: " + num2 + " ,é ímpar" ;
    } else {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " ,é impar." + " E o segundo: " + num2 + " ,é par" ;
    }
}
//13 exercícios 

function contador(){
   
    var resultado = document.getElementById("resultado");
    resultado.value = ""; // Limpa o conteúdo
 
    for (var i = 1; i <= 10; i++) {
        resultado.value += i + "\n"; 
    }
 
 
}

function verificarPositivoNegativo() {
    var num1 = parseInt(document.getElementById("tpNum").value);
    var num2 = parseInt(document.getElementById("tsNum").value);
 
    if (num1 > 0 && num2 > 0) {
        document.getElementById("resultado").value = "Ambos os números são positivos" ;
    } else if (num1 < 0 && num2 < 0) {
        document.getElementById("resultado").value = "Ambos os números são negativos" ;
    } else if (num1 > 0 && num2 < 0) {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " é positivo e o segundo: " + num2 + " é negativo" ;
    } else if (num1 < 0 && num2 > 0) {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " é negativo e o segundo: " + num2 + " é positivo" ;
    } else if (num1 == 0 && num2 == 0) {
        document.getElementById("resultado").value = "Ambos os números são zero" ;
    } else if (num1 == 0 && num2 != 0) {
        document.getElementById("resultado").value = "O primeiro número é zero e o segundo é diferente de zero" ;
    } else {
        document.getElementById("resultado").value = "O primeiro número é diferente de zero e o segundo é zero" ;
    }
}


function numerosPares() {
    var resultado = document.getElementById("resultado");
    resultado.value = ""; 
 
    for (var i = 2; i <= 20; i += 2) {
        resultado.value += i + "\n"; 
    }
}



function ateCem() {
    var soma = 0;
    for (var numero = 1; numero <= 100; numero++){
        soma += numero;
    }
    document.getElementById("resultado").value = "A soma dos números de 1 a 100 é: " + soma;
}

 
function multiplo5() {
    var resultado = document.getElementById("resultado"); // Elemento onde os resultados serão exibidos
    resultado.value = ""; // Limpa o conteúdo anterior
   
    var multiplos = ""; // Variável para armazenar
   
    // Loop para encontrar e armazenar
    for (var numero = 5; numero <= 50; numero += 5) {
        multiplos += numero + ", "; // Adiciona o número 
    }
   
    // Exibição dos múltiplos de 5
    resultado.value = multiplos === "" ? "Não há múltiplos de 5 de 1 a 50." : "Os múltiplos de 5 de 1 a 50 são: " + multiplos.slice(0, -2); // Exibe os múltiplos sem a última vírgula e espaço ou mensagem de ausência de múltiplos
}
 
function indoAte(){
    var num1; // Declarando variável 
    var res = ""; // Inicializando a variável 
 
    num1 = parseInt(document.getElementById("tpNum").value);
 
    // Verificando
    if (num1 > 0) {
    // Loop para imprimir os números
    for (var i = 1; i <= num1; i++) {
        res += i + ", "; // Adicionando o número 
    }
    // Exibindo os números na página HTML
    document.getElementById("resultado").value = "Os números de 1 a " + num1 +
    " são: " + res.slice(0, -2); //
    } else {
    // Caso
    document.getElementById("resultado").value = "O número fornecido não é válido. Por favor, insira um número maior que zero.";
    }
}
 
function somaAte(){
    var num1 = parseInt(document.getElementById("tpNum").value); // Declarando variável
    var res = 0; // Inicializando a variável

 
    // Verificando
  if (num1 > 0) {
    // Loop
    for (var i = 1; i <= num1; i++) {
        res += i
    }
    document.getElementById("resultado").value = "Os números de 1 a " + num1 + " é : " + res ;
  } else {
    // Caso o número fornecido não seja válido
    document.getElementById("resultado").value = "O número fornecido não é válido. Por favor, insira um número maior que zero.";
  }
}

function primosAte20(){
    var resultado = "Números primos de 1 a 20: ";

    for (var num = 1; num <= 20; num++) {
        var primo = true;
        //
        
      for (var i = 2; i < num; i++){
        if (num % i === 0) {
            primo = false;
            break;
        }
      }
        
      
      
    
     if (primo && num > 1) {
        resultado += num + " ";
     }
    } 

    document.getElementById("resultado").value = resultado;
}


function primoVerificar(){
        var num1
     
        num1 = parseInt(document.getElementById("tpNum").value);
     
        // Verifica se o número é menor ou igual a 1
        if (num1 <= 1) {
            document.getElementById("resultado").value = "O número " + num1 + " não é primo.";
            return;
        }
     
        var primo = true; // Assume que o número é primo inicialmente
     
        // Loop para verificar se o número é divisível por algum número diferente de 1 e ele mesmo
        for (var i = 2; i < num1; i++) {
            if (num1 % i === 0) {
                primo = false; // Se for divisível, não é primo
                break; // Sai do loop
            }
        }
     
        // Exibe o resultado na página HTML
        if (primo) {
            document.getElementById("resultado").value = "O número " + num1 + " é primo.";
        } else {
            document.getElementById("resultado").value = "O número " + num1 + " não é primo.";
        }
    

}



