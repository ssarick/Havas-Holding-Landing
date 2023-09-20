<template>
    <div class="section-padding-t90-b100 overflow-hidden">
        <div class="container shape-animate">
            <!-- Section Title Start -->
            <SectionTitle title="Связаться с нами" add-class-name="mb-30" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Адрес</h4>
                            <span class="info-text"> ул. Сафдош 5, Яккасарайский рн. Ташкент, Узбекистан.</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title"> Телефон </h4>
                            <a href="tel:+998712059595">+99871 205 95 95</a>
                        </div>
                    </div>
                </div>

<!--                <div class="col mt-30" data-aos="fade-up">-->
<!--                    <div class="contact-info">-->
<!--                        <div class="icon">-->
<!--                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">-->
<!--                        </div>-->
<!--                        <div class="info">-->
<!--                            <h4 class="title">Электронная почта</h4>-->
<!--                            <span class="info-text">-->
<!--                                <a href="mailto:demo@example.com">demo@example.com</a>-->
<!--                            </span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>

            <shape-with-animation add-class-name="shape-1" data-depth="4" img-src="/images/shape-animation/video-shape-1.png" />

        </div>
        <div class="google-map-area mt-30">
          <div class="container">
            <div class="contact-map-area">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1499.2445770590584!2d69.23913138601644!3d41.27645746036164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzM1LjAiTiA2OcKwMTQnMjIuNSJF!5e0!3m2!1sru!2s!4v1695211575563!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
            ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
        },
    };
</script>
