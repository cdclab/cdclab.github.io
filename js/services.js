export default {
	created () {
		document.title = 'Our Services | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
	data() {
		return {
			
		}
	},
	template: `
			<main>
				<section class="banner">
					<div class="banner-overlay">
						<h1>Our Services</h1>
					</div>
				</section>
				<section class="body-container flex-stack">
					<section class="card margin-top-0 wrapper-horizontal">
						<div class="flex-box gap-64">
							<div class="flex-60">
								<span>We provide services to mental health professionals and the public to learn more about stress, relationships, and mental illness. Based on our clinical and scientific work on traumatic stress and adverse childhood experience, we offer training and consultation work on pertinent issues, including individual mental well-being concerns, clinician specialty training, and institutional service review and development.</span>
							</div>
							<div class="flex-40">
								<h2>Topics</h2>
								<ul>
									<li>Early life experience and psychological trauma</li>
									<li>Stress-related mental disorders</li>
									<li>Psychological intervention for unresolved traumatic stress</li>
									<li>Empathy and self-compassion</li>
									<li>The making of therapeutic relationship</li>
								</ul>
							</div>
						</div>
					</section>

					<section class="dark">
						<div class="card wrapper-horizontal">
							<h2>Activities</h2>
							<div class="flex-box margin-top-64">
								<div class="flex-200 flex-stack gap-20">
									<img class="img-center" src="./img/service-lecture.webp" width="150">
									<span class="width-200 service-title">Public lecture</span>
								</div>

								<div class="flex-200 flex-stack gap-20">
									<img class="img-center" src="./img/service-workshop.webp" width="150">
									<span class="width-200 service-title">Clinical training workshop</span>
								</div>

								<div class="flex-200 flex-stack gap-20">
									<img class="img-center" src="./img/service-supervision.webp" width="150">
									<span class="width-200 service-title">Individual/group clinical supervision</span>
								</div>
							</div>

							<div class="flex-box margin-top-32">
								<div class="flex-200 flex-stack gap-20">
									<img class="img-center" src="./img/service-consult.webp" width="150">
									<span class="width-200 service-title">Case consultation</span>
								</div>

								<div class="flex-200 flex-stack gap-20">
									<img class="img-center" src="./img/service-delivery.webp" width="150">
									<span class="width-200 service-title">Service evaluation and development</span>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>`
}