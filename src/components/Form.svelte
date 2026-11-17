<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUser from "../interfaces/IUser";
    import { searchRepositories, searchUser } from "../requests";
    import mountUser from "../utils/mountUsers";
    import Button from "./Button.svelte";

    let inputValue = "";

    let errorStatus: number | null = null;

    const dispatch = createEventDispatcher<{
        user: IUser | null;
    }>();

    async function onSubmit() {
        const response = await searchUser(inputValue);
        const responseRepos = await searchRepositories(inputValue);

        errorStatus = response.status;

        if (response.ok && responseRepos.ok) {
            const data = await response.json();
            const dataRepos = await responseRepos.json();

            dispatch("user", mountUser(data, dataRepos));
        } else {
            dispatch("user", null);
        }
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <input
        type="text"
        class="input"
        bind:value={inputValue}
        class:error-input={errorStatus === 404}
        placeholder="Digite o usuário do GitHub"
    />

    {#if errorStatus === 404}
        <span class="error">Usuário não encontrado!</span>
    {/if}

    <div class="button-container">
        <Button>
            Buscar
            <img src="/assets/lupa.svg" alt="ícone de busca" />
        </Button>
    </div>
</form>

<style>
    .input {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .error {
        position: absolute;
        bottom: -25px;
        left: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        z-index: -1;
        color: #ff003e;
    }

    .error-input {
        border: 1px solid #ff003e;
    }

    .button-container {
        position: absolute;
        width: 9.625rem;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
    }
</style>
