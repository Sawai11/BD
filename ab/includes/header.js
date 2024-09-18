

  class Myheader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
          <header>
            <!-- top-bar -->
            <div class="top-bar py-3">
              <div class="container">
                <div class="row">
                  <div class="col-lg-7 top-social-agile">
                    <div class="row">
                      <!-- social icons -->
                      <ul class="col-lg-4 col-6 top-right-info text-center">
                        <li>
                          <a href="https://www.facebook.com">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="mx-3">
                          <a href="https://www.twitter.com">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.google.com">
                            <i class="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li class="ml-3">
                          <a href="https://www.pinterest.com">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                      <!-- //social icons -->
                      <div class="col-6 header-top_w3layouts pl-3 text-lg-left text-center">
                        <p class="text-white">
                          <i class="fas fa-map-marker-alt mr-2"></i> SRM Hospital , Chennai , India</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 top-social-agile text-lg-right text-center">
                    <div class="row">
                      <div class="col-lg-7 col-6 top-w3layouts">
                        <p class="text-white">
                          <i class="far fa-envelope-open mr-2"></i>
                          <a href="mailto:bloodinfo@gmail.com" class="text-white">bloodinfo@gmail.com</a>
                        </p>
                      </div>
                      <div class="col-lg-5 col-6 header-w3layouts pl-4 text-lg-left">
                        <p class="text-white">
                          <i class="fas fa-phone mr-2"></i> 7737187111</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <!-- navigation -->
          <div id="home">
            <div class="main-top py-1">
              <nav class="navbar navbar-expand-lg navbar-light fixed-navi">
                <div class="container">
                  <!-- logo -->
                  <h1>
                    <a class="navbar-brand font-weight-bold font-italic" href="index.html">
                      <span>BB</span>DMS
                      <i class="fas fa-syringe"></i>
                    </a>
                  </h1>
                  <!-- //logo -->
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-lg-auto">
                      <li class="nav-item active mt-lg-0 mt-3">
                        <a class="nav-link" href="index.html">Home</a>
                      </li>
                      <li class="nav-item mx-lg-4 my-lg-0 my-3">
                        <a class="nav-link" href="about.html">About Us</a>
                      </li>
                      <li class="nav-item mx-lg-4 my-lg-0 my-3">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                      </li>
                      <li class="nav-item mx-lg-4 my-lg-0 my-3">
                        <a class="nav-link" href="donor-list.html">Donor List</a>
                      </li>
                      <li class="nav-item mx-lg-4 my-lg-0 my-3">
                        <a class="nav-link" href="search-donor.html">Search Donor</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">My Account</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="profile.html">Profile</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="change-password.html">Change Password</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="request-received.html">Request Received</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="logout.html">Logout</a>
                        </div>
                      </li>
                      <li class="nav-item mx-lg-4 my-lg-0 my-3">
                        <a class="nav-link" href="index.html">Admin</a>
                      </li>
                    </ul>
                    <a href="login.html" class="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3">
                      <i class="fas fa-sign-in-alt mr-2"></i>Login</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
       `;
    }    
  }

  customElements.define('my-header', Myheader);
