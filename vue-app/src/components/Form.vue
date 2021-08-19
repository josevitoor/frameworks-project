<template>
  <div v-if="state === 'close'">
    <form>
      <label>Título *</label><br />
      <input v-model="title" type="text" />
      <p v-for="(vote, index) in votes" :key="index.toString()">
        <label> Opção {{ index }} *</label><br />
        <input v-model="vote.option" type="text" /><br />
        <label> Votes {{ index }} *</label><br />
        <input v-model="vote.count" type="number" /><br />
      </p>
    </form>
    <div v-if="errorText === 'close'"></div>
    <div v-else>
      <p class="error">
        É preciso preencher todos os campos e os votos maiores que zero!
      </p>
    </div>
    <Booth :options="['Atualizar']" @onVote="vote" />
  </div>
  <div v-else>
    <VotingCard :title="title" :state="'open'" :votes="votes" />
  </div>
</template>

<script>
import Booth from "./Booth";
import VotingCard from "./VotingCard";

export default {
  components: { Booth, VotingCard },
  props: ["title", "votes"],
  data() {
    return {
      state: "close",
      errorText: "close",
    };
  },
  methods: {
    vote(index) {
      const validation = this.validationError();
      if (!validation) {
        this.state = "open";
      } else {
        this.errorText = "open";
      }
    },
    validationError() {
      const votesOption = this.votes.map((votes) => votes.option);
      const votesCount = this.votes.map((votes) => votes.count);
      const votesValidation = this.votes.map((votes, length) =>
        votesOption[length].length <= 0 ||
        votesCount[length] <= 0 ||
        !votesCount[length] ||
        this.title.length <= 0
          ? true
          : false
      );
      for (var i = 0; i < votesValidation.length; i++) {
        if (votesValidation[i] == true) {
          return true;
        }
      }
      return false;
    },
  },
  computed: {},
};
</script>

<style>
.error {
  color: red;
  font-size: 15px;
}
</style>
