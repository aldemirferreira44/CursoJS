/* Aula 39 */
//Metodo getElementByTagName
//A partir deste metodo pode-se selecionar varios elementos que compartilham da mesma tag HTML
 //var tagsP = document.getElementsByTagName("p"); //Ao usar o parametro [x] com um numero dentro é possivel selecionar apenas uma das TAGS

 //Ps: Ao selecionar um elemento pelo TagName, ele vem ao JS em forma de Array, por abranger varios elementos

  document.write(tagsP[0].innerHTML + "<br>") //Aqui foi selecionado a 1° tag "p" do HTML e seu texto  
  document.write(tagsP[1].innerHTML + "<br>") //Aqui foi selecionado a 2° tag "p" do HTML e seu texto 
  document.write(tagsP[2].innerHTML + "<br>") //Aqui foi selecionado a 3° tag "p" do HTML e seu texto 
  document.write(tagsP[3].innerHTML + "<br>") //Aqui foi selecionado a 4° tag "p" do HTML e seu texto 
  document.write(tagsP[4].innerHTML + "<br>") //Aqui foi selecionado a 5° tag "p" do HTML e seu texto 

  //Ps: O innerHTML serve para selecionar o texto dentro de uma TAG

/* Aula 40 */
//Metodo querrySelectorAll
//Seleciona elementos de uma maneira geral(Um tudo em 1)

 var p1 = document.querySelectorAll("p.p1")
 var p2 = document.querySelectorAll("p.p2")
 var p3 = document.querySelectorAll("p.p3")
 
 for (var i = 0; i < p1.length; i++) {
     p1[i].style.color = "blue";
 }

 for (var i1 = 0; i1 < p2.length; i1++) {
    p2[i1].style.color = "red";
 }
 
 for (var i2 = 0; i2 < p3.length; i2++) {
    p3[i2].style.color = "green";
 }


/* Aula 41 */
//Manipulação de Forms através do JavaScript 
 var fm = document.forms; //Vai selecionar o(s) formulario(s) no HTML (?) (Seleciona todos form e os coloca em forma de Array)
 document.write(fm[0]);
 var el = document.forms.elements[0]; //Vai selecionar o 1° elemento do Form (?)
 document.write(el[0]);
 

/* Aula 42 */
// Manipulação de Data e Hora no JS
 //document.write(Date()); //Com isso já é possivel exibir a Data com todas as infos possiveis
 //Porem há formas de alterar as informações de Data
  var dt = new Date();
  var ndt = new Date();
  var dia = dt.getDay();
  var mes = dt.getMonth();
  
  ndt.setDate(dt.getDate()+2); //Adicionará 2 dias na Data (?) 




  document.write(dia); //Mostrará apenas o dia
  document.write(mes); //Mostrará apenas o mes



  //Há varios metodos relacionados ao retorno de informações, que podem ser vistos na apostila do CFB Cursos