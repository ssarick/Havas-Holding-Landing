<template>
    <div class="header-section header-transparent" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">

                    <!-- Header Logo Start -->
                    <div v-if="isOpened" class="col-xl-2 col-auto order-0">
                        <div class="header-logo">
                            <NuxtLink to="/">
                                <img class="dark-logo" src="/images/logo/header-logo.svg" alt="Agency Logo">
                                <img class="light-logo" src="/images/logo/header-logo.svg" alt="Agency Logo">
                            </NuxtLink>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Main Menu Start -->
                    <div class="col-auto col-xl d-flex align-items-center order-2 order-xl-1" :class="!isOpened ? 'justify-content-center' : 'justify-content-end'">
                        <div class="menu-column-area d-none d-xl-block position-static">
                            <Navigation />
                        </div>
                        <!-- Header Search Start -->
<!--                        <div class="header-search-area">-->
<!--                            &lt;!&ndash; Header Login Start &ndash;&gt;-->
<!--                            <div class="header-search">-->
<!--                                <button class="header-search-toggle" @click="toggleClass('addClass', 'search-popup-open')">-->
<!--                                    <i class="fa fa-search"></i>-->
<!--                                </button>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; Header Login End &ndash;&gt;-->
<!--                        </div>-->
                        <!-- Header Search End -->

                        <!-- Header Mobile Menu Toggle Start -->
                        <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                            <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                        <!-- Header Mobile Menu Toggle End -->
                    </div>
                    <!-- Header Main Menu End -->

                    <!-- Header Right Start -->

                    <!-- Header Right End -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
                isOpened: false
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                this.isSticky = scrollPos >= 200;
                this.isOpened = scrollPos >= 200;
            })
        },

        methods: {
            // offcanvas mobile menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            //offcanvas search 
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-popup');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>