<template>
<div>
    <div id="info" class="container-fluid">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<img class="img-responsive" src="https://www.enlighttechnologies.in/images/headbg-deal.svg" alt="headbg-deal">
				</div>
				<div class="col-md-6">
					<div class="info-text">{{ infoText }}</div><a href="https://www.enlighttechnologies.in/login" class="ybtn ybtn-accent-color ybtn-shadow">Let's develop a solution</a>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>
export default {

	data(){

		return{
			infoText:"Very often, it is hard to find high quality developers & designers at affordable prices. “Enlight” Developer's goal is to provide its clients with first class dedicated IT solutions for your B2B, B2C, E-commerce, Fintech, Media, Tech Company.",
		}
	}
    
}
</script>