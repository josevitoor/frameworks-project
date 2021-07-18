<script>
    export let votes;
    let votesTotal = 0;
    function calculaVotesTotal() {
        for (var i = 0; i < votes.length; i++) {
            votesTotal += votes[i].count;
        }
        return votesTotal;
    }
</script>

{#each votes as vote, index (vote)}
    <p>
        {index + 1}. {vote.option} - {vote.count} votes ({(vote.count * 100) /
            calculaVotesTotal()}%)
    </p>
{/each}
