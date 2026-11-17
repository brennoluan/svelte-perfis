<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUser from "../interfaces/IUser";

    let inputValue = "";

    let errorStatus: number | null = null;

    const dispatch = createEventDispatcher<{
        user: IUser | null;
    }>();

    async function onSubmit() {
        const response = await fetch(
            `https://api.github.com/users/${inputValue}`,
        );
        const data = await response.json();

        errorStatus = response.status;

        if (response.ok) {
            dispatch("user", {
                login: data.login,
                avatar_url: data.avatar_url,
                profile_url: data.html_url,
                name: data.name,
                repositories_publics: data.public_repos,
                followers: data.followers,
            });
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
        <button type="submit" class="button">Buscar</button>
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

    .button {
        padding: 15px 24px;
        border-radius: 8px;
        border: none;
        background: #2e80fa;
        line-height: 26px;
        color: #fff;
        font-size: 22px;
        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        gap: 13px;
    }

    .button:hover {
        background: #4590ff;
    }
</style>
