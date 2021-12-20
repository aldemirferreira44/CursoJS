/* Aula 31 */
//Incremento e Decremento de Variaveis
 var num = 10;

 //Metodos de Incremento/Decremento Simples
  num = num + 1
  num = num - 1
  num = num * 1
 
 //Metodos Resumidos
  num++; //Adiciona 1 unidade a variavel 
  num--; //Subtrai 1 unidade da variavel
  //Funciona com todos os operadores matematicos

  num+=2; //Adiciona valores maiores que 1
  num-=5; //Subtrai valores maiores que 1
  //Funciona com todos os operadores matematicos

 //Operações pré e pós Incremento/Decremento
  num++; //Incrementa após a leitura da variavel
  ++num; //Incrementa antes da leitura da variavel
  
 //Inversão de Sinais
  //Forma Padrão
   num=num * -1
  //Forma Reduzida
   num*=-1  
  //ou
   document.write(-num); //Só inverte nessa operação


   
/* Aula 32 */
//Estrutura de Repetição FOR
 for (P1;P2;P3) //P1 = Inicialização. P2 = Condição de Repetição. P3 = Contador
 {
  //Codigo a ser repetido
 }
  
 var contador;

 for(contador=0;contador>10;contador++)
 {
  document.write('O valor do contador é' + contador + "<br>")
 }
 
 //É possivel usar Arrays e Matrizes com a estrutura FOR, tornando o processo mais enxuto
  var linha, coluna;
  var mochila = [["Pistola"," Faca"], ["Livro"," Lanterna"], ["Carne"," Agua"], ["Grampo"," Giz"], ["Corda"," Pilha"]];

  for(linha=0;linha<5;linha++)
  {
    document.write("Compartimento " + linha + " : ")  
    for(coluna=0;coluna<2;coluna++)
    {
        document.write(mochila[linha][coluna]);
    }
    document.write("<br>")
  }


/* Aula 33 */
//Estrutura de Repetição WHILE
 p1;              
 while(p2)
 {                          /*P1 = Inicialização. P2 = Condição de Repetição. P3 = Incremento
  //Codigo                  (PS*: Enquanto a Condição de repetição for True o codigo será repetido)*/
  p3;
 }

 var n;

 n=0;
 while(n<=10) //Enquanto n for <= a 10 o codigo será repetido
 {
   document.write(n + "<br>");
   n++;
 }
  
  //Ps = O WHILE é utilizado, quando, não há certeza sobre a quantidade de repetições

 //Estrutura Simplificada(Pouco Usada)
  n1 = 10
  while(n1--)
  {
    document.write("JavaScript");
  } 


/* Aula 34 */
//Estrutura de Repetição DO WHILE(Variação da estrutura WHILE)
 //Na estrutura DO WHILE, a condição de repetição aparece no final, permitindo o codigo ser executado ao menos uma vez
  var n2;

  n2=0;
  do
  {
    document.write(n2 + "<br>")
    n2++
  }
  while(n2<=10);





