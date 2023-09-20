<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione commodi ab sunt accusantium voluptatem culpa sint repellat temporibus quasi dolor, ducimus, exercitationem aliquid incidunt aspernatur maiores numquam expedita laboriosam deserunt.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione commodi ab sunt accusantium voluptatem culpa sint repellat temporibus quasi dolor, ducimus, exercitationem aliquid incidunt aspernatur maiores numquam expedita laboriosam deserunt.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/hello?name=mario', {
        method: 'post',
        body: {age:30}
    })
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>