<template>
    <div class="intro-slider">
        <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url('/images/hero-image/havas.jpg')` }">
            <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                    <div class="col align-self-center">
                        <div class="intro-content">
                            <h3 class="title">Партнерство во имя роста и достижения целей</h3>
                            <div class="desc">
                                <p>Havas Holding — международная холдинговая компания, ведущая деятельность в различных отраслях национальной экономики Узбекистана. Холдинг объединяет несколько крупных компаний в таких сферах, как ритейл, девелопмент, сельское хозяйство, FMCG.</p>
                            </div>
                            <div style="margin-top: 80px">
                              <div class="container">
                              <div class="row">
                                <div class="col-lg-12 mx-auto">
                                  <div class="row row-cols-lg-4 row-cols-sm-4 row-cols-1 mtn-30">
                                    <div class="col mt-30" data-aos="fade-up" v-for="(item, i) in funFacts" :key="i">
                                      <div class="funfact2">
                                        <div class="number">
                                          <span class="counter">
                                              {{item.count}}
                                          </span>
                                        </div>
                                        <h6 class="text">{{ item.text }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          <!--                            <NuxtLink to="/about" class="btn btn-primary btn-hover-secondary">Подробнее</NuxtLink>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import funFacts from "~/data/funfacts.json"
export default {
  data () {
    return {
      funFacts
    }
  }
};
</script>