class MyFooter extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
  <footer>
		<div class="w3ls-footer-grids pt-sm-4 pt-3">
		  <div class="container py-xl-5 py-lg-3">
			<div class="row">
			  <div class="col-md-4 w3l-footer">
				<h2 class="mb-sm-3 mb-2">
				  <a href="index.html" class="text-white font-italic font-weight-bold">
					<span>Blood Bank & </span>Donor Management System
					<i class="fas fa-syringe ml-2"></i>
				  </a>
				</h2>
				<p>Every drop of blood is a beacon of hope. 
				  Our Blood Bank Donor Management System ensures that 
				  hope reaches the right place at the right time.</p>
			  </div>
			  <div class="col-md-4 w3l-footer my-md-0 my-4">
				<h3 class="mb-sm-3 mb-2 text-white">Address</h3>
				<ul class="list-unstyled">
				  <li>
					<i class="fas fa-location-arrow float-left"></i>
					<p class="ml-4">
					  <span>SRM HOSPITAL,Chennai,India</span>
					</p>
					<div class="clearfix"></div>
				  </li>
				  <li class="my-3">
					<i class="fas fa-phone float-left"></i>
					<p class="ml-4">7737181111</p>
					<div class="clearfix"></div>
				  </li>
				  <li>
					<i class="far fa-envelope-open float-left"></i>
					<a href="mailto:bloodinfo@gmail.com" class="ml-3">bloodinfo@gmail.com</a>
					<div class="clearfix"></div>
				  </li>
				</ul>
			  </div>
			  <div class="col-md-4 w3l-footer">
				<h3 class="mb-sm-3 mb-2 text-white">Quick Links</h3>
				<div class="nav-w3-l">
				  <ul class="list-unstyled">
					<li>
					  <a href="index.html">Home</a>
					</li>
					<li class="mt-2">
					  <a href="about.html">About Us</a>
					</li>
					<li class="mt-2">
					  <a href="contact.html">Contact Us</a>
					</li>
				  </ul>
				</div>
			  </div>
			</div>
			<div class="border-top mt-5 pt-lg-4 pt-3 pb-lg-0 pb-3 text-center">
			  <p class="copy-right-grids mt-lg-1">© Blood Bank Donor Management System</p>
			</div>
		  </div>
		</div>
	  </footer>
      `;
  }
}

customElements.define('my-footer', MyFooter);
