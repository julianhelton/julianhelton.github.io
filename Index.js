function mega() {
  var mega = document.getElementsByClassName('mega'); 
  var numeros = [];
  var numero,verifica;
  for(var i=0;i<6;i++)
  {
    do
    {
      numero = Math.floor(Math.random()*61);
      verifica = false;
      for(var j=0; j < i;j++)
      {
        if (numeros[j]==numero) {
          verifica=true;
        }
      }
    }while(verifica);
    numeros.push(numero);
  }
  for(var i=0;i<6;i++)
  {
    mega[i].value=numeros[i];
  }
}

function lotofacil() {
  var lotofacil = document.getElementsByClassName('lotofacil'); 
  var numeros = [];
  var numero,verifica;
  for(var i=0;i<5;i++)
  {
    do
    {
      numero = Math.floor(Math.random()*61);
      verifica = false;
      for(var j=0; j < i;j++)
      {
        if (numeros[j]==numero) {
          verifica=true;
        }
      }
    }while(verifica);
    numeros.push(numero);
  }
  for(var i=0;i<5;i++)
  {
    lotofacil[i].value=numeros[i];
  }

}


function quina() {
  var quina = document.getElementsByClassName('quina'); 
  var numeros = [];
  var numero,verifica;
  for(var i=0;i<50;i++)
  {
    do
    {
      numero = Math.floor(Math.random()*61);
      verifica = false;
      for(var j=0; j < i;j++)
      {
        if (numeros[j]==numero) {
          verifica=true;
        }
      }
    }while(verifica);
    numeros.push(numero);
  }
  for(var i=0;i<50;i++)
  {
    quina[i].value=numeros[i];
  }
  
}

function lotomania() {
  var lotomania = document.getElementsByClassName('lotomania'); 
  var numeros = [];
  var numero,verifica;
  for(var i=0;i<15;i++)
  {
    do
    {
      numero = Math.floor(Math.random()*61);
      verifica = false;
      for(var j=0; j < i;j++)
      {
        if (numeros[j]==numero) {
          verifica=true;
        }
      }
    }while(verifica);
    numeros.push(numero);
  }
  for(var i=0;i<15;i++)
  {
    lotomania[i].value=numeros[i];
  }
  
}



