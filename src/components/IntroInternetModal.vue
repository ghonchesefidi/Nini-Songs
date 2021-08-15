<template>
  <ion-header>
    <ion-toolbar>
      <ion-title size="small">توضیحات اتصال اینترنت</ion-title>
      <ion-icon :icon="closeCircle" class="close-modal-btn" slot="end" color="dark"
                @click="$emit('closeInternetModal')"/>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-content class="ion-padding">
      <ion-text color="dark">
        <p>برای کم کردن حجم برنامه زمان نصب تصمیم گرفتیم آهنگ‌ها رو زمان پخش دانلود کنید. به خاطر کیفیت بالای آهنگ‌ها،
          تعداد بالای اونها و البته این نکته که همیشه شما به همه آهنگ‌ها گوش نمیدین این روش باعث کاهش مصرف اینترنت شما
          میشه.</p>
      </ion-text>
    </ion-content>
  </ion-content>
</template>

<script>
import {IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonIcon} from '@ionic/vue';
import {defineComponent} from 'vue';
import {closeCircle} from 'ionicons/icons';


export default defineComponent({
  name: 'IntroInternetModal',
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonIcon},
  emits: ['closeInternetModal'],
  setup() {
    return {closeCircle}
  }
});
</script>

<style scoped>
.close-modal-btn {
  margin-left: 10px;
  font-size: 26px;
}
</style>