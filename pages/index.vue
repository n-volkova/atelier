<template>
  <div>
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
        <div class="main__text">
          <b-icon-scissors rotate="30" />
          Пошив и ремонт мужской, женской, детской одежды любой сложности
        </div>
        <div class="main__text">
          <div class="b-icon icon--leather" />
          Работаем с любой тканью, мехом и&nbsp;кожей
        </div>
        <div class="main__text">
          <b-icon-suit-heart />
          Опыт работы — более 20 лет
        </div>
      </div>
    </main>
    <footer class="footer container">
      <div class="bank-icons" />
      <ul class="company_details">
        <li>Реквизиты</li>
        <li>ИП Мартынова Светлана Владимировна</li>
        <li>ИНН 481304457307</li>
        <li>+7 968 858 90 10</li>
        <li>Ателье «ON-ONA»</li>
        <li>© 2020-2023</li>
      </ul>
    </footer>
  </div>
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

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }

    .main__text {
      @include media-breakpoint-up(sm) {
        width: 25%;
      }

      @include media-breakpoint-down(sm) {
        width: 100%;
        margin-bottom: 20px;
      }
    }

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

.footer {
  border-top: 1px solid rgba(211, 190, 173, .5);
  margin-top: 100px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;

  @include media-breakpoint-down(sm) {
    padding-top: 0;
    margin-top: 70px;
  }

  .bank-icons {
    @include media-breakpoint-up(sm) {
      width: 406px;
      height: 39px;
      background-image: url("assets/logo3h.png");
    }
    @include media-breakpoint-down(sm) {
      width: 124px;
      height: 199px;
      background-image: url("assets/logo3v.png");
    }
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .company_details {
    margin-bottom: 0;
    list-style: none;

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
    }
  }
}
</style>
