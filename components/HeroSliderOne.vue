<template>
    <div class="intro-slider">
        <swiper
            :speed="1000"
            :loop="false"
            :navigation="swiperOptions.navigation"
            :effect="'fade'"
        >
            <swiper-slide v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                    <h2 class="title">{{ banner.heading }}</h2>
                                    <div class="desc">
                                        <p>{{ banner.text }}</p>
                                    </div>
                                    <NuxtLink to="/about" class="btn btn-primary btn-hover-secondary">Get Started</NuxtLink>
                                    <NuxtLink to="/about" class="btn btn-outline-white btn-hover-primary">Learn More</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <!-- pagination class -->
            <div class="home-slider-prev swiper-button-prev main-slider-nav">
                <i class="fas fa-angle-left"></i>
            </div>
            <div class="home-slider-next swiper-button-next main-slider-nav">
                <i class="fas fa-angle-right"></i>
            </div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, EffectFade } from 'swiper/core'
    SwiperCore.use([Navigation, EffectFade ])

    import "swiper/css"
    import 'swiper/css/effect-fade';

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "Designing awesome brands & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "/images/hero-image/hero-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "Developing awesome sites & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "/images/hero-image/hero-2.jpg"
                    }
                ]
            }
        },
    };
</script>