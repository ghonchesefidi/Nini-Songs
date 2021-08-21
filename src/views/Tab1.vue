<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-img src="/assets/intro-kids.svg"></ion-img>
            <ion-text color="dark">
              <p>ما اینجا برای شما لیستی از آهنگ‌های مناسب برای کودکان آماده کردیم. متن‌ آهنگ‌ها و ترجمه اون زمان پخش
                آهنگ برای شما نمایش داده میشه.</p>
              <p>این برنامه کاملا رایگان و همین طور هم می‌مونه!</p>
              <p>برای پخش آهنگ‌ها باید موبایل شما به اینترنت وصل باشه. <span
                  @click="setOpen(true)"><ion-icon class="internet-text-icon" :icon="helpCircle"/>اطلاعات بیشتر</span>
              </p>
              <p>اگر آهنگ خاصی رو میخواید به لیست اضافه کنیم و یا دوست دارید با ما در ارتباط باشید با ایمیل
                info@samasarin.com مکاتبه کنید.</p>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-modal
        :swipe-to-close="true"
        :show-backdrop="true"
        :keyboard-close="true"
        :is-open="isOpenRef"
        @didDismiss="setOpen(false)"
    >
      <IntroInternetModal @close-internet-modal="setOpen(false)"></IntroInternetModal>
    </ion-modal>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonContent,
  IonModal, IonIcon, IonImg, IonText, IonGrid, IonRow, IonCol
} from '@ionic/vue';
import {defineComponent, ref} from 'vue';
import {helpCircle, closeCircle} from 'ionicons/icons';
import IntroInternetModal from "@/components/IntroInternetModal.vue"

export default defineComponent({
  components: {
    IonContent, IonPage, IonModal, IonIcon, IonImg,
    IonText, IonGrid, IonRow, IonCol, IntroInternetModal
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    return {isOpenRef, setOpen, helpCircle, closeCircle}
  }
});
</script>
<style scoped>
ion-grid {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-img {
  display: block;
  width: 90%;
  margin: auto auto 20px;
}

p:first-child {
  margin-top: -45px;
}

p {
  margin: 0;
  line-height: 30px;
  color: #4e4e4e;
}

.internet-text-icon {
  vertical-align: middle;
  margin: 0 -3px 2px 3px;
  font-size: 20px;
}
</style>