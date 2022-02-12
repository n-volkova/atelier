<template>
  <div class="navbar container">
    <div class="navbar__contacts">
      <a
        class="navbar__link navbar__link--phone"
        href="tel:+79688589010"
      >+7 (968) 858-90-10
      </a>
      <a
        class="navbar__link navbar__link--address"
        href="https://yandex.ru/maps/org/on_ona/80861612234/?ll=37.577813%2C55.575500&z=17"
        target="_blank"
      >
        Москва, ул. Ратная, д. 10, корпус 2 <br />(вход со двора)
      </a>
      <div class="navbar__insta">
        <b-icon-instagram />
        <a
          class="navbar__link"
          href="https://www.instagram.com/atelier.on.ona/"
          target="_blank"
        >
          atelier.on.ona
        </a>
      </div>
      <a
        class="navbar__link navbar__link--whatsapp"
        href="https://wa.me/79688589010"
        target="_blank"
      >
        Написать в WhatsApp
      </a>
    </div>
    <div class="navbar__routes">
      <nuxt-link
        exact
        to="/"
        class="navbar__link"
      >
        Главная
      </nuxt-link>
      <nuxt-link
        to="/prices/female-prices"
        class="navbar__link"
      >
        Прейскурант
      </nuxt-link>
      <!-- <nuxt-link
        to="/gallery"
        class="navbar__link"
      >
        Портфолио
      </nuxt-link> -->
      <nuxt-link
        to="/contacts"
        class="navbar__link"
      >
        Контакты
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { BIconInstagram } from 'bootstrap-vue';

@Component({
  components: { BIconInstagram },
})
export default class Navbar extends Vue {}
</script>

<style lang="scss">
.navbar {
  color: $beige;
  align-items: start;

  &__contacts {
    display: flex;
    flex-direction: column;

    .navbar__link:hover {
      text-decoration: underline;
    }
  }

  &__link {
    font-family: $font-family-base;
    color: $beige;

    &:hover {
      color: $beige;
    }

    &--phone {
      font-size: 17px;
      font-weight: $font-weight-bold;
      margin-bottom: 4px;
    }

    &--address {
      font-size: 17px;
      margin-bottom: 10px;
    }

    &--whatsapp {
      display: flex;
      align-items: center;
      font-size: 17px;

      &:before {
        content: '';
        display: block;
        width: 17px;
        height: 17px;
        margin-right: 6px;
        background-color: $beige;
        -webkit-mask-image: url("assets/whatsapp.svg");
        mask-image: url("assets/whatsapp.svg");
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
      }
    }
  }

  &__insta {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 17px;
    letter-spacing: 0.8px;

    .bi-instagram {
      margin-right: 6px;
    }
  }

  &__routes {
    display: flex;

    .navbar__link {
      padding: 15px 20px;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      transition: all 0.2s ease;

      &:hover {
        background-color: $beige-light;
        text-decoration: none;
      }

      &.nuxt-link-active {
        border-bottom: 1px solid $beige;
        background-color: transparent;
      }
    }
  }
}
</style>
