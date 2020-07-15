<template>
  <Layout>
    <v-container class="section">

      <v-container fluid>
        <v-row justify="space-between">
          
          <h1 id="title" class="text-4xl font-bold leading-tight">{{ $page.experience.title }}</h1>
      
          <!-- <v-btn
            text
            to="/experiences"  
          >
            <v-icon>mdi-chevron-left</v-icon>
            Experience
          </v-btn>
           -->
        </v-row>
      </v-container>

      <h2 v-if="$page.experience.position" class="text-4xl font-bold leading-tight">{{ $page.experience.position }}</h2>
      <h2 v-if="$page.experience.subtitle" class="text-4xl font-bold leading-tight">{{ $page.experience.subtitle }}</h2>
      <div class="text-xl text-gray-600 mb-4">{{ dateString }}</div>
      <!-- <div class="text-xl text-gray-600 mb-4">{{ dateString }}</div> -->

      <v-chip-group>
        <v-chip
          v-for="tag in $page.experience.tags"
          :key="tag.id"
          :to="tag.path"
        >
          {{tag.title}}
        </v-chip>
      </v-chip-group>
      <v-spacer class="py-3"></v-spacer>
      <!-- <div class="flex mb-8 text-sm">

        <g-link
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div> -->
      <div class="">
        <VueRemarkContent />
      </div>

      <!-- <v-spacer class="py-8"></v-spacer>
      <v-btn
        fab
        icon
        to="/experiences"  
        fixed
        bottom
        left
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->
      
    </v-container>
  
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Experience ($path: String!) {
  experience: experience (path: $path) {
    title
    subtitle
    position
    hours
    date
    endDate
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import moment from 'moment';

export default {
  metaInfo() {
    return {
      title: this.$page.experience.title
    }
  },
  data(){
    return {
      dateString: null,
      workLengthString: null,
      totalHours: null,
      equivalentFulltimeString: null
    } 
  },
  mounted(){
    this.dateString = this.$page.experience.date;

    if(this.$page.experience.endDate){
      
      var start = moment(this.$page.experience.date.toLocaleString());
      var end = moment(this.$page.experience.endDate.toLocaleString());

      this.workLengthString = this.formatWorkLengthString(start, end);
      
      this.equivalentFulltimeString = this.formatEquivalentFulltimeString(start, end, this.$page.experience.hours);  

      this.dateString = `${start.format("MMM YYYY")} - ${end.format("MMM YYYY")} (${this.workLengthString})`;
  
    }

  },
  methods: {
    formatEquivalentFulltimeString(start, end, hours){
      var weeks = end.diff(start, 'weeks');
      var totalHours = weeks * hours;
      var equivalentFulltimeWeeks = totalHours / 40;

      var equivalentFulltimeMonths = Math.floor(equivalentFulltimeWeeks / 4);
      var equivalentFulltimeYears = Math.floor(equivalentFulltimeWeeks / 52);

      var formatString = "~";

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

      var formatString = "~";

      formatString += this.formatDateDiffString(years, months);

      return formatString;
    },
    /**
     * @param {number} years Number of years
     * @param {number} months Number of months
     * @returns {string}
     */
    formatDateDiffString(years, months){
      var formatString = "";
      if(years > 0){
        if(years > 1){
          formatString += years + " yrs";
        } else if (years == 1){
          formatString += years + " yr";
        }
        formatString += " ";
      }
      
      var remainderMonths = months % 12;

      if(remainderMonths > 0){
        if(remainderMonths > 1){
          formatString += months + " mos";
        } else if(remainderMonths == 1){
          formatString += months + " mo";
        }
      }

      return formatString
    }
  }
}
</script>

<style src="../css/github-markdown.css" />
