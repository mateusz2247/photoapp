<template>
 
    <Dialog
      header="Header"
      :closable="false"
      :visible="true"
      :style="{width: '50vw'}"
      :modal="true">
    
      {{ photoId  }}
  
      <template v-slot:footer>
        <Button
          class="p-button-rounded"
          label="Close"
          icon="pi pi-times"
          @click="$router.push('/')"
          autofocus />
      </template>
    </Dialog>
  </template>
  
  <script>
  import Dialog from 'primevue/dialog'
  import Button from 'primevue/button'
  
  // fix version inconsistence
  Dialog.methods.removeStylesFromMask = () => {}
  
  export default {
    name: 'SinglePhoto',
    computed: {
      photoId () {
        return this.$route.params.photoId
      }
    },
    components: { Dialog, Button }
  }
  </script>
  
  <style lang="scss" scoped>
  .p-dialog-mask {
    pointer-events: auto;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
  }
  </style>