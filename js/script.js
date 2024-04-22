const { createApp } = Vue;

createApp({

   data() {

      return {

         newTask: "",

         errorMessage: false,

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
         ],

      };

   },

   created() {

      //

   },

   methods: {

      addTask: function(){

         this.newTask = this.newTask.trim()

         if (this.newTask === "") {

            this.errorMessage = true;

         }
         else {

            const newTaskObj = {

               text: this.newTask,
               toggleDone: false,
            };

            this.tasks.push(newTaskObj);

            this.newTask = "";
            this.errorMessage = false;

         };

      },
   },

}).mount("#app");