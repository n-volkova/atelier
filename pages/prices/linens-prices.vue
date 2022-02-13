<template>
  <b-table-simple hover>
    <b-thead>
      <b-tr>
        <b-th>Наименование</b-th>
        <b-th>Стоимость</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-th
          colspan="2"
          class="th--subheader"
        >
          Шторы
        </b-th>
      </b-tr>
      <b-tr>
        <b-td>Подшить 1 м/п</b-td>
        <b-td>от 250</b-td>
      </b-tr>
      <b-tr>
        <b-td>Пришить тесьму 1 м/п</b-td>
        <b-td>от 250</b-td>
      </b-tr>
      <b-tr>
        <b-td>Пошив ламбрекена 1 м/п</b-td>
        <b-td>от 800</b-td>
      </b-tr>
      <b-tr>
        <b-td>Подбор рисунка</b-td>
        <b-td>30%</b-td>
      </b-tr>
      <b-tr>
        <b-td>Раскрой штор 1 м/п</b-td>
        <b-td>от 500</b-td>
      </b-tr>
      <b-tr>
        <b-th
          colspan="2"
          class="th--subheader"
        >
          Постельное бельё
        </b-th>
      </b-tr>
      <b-tr>
        <b-td>Пододеяльник 1 м</b-td>
        <b-td>200 — 250</b-td>
      </b-tr>
      <b-tr>
        <b-td>Простынь 1 м</b-td>
        <b-td>150 — 200</b-td>
      </b-tr>
      <b-tr>
        <b-td>Наволочка</b-td>
        <b-td>300 — 400</b-td>
      </b-tr>
      <b-tr>
        <b-td>Покрывало 1 м</b-td>
        <b-td>от 350</b-td>
      </b-tr>
      <b-tr>
        <b-td>Плед 1 м</b-td>
        <b-td>от 250</b-td>
      </b-tr>
      <b-tr>
        <b-td>Пошив декоративной подушки</b-td>
        <b-td>от 1 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Чехол на стул</b-td>
        <b-td>от 700</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class LinensPrices extends Vue {}
</script>

<style lang="scss">
.th--subheader {
  text-align: center;
  font-weight: bold;
  background-color: #f5f3eb;

  &:hover {
    background-color: #f5f3eb;
  }
}
</style>
