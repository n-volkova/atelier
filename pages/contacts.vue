<template>
  <div
    v-if="initMap"
    class="contacts"
  >
    <div class="container d-flex">
      <div class="contacts__map-container">
        <yandex-map
          :key="mapRerenderKey"
          :coords="coords"
          @map-was-initialized="onMapLoaded"
        />

        <transition name="fade">
          <div
            v-if="!mapReady"
            class="contacts__map-loader"
          >
            <b-icon-arrow-clockwise
              animation="spin"
              font-scale="7"
              color="#d3bead"
            />
          </div>
        </transition>
      </div>

      <div class="contacts__info">
        Ждём Вас по адресу:
        <p class="contacts__address">
          Москва, ул. Ратная, д. 10, корпус 2 (вход со двора)
        </p>
        <p class="contacts__subway">
          м. Бульвар Дмитрия Донского <span class="text--gray">(10 мин. пешком)</span>
        </p>

        <p>Пн-Сб — 10:00 – 19:00;<br />Вс — выходной.</p>
        <p>
          Наш инстаграм:
          <a
            class="contacts__link contacts__link--insta"
            href="https://www.instagram.com/atelier.on.ona/"
            target="_blank"
          >
            atelier.on.ona
          </a>
        </p>
        <a
          class="contacts__link--phone contacts__link"
          href="tel:+79688589010"
        >+7 (968) 858-90-10
        </a>
        <a
          class="contacts__link contacts__link--whatsapp contacts__link--external"
          href="https://wa.me/79688589010"
          target="_blank"
        >
          Написать в WhatsApp
        </a>
        <a
          class="contacts__link contacts__link--telegram contacts__link--external"
          href="https://t.me/on_ona_atelier"
          target="_blank"
        >
          Написать в Telegram
        </a>
        <a
          class="contacts__link contacts__link--review contacts__link--external"
          href="https://yandex.ru/maps/?orgpage%5Bid%5D=80861612234&amp;add-review"
          target="_blank"
        >
          Оставить отзыв на Яндекс.Картах
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { BIconArrowClockwise } from 'bootstrap-vue';
import ymaps from 'yandex-maps';

@Component({
  components: { BIconArrowClockwise }
})
export default class Contacts extends Vue {
  initMap: boolean = false;
  mapReady: boolean = false;
  mapRerenderKey: boolean = false;
  coords = [55.57597714259465, 37.57844600132748];

  onMapLoaded(map: ymaps.Map) {
    this.mapReady = true;
    try {
      (window.ymaps as any).findOrganization('80861612234').then((orgGeoObject: ymaps.GeoObject) => {
        map.geoObjects.add(orgGeoObject);
        orgGeoObject.balloon.open();
      });
    } catch (e) {}
  }

  mounted() {
    this.initMap = true;
  }

  activated() {
    if (!this.mapReady) {
      this.mapRerenderKey = !this.mapRerenderKey;
    }
  }
}
</script>

<style lang="scss">
.ymap-container {
  width: 500px;
  height: 500px;

  @include media-breakpoint-down(md) {
    width: 100%;
    height: 500px;
    margin: 10px auto;
  }
}

.contacts {
  display: flex;
  margin-top: 20px;
  padding: 30px 0;
  background-color: #fff;
  color: #000;
  font-size: 17px;

  .container {
    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__map-container {
    position: relative;
    margin-right: 20px;

    @include media-breakpoint-down(md) {
      width: 100%;
      height: 500px;
      margin: 0 auto 20px;
    }
  }

  &__map-loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #80705d;

    @include media-breakpoint-down(md) {
      width: 100%;
      height: 100%;
    }
  }

  &__address {
    font-weight: bold;
  }

  &__subway:before {
    content: '';
    height: 13px;
    width: 13px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #808080;
    display: inline-block;
  }

  &__link {
    text-decoration: underline;

    &--phone {
      display: block;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;

      @include media-breakpoint-down(md) {
        text-align: center;
        font-size: 23px;
      }
    }

    &--insta {
      margin-left: 5px;
      margin-bottom: 10px;
      font-size: 18px;
      letter-spacing: 0.8px;
      font-weight: bold;
    }

    &--whatsapp {
      background-color: #25D366;
      color: #fff;

      &:hover {
        color: #fff;
        text-decoration: none;
        background-color: #64e394;
      }

      &:before {
        width: 18px;
        height: 18px;
        background-color: #fff;
      }
    }

    &--telegram {
      background-color: #229ED9;
      color: #fff;

      &:hover {
        color: #fff;
        text-decoration: none;
        background-color: #65b2d6;
      }
    }

    &--review {
      background-color: #ffdb4d;

      &:hover {
        text-decoration: none;
        background-color: #ffeca4;
      }
    }

    &--external {
      display: inline-block;
      padding: 7px 15px;
      margin-bottom: 10px;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
      border-radius: 7px;

      @include media-breakpoint-down(md) {
        display: block;
        width: 100%;
        max-width: 350px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
