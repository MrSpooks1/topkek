<template>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" aria-current="page" href="#">TopKek</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <a class="nav-link" :title="`this link goes to ${link.page} page`" :href="link.url">{{ link.page }}</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
// let currentPage = 'TopKek'
// function pageSelect(index) {
  
// }
export default {
  data() {
    return {
      links: [{page: 'TopKek', url: '#/'},
      {page: 'Search', url: '#/search'}]
    }
  }
}
</script>