<template>
  <footer>
    <div class="line-cover">
      <div class="w-full max-w-screen-xl mx-auto px-4 pt-5xl pb-5xl">
        <div
          class="grid gap-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 pb-7xl border-b-[1px] border-[#ffffff97]"
        >
          <div class="logo">
            <img
              src="@/assets/images/logo.svg"
              width="366"
              height="58"
              alt="logo"
            />

            <p class="text-lg text-[#FEFCF7] mt-10">
              Opening the Door to Financial Knowledge
            </p>
          </div>

          <div
            class="links grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-1"
          >
            <div class="quick-links text-[#F6F6F6]">
              <h6 class="font-bold">Quick Links</h6>

              <ul class="list-none mt-5 flex flex-col gap-y-3 cursor-pointer">
                <li class="hover:text-primary">
                  <nuxt-link to="">Home</nuxt-link>
                </li>
                <li class="hover:text-primary">
                  <nuxt-link to="">Why us</nuxt-link>
                </li>
                <li class="hover:text-primary">
                  <nuxt-link to="">How dose we work?</nuxt-link>
                </li>
                <li class="hover:text-primary">
                  <nuxt-link to="">Calendar Courses</nuxt-link>
                </li>
              </ul>
            </div>

            <div class="quick-links text-[#F6F6F6]">
              <h6 class="font-bold">Legal Information</h6>

              <ul class="list-none mt-5 flex flex-col gap-y-3 cursor-pointer">
                <li class="hover:text-primary">
                  <nuxt-link to="">Terms of Services</nuxt-link>
                </li>
                <li class="hover:text-primary">
                  <nuxt-link to="">Privacy Policy</nuxt-link>
                </li>
              </ul>
            </div>

            <div class="quick-links text-[#F6F6F6]">
              <h6 class="font-bold">Contact Info</h6>

              <ul class="list-none mt-5 flex flex-col gap-y-3 cursor-pointer">
                <li class="hover:text-primary">
                  <a href="mailto:support@360.com">support@360.com</a>
                </li>
                <li class="hover:text-primary">
                  <a href="tel:+20 (12) 456-7890">+20 (12) 456-7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="all-rights flex justify-between items-center pt-4">
          <span class="text-white text-sm">@ 2025. All rights reserved.</span>
          <span class="text-white text-sm">Cookies Settings</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: url(../../assets/images/banner-bg.png) no-repeat;
  background-size: cover;

  .line-cover {
    background: url(../../assets/images/line.svg) no-repeat;
    background-size: cover;
    background-position: left center;
  }
}
</style>
