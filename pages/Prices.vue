<template>
  <div class="prices">
    <div class="container">
      <p class="prices__text">
        <b>Внимание! При пошиве предоплата — 50%!</b> Стоимость материала и фурнитуры не включены в прейскурант.
      </p>
      <p class="prices__text">
        Ремонт кожаных и меховых изделий производится в течение <b>7-21 дней.</b>
      </p>
      <p class="prices__text">
        Вы можете прислать в <a
          class="prices__link"
          href="https://wa.me/79688589010"
          target="_blank"
        >WhatsApp</a> фото желаемого изделия и узнать предварительную стоимость.
      </p>
      <b-table-simple
        bordered
        caption-top
      >
        <caption class="table-bold">
          Усложняющие коэффициенты
        </caption>
        <b-tbody>
          <b-tr>
            <b-td class="name-column">
              Изделие из замши и кожи
            </b-td>
            <b-td>50%</b-td>
          </b-tr>
          <b-tr>
            <b-td class="name-column">
              Изделие из ткани, сложной в обработке<br />(бархат; кружево; ткань со стразами / бисером; ткань в клетку /
              с рисунком, требующим подгонки; белый цвет материала)
            </b-td>
            <b-td>50%</b-td>
          </b-tr>
          <b-tr>
            <b-td>Изделия с полуобхватом талии свыше 58 см,<br />обхватом груди свыше 120 см,<br />длиной свыше 80 см от талии</b-td>
            <b-td>от 600 до 1000 в зависимости от материала</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <b-nav
        pills
        fill
        class="prices__nav"
      >
        <b-nav-item :to="'/prices/female-prices'">
          Пошив женской одежды
        </b-nav-item>
        <b-nav-item :to="'/prices/male-prices'">
          Пошив мужской одежды
        </b-nav-item>
        <b-nav-item :to="'/prices/bottom-prices'">
          Ремонт брючных изделий
        </b-nav-item>
        <b-nav-item :to="'/prices/female-repair'">
          Ремонт женской одежды. Платье, юбка
        </b-nav-item>
        <b-nav-item :to="'/prices/shirt-repair'">
          Ремонт плечевых изделий. Блузка, сорочка
        </b-nav-item>
        <b-nav-item :to="'/prices/suit-repair'">
          Ремонт плечевых изделий. Пиджак, жакет
        </b-nav-item>
        <b-nav-item :to="'/prices/outerwear-repair'">
          Ремонт плечевых изделий. Пальто, плащ, куртка, пуховик
        </b-nav-item>
        <b-nav-item :to="'/prices/jersey-new'">
          Пошив трикотажных изделий
        </b-nav-item>
        <b-nav-item :to="'/prices/jersey-repair'">
          Ремонт трикотажных изделий
        </b-nav-item>
        <b-nav-item :to="'/prices/fur-repair'">
          Ремонт изделий из меха
        </b-nav-item>
        <b-nav-item :to="'/prices/shearling-repair'">
          Ремонт дублёнок
        </b-nav-item>
        <b-nav-item :to="'/prices/linens-prices'">
          Пошив домашнего текстиля
        </b-nav-item>
        <b-nav-item :to="'/prices/small-repair'">
          Мелкий ремонт
        </b-nav-item>
      </b-nav>
      <nuxt-child />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class Prices extends Vue {
  middleware({ route, redirect }) {
    if (route.path === '/prices' || route.path === '/prices/') {
      return redirect('/prices/female-prices');
    }
  }
}
</script>
<style lang="scss">
.prices {
  margin-top: 20px;
  padding: 30px 0;
  background-color: #fff;

  &__text {
    color: $black;
    font-size: 17px;
  }

  &__table {
    background-color: #fff;
    border-radius: 6px;
  }

  &__link {
    color: $black;
    font-weight: $font-weight-bold;
    text-decoration: underline;
  }

  &__nav {
    margin-top: 10px;
    margin-bottom: 14px;
  }
}

.table-bold {
  font-weight: $font-weight-bold;

  & caption {
    caption-side: top
  }
}

.table-red {
  color: #bd2232;
  font-weight: $font-weight-bold;
}

thead {
  background-color: #f5f3eb;
}

.name-column {
  width: 70%;
}

.nav-item {
  font-size: 17px;
  margin: 3px;
  border-radius: 6px;
  border: 1px dotted $body-color;

  .nav-link {
    font-weight: $font-weight-bold;
    color: $link-inactive-color;

    &.nuxt-link-active {
      color: $black;
      background-color: $body-color;
    }

    &:not(.active):hover {
      background-color: $beige-light;
    }
  }
}
</style>
