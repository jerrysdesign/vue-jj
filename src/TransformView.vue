<template>
	<div class="page transform">
		<div class="hd">
			<h1 class="page_title">JJ 教室</h1>
		</div>
		<div class="bd">
			<article class="jj_article">
				<h1>CSS Transition Transform Animation</h1>
				<section>
					<h2 class="title">Transition</h2>
					<section>
					<h3>1.1 transition 介紹</h3>
					<div class="transition-1-1"></div>
					</section>
				</section>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TransformView'
}
</script>

<style lang="stylus">

.jj_article
	padding: 20px 15px
	font-size: 15px
	
	section
		margin-bottom: 1.5em

	h1
		font-size: 17px
		font-weight:400
		margin-bottom: .75em
	h2
		font-size: 16px
		font-weight:400
		margin-bottom: .3em
	h3
		font-weight:400
		font-size: 15px

	.transition-1-1
		display: block
		width: 100px
		height: 100px
		background: #444
		margin: 4em auto
		transition: all .5s

		&:hover
			width: 200px
			height: 200px
			background: red
			transition: all 2s

</style>
