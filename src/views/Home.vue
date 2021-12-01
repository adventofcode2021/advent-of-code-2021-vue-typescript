<template>
  <div class="home">
    <AdventOfCode msg="Advent Of Code 2021"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdventOfCode from '@/components/AdventOfCode.vue'; // @ is an alias to /src

@Component({
  components: {
    AdventOfCode,
  },
})
export default class Home extends Vue {}
</script>
