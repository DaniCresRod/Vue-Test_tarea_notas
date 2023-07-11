<script setup>
import { ref } from 'vue'
import TablaResultados from '../components/TablaResultados.vue';

const arrayOfStudents=ref([]);

function AddStudent(){
  console.log(":"+document.getElementById("input_Name").value);
  let theName=document.getElementById("input_Name").value;
  let theSubject=document.getElementById("input_Subject").value;
  let theMark=document.getElementById("input_Mark").value;

  (arrayOfStudents.value).push({name:theName, subject:theSubject, mark:theMark});
  document.getElementById("input_Name").value="";
  document.getElementById("input_Subject").value="";
  document.getElementById("input_Mark").value="";
}




</script>

<template>
  <header>
    <p>Introducir datos:</p>
    <div>
      <label for="input_Name">Name</label>
      <input type="text" id="input_Name">
      <label for="input_Subject">Subject</label>
      <input type="text" id="input_Subject">
      <label for="input_Mark">Mark</label>
      <input type="number" id="input_Mark">
      <button @click="AddStudent()">Add</button>
    </div>

  </header>

  <main class="myClass">
    <TablaResultados :arrayOfPeople="arrayOfStudents"/>
  </main>
</template>

<style scoped>

main{
  border: 1px solid blue;
  display: block;
  height: 60vh;
}

</style>
