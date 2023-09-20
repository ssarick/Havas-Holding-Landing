<template>
    <div class="blog">
        <div class="thumbnail">
            <NuxtLink class="image">
                <img :src="blog.imgSrc" :alt="blog.title">
            </NuxtLink>
        </div>
        <div class="info">
<!--            <ul class="meta">-->
<!--                <li><i class="far fa-calendar"></i>{{ blog.date }}</li>-->
<!--                <li><i class="far fa-eye"></i>{{ blog.view }} Views</li>-->
<!--            </ul>-->
            <h3 class="title">
                <NuxtLink>{{ blog.title }}</NuxtLink>
            </h3>
            <p class="desc">
              <NuxtLink>{{ blog.desc }}</NuxtLink>
            </p>
<!--            <NuxtLink :to="`/blog/${blog.slug}`" class="link">-->
<!--                <mark>Read More</mark>-->
<!--            </NuxtLink>-->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>