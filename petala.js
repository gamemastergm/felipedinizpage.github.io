const nuvemAtual = document.getElementsByClassName('petala')
const petalas = document.querySelector('#petalas')
const speed = 1, max = 10;
let arr = [];

function insert() {
    let petala = document.createElement('img');
    petala.setAttribute( 'id' ,'petala') 
    petala.setAttribute( 'src' ,'sakura leeder.png')
    
    let rand = 0.25+Math.random()/3;

    petala.setAttribute('width', (rand) * 167+'px')
    petala.setAttribute('height',(rand)*83+'px')

    petala.style.marginTop = Math.floor(Math.random()*1000)+'px'
    petala.style.marginLeft = '-'+(rand)*801+'px'
    petala.style.marginRight = '0px'

    
    petalas.appendChild(petala)
    arr.push({n:petala, x:-((rand)*801), w:(rand)*801, v:Math.floor(Math.random()*5)+5})

}

setInterval(function(){
    if(arr.length < max){
        insert();
    }
}, 500 + Math.random()*500);

setInterval(function () {
    for(let i = 0; i<arr.length;i++){
        if(arr[i].x > window.innerWidth+arr[i].w){
            arr[i].n.remove();
            arr.splice(i,1);
            i--;
        }else{
            arr[i].x += arr[i].v;
            arr[i].n.style.marginLeft = arr[i].x+'px';
        }
    }
}, 50)
