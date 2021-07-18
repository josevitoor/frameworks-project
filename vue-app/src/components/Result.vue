<template>
  <div>
    <p v-for="(vote, index) in votes" :key="index.toString()">
      {{ index + 1 }}. {{ vote.option }} - {{ vote.count }} votes ({{
        (vote.count * 100) / calculaVotesTotal
      }}%)
    </p>
  </div>
</template>

<script>
export default {
  props: ["votes"],
  data: () => ({
    votesTotal: 0,
  }),
  computed: {
    calculaVotesTotal() {
      for (var i = 0; i < this.votes.length; i++) {
        this.votesTotal += this.votes[i].count;
      }
      return this.votesTotal;
    },
  },
};
</script>

<style>
.m5 {
  margin: 5px;
}
</style>

