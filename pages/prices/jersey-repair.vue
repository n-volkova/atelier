<template>
  <b-table-lite
    :items="jerseyRepairPrices"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class JerseyRepairPrices extends Vue {
  fields: BvTableFieldArray = [
    {
      key: 'name',
      label: 'Наименование',
      tdClass: 'name-column'
    },
    {
      key: 'price',
      label: 'Стоимость'
    }
  ];

  jerseyRepairPrices: PriceItem[] = [
    {
      name: 'Укоротить низ брюк',
      price: '500'
    },
    {
      name: 'Укоротить низ платья, юбки',
      price: '900 — 1 500'
    },
    {
      name: 'Укоротить изделия средней и толстой вязки',
      price: '1 000 — 2 000'
    },
    {
      name: 'Укоротить рукава',
      price: 'от 800'
    },
    {
      name: 'Укоротить низ с разрезами',
      price: '1 200 — 1 600'
    },
    {
      name: 'Укоротить низ со шлицей',
      price: '1 500 — 2 000'
    },
    {
      name: 'Укоротить низ с подкладом',
      price: '1 500 — 2 500'
    },
    {
      name: 'Укоротить рукава через пройму',
      price: 'от 2 500'
    },
    {
      name: 'Налокотники на рукава изготовить и пришить',
      price: 'от 1 500'
    },
    {
      name: 'Ушить рукава без проймы',
      price: '800 — 1 200'
    },
    {
      name: 'Перенос линии проймы',
      price: '1 500 — 2 500'
    },
    {
      name: 'Укоротить верх юбки с переносом пояса',
      price: '1 500 — 2 500',
    },
    {
      name: 'Изменить вырез горловины',
      price: '1 200 — 2 000',
    },
    {
      name: 'Ушить по боковым швам',
      price: 'от 1 500',
    },
    {
      name: 'Вставить резинку в пояс, рукава',
      price: '600 — 1 200',
    },
    {
      name: 'Перенос линии талии',
      price: '1 500 — 2 500',
    },
    {
      name: 'Ушить по среднему шву со шлицей, разрезом',
      price: '800 — 2 000',
    },
    {
      name: 'Убрать затяжку, подъём петель',
      price: '350 — 800',
    },
    {
      name: 'Реставрация 0,5 см²',
      price: 'от 600',
    },
    {
      name: 'Реставрация сложная',
      price: 'от 1 000',
    },
    {
      name: 'Ушить купальник',
      price: '1 500 — 3 000',
    },
    {
      name: 'Уменьшить плавки',
      price: 'от 1 500',
    },
    {
      name: 'Уменьшить ластовицу в плавках',
      price: '1 500',
    },
    {
      name: 'Перекрой чашек купальника',
      price: '1 500 — 3 000',
    },
    {
      name: 'Заменить молнию (юбка, брюки, застёжка поло, кардиган)',
      price: '800 — 1 500',
    },
    {
      name: 'Сложные работы',
      price: '+20% — 30%',
      _cellVariants: { name: 'bold', price: 'bold' }
    },
  ];
}
</script>
