export default function pangram(letter) {
 
  var sumaASCII = 0;
  
  letter = letter.toUpperCase();
  
  letter = Array.from(new Set(letter)).toString();
  
  for(var i = 0; i<letter.length; i++){
    
    if(letter.charCodeAt(i) >= 65 && letter.charCodeAt(i) <= 90){
      sumaASCII += letter.charCodeAt(i);
    }
    
  }
  
  return sumaASCII === 2015 ? true : false;
}
