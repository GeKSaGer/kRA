let div = document.createElement('div');
let textNode = document.createTextNode('Глупая шутка про табуретку');
document.body.append(div);
div.append(textNode);
div.classList.add('goose');
let goose = document.querySelector('.goose');
div.style.margin = "35px";
function multi() {
let inp1 = document.getElementById('inp_1').value,
 inp2 = document.getElementById('inp_2').value;
console.log(inp1*inp2);

}
let ol = document.createElement('ol')

document.body.append(ol);
let li = document.createElement('li')
ol.append(li);
li.append(textNode)
let d1  = document.createElement('li')
ol.append(d1)
let d2  = document.createElement('li')
ol.append(d2)

let text =  document.createTextNode('Так.. я буду Мастером Цепей и Мастером Плетки… а еще можно мне скиллы для наручников?');
d1.append(text)
let text2 =  document.createTextNode('');
d2.append(text2)