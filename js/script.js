const { createApp } = Vue;

createApp({

   data() {

      return {

         newTask: "",

         errorMessage: false,

         tasks: [
            {
               text: "Recruiting blog post",
               stateDone: true,
            },
            {
               text: "Mobile App launch",
               stateDone: true,
            },
            {
               text: "Interview John H.",
               stateDone: false,
            },
            {
               text: "Summit updateto mobile storefronts",
               stateDone: true,
            },
         ],

      };

   },

   created() {

      //

   },

   methods: {

      addTask: function(){

         // this.newTask = this.newTask.trim()

         if (this.newTask === "") {

            this.errorMessage = true;

         }
         else {

            const newTaskObj = {

               text: this.newTask,
               stateDone: false,
            };

            this.tasks.push(newTaskObj);

            this.newTask = "";
            this.errorMessage = false;

         };

      },

      toggleDone: function(clickedIndex){

         this.tasks[clickedIndex].stateDone = !this.tasks[clickedIndex].stateDone

      },

   },

}).mount("#app");