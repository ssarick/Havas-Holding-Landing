<template>
    <div class="section-padding overflow-hidden">
        <div class="container">
            <div class="row">
                <!-- About Content Start -->
                <div class="col-lg-6" data-aos="fade-up">
                    <div class="about-content-area">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
<!--                            <span class="sub-title">Web design and digital marketing</span>-->
<!--                            <h3 class="title">О нас в цифрах </h3>-->
                        </div>
                        <!-- Section Title Two End -->

                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-12 mt-30" data-aos="fade-up">
                                <div class="about-funfact">
                                    <div class="number"><span class="counter">О нас</span></div>
<!--                                    <h6 class="text">Havas Holding</h6>-->
                                    <p class="text mt-4"><span style="font-weight: bold">Havas Holding </span> - динамично развивающаяся группа компаний, стремящаяся внедрять новые подходы к ведению бизнеса, быть лидером во всех сферах деятельности и активно наращивать международное присутствие.
                                      <br>
                                      <br>
                                      В настоящее время Havas Holding — это 4 направления деятельности, более 50 крупных международных партнеров и команда из более чем 4000 сотрудников, успешно воплощающих в жизнь ряд крупных проектов в сфере ритейла, сельского хозяйства, девелопмента и дистрибуции.
                                    </p>
                                </div>
                            </div>
<!--                            <div class="col-md-5 col-sm-6 col-12 mt-30" data-aos="fade-up">-->
<!--                              <div class="about-funfact">-->
<!--                                <div class="number"><span class="counter">4</span></div>-->
<!--                                <h6 class="text">Индустрии</h6>-->
<!--                                <p>We help our clients increase profits by increasing their visibility online.</p>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                            <div class="col-md-5 col-sm-6 col-12 mt-30" data-aos="fade-up">-->
<!--                                <div class="about-funfact">-->
<!--                                    <div class="number"><span class="counter">12</span></div>-->
<!--                                    <h6 class="text">Человек в команде</h6>-->
<!--                                    <p>We help our clients increase profits by increasing their visibility online.</p>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- About Content Start -->

                <!-- About Image Area Start -->
                <div class="col-lg-6" data-aos="fade-up">
                    <div class="about-image-area about-two about-shape-animation right-0 mr-0">
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-5.jpg" alt="image">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-6.jpg" alt="image">
                        </div>
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
                    </div>
                </div>
                <!-- About Image Area Start -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ShapeWithAnimation from "~/components/ShapeWithAnimation.vue";
</script>