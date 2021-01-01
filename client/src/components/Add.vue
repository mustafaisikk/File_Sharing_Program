<script type="text/javascript">
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  data(){
    return{
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  }
}
</script>
<template>
  <div class="">
    <form>
      <input type="text" placeholder="Enter Title">
      <vue-dropzone id='dropzone' ref='dropzone' :options='dropzoneOptions'/>
      <button>Add File</button>
    </form>
  </div>
</template>
<style src="../../static/add.css">
</style>
