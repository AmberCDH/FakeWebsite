<template>
  <div>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id

//fetch product 
const { data:product } = await useFetch(uri, {key: id})
if(!product.value){
  throw createError({statusCode: 404, statusMessage: 'Product with id - '+ id + ' was not found.', fatal: true})
}
</script>

<style scoped></style>
