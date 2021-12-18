export default function fixFiles(files) {
  
  let goodFiles = [], ayuda = {}, fileName;

  for(let i = 0; i<files.length; i++){
    if(ayuda[files[i]] != undefined){
      fileName = files[i] + '(' + ayuda[files[i]] + ')'; 
      ayuda[files[i]]++;
    }
    else{
      ayuda[files[i]] = 1;
      fileName = files[i];
    }
    goodFiles.push(fileName); 
  }

  return goodFiles;
}
