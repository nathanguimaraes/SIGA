<template>
    <div>
        <div class="imagePreviewWrapper"></div>
        <input type="file" ref="fileInput" @input="pickFile">
    </div>
</template>

<script>
export default {
    data(){
        
    },
    methods: {
        pickFile () {

        }
    }
}


</script>

<style scoped>

.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

</style>
