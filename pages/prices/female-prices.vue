<template>
  <b-table-lite
    :items="femalePrices"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class FemalePrices extends Vue {
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

  femalePrices: PriceItem[] = [
    {
      name: 'Юбка базовая (без подклада)',
      price: 'от 5 500'
    },
    {
      name: 'Юбка солнце (без подклада)',
      price: 'от 6 000'
    },
    {
      name: 'Юбка с клиньями (без подклада)',
      price: 'от 7 000'
    },
    {
      name: 'Шорты (без карманов)',
      price: 'от 5 000'
    },
    {
      name: 'Брюки база (простой крой)',
      price: 'от 6 000'
    },
    {
      name: 'Брюки классические (без карманов)',
      price: 'от 7 000'
    },
    {
      name: 'Топ-майка',
      price: 'от 4 000'
    },
    {
      name: 'Блуза, сорочка',
      price: 'от 8 000'
    },
    {
      name: 'Туника',
      price: 'от 6 000'
    },
    {
      name: 'Комбинезон',
      price: 'от 15 000'
    },
    {
      name: 'Жилет без подклада',
      price: 'от 8 000'
    },
    {
      name: 'Жакет классический (на подкладе)',
      price: 'от 15 000'
    },
    {
      name: 'Платье база (без подклада, с рукавами)',
      price: 'от 10 000'
    },
    {
      name: 'Вечернее платье',
      price: 'от 15 000'
    },
    {
      name: 'Пальто классическое на подкладе',
      price: 'от 20 000'
    },
    {
      name: 'Плащ (на подкладе)',
      price: 'от 15 000'
    },
    {
      name: 'Куртка (на подкладе)',
      price: 'от 15 000'
    },
    {
      name: 'Изменение фасона после примерки',
      price: '+50%',
      _cellVariants: { name: 'bold', price: 'bold' }
    },
    {
      name: 'Усложняющие элементы: подклад, шлица, разрез, карманы, складки, рисунок',
      price: '500'
    },
    {
      name: 'Ручные работы 10 см',
      price: '100 — 150'
    },
  ];
}
</script>
