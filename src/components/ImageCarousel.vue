<template>
    
    <v-carousel
        cycle
        height="550"
        hide-delimiter-background
        show-arrows-on-hover
        hide-delimiters
    >
        <v-carousel-item
            v-for="(slide, i) in images"
            :key="i"
        > 
            <g-image :src="require(`!!assets-loader?width=600&height=550!@images/${slide}`)"/>
        </v-carousel-item>
    </v-carousel>
</template>




<script>
export default {
    data(){
        return {
            images: [
                "extracurricular/megan_brian_pitch_sm_2.jpg",
                "extracurricular/mirrorcube.png",
                "extracurricular/south_suburban_humane.jpg",
                "extracurricular/sec_pitch.jpeg",
                "extracurricular/guy_adami_2.jpg",
                "extracurricular/nootrax.jpg",
            ],
        }
    }
}
</script>

<style >




</style>