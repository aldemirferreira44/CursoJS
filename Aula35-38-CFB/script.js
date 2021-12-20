/* Aula 35 */
//Variavel LET
/*
A Variavel LET, diferentemente da Variavel Normal, quando é declarada,
sua atuação se limita apenas ao escopo onde ela está inserida
*/

var num = 10
document.write(num + "<br>") //=10

if (num == 10) {
   let num = 5                         //Apenas dentro dos limites do IF o num valerá 5. Fora deles será igual a 10
   document.write(num + "<br>") //=5
}
document.write(num + "<br>") //=10


/* Aula 36 */
//Tratamento de Erros | Estruturas TRY | CATCH | FINALLY
//Basicamente é uma estrutura responsavel por detectar erros e informá-los ao USUARIO

 try 
 {
    document.write("Ola mundo");//Aqui se coloca o codigo passivel de erro. Caso haja algum erro, ele vai direcionar para o CATCH
 }
 catch (er) {
    document.write("ERROR");//Aqui se configura oque irá aparecer caso haja um erro dentro de TRY
    console.log("Erro" + er.message);//Mensagem de erro dentro do Console INSPECIONAR do navegador    
 }

 var n;

 try 
 {
   prompt("Digite um valor maior que 10")
   if (n > 10) 
   { 

   throw new Error("Numero deve ser maior que 10")  /*Aqui criamos uma especie de CATCH "artifical". Podendo colocar condições de erro nós mesmos. 
                                          Caso o codigo caia aqui, será redirecionado para o CATCH*/
   }                                     
 } 
 catch (error) 
 {
   document.write("ERROR: " + error.message);
   n=10;  //Nesse caso o próprio CATCH irá corrigir o erro, colocando o valor maximo permitido
 }
 finally //Opcional. Irá "encerrar" o tratamento de erros e caso esteja presente irá aparecer independente do que aconteça 
 {
   document.write("Valor: " + n) //O valor maximo permitido será exibido
 }


/* Aula 37 */
//Método getElementById
//Permite selecionar elementos (pelo ID) do HTML no JavaScript

 var txt = document.getElementById("texto"); //Aqui selecionamos a tag HTML com ID="texto" e o colocamos dentro da VAR = txt

 txt.style.color = "#f00"       //| 
                                   //Com o elemento selecionado é possivel formata-lo usando CSS
 txt.style.fontSize = "25px"    //|    


/* Aula 38 */
//Metodo InnerHTML e mais sobre getElementById
 //Mais sobre getElementById
  var cxt1 = document.getElementById("cxtxt").value; //Value é o conteudo que vai estar dentro do Input de Texto do HTML 
  alert(cxt1) // Ao selecionarmos Value, selecionamos o conteudo dentro da Tag HTML, podendo utiliza-lo no JavaScript
 
 //InnerHTML
 //Com esse metodo, podemos selecionar o texto dentro de uma tag HTML
  var txt = document.getElementById("texto").innerHTML; // Pode tambem modificar o texto usando a propriedade de atribuição "="
  alert(txt); 