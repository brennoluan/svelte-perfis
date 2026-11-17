<script lang="ts">
    import TopBar from "./TopBar.svelte";
    import type IUser from "../interfaces/IUser";

    export let user: IUser;
</script>

<div class="card-user">
    <TopBar />
    <div class="user">
        <div class="photo-container">
            <a href={user.profile_url} target="_blank" rel="noopener">
                <div
                    class="photo-user"
                    style:background-image="url({user.avatar_url})"
                ></div></a
            >
        </div>

        <div class="user-details">
            {#if user.name}
                <div class="info">
                    Nome: <span>{user.name}</span>
                </div>
            {/if}
            <div class="info">
                Usuário: <span>{user.login}</span>
            </div>
            <div class="info">
                Seguidores: <span>{user.followers}</span>
            </div>
            <div class="info">
                Repositórios: <span>{user.repositories_publics}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .card-user {
        margin-top: 65px;
    }

    .user {
        padding: 28px 0;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
        border-radius: 0px 0px 13px 13px;

        display: flex;
        justify-content: center;
    }

    .photo-container {
        margin-right: 81px;
    }

    .photo-user {
        width: 12.75rem;
        height: 12.75rem;
        border: 4.56px solid #2e80fa;
        border-radius: 50%;
        background-size: cover;
    }

    .user-details {
        margin-right: 55px;
    }

    .user-details > .info {
        font-weight: 600;
        font-size: 20px;
        line-height: 31px;
        color: #395278;
    }

    .user-details > .info > span {
        color: #6781a8;
        font-weight: normal;
    }
</style>
