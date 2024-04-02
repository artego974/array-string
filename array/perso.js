const personagens = ['goku','naruto','ichigo','rimuru','luffy','fang','saitama','meliodas']



function perso() {

   let n  = Math.floor(Math.random() * (personagens.length))
   return personagens[n]
    
}
console.log (perso())