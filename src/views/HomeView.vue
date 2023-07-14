<script setup>
import { ref } from 'vue'
import TablaResultados from '../components/TablaResultados.vue';

const arrayOfStudents=ref([]);

const studentName=ref();
const studentSubject=ref();
const studentMark=ref();

function AddStudent(){
  // let theName=document.getElementById("input_Name").value;
  // let theSubject=document.getElementById("input_Subject").value;
  // let theMark=document.getElementById("input_Mark").value;

  if(studentMark.value>=9 && studentMark.value<=10){
    studentMark.value="Sobresaliente";
  }
  else if(studentMark.value>=7 && studentMark.value<9){
    studentMark.value="Notable";
  }
  else if(studentMark.value>=6 && studentMark.value<7){
    studentMark.value="Bien";
  }
  else if(studentMark.value>=5 && studentMark.value<6){
    studentMark.value="Aprobado";
  }
  else if(studentMark.value>=3 && studentMark.value<5){
    studentMark.value="Insuficiente";
  }
  else if(studentMark.value>=0 && studentMark.value<3){
    studentMark.value="Muy deficiente";
  }
  else{
    return null;
  }

  (arrayOfStudents.value).push({name:studentName.value, subject:studentSubject.value, mark:studentMark.value});
  
  // document.getElementById("input_Name").value="";
  // document.getElementById("input_Subject").value="";
  // document.getElementById("input_Mark").value="";

  studentName.value="";
  studentSubject.value="";
  studentMark.value="";
}

</script>

<template>
  <header>
    <p>Introducir datos:</p>
    <div>
      <label for="input_Name">Name</label>
      <input type="text" id="input_Name" v-model="studentName">
      <label for="input_Subject">Subject</label>
      <input type="text" id="input_Subject" v-model="studentSubject">
      <label for="input_Mark">Mark</label>
      <input type="text" id="input_Mark" v-model="studentMark">
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
