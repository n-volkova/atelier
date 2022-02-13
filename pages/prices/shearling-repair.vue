<template>
  <b-table-simple
    hover
    bordered
  >
    <b-thead>
      <b-tr>
        <b-th
          rowspan="2"
          class="shearling-repair__name-th"
        >
          Наименование
        </b-th>
        <b-th
          colspan="2"
          class="text-center"
        >
          Стоимость
        </b-th>
      </b-tr>
      <b-tr>
        <b-th>Искусственная</b-th>
        <b-th>Натуральная</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-td>Выровнять или укоротить низ</b-td>
        <b-td>от 2 500</b-td>
        <b-td>3 000 — 4 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Укоротить рукава</b-td>
        <b-td>от 1 500</b-td>
        <b-td>2 500 — 3 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Ушить по боковым швам</b-td>
        <b-td>от 3 000</b-td>
        <b-td>от 5 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Расставить по боковым швам</b-td>
        <b-td>от 5 000</b-td>
        <b-td>от 7 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Ушить по боковым швам, затрагивая пройму, рукава, низ</b-td>
        <b-td>от 4 000</b-td>
        <b-td>от 6 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Перекрой проймы</b-td>
        <b-td>от 4 000</b-td>
        <b-td>от 6 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Перекрой воротника, капюшона</b-td>
        <b-td>от 3 000</b-td>
        <b-td>от 6 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Ушить средний шов спинки</b-td>
        <b-td>от 1 500</b-td>
        <b-td>от 2 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Ушить по рельефу</b-td>
        <b-td>от 1 200</b-td>
        <b-td>от 1 500</b-td>
      </b-tr>
      <b-tr>
        <b-td>Коррекция плечевого пояса</b-td>
        <b-td>от 2 500</b-td>
        <b-td>от 4 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Заузить рукава</b-td>
        <b-td>от 2 500</b-td>
        <b-td>от 4 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Баланс изделия по боковым швам</b-td>
        <b-td>5 800</b-td>
        <b-td>7 000 — 10 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Изготовить манжеты</b-td>
        <b-td>от 3 000</b-td>
        <b-td>от 4 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Ремонт кармана 1 шт.</b-td>
        <b-td>от 3 000</b-td>
        <b-td>от 4 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Изготовить карманы (накладные, прорезные, в шве)</b-td>
        <b-td>от 800</b-td>
        <b-td>от 1 500</b-td>
      </b-tr>
      <b-tr>
        <b-td>Реставрация борта (перекат)</b-td>
        <b-td>от 2 500</b-td>
        <b-td>от 4 000</b-td>
      </b-tr>
      <b-tr>
        <b-td>Изготовить петлю навесную</b-td>
        <b-td>от 400</b-td>
        <b-td>от 800</b-td>
      </b-tr>
      <b-tr>
        <b-td>Заменить молнию</b-td>
        <b-td colspan="2">
          1 500 — 3 000
        </b-td>
      </b-tr>
      <b-tr>
        <b-td class="table-red">
          Полный перекрой изделия
        </b-td>
        <b-td colspan="2">
          15 000 — 30 000
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class ShearlingRepair extends Vue {}
</script>

<style lang="scss" scoped>
  .shearling-repair__name-th {
    vertical-align: middle;
    text-align: center;
  }
</style>
