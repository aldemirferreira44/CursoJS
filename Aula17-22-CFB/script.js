/* Aula 17 */
/* Escrita com JavaScript */
 document.write("<p style='color:#00f; weight: bold'>Olá mundo</p>")

 
/* Aula 18 */ 
/* Variaveis */
  var canal = "Oi", nome = 15 , site = "Mundo", num = 1000;
 /* Soma de Variaveis, só pode acontecer com dois numeros inteiros ou reais. Ou: */
  var soma = canal + site + "<br>" + (num * nome);
  document.write(soma);  


/* Aula 19 */
/* Constantes (Seus valores, diferentes das Variaveis, não mudam) */
  const ferro = "Esse valor não muda";

  /* Constantes previamente definidas no sistema: Exemplo abaixo */
   document.write(Math.PI);


/* Aula 20 */
/* Window.Alert, Window.Prompt, Window.Confirm*/
 /* Window.Alert */
  alert("Não necessita colocar o window antes" + " " + soma);
  const quebra = "\n" /*-->  Comando para quebrar linhas dentro de Window.Alerts */

 /* Window.Prompt (Comando do Window que colhe valores e insere no sistema) */ 
  var nome = prompt("Aqui escreve-se a Label", "Aqui escreve-se o Placeholder");
  document.write(nome);

 /* Window.Confirm (Janela com um texto e dois botóes TRUE e FALSE) */
  var resultado = confirm("Texto dentro do Confirm: Em seguida botoes TRUE e FALSE") 
  document.write("O resultado deu: " + resultado)

  
/* Aula 21 */
/* Estruturas IF - ELSE (Principal Cmd para Estrutura de Decisão) */
 /* IF = Se */
  if(teste-logico)   //Testes logicos trabalham com comparações: ex: 10==10(true), 4!=4(false) 
  {
    //true
  }
   else
  {
    //false 
  }
 /* Exemplos */
  
 /* 
  var n1, n2;
  n1 = 15;
  n2 = 10;
  
  if(n1>n2)
  {
    document.write("Deu TRUE")  
  } 
  else 
  {
    document.write("Deu FALSE")
  } 
  */
  

  var nota = document.getElementById('not')
  const corte = 70

  if(nota==0)
  {
    document.write("Insira sua nota")
  }
  else
  {
    if(nota >= corte) 
    {
      document.write('Aprovado'+'<br>'+'Sua nota foi de: '+ nota)
    }
    else 
    {
      document.write('Reprovado'+'<br>'+'Sua nota foi de: '+ nota)
    }
  }  

/* Aula 22 */
/* Estruturas AND(&&) e OR(||) */
 /* O AND só sera TRUE se as duas condições forem verdadeiras */
  if ((50>60) && (80<100))
  {
     //True
  }

  if ((50>60) && (80==50))
  {
    //False
  }

 /* O OR só será TRUE se uma das duas condições ser verdadeiras */ 
  if ((50<40) || (80==80))
  {
    //True
  }
  
  
