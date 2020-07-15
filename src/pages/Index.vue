<template>
  <Layout>
  
    <v-container id="about" class="section">
      <v-row 
        dense
        align="center"
        justify="center"
      > 
        <v-col>
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
        </v-col>
        <v-col ma-5 pa-5>

          <v-row>
          
            <v-col class="text-left">
              <h1 class="display-3">I'm Brian Carlson... <br> <span>{{about[index]}}</span></h1>  
            </v-col>
          </v-row>
          
          <v-row
            dense
            align="center"
            justify="center"
          >
            <v-col class="text-left">
              <!-- <h2 class="display-1">{{headlines[index]}}</h2> -->
            </v-col>
          </v-row>

          <v-row 
            
            align="center"
            justify="center"
          >
            <v-col class="text-left">
              <h3>
                I'm a software engineer with a background in computer science, computer engineering, and math. From data science pipelines to AI assisted financial tools to point cloud manipulation for LIDAR scans of mining sites, I've worked on a wide range of problems in a variety of fields. I love learning new things and applying my skills to new areas. 
              </h3>
              <v-col pa-5 ma-5></v-col>
              <h3>
                I have at least 10 projects open at any time, but I'm still looking for my true passion project. Maybe you can help me find it?        
              </h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
     
    </v-container>
    
    <!-- <v-divider light></v-divider> -->

    <node-separator/>

    <project-section class="section" />
    
    <!-- <v-divider light></v-divider> -->
    <dashed-separator/>
    
    <experience-section id="experience" class="section"/>

    <v-divider></v-divider>
<!-- 
    <v-container class="section">
      
      <div class="col-lg-12">
        <form name="sentMessage" id="contactForm" action="https://formspree.io/briancarlson6174@gmail.com" method="POST" novalidate="">
            <div class="row">
                <div class="col-md-6">
                    <div class="control-group form-group">
                        <input type="text" class="form-control" placeholder="Your Name *" id="name" name="name" required="" data-validation-required-message="Please enter your name.">
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group form-group">
                        <input type="email" class="form-control" placeholder="Your Email *" id="email" name="sender-email" required="" data-validation-required-message="Please enter your email address.">
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group form-group">
                        <input type="text" class="form-control" placeholder="Your Company" id="phone" name="company">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="control-group form-group">
                        <textarea class="form-control" placeholder="Your Message *" id="message" name="message" required="" data-validation-required-message="Please enter a message."></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                    <div id="success"></div>
                    <button type="submit" class="btn btn-xl">Send Message</button>
                </div>
            </div>
        </form>
    </div>
    </v-container> -->
  </Layout>
</template>



<script>
import ProjectSection from '../components/ProjectSection'
import ExperienceSection from '../components/ExperienceSection'
import NodeSeparator from '../components/NodeSeparator'
import DashedSeparator from '../components/DashedSeparator'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'


export default {
  components: {
    ProjectSection,
    ExperienceSection,
    NodeSeparator,
    DashedSeparator,
  },
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      headlines: [
        "New ideas.",
        "Software rules the world, let me help you navigate this new domain.",
      ],
      about: [
        "Software Engineer",
        "Hacker",
      ],
      images: [
        "extracurricular/megan_brian_pitch_sm_2.jpg",
        "extracurricular/mirrorcube.png",
        "extracurricular/south_suburban_humane.jpg",
        "extracurricular/sec_pitch.jpeg",
        "extracurricular/guy_adami_2.jpg",
        "extracurricular/nootrax.jpg",
      ],
      vantaEffect: null,
      index: 0,
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }
  },
  mounted() {
    // this.vantaEffect = NET({
    //   el: "#background",
    //   THREE,
    //   mouseControls: true,
    //   touchControls: true,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   scale: 1.00,
    //   scaleMobile: 1.00,
    //   color: 0xf73700
    // });
  }
}
</script>

<style>

  .hero {
    background-image: url("../../static/mirrorcube.svg");
  } 

 
  .section {
      max-width: 1400px;
      min-height: 1px !important;
  }
  
  .img {
    image-orientation: 'from-image';
  }

</style>