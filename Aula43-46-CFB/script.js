/* Aula 43 */
//Classe MATH - Metodos e Constantes Matematicos
 //Constantes

 /* document.write(Math.PI); //Escreverá a constante PI
  document.write(Math.SQRT2); //Escreverá a raiz quadrada de 2
  document.write(Math.SQRT1_2); //Escreverá a raiz quadrada de 1/2
 
 //Metodos
  
  var valor = 10
  var angulo = 90
  document.write(Math.abs(valor)) //Retornará o valor absoluto da variavel "valor"
  document.write(Math.ceil(11.3)) //Arrendondará o valor (sempre pra cima) do valor inserido
  document.write(Math.floor(9.8)) //Arrendondará o valor (sempre pra baixo) do valor inserido
  document.write(Math.round(4.8)) //Arrendondará da maneira usual(>= 0.5 : Pra cima. < 0.5 : Pra baixo)
  document.write(Math.pow(4,2)) //Eleva o numero a outro (4^2)
  document.write(Math.sqrt(4)) //Retorna a raiz quadrada
  document.write(Math.random()) //Retorna um numero aleatorio entre 0 e 1
  document.write(Math.random()*10) //Aqui podemos setar um numero maior para ser o limite 
  document.write(Math.random(Math.round())*10) //Aqui tornamo os numeros do intervalo em inteiros


  document.write(Math.cos(angulo)); //Retornará o cosseno
  document.write(Math.sin(angulo)); //Retornará o seno

  document.write(Math.max(4,9,8,10,2,1,3,5,7)) //Retornará o valor maximo dos numeros apresentados
  document.write(Math.min(4,9,8,10,2,1,3,5,7)) //Retornará o valor minimo dos numeros apresentados

/* Aula 44 */
//Funções - Functions
//Functions guardam codigos que só serão executados caso a Function seja chamada(Seja por comando do usuario, seja no proprio codigo)

 function escreve(){
   document.write("Ola mundo")   //Aqui, o codigo só será executado quando a Function for chamada
 }

 escreve(); //Chamado da Function

 function soma(n1,n2){  //Aqui usamos os paramentros dentro dos (). Eles servem para representar um valor que será inserido posteriormente
   var res = n1 + n2;    //No caso. Dois valores que seráo somados
   document.write(res + "<br>");
 }

 soma(4,2); //A Function irá somar 4 e 2
 soma(1,3); //A Function irá somar 1 e 3
 soma(5,7); //A Function irá somar 5 e 7
 soma(10,2); //A Function irá somar 10 e 2

 function subtração(s1,s2){
   var res2 = s1 - s2;   //Aqui usamos o Return. Ele serve para retornar algum valor ao usuario.
   return res2;         //As Functions anteriores não retornavam nada. Apenas imprimiam suas operações
 }

 document.write(subtração(10,5)) //No entanto deve-se usar o Doc.Write na chamada, pois o resultado querendo ou não precisa ser impresso


 var numeros = new Array (4,2,3,98,15,150,30,25,42);
 function media(nums){
    var tam = nums.lenght;
    var soma = 0;
   for (var i=0 ; i<tam ; i++){
     var soma = soma + nums[i];    //Pq não funcionou (?) Aula 30 CFB-Cursos
    }
    return soma/tam;
 }

 document.write(media(numeros));