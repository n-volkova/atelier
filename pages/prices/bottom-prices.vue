<template>
  <b-table-lite
    :items="bottomPrices"
    :fields="fields"
    hover
    class="prices__table"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class BottomPrices extends Vue {
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

  bottomPrices: PriceItem[] = [
    {
      name: 'Укоротить низ (тонкая ткань)',
      price: '400 — 600'
    },
    {
      name: 'Укоротить низ (плотная ткань)',
      price: '700 — 1 000'
    },
    {
      name: 'Укоротить низ с тесьмой',
      price: '700 — 1 100'
    },
    {
      name: 'Укоротить низ с манжетом',
      price: '700 — 1 100'
    },
    {
      name: 'Укоротить низ с сохранением края',
      price: '700 — 1 100'
    },
    {
      name: 'Укоротить низ с молнией',
      price: '1 000 — 1 500'
    },
    {
      name: 'Укоротить низ брюк на подкладе',
      price: '700 — 1 500'
    },
    {
      name: 'Ушить от колена 2 шва + низ',
      price: '1 500 — 2 500'
    },
    {
      name: 'Ушить по боковым швам без пояса + низ',
      price: 'от 1 500'
    },
    {
      name: 'Ушить по боковым швам + пояс + низ',
      price: '1 500 — 2 500'
    },
    {
      name: 'Перенос линии пояса',
      price: '1 500 — 2 500'
    },
    {
      name: 'Вставить резинку в пояс',
      price: '600 — 1 500'
    },
    {
      name: 'Застрочить карманы',
      price: '500 — 1 500'
    },
    {
      name: 'Заменить мешковину в карманах',
      price: 'от 1 500'
    },
    {
      name: 'Убрать мешковину карманов',
      price: '700 — 1 500'
    },
    {
      name: 'Замена подклада',
      price: '3 500 — 6 000'
    },
    {
      name: 'Полный перекрой изделия',
      price: '4 000 — 10 000',
    },
    {
      name: 'Замена молнии на брюках (гульфик)',
      price: '600 — 900',
    },
    {
      name: 'Замена молнии на джинсах',
      price: 'от 800',
    },
  ];
}
</script>

