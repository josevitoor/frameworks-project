<script>
    export let options;
    export let onVote;
</script>

{#each options as option, index (option)}
    <button class="m5" on:click={onVote(index)}>{option} </button>
{/each}

<style>
    .m5 {
        margin: 5px;
    }
</style>
