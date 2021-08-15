<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="sparklesOutline" />
          <ion-label>معرفی</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="listCircleOutline" />
          <ion-label>لیست آهنگ‌ها</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="playCircleOutline" />
          <ion-label>پخش آهنگ</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { playCircleOutline, listCircleOutline, sparklesOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      listCircleOutline,
      playCircleOutline,
      sparklesOutline
    }
  }
}
</script>