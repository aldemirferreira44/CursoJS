/* Aula 23 */
/* IF com multiplos retornos */
/* var nota = 30;

 if (nota>=70) 
 {
     document.write("Aprovado")  
 }
 else if ((nota<=70) && (nota>=40))
 {
     document.write("Recuperação")
 } else 
 {
     document.write("Reprovado")
 }

/* Aula 24 */ 
/* IF Aninhado */ 
 
/*
 var nota2 = prompt("Digite sua nota / 1 á 100")
 var res

 if (nota2>=70) 
 {
     if (nota2>=95)
     {
      res = "Aprovado com louvor"
     }
     else 
     {
      res = "Aprovado"
     }
 } else 
 {
     if ((nota2<=70) && (nota2>=40))
     {
        res = "Recuperação"
     }
     else 
     {
         if ((nota2<=40) && (nota2>=20))
         {
            res = "Reprovado"
         } else
         {
             res = "Banido"
         }
     }
 }

 document.write(res);

/* Aula 25 */
/* Blocos de Comandos */
 /* Utiliza-se as {} para determinar um bloco de comando. Usa-se isso somente quando o numero de comandos no bloco for maior que 1 */ 


/* Aula 26 */
/* Estrutura Switch/Case */ 
 var pos, msg, pontos

 pontos = 820

 if (pontos>=1000) 
 {
     pos = 1
 } else if ((pontos<1000) && (pontos>=800))
 {
     pos = 2
 } else if ((pontos<800) && (pontos>=600))
 {
     pos = 3
 }
 else 
 {
     pos = 0 /* Há defeitos nessa estrutura IF, porem o intuito da aula não é desenvolver um sistema de pontos perfeito */
 }


 switch(pos)
 {
     case 1:
        msg = "Primeiro Lugar<br>Medalha de Ouro";
        break;
     case 2:
        msg = "Segundo Lugar<br>Medalha de Prata";
        break;
     case 3:
        msg = "Terceiro Lugar<br>Medalha de Bronze";
        break;
     default:
        msg = "Voce ficou na colocação " + pos;                   
 }

 document.write(msg)


