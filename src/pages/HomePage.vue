<template>
  <div class="home">
   <PageTitle>Photos</PageTitle>
   <PhotosCatalog></PhotosCatalog>
  </div>
</template>

<script>
import PageTitle from '@/components/layout/PageTitle.vue';
import PhotosCatalog from '@/components/features/PhotosCatalog.vue';
export default {
  name: 'HomePage',
  components: {
    PageTitle,PhotosCatalog
  }
}
</script>
