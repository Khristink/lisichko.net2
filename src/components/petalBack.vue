<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PetalBack"
})
</script>

<template>
  <div class="petals-container">
    <div class="petal-wrapper first">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#AC877A"/>
      </svg>
    </div>
    <div class="petal-wrapper second">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#83635C"/>
      </svg>
    </div>
    <div class="petal-wrapper third">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#755753"/>
      </svg>
    </div>
    <div class="petal-wrapper fourth">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#C18F7E"/>
      </svg>
    </div>
    <div class="petal-wrapper fifth">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#AC877A"/>
      </svg>
    </div>
    <div class="petal-wrapper sixth">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#83635C"/>
      </svg>
    </div>
    <div class="petal-wrapper seventh">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#755753"/>
      </svg>
    </div>
    <div class="petal-wrapper fourth">
      <svg width="100%" height="auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            d="M60 15
            C85 15, 110 60, 60 110
            C10 60, 35 15, 60 15
            Z"
            fill="#C18F7E"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
:root {
  --pantone-7613: #C18F7E;
  --pantone-7614: #AC877A;
  --pantone-7615: #83635C;
  --pantone-7616: #755753;
}

.petals-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}

.petal-wrapper {
  width: 30%;
  height: auto;
}

.first {
  position: absolute;
  top: 7%;
  right: 14%;
  transform: rotate(-140deg);
  z-index: 3;
}


.second {
  position: absolute;
  top: 10%;
  right: 6%;
  transform: rotate(-180deg);
  z-index: 2;
}

.third {
  position: absolute;
  top: 8%;
  right: 0;
  transform: rotate(-210deg);
  z-index: 1;
}

.fourth {
  position: absolute;
  top: 2%;
  right: 18%;
  transform: rotate(-110deg);
  z-index: 4;
}

.fifth {
  position: absolute;
  bottom: 0%;
  right: 15%;
  transform: rotate(-50deg);
  z-index: 3;
}

.sixth {
  position: absolute;
  bottom: 5%;
  right: 7%;
  transform: rotate(-10deg);
  z-index: 2;
}

.seventh{
  position: absolute;
  bottom: 3%;
  right: 0;
  transform: rotate(30deg);
  z-index: 1;
}
</style>
