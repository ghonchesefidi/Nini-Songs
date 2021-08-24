<template>
  <ion-page>
    <div class="player-section" :style="{backgroundImage: `url(${selectedSong.image})`}">
      <div class="player">
        <div class="player-inner-section">
          <p>{{ selectedSong.name.english }}</p>
          <p>{{ selectedSong.name.persian }}</p>
        </div>
        <div class="player-action-bar">
          <div class="status-bar">
            <div :style="{width:statusBarWidth}" class="inner-timer-status-bar"></div>
          </div>
          <div class="music-time-tracker">
            <p>{{ trackDuration }}</p>
            <p>{{ currentTime }}</p>
          </div>
          <div class="player-action-btn-section">
            <ion-icon @click="musicChanger('next')" class="player-action-btn" :icon="playSkipForwardCircle"/>
            <ion-icon @click="toggleAudio" v-show="!isPlaying" class="player-action-btn" :icon="playCircle"/>
            <ion-icon @click="toggleAudio" v-show="isPlaying" class="player-action-btn" :icon="pauseCircle"/>
            <ion-icon @click="musicChanger('back')" class="player-action-btn" :icon="playSkipBackCircle"/>
          </div>
        </div>
      </div>
      <audio autoplay class="ion-hide" preload="metadata" ref="audio">
        <source :src="selectedSong.src" type="audio/mpeg">
      </audio>
    </div>
    <ion-content>
      <ion-content class="ion-padding">
        <ion-text color="dark">
          <h2>متن و ترجمه آهنگ:</h2>
          <div class="translation" v-html="selectedSong.translation"></div>
        </ion-text>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonPage, onIonViewWillEnter, IonText, IonIcon} from '@ionic/vue';
import {useRoute} from 'vue-router';
import contentData from "@/content/contentData";
import {playCircle, pauseCircle, playSkipForwardCircle, playSkipBackCircle} from "ionicons/icons";
import Song from "@/types/Song";
import {reactive, ref} from 'vue'

export default {
  name: 'Tab3',
  components: {IonContent, IonPage, IonText, IonIcon},
  setup() {
    const audio = ref();
    const route = useRoute()
    const selectedSong: Song = reactive({
      id: '',
      name: {
        persian: '',
        english: ''
      },
      image: '',
      translation: '',
      src: ''
    })
    const isPlaying = ref(false)
    const currentTime = ref('00:00')
    const trackDuration = ref('00:00')
    const statusBarWidth = ref('0%')

    const toggleAudio = () => {
      isPlaying.value = !isPlaying.value
      if (isPlaying.value === true) audio.value.play()
      else audio.value.pause()
    }


    const convertTime = (time: number) => {
      let s: string = String(Math.floor(time % 60)) as string
      let m: string = String(Math.floor((time / 60) % 60)) as string
      if (Number(s) < 10) {
        s = '0' + String(s);
      }
      if (Number(m) < 10) {
        m = '0' + String(m);
      }
      return m + ':' + s;
    }

    const getCurrentTimeEverySecond = () => {
      setInterval(() => {
        currentTime.value = convertTime(audio.value.currentTime)
        trackDuration.value = audio.value.duration ? convertTime(audio.value.duration) : '00:00'
        statusBarWidth.value = String(Math.round(audio.value.currentTime / audio.value.duration * 100)) + '%'
      }, 500)
    }
    const reloadPlayer = () => {
      audio.value.load()
      isPlaying.value = true
      audio.value.play()
    }
    onIonViewWillEnter(() => {
      if (route.params.id) {
        Object.assign(selectedSong, contentData.find(element => element.id === route.params.id) as Song)
      } else {
        Object.assign(selectedSong, contentData[0] as Song)
      }
      reloadPlayer()
      getCurrentTimeEverySecond()
    })

    const musicChanger = (action: string) => {
      const getCurrentSongIndex: number = contentData.findIndex(song => song.id === selectedSong.id)
      const actionIndex: number = action === 'next' ? getCurrentSongIndex + 1 : getCurrentSongIndex - 1
      Object.assign(selectedSong, contentData[actionIndex] as Song)
      reloadPlayer()
    }

    return {
      contentData,
      playCircle,
      selectedSong,
      pauseCircle,
      playSkipForwardCircle,
      playSkipBackCircle,
      isPlaying,
      toggleAudio,
      musicChanger,
      audio,
      currentTime,
      trackDuration,
      statusBarWidth
    }
  }
}
</script>
<style scoped lang="scss">
.player-section {
  min-height: 50vh;
  background-position: center;
  width: 95%;
  display: block;
  margin: 10px auto;
  border-radius: 10px;
  position: relative;
}

.player {
  text-align: center;
  position: absolute;
  background: #0000009c;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.player-inner-section {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  p {
    margin: 0;
    padding: 0;
    color: white;

    &:first-child {
      font-size: 30px;
    }

    &:nth-child(2) {
      color: #bdbdbd;
    }
  }
}

h2 {
  font-size: 19px;
  font-weight: bold;
  margin: 0;
}

.translation {
  color: #4e4e4e;
  line-height: 34px;
}

.player-action-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-size: 48px;

  .status-bar {
    display: block;
    width: 90%;
    height: 5px;
    background: white;
    margin: auto;
    position: relative;
    border-radius: 6px;

    .inner-timer-status-bar {
      background: var(--ion-color-primary);
      position: absolute;
      top: 0;
      left: 0;
      height: 5px;
      border-radius: 6px;
    }
  }

  .music-time-tracker {
    display: block;
    width: 90%;
    margin: auto auto 10px;

    p {
      font-size: 14px;
      margin: 0;
      padding: 0;

      &:first-child {
        float: right;
      }

      &:nth-child(2) {
        float: left;
      }
    }
  }

  .player-action-btn-section {
    display: block;
    margin: auto;
    margin-top: 25px;

    .player-action-btn {
      margin: 10px 5% auto;
    }
  }


}
</style>