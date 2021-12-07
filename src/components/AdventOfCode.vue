<template>
  <div class="adventofcode">
    <h1>{{ msg }}</h1>
    <label for="day">Select day</label><br/>
    <select id="day" v-model="day" @change="reset">
      <option v-for="n in numOfImplementedDays" :value="n" :key="n">{{ n }}</option>
    </select><br/>
    <label for="input">Input</label><br/>
    <textarea id="input" rows="10" cols="40" v-model="input" placeholder="Add your input here"></textarea>    
    <p>
      <button @click="solve()" id ="solve">Solve</button>
    </p>
    <h2>Solution for part 1</h2>
    <p id="solution1">{{ this.solution1 }}</p>
    <h2>Solution for part 2</h2>
    <p id="solution2">{{ this.solution2 }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { solve } from '@/lib/adventofcode';

@Component
export default class AdventOfCode extends Vue {
  @Prop() private msg!: string;

  // This has to be updated as new days are implemented
  private numOfImplementedDays = 5;
  private input = '';
  private solution1 = 'Not solved';
  private solution2 = 'Not solved';
  private day = 1;

  private reset() {
    this.solution1 = 'Not solved';
    this.solution2 = 'Not solved';
  }

  private solve() {
    if(!this.input) {
      this.solution1 = 'Input not given!';
      this.solution2 = 'Input not given!';
      return;
    }
    this.solution1 = solve(this.input, +this.day, 1);
    this.solution2 = solve(this.input, +this.day, 2);
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
