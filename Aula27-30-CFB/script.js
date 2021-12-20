/* Aula 27 */
/* Array/Vetor Pt.1 (Array é um conjunto de Variaveis) ou
   (Um espaço com capacidade p/ armazenar varias variaveis)*/
 //Array pode ser configurado de 2 maneiras:  
   var cor = new Array();
 //ou
   var cor = []

   //Para inserir elementos no FINAL do Array usa-se o metodo PUSH

   cor.push("Azul"); //Elemento adicionado na posição 0
   cor.push("Branco"); //Elemento adicionado na posição 1
   cor.push("Vermelho"); //Elemento adicionado na posição 2
   cor.push("Amarelo"); //Elemento adicionado na posição 3

   /*document.write(cor[3]);

   //Pode-se tambem preencher Arrays diretamente na definição
   var cores = ["Azul", "Marrom", "Rosa", "Dourado", "Cinza", "Laranja"]; 
   // Pode ate ser considerado um Banco de Dados (?)


   
/* Aula 28 */
//Array/Vetor Pt.2
 // Mais Metodos
 /* var mochila = ["Faca", "Isqueiro", "Moedas", "Pão", "Fuzil", "Binóculo"]

  //Para inserir elementos no INICIO do Array usa-se o metodo UNSHIFT 
   mochila.push("Corda") //Vai ser inserido no final do Array 'mochila'
   mochila.unshift("Mapa") //Vai ser inserido no inicio do Array 'mochila'

  //Para retirar elementos no FINAL do Array usa-se o metodo POP
   mochila.pop() //Vai ser retirado o ULTIMO elemento no Array 'mochila'
  
  //Para retirar elementos no INICiO do Array usa-se o metodo SHIFT 
   mochila.shift() //Vai ser retirado o PRIMEIRO elemento no Array 'mochila'

  //Para retirar elementos A SUA ESCOLHA dentro Array usa-se o metodo SPLICE
   mochila.splice(2,1) //Vai ser retirado o elemento na pos 2 do Array
   mochila.splice(3,2) //Vai ser retirado o elemento na pos 3 mais um elemento (pos 4)

 
/* Aula 29 */
//Array/Vetor Pt.3
 // Mais Metodos Pt.2
  var caixa = ["Livro", "Bau", "Moedas", "Espada", "Lanterna", "Garrafa"]
  var num = [4,0,10,2,3,8,9,7,6,5,1]
  var numeros,cofre;

  //Para buscar elementos dentro de um Array usa-se o metodo INDEX OF
   caixa.indexOf("Espada"); //Vai mostrar a posição desse elemento
 
  //Para ORDENAR os elementos dentro de um Array na ordem crescente usa-se SORT
   num.sort();
  //Para ORDENAR os elementos dentro de um Array na ordem decrescente usa-se REVERSE
   num.reverse(); 
  
  //*Primeiro usa-se o SORT e depois o REVERSE, caso, queira ordenar de maneira decrescente 

  //Para juntar todos os elemento do Array em uma unica Variavel usa-se JOIN
   numeros=num.join();
   //document.write(numeros);
  //Para juntar UNIR os elementos de dois Arrays distintos usa-se CONCAT
   cofre=caixa.concat(mochila)

  /* document.write(cofre[0]);
   document.write(cofre[1]);
   document.write(cofre[2]);
   document.write(cofre[3]);
   document.write(cofre[4]);
   document.write(cofre[5]);
   document.write(cofre[6]);
   document.write(cofre[7]);
   document.write(cofre[8]);
   document.write(cofre[9]);
   
  //Para buscar o TAMANHO de um Arrray usa-se LENGHT
   document("Tamanho do Cofre: " + cofre.length);

/* Aula 30 */
//Matrizes ou Array Multidimensional (Variação do Array)
//Matriz é basicamente um Array com um outro Array dentro de cada posição  
 var mochila = []
 var compartimento1 = ["bussola", "radio"],
     compartimento2 = ["faca", "corda"],
     compartimento3 = ["binoculo", "lanterna"],
     compartimento4 = ["carne", "agua"],
     compartimento5 = ["espelho", "esparadrapo"];

 mochila.push(compartimento1);
 mochila.push(compartimento2);
 mochila.push(compartimento3);
 mochila.push(compartimento4);
 mochila.push(compartimento5);     

 document.write(mochila[0][0] + " - " + mochila[0][1] + "<br>");
 document.write(mochila[1][0] + " - " + mochila[1][1] + "<br>");
 document.write(mochila[2][0] + " - " + mochila[2][1] + "<br>");
 document.write(mochila[3][0] + " - " + mochila[3][1] + "<br>");
 document.write(mochila[4][0] + " - " + mochila[4][1] + "<br>");