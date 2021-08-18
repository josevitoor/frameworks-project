<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Form from "../components/Form.svelte";
</script>

<Meta
    title="Form"
    component={Form}
    argTypes={{
        title: { control: "text" },
        votes: { control: "array" },
    }}
/>

<Template let:args>
    <Form {...args} />
</Template>

<Story
    name="PrimaryResultPage"
    storyName="Segue o relator"
    args={{
        title: "Segue o relator?",
        votes: [
            { option: "Sim", count: 6 },
            { option: "Não", count: 2 },
        ],
    }}
/>

<Story
    name="SecondaryResultPage"
    storyName="Continuamos amanhã?"
    args={{
        title: "Continuamos amanhã?",
        votes: [
            { option: "Sim", count: 3 },
            { option: "Não", count: 3 },
            { option: "Talvez", count: 2 },
        ],
    }}
/>
