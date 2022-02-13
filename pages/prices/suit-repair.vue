<template>
  <b-table-lite
    :items="suitRepair"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class SuitRepair extends Vue {
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

  suitRepair: PriceItem[] = [
    {
      name: 'Выровнять и подшить низ изделия',
      price: '1 000 — 2 500'
    },
    {
      name: 'Укоротить низ со шлицей',
      price: '2 000 — 3 200'
    },
    {
      name: 'Укоротить низ с разрезом',
      price: '1 800 — 2 600'
    },
    {
      name: 'Укоротить низ рукава швом вподгибку',
      price: '1 000 — 1 500'
    },
    {
      name: 'Укоротить рукава со шлицей, разрезом',
      price: '1 500 — 2 500'
    },
    {
      name: 'Оформление вытачек, рельефов',
      price: 'от 1 200'
    },
    {
      name: 'Ушить по боковым швам + низ',
      price: '800 — 2 500'
    },
    {
      name: 'Ушить по боковым швам + низ + пройма',
      price: '2 500 — 3 500'
    },
    {
      name: 'Ушить по рельефам',
      price: '1 800 — 2 500'
    },
    {
      name: 'Ушить по среднему шву спинки со шлицей / без шлицы',
      price: '1 200 — 1 800'
    },
    {
      name: 'Ушить по плечевым швам с переносом линии горловины, проймы',
      price: 'от 3 000'
    },
    {
      name: 'Ушить рукава по локтевому шву + боковой шов + пройма + низ',
      price: '3 000 — 7 000'
    },
    {
      name: 'Перекрой проймы и рукава',
      price: '3 000 — 5 000'
    },
    {
      name: 'Изменение горловины',
      price: '1 500 — 3 000'
    },
    {
      name: 'Изменение формы воротника, лацкана',
      price: '1 500 — 3 000'
    },
    {
      name: 'Замена подклада',
      price: '3 000 — 4 000'
    },
    {
      name: 'Создание накладного кармана / прорезного кармана',
      price: '800 — 1 500'
    },
    {
      name: 'Ремонт карманов, замена мешковины',
      price: 'от 1 500'
    },
    {
      name: 'Полный перекрой изделия',
      price: 'от 8 000',
      _cellVariants: { name: 'red', price: 'bold' }
    },
  ];
}
</script>
