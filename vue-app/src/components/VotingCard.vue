<template>
  <div class="votingCard">
    <div v-if="observableState === 'open'">
      <h3>{{ title }}</h3>
      <Booth :options="getOptions" @onVote="vote"></Booth>
    </div>
    <div v-else>
      <h3>{{ title }}</h3>
      <Result :votes="votes"></Result>
    </div>
  </div>
</template>

<script>
import Booth from "./Booth";
import Result from "./Result";

export default {
  components: { Booth, Result },
  props: ["title", "state", "votes"],
  data() {
    return {
      options: [],
      observableState: this.state,
    };
  },
  methods: {
    vote(index) {
      this.observableState = "close";
      this.votes[index].count++;
    },
  },
  computed: {
    getOptions() {
      for (var i = 0; i < this.votes.length; i++) {
        this.options[i] = this.votes[i].option;
      }
      return this.options;
    },
  },
};
</script>

<style>
.votingCard {
  background-color: rgb(166, 200, 224);
  border: 1px solid black;
  border-radius: 10px;
}
</style>
