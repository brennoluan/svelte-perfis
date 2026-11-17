<script lang="ts">
	import Title from "./components/Title.svelte";
	import TopBar from "./components/TopBar.svelte";
	import type IUser from "./interfaces/IUser";

	let user: IUser = null;

	let inputValue = "brenno";

	function onSubmit() {
		user = {
			login: "brennoluan",
			avatar_url: "https://github.com/brennoluan.png",
			profile_url: "https://github.com/brennoluan",
			name: "Brenno Luan",
			repositories_publics: 20,
			followers: 30,
		};
	}
</script>

<div class="app">
	<header>
		<Title />
		<div class="search-users">
			<form on:submit|preventDefault={onSubmit}>
				<input type="text" class="input" bind:value={inputValue} />

				<div class="button-container">
					<button type="submit" class="button">Buscar</button>
				</div>
			</form>
		</div>
	</header>
	{#if user}
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
					<div class="info">
						Nome: <span>{user.name}</span>
					</div>
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
	{/if}
</div>

<style>
	.app {
		max-height: 100vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.search-users {
		position: relative;
		width: 70%;
	}

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
