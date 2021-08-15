<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>پخش آهنگ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">پخش آهنگ</ion-title>
        </ion-toolbar>
      </ion-header>
      <audio controls class="player">
        <source src="https://nini-songs.s3.ir-thr-at1.arvanstorage.com/test1" type="audio/mpeg">
      </audio>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';

export default {
  name: 'Tab2',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage}
}
</script>
<style scoped>
.player {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>