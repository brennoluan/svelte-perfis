<script lang="ts">
	let name: string = "Brenno";
	let description: string = "This is a my first Svelte app.";
	let src: string =
		"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg";
	let alt: string = "Cat image";
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>{description}</p>
	<img {src} {alt} height="300" />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
