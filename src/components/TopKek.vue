<template>
    <div class="kek">
        <div class="test">
            <h1 class="text">{{`Stage ${stage} Round ${round}/${max}`}}</h1>
            <h1 class="text" style="left: 43%;">Final round!</h1>
        </div>
        <div class="vid1" id="shrek">
            <iframe id="vs" width="640" height="360" allow="fullscreen" frameborder="0" :src="addEmbedToLink('https://youtu.be/kpwNjdEPz7E')"></iframe>
            <br>
            <button class="button" @click="choose('vs', arr, newArr)">Shrek!</button>
        </div>
        <br>
        <div class="vid2" id="donkey">
            <iframe id="vd" width="640" height="360" allow="fullscreen" frameborder="0" :src="addEmbedToLink('https://youtu.be/kpwNjdEPz7E')"></iframe>
            <br>
            <button class="button" @click="choose('vd', arr, newArr)">Donkey!</button>
        </div>
    </div>
    <button class="button" id="start" @click="start(arr)" style="top: 9%; left:47%; position: absolute;">Start!</button>
    <iframe id="winner" style="display: none" width="800" height="450" allow="fullscreen" frameborder="0" :src="addEmbedToLink('https://youtu.be/kpwNjdEPz7E')"></iframe>
</template>


<script>
shuffle(arr);

import {shuffle, pick, choose, arr, newArr, start, round, stage, max, addEmbedToLink} from './scripts';

export default {
    data() {
        return {
            addEmbedToLink,
            pick, choose, shuffle, start,
            arr, newArr, round, stage, max
        }
    }
}
</script>

<style>
@import './styles/style.css';
</style>
<!-- Оптимизировать код, сделать отображение с помощью v-if "Working with unset props"-->