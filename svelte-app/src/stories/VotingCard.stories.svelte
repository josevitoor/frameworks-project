<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import VotingCard from "../components/VotingCard.svelte";
</script>

<Meta
    title="VotingCard"
    component={VotingCard}
    argTypes={{
        title: { control: "text" },
        votes: { control: "array" },
        state: {
            options: ["open", "close"],
            control: { type: "radio" },
        },
    }}
/>

<Template let:args>
    <VotingCard {...args} />
</Template>

<Story
    name="PrimaryVotingCardPage"
    storyName="Segue o relator"
    args={{
        title: "Segue o relator?",
        state: "open",
        votes: [
            { option: "Sim", count: 6 },
            { option: "Não", count: 2 },
        ],
    }}
/>

<Story
    name="SecondaryVotingCardPage"
    storyName="Continuamos amanhã?"
    args={{
        title: "Continuamos amanhã?",
        state: "close",
        votes: [
            { option: "Sim", count: 3 },
            { option: "Não", count: 3 },
            { option: "Talvez", count: 2 },
        ],
    }}
/>
