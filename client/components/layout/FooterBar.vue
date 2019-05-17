<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p><span class="icon"><i class="fa fa-code"></i></span> com <span class="icon"><i class="fa fa-heart"></i></span> por <a href="https://github.com/andersonprante">Anderson Prante</a>. Licença <a :href="'https://github.com/' + repository + '/blob/master/LICENSE'">{{ license }}</a>.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {
  margin-left: 180px;
  
  @include mobile() {
    margin-left: 0;
  }
  
  .fa.fa-heart {
    color: red;
  }
}
</style>
