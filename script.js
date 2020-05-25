function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function Complete()
  {
    var Players = parseInt(document.getElementById('Players').value);
    var Mafias = parseInt(document.getElementById('Mafias').value);
    var Commissioners = parseInt(document.getElementById('Commissioners').value);
    var Doctors = parseInt(document.getElementById('Doctors').value);
    var Maniacs = parseInt(document.getElementById('Maniacs').value);
    var Mistresses = parseInt(document.getElementById('Mistresses').value);
    var Avengers = parseInt(document.getElementById('Avengers').value);
    var summas = Mafias + Commissioners + Doctors + Maniacs + Avengers;
    if (Players < 3 || Players < summas || Mistresses > Mafias)
      var res = "Вы ввели количество игроков меньше 3 или суммарное количество персонажей больше участников.";
    else{
      let array = [];
      let ar_maf = [];
      for (let index = 1; index <= Players; index++) {
        array.push(index);
      }
      var kol = 0;
      var Num_Mafis = " ";
      var ind = 0;
      while (kol < Mafias) {
        ind = getRandomInt(0, Players-1);
        if (array[ind] != 0){
          Num_Mafis += String(ind+1) + " ";
          kol+=1;
          array[ind] = 0;
          ar_maf.push(ind+1);
        }
      }
      kol = 0;
      var Num_Com = " ";
      while (kol < Commissioners) {
        ind = getRandomInt(0, Players-1);
        if (array[ind] != 0){
          Num_Com += String(ind+1) + " ";
          kol+=1;
          array[ind] = 0;
        }
      }
      kol = 0;
      Num_Doc = " ";
      while (kol < Doctors) {
        ind = getRandomInt(0, Players-1);
        if (array[ind] != 0){
          Num_Doc += String(ind+1) + " ";
          kol+=1;
          array[ind] = 0;
        }
      }
      kol = 0;
      var Num_Man = " ";
      while (kol < Maniacs) {
        ind = getRandomInt(0, Players-1);
        if (array[ind] != 0){
          Num_Man += String(ind+1) + " ";
          kol+=1;
          array[ind] = 0;
        }
      }
      kol = 0;
      var Num_Mis = " ";
      
      if (Mistresses > 0){
        while (kol < Mistresses) {
          ind = getRandomInt(0, Mafias-1);
          if (ar_maf[ind] != 0){
            Num_Mis += String(ar_maf[ind]) + " ";
            kol+=1;
            ar_maf[ind] = 0;
          }
        }
      }
      kol = 0;
      var Num_Av = "";
      while (kol < Avengers) {
        ind = getRandomInt(0, Players-1);
        if (array[ind] != 0){
          Num_Av += String(ind+1) + " ";
          kol+=1;
          array[ind] = 0;
        }
      }
      var res = "Мафии: "+Num_Mafis+'\n'+"Комиссары: " + Num_Com +'\n' + "Доктора: " + Num_Doc + '\n'+ "Маньяки: "+Num_Man + '\n'+"Любовницы: " + Num_Mis + '\n'+"Мстители: "+ Num_Av;
    }
    document.getElementById('outputvalue').innerText = res;
  }