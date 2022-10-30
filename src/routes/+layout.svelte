<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css" />
</svelte:head>

<div id="app-container">
	<header id="nav-container">
		<a id="nav-title" href="/">Jesse Aubin</a>
		<nav>
			<ul>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/digital-garden">Digital Garden</a></li>
				<li><a href="/now">Now</a></li>
			</ul>
		</nav>
	</header>

	<slot />
</div>

<style>
	#app-container {
		width: clamp(100px, 80%, 70ch);
		margin: 0 auto;
	}

	#nav-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		margin-top: 2rem;
		margin-bottom: 6rem;

		white-space: nowrap;
	}

	a {
		color: inherit;
	}

	#nav-title {
		display: inline-block;
		margin-left: -0.5rem;
		margin-right: 5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 1.2rem;
		text-decoration: none;

		transition-property: background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}

	#nav-title:hover {
		background-color: hsl(0 0% 85%);
	}

	ul {
		list-style: none;
		border-radius: 0.5rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: center;

		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: hsl(0 0% 30% / 1);
	}

	li:not(:first-child) {
		margin-left: 0.6rem;
	}

	li > a:hover {
		text-decoration: none;
	}
</style>
