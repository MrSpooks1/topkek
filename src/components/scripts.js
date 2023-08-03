import {ref} from 'vue';

export {shuffle, pick, choose, arr, newArr, start, round, stage, max, addEmbedToLink};
let arr = [`${addEmbedToLink('https://youtu.be/qU6CKLe3q24')}`, `${addEmbedToLink('https://youtu.be/Gk9a5tQ_NGc')}`,
 `${addEmbedToLink('https://youtu.be/oplsTzYt71k')}`, `${addEmbedToLink('https://youtu.be/69VV0pH57XE')}`,
 `${addEmbedToLink('https://youtu.be/EsyJzQIqo84')}`, `${addEmbedToLink('https://youtu.be/fMrpVDYZCbU')}`,
 `${addEmbedToLink('https://youtu.be/-BShFYy2Se8')}`, `${addEmbedToLink('https://youtu.be/mTAE1o8TliY')}`,
 `${addEmbedToLink('https://youtu.be/7OWKSy5j4lk')}`, `${addEmbedToLink('https://youtu.be/CCs7xE6AkDo')}`,
 `${addEmbedToLink('https://youtu.be/mg8_7SfwdfY')}`, `${addEmbedToLink('https://youtu.be/Ek6hxsP55b8')}`,
 `${addEmbedToLink('https://youtu.be/yYhYueboxuM')}`, `${addEmbedToLink('https://youtu.be/sBz5D7RqVTs')}`,
 `${addEmbedToLink('https://youtu.be/KNgTC1uAy0c')}`, `${addEmbedToLink('https://youtu.be/QyM3zU-_SNU')}`,];
let newArr =[];
let stage = ref(1);
let round = ref(0);
let max = ref(arr.length/2);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
function pick(arr) {
    let value = arr.splice(0, 1);
    value = value[0];
    return value
}
function choose(id, arr, newArr) {
    newArr.push(document.getElementById(id).getAttribute('src'));
    if (round.value == 1 & max.value == 1) {
        document.getElementById('winner').setAttribute('src', newArr[0]);
        document.getElementById('winner').style.display = 'inline';
        document.querySelector('.kek').style.display = 'none';
        // document.querySelector('.kek').style.background-size = '0 0';
    } else if (round.value == max.value) {
        for (let i = 0; i < newArr.length; i++) {
            arr.push(newArr[i]);
        }
        stage.value++;
        round.value = 0;
        max.value = max.value/2;
        newArr.length = 0;
        start(arr);
    } else {
        start(arr);
    }
}
function start(arr) {
    round.value++;
    console.log(round);
    let vs = document.getElementById('vs');
    let vd = document.getElementById('vd');
    document.querySelector('.text').style.display = 'inline';
    // document.querySelector('.kek').style.background-size = 'auto';
    if (max.value == 1) {
        document.querySelector('.text').style.display = 'none';
        document.querySelectorAll('.text')[1].style.display = 'inline';
    }
    document.querySelector('.kek').style.display = 'inline';
    vs.setAttribute('src', pick(arr));
    vd.setAttribute('src', pick(arr));
    if (document.getElementById('start') != null) {
        document.getElementById('start').remove();
    }
}
function addEmbedToLink(link) {
    let newLink = '';
    let checkForWatch = '';
    for (let i=24; i<32; i++) {
        checkForWatch+=link[i];
    }
    if (checkForWatch == 'watch?v=') {
        newLink+='https://www.youtube.com/embed/';
        for (let i=32; i<43; i++) {
            newLink+=link[i];
        }
    }
    else {
        newLink+='https://www.youtube.com/embed/';
        for (let i=17; i<28; i++) {
            newLink+=link[i];
        }   
    }
    return newLink
}