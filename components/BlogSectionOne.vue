<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle title="Профессионализм и опыт" sub-title="Мы гордимся нашими инновационными подходами, глубокими отраслевыми знаниями и способностью предоставлять нашим клиентам решения, которые помогают им достичь своих целей и быть успешными на рынке." />
            <!-- Section Title End -->

            <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60">
                <div class="col mt-30" v-for="(blog, index) in blogData" :key="index">
                    <BlogGridItem :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blogData from '~/data/blog.json';

    export default {
        data() {
            return {
               blogData 
            }
        },

        components: {
            BlogGridItem: () => import("@/components/BlogGridItem"),
            SectionTitle: () => import("@/components/SectionTitle"),
        },
    };
</script>