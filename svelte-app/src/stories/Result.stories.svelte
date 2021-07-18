<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Result from "../components/Result.svelte";
</script>

<Meta
    title="Result"
    component={Result}
    argTypes={{
        votes: { control: "array" },
    }}
/>

<Template let:args>
    <Result {...args} />
</Template>

<Story
    name="PrimaryResultPage"
    storyName="Votação 1"
    args={{
        votes: [
            { option: "Sim", count: 5 },
            { option: "Não", count: 3 },
        ],
    }}
/>
<Story
    name="SecondaryResultPage"
    storyName="Votação 2"
    args={{
        votes: [
            { option: "Sim", count: 3 },
            { option: "Não", count: 3 },
            { option: "Talvez", count: 2 },
        ],
    }}
/>
