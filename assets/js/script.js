// DECLARATION FONCTION VALIDER
function checkPassword(){
  // DECLARATION ET RECUPERATION DES VARIABLES
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var red = 'solid 5px red';
  var green = 'solid 5px green';
  var regex = /^[a-zA-Z\-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ0-9]+$/;
  // VERIFICATION SI LES VARIABLES SONT VALIDES
     if((regex.test(password) == true) && (regex.test(confirmPassword) == true)){
       // SI LES DEUX MOTS DE PASSE SONT PAREIL LA BORDURE DEVIENT VERTE
       if(password == confirmPassword){
         document.getElementById('password').style.border = green;
         document.getElementById('confirmPassword').style.border = green;
       }else{
         // SINON LES MOTS DE PASSE NE SONT PAS PAREIL ET LA BORDURE DEVIENT ROUGE
         document.getElementById('password').style.border = red;
         document.getElementById('confirmPassword').style.border = red;
       }
     }else{
    // ECHEC DE LA VERIFICATION
    alert('Un caractère ou plusieurs caractères ne sont pas valides');
  }
}
