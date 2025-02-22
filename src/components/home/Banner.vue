<template>
  <div
    class="banner bg-[url('assets/images/banner-bg.png')] bg-cover bg-no-repeat h-screen relative"
  >
    <div
      class="line-cover bg-[url('assets/images/line.svg')] bg-cover bg-no-repeat h-screen"
    >
      <Carousel v-bind="settings" :breakpoints="breakpoints1">
        <Slide
          v-for="(slide, index) in 3"
          :key="index"
          class="px-xl overflow-hidden"
        >
          <div class="w-full max-w-screen-xl mx-auto px-4 h-screen">
            <div
              class="grid h-screen grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center"
            >
              <div class="text-content mt-[72px]">
                <div
                  class="px-4 py-2 mb-4 w-fit rounded-full banner-chip bg-white/5 border border-white/10 shadow-[inset_0px_0px_12px_rgba(255,255,255,0.2)] backdrop-blur-3xl box-border"
                >
                  <span class="text-white">Enhance your financial career</span>
                </div>

                <h1
                  class="font-bold xl:text-[62px] lg:text-[62px] md:text-[30px] text-[30px] xl:w-[617px] lg:w-[617px] md:w-[302px] w-[302px] xl:leading-[62px] lg:leading-[62px] md:leading-[30px] leading-[35px] text-white"
                >
                  Advance Your Career with Expert Finance Courses
                </h1>

                <p
                  class="font-thin xl:text-[18px] lg:text-[18px] md:text-small text-small leading-[32px] mt-4 text-[#F3F3F3] xl:w-[500px] lg:w-[500px] md:w-[311px] w-[311px]"
                >
                  Unlock Your Future with Comprehensive Accounting & Finance
                  Courses: Flexible Online and Offline Learning with Business
                  360
                </p>

                <Button
                  :text="true"
                  :icon="false"
                  :button_type="'default'"
                  class="mt-10"
                >
                  <template #button-text> Get Started Today</template>
                </Button>
              </div>

              <div class="person-image mt-[9rem]">
                <img
                  src="../../assets/images/person.svg"
                  width="440"
                  height="641"
                  alt="person"
                  class="absolute bottom-0"
                />
              </div>
            </div>

            <div
              class="book-image absolute xl:right-[8rem] lg:right-[8rem] md:right-[1rem] right-[1rem] xl:top-[40%] lg:top-[40%] md:top-[70%] top-[70%]"
            >
              <img
                src="../../assets/images/book.svg"
                width="60"
                height="60"
                alt="book"
              />
            </div>

            <HomeStudentsCard />

            <HomeUsersCard />
          </div>
        </Slide>

        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { useCarousel } from "../../utils/carousel.ts";

const { Pagination, breakpoints1, Carousel, settings, Slide } = useCarousel();
</script>

<style scoped>
.banner {
  .banner-chip {
    background: rgba(255, 255, 255, 0.005);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: inset 0px 0px 12px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(24px);
    box-sizing: border-box;
  }
}

@media (max-width: 480px) {
  .person-image {
    img {
      width: 14rem;
      transform: translateX(106px);
    }
  }
}

@media (min-width: 480px) and (max-width: 767px) {
  .person-image {
    img {
      width: 14rem;
      transform: translateX(106px);
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .person-image {
    img {
      width: 22rem;
      transform: translateX(360px);
    }
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .person-image {
    img {
      width: 25rem;
      transform: translateX(90px);
    }
  }
}

@media (min-width: 1200px) and (max-width: 1439px) {
  .person-image {
    img {
      width: 26rem;
      transform: translateX(130px);
    }
  }
}

@media (min-width: 1440px) {
  .person-image {
    img {
      width: 32rem;
      transform: translateX(145px);
    }
  }
}
</style>
