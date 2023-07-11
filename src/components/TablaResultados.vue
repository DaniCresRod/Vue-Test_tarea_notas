<script setup>
let props=defineProps({
    arrayOfPeople:{
        type: Array,
        default: ()=> [{name: "Pepito", subject: "plastica", mark: 5}, {name: "Martita", subject: "plastica", mark: 7}],
    }
});

</script>

<template>
    <div>
        <table id="myTable">
            <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Mark</th>
            </tr>
            <tr v-for="(num, index) in props.arrayOfPeople.length" :key="num">
                <td>{{ arrayOfPeople[index].name }}</td>
                <td>{{ arrayOfPeople[index].subject }}</td>
                <td>{{ arrayOfPeople[index].mark }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
#myTable{
    border:1px solid black;
}


</style>