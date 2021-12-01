<template>
  <div class="adventofcode">
    <h1>{{ msg }}</h1>
    <h2>Day 1</h2>
    <label for="input">Input</label><br/>
    <textarea id="input" rows="10" cols="40" v-model="input" placeholder="Add your input here"></textarea>    
    <p>
      <button v-on:click="solve()" id ="solve">Solve</button>
    </p>
    <h2>Solution for part 1</h2>
    <p id="solution1">{{ this.solution1 }}</p>
    <h2>Solution for part 2</h2>
    <p id="solution2">{{ this.solution2 }}</p>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { solveDay1Part1, solveDay1Part2 } from '@/lib/day1';

@Component
export default class AdventOfCode extends Vue {
  @Prop() private msg!: string;

  private input = '';
  private solution1 = 'Not solved';
  private solution2 = 'Not solved';

  private solve() {
    if(!this.input) {
      this.solution1 = 'Input not given!';
      this.solution2 = 'Input not given!';
      return;
    }
    this.solution1 = solveDay1Part1(this.input);
    this.solution2 = solveDay1Part2(this.input);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
