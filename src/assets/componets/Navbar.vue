<template>
    <div>
        <nav id="nav" class="navbar navbar-default">
			<div class="container-fluid">
				<div class="container container-nav">
					<div class="row">
						<div class="col-md-12">
							<div class="navbar-header">
								<button aria-expanded="false" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
								</button>
								<a class="logo-holder" href="https://www.enlighttechnologies.in">
									<div class="logo">
										<img class="image-responsive" style="max-width: 80px; height: auto;" src="https://www.enlighttechnologies.in/images/logonav.svg" alt="">
									</div>
								</a>
							</div>
							<div style="height: 1px;" role="main" aria-expanded="false" class="navbar-collapse collapse" id="bs">
								<ul class="nav navbar-nav navbar-right">
									<li><router-link to="/">Home</router-link>
									</li>
									<li><router-link to="/About">About</router-link>
									</li>
									<li class="dropdown"><a href="#">Services <i class="fa fa-caret-down"></i></a>
										<ul class="dropdown-menu">
											<li class="text-center"><a href="https://www.enlighttechnologies.in/services/e-commerce">E-Commerce Solutions</a>
											</li>
											<li class="text-center"><a href="https://www.enlighttechnologies.in/services/custom-web-apps">Custom Web Applications</a>
											</li>
											<li class="text-center"><a href="https://www.enlighttechnologies.in/services/desktop-apps">Desktop Applications</a>
											</li>
										</ul>
									</li>
									<li class="dropdown"><a href="#">Hosting <i class="fa fa-caret-down"></i></a>
										<ul class="dropdown-menu">
											<li class="text-center"><a href="https://www.enlighttechnologies.in/hosting/webhosting">Web Hosting</a>
											</li>
										</ul>
									</li>
									<li><router-link to="/Project">Project</router-link>
									</li>
									<li><router-link to="/Contact">Contact</router-link>
									</li>
									<li><a class="login-button" href="https://www.enlighttechnologies.in/login">Login</a>
									</li>
									<li class="support-button-holder support-dropdown"><a class="support-button" href="#">Support</a>
										<ul class="dropdown-menu">
											<li><a href="tel:+919325211119"><i class="fa fa-phone"></i>+91-93252-11119</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>

    </div>
</template>

<script>
export default {
    
}
</script>