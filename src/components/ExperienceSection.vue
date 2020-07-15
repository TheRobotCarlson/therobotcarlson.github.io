<template>
  <v-container id="">
    <v-row 
      dense
      align="center"
      justify="center"
    >
      <v-col class="text-left">
        <h1 id="">Work Experience</h1>
        <h4 class="subheading">Here's a list of some of the places I've worked.</h4>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row justify="center">
      <v-col  cols-sm="6" style="padding-bottom: 0">
        <v-card>
          <v-card-text class="text-center"> 
            <h1>
              {{fulltimeString}}
            </h1>
          </v-card-text>
          <v-card-text class="text-center"> 
            <h2>
              Fulltime Equivalent Experience
            </h2>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="padding-top: 0">
        <v-timeline :dense="$vuetify.breakpoint.xsOnly">
        
          <v-timeline-item v-for="(experience) in experiences" :key="experience.id">
            <template v-slot:icon>
              <v-avatar>
                <g-image :src="'./work/' + experience.node.img"/>
              </v-avatar>
            </template>
            <template v-slot:opposite >
              <span>{{getWorkLength(experience.node.date, experience.node.endDate)}}</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline"><g-link style="color: inherit;" class="g-link" :to="experience.node.path">{{experience.node.position}}</g-link></v-card-title>
              <v-card-subtitle><h3>{{experience.node.title}}</h3></v-card-subtitle>
              
              <v-card-text v-html="experience.node.excerpt"></v-card-text>
              <v-card-text>
                <v-chip-group :show-arrows="false">
                  <v-chip
                    v-for="tag in experience.node.tags"
                    :key="tag.id"
                    :to="tag.path"
                  >
                    {{tag.title}}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  :to="experience.node.path"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row v-if="showSeeAllExperience">
      <v-col>
        <v-btn
          text
          href="/experiences"
        >
          See all experience
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<static-query>
query Experience {
  experiences: allExperience (sortBy: "endDate", order: DESC, filter: { fileInfo: {directory: {in: ["work"]}}}) {
    edges {
      node {
        id
        title
        path
        excerpt
        position
        hours
        date
        endDate
        img
        github
        devpost
        tags {
          title
          path
        }
      }
    }
  }
}
</static-query>

<script>
import moment from 'moment';

export default {
  data(){
    return {
      dateString: null,
      workLengthString: null,
      totalHours: null,
      equivalentFulltimeString: null,
      experiences: null, 
      fulltimeString: null,
      numExperiences: 50,
      showSeeAllExperience: true
    } 
  },
  mounted(){
    var allExperiences = this.$static.experiences.edges;

    var totalHours = 0;
    for(var i = 0; i < allExperiences.length; i++){
      var experience = allExperiences[i].node;
      var start = moment(experience.date);
      var end = moment(experience.endDate);

      var weeks = end.diff(start, 'weeks');
      if(experience.hours){
        totalHours += weeks * experience.hours;
      }
    }

    var equivalentFulltimeWeeks = totalHours / 40;

    var equivalentFulltimeMonths = Math.floor(equivalentFulltimeWeeks / 4);
    var equivalentFulltimeYears = Math.floor(equivalentFulltimeWeeks / 52);

    var formatString = "";

    formatString += this.formatDateDiffString(equivalentFulltimeYears, equivalentFulltimeMonths, false);

    this.fulltimeString = formatString;
    this.experiences = allExperiences.slice(0, this.numExperiences);

    if (this.numExperiences >= this.experiences.length){
      this.showSeeAllExperience = false;
    }
    
  },
  methods: {
    getWorkLength(startDate, endDate){
      var start = moment(startDate);
      var end = moment(endDate);
      var workLengthString = this.formatWorkLengthString(start, end);
      return `${start.format("MMM YYYY")} - ${end.format("MMM YYYY")} (${workLengthString})`;
    },
    formatEquivalentFulltimeString(start, end, hours){
      var weeks = end.diff(start, 'weeks');
      var totalHours = weeks * hours;
      var equivalentFulltimeWeeks = totalHours / 40;

      var equivalentFulltimeMonths = Math.floor(equivalentFulltimeWeeks / 4);
      var equivalentFulltimeYears = Math.floor(equivalentFulltimeWeeks / 52);

      var formatString = "";

      formatString += this.formatDateDiffString(equivalentFulltimeYears, equivalentFulltimeMonths);

      return formatString;
    },
    /**
     * @param {moment} start start date
     * @param {moment} end end date
     * @returns {string}
     */
    formatWorkLengthString(start, end){ // using a moment js object
     
      var a = end;
      var b = start;
      
      var months = a.diff(b, 'months');
      var years = a.diff(b, 'years');

      var formatString = "";

      formatString += this.formatDateDiffString(years, months, true);

      return formatString;
    },
    /**
     * @param {number} years Number of years
     * @param {number} months Number of months
     * @returns {string}
     */
    formatDateDiffString(years, months, abbr){
      var formatString = "";
      if(years > 0){
        if(years > 1){
          if(abbr){
            formatString += years + " yrs";
          } else {
            formatString += years + " years";
          }
        } else if (years == 1){
          if(abbr){
            formatString += years + " yr";
          } else {
            formatString += years + " year";
          }
        }
        formatString += " ";
      }
      
      var remainderMonths = (months % 12) + 1;

      if(remainderMonths > 0){
        if(remainderMonths > 1){
          if(abbr){
            formatString += remainderMonths + " mos";
          } else {
            formatString += remainderMonths + " months";
          }
        } else if(remainderMonths == 1){
          if(abbr){
            formatString += remainderMonths + " mo";
          } else {
            formatString += remainderMonths + " month";
          }
        }
      }

      return formatString
    }
  }
}
</script>

<style>
.light-black {
  color: rgba(0,0,0,.6)
}
</style>