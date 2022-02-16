<template>
  <main class="container main__container">
    <div class="mb-5">
      <div class="main__header">
        ON-ONA
      </div>
      <div class="main__subheader">
        ателье широкого профиля
      </div>
    </div>
    <div class="main__advantages">
      <div class="main__text w-25">
        <b-icon-scissors rotate="30" />
        Пошив и ремонт мужской, женской, детской одежды любой сложности
      </div>
      <div class="main__text w-25">
        <div class="b-icon icon--leather" />
        Работаем с любой тканью, мехом&nbsp;и кожей
      </div>
      <div class="main__text w-25">
        <b-icon-suit-heart />
        Опыт работы — более 20 лет
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { BIconScissors, BIconSuitHeart } from 'bootstrap-vue';

@Component({
  components: { BIconScissors, BIconSuitHeart },
})
export default class MainPage extends Vue {}
</script>

<style lang="scss">
.main {
  &__header {
    text-align: center;
    font-family: $accent-text;
    font-size: 60px;
    line-height: 1;
    font-weight: $font-weight-bold;
  }

  &__container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  &__subheader {
    text-align: center;
    font-family: $accent-text;
    font-size: 24px;
    font-weight: 400;
  }

  &__advantages {
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    text-align: center;

    .b-icon {
      display: block;
      margin: 0 auto 15px;
      font-size: 36px;
    }

    .icon--leather {
      width: 36px;
      height: 36px;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("assets/leather.svg");
    }
  }
}
</style>
