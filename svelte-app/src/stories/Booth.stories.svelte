<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Booth from "../components/Booth.svelte";
</script>

<Meta
    title="Booth"
    component={Booth}
    argTypes={{
        options: { control: "array" },
    }}
/>

<Template let:args>
    <Booth {...args} on:click={args.onVote} />
</Template>

<Story
    name="PrimaryBoothPage"
    storyName="Sim/Não"
    args={{
        options: ["Sim", "Não"],
    }}
/>

<Story
    name="SecondaryBoothPage"
    storyName="Sim/Não/Talvez"
    args={{
        options: ["Sim", "Não", "Talvez"],
    }}
/>
