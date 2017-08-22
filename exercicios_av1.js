//Faça uma funçãopara escrever"Olá,(nome)!"no console:
function exercicio01(num1,num2) 
{  
    var media = (num1 + num2) / 2
    console.log(media);

}
/*Faça uma função que receba dois valores (AV1eAV2) 
e avise o aluno se é necessário fazer a AV3 
Regra01:notas de AV1eAV2>=4.0
Regra02:Média>=6.0
Dica:operadoreslógicos =>&&(E)=>||(OU) */
function exercicio02(av1,av2)
{  var media = (av1+av2)/2;
   if(av1 >= 4 && av2 >=4 || media >= 6)
    {
        console.log(false);
    }
    else{
        console.log(true);
    }
}
/*Criar funções para escrever números no console de 1 até determinado valor,
  utilizando:while do...while for*/
  function exercicio03(num)
  { 
    for(var i = 1; i <= num; i++)
        {
            console.log("listando do for: "+i);
        }
      var i = 1;
      while(i <= num)
        {   
         console.log("listando do while: "+i);
          i++;
        }
        var i = 1;
    do
     {
         console.log("listando do do...while: "+i);
         i++
     }while(i <= num)
       
  }
/*Criar função para exibir os números divisíveis por X considerando o intervalo de X a Y*/

function exercicio04(x,y)
{ 
   var i = x;
   var valor = 0;
    while(i <= y)
        { var resto = 0;
          resto = i % x;
          if(resto == 0)
            {  
                console.log(i);
            }
            i++;
        }
}
/* Criar função para mostrar o maior e menor valor de um vetor de números */
function exercicio05()
{
    var vetor = [1,55,33,4,52,133,70,8888,911,10,1134,12321,1333,0];
    var menor = vetor[0];
    var maior = vetor[0];
    for(var i in vetor)
        {  
           if(menor < vetor[i])
            {
                menor = vetor[i];
            }

           if(maior > vetor[i])
            {
                maior = vetor[i];
            }
          
        }
        console.log("Maior: "+ maior +" \n Menor: "+ menor);
}