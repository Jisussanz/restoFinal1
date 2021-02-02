

let princip = str => {
  let arrFromStr = str.split('#princip');
  let i=0;
  let printStr = setInterval (function(){
    document.body.innerHtml += arrFromStr [i];
    i++;
    if (i=== arrFromStr.length) {
      clearInterval (printStr);
      document.body.style.color = 'steelblue'
    }
  },200);
}
princip ('BIENVENIDOS A RESTAURANTE A PUNTO');
