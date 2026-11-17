<script lang="ts">
	import Form from "./components/Form.svelte";
	import Title from "./components/Title.svelte";
	import User from "./components/User.svelte";
	import type IUser from "./interfaces/IUser";

	let user: IUser | null = null;
</script>

<div class="app">
	<header>
		<Title />
		<div class="search-users">
			<Form on:user={(e) => (user = e.detail)} />
		</div>
	</header>
	{#if user}
		<User {user} />
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
</style>
