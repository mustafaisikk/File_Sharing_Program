<template>
  <div>
    <div class="add-new">
      <router-link :to="{ name: 'add'}" tag="button">Add New File</router-link>
    </div>
    <section class="files">
      <div class="file">
        <p>title</p>
        <p>Dosya Uzantısı</p>
        <button>Detay</button>
      </div>
    </section>
  </div>
</template>
<style src="../../static/files.css"></style>
