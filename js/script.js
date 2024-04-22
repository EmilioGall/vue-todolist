const { createApp } = Vue;

createApp({

   data() {

      return {

         tasks: [
            {
               text: "Recruiting blog post",
               toggleDone: true,
            },
            {
               text: "Mobile App launch",
               toggleDone: true,
            },
            {
               text: "Interview John H.",
               toggleDone: false,
            },
            {
               text: "Summit updateto mobile storefronts",
               toggleDone: true,
            },
         ]

      };

   },

   created() {

      //

   },

   methods: {

      //

   },

}).mount("#app");