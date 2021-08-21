<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item :router-link="'/tabs/tab3/' + item.id" lines="none" class="list-main-section"
                  v-for="item in contentData" :key="item.name.english">
          <ion-img slot="start" :src="item.image"></ion-img>
          <ion-label>
            <h2>{{ item.name.persian }}</h2>
            <p>{{ item.name.english }}</p>
          </ion-label>
          <ion-icon class="list-play-icon" :icon="play"/>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonImg,
  IonIcon,
} from '@ionic/vue';
import contentData from '../content/contentData'
import {play} from 'ionicons/icons';


export default {
  name: 'Tab3',
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonList,
    IonImg,
    IonIcon
  },
  setup() {
    return {contentData, play}
  }
}
</script>
<style scoped>
.list-play-icon {
  font-size: 17px;
  vertical-align: middle;
  color: #8995ab;
  transform: rotate(
      180deg
  );
  border: 1px solid #8995ab;
  border-radius: 100%;
  padding: 10px;
}

ion-item::part(native) {
  padding: 20px 10px;
  --background-activated: #f2f5fe;
  --background-hover: #f2f5fe;
}

ion-img {
  display: inline-block;
  width: 60px;
}

ion-img::part(image) {
  border-radius: 5px;
}
</style>