<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <HeroFixedBanner />
        <AboutTwo id="about" />
        <PortfolioGalleryTwo id="projects" :style="{backgroundColor: '#f8faff'}" />
        <BlogSectionOne :style="{backgroundColor: '#f8faff'}" />
        <CallToActionOne id="contact-us"/>
        <TheFooter />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Havas Holding'
            }
        },
    };
</script>


