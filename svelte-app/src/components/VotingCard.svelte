<script>
    import Booth from "./Booth.svelte";
    import Result from "./Result.svelte";
    export let votes;
    export let title;
    export let state;
    $: options = votes.map((vote) => vote.option);
    function onVote(index) {
        state = "close";
        votes[index].count++;
    }
</script>

{#if state === "open"}
    <div class="votingCard">
        <h3>{title}</h3>
        <Booth {options} {onVote} />
    </div>
{:else}
    <div class="votingCard">
        <h3>{title}</h3>
        <Result {votes} />
    </div>
{/if}

<style>
    .votingCard {
        background-color: rgb(166, 200, 224);
        border: 1px solid black;
        border-radius: 10px;
    }
</style>
