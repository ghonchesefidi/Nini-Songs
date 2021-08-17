<template>
  <ion-page>
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
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, onIonViewWillEnter} from '@ionic/vue';
import {useRoute} from 'vue-router';
import contentData from "@/content/contentData";
import {play} from "ionicons/icons";

export default {
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  setup() {
    const route = useRoute()
    onIonViewWillEnter(() => {
      console.log(contentData)
      console.log(route.params.id)
    })
    return {contentData, play}
  }
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