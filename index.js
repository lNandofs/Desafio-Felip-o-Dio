let nome = "Felipão"
let NivelXP = 20000
let Elo =""

if(NivelXP <= 1000){
    Elo="Ferro"
}
else if(NivelXP > 1000 && NivelXP <= 2000){
    Elo="Bronze"
}
else if(NivelXP > 2000 && NivelXP <= 5000){
    Elo="Prata"
}
else if(NivelXP > 5000 && NivelXP <= 7000){
    Elo="Ouro"
}    
else if(NivelXP > 7000 && NivelXP <= 8000){
    Elo="Platina"
}
else if(NivelXP > 8000 && NivelXP <= 9000){
    Elo="Ascendente"
}
else if(NivelXP > 9000 && NivelXP <= 10000){
    Elo="Imortal"
}
else{
    Elo="Radiante"
}

console.log("O Herói de nome "+ nome + " está no nível de " + Elo)