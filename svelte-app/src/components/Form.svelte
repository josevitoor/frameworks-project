<script>
    import Booth from "./Booth.svelte";
    import VotingCard from "./VotingCard.svelte";
    export let votes;
    export let title;
    let state = "close";
    let errorText = "close";
    let option = ["Atualizar"];

    function onVote(index) {
        const validation = validationError();
        if (!validation) {
            state = "open";
        } else {
            errorText = "open";
        }
    }
    function validationError() {
        const votesOption = votes.map((votes) => votes.option);
        const votesCount = votes.map((votes) => votes.count);
        const votesValidation = votes.map((votes, length) =>
            votesOption[length].length <= 0 ||
            votesCount[length] <= 0 ||
            !votesCount[length] ||
            title.length <= 0
                ? true
                : false
        );
        for (var i = 0; i < votesValidation.length; i++) {
            if (votesValidation[i] == true) {
                return true;
            }
        }
        return false;
    }
</script>

{#if state === "close"}
    <div>
        <form>
            <label>Título *</label><br />
            <input bind:value={title} type="text" label="Título *" /><br />
            {#each votes as vote, index (vote)}
                <label> Opção {index} *</label><br />
                <input bind:value={vote.option} type="text" /><br />
                <label> Votes {index} *</label><br />
                <input bind:value={vote.count} type="number" /><br />
            {/each}
        </form>
        {#if errorText === "close"}{:else}
            <p class="error">
                É preciso preencher todos os campos e os votos maiores que zero!
            </p>
        {/if}
        <Booth options={option} {onVote} />
    </div>
{:else}
    <div>
        <VotingCard {votes} state={"open"} {title} />
    </div>
{/if}

<style>
    .error {
        color: red;
        font-size: 15px;
    }
</style>
