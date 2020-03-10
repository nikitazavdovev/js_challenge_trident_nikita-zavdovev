<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <button class="pagination__link"
                v-if="hasPrev()"
                @click="changePage(prevPage)">
          <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Arrow Left</title>
            <polygon id="Left-Icon" stroke="none" fill-rule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
          </svg>
        </button>
      </li>
      <li class="pagination__item" v-if="hasFirst()">
        <button class="pagination__link"
                @click="changePage(1)">
          1
        </button>
      </li>
      <li class="pagination__item" v-if="hasFirst() && this.rangeStart > 2">
        <span class="pagination__link">...</span>
      </li>
      <li class="pagination__item" v-for="page in pages" :key="page">
        <button class="pagination__link"
                :class="{'current': currentPage === page}"
                :disabled="currentPage === page"
                @click="changePage(page)">
          {{page}}
        </button>
      </li>
      <li class="pagination__item" v-if="hasLast()">
        <span class="pagination__link">...</span>
      </li>
      <li class="pagination__item" v-if="hasLast()">
        <button class="pagination__link"
                @click="changePage(totalPages)">
          {{totalPages}}
        </button>
      </li>
      <li class="pagination__item">
        <button class="pagination__link"
                v-if="hasNext()"
                @click="changePage(nextPage)">
          <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Arrow Right</title>
            <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
      perPage: {
        type: Number,
        default: 6,
      },
      totalProducts: {
        type: Number,
        default: 0,
      },
      pageRange: {
        type: Number,
        default: 1,
      }
    },
    computed: {
      pages() {
        let pages = [];

        for(let i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i);
        }

        return pages;
      },
      rangeStart() {
        const start = this.currentPage - this.pageRange;

        return (start > 0) ? start : 1;
      },
      rangeEnd() {
        const end = this.currentPage + this.pageRange;

        return (end < this.totalPages) ? end : this.totalPages;
      },
      totalPages() {
        return Math.ceil(this.totalProducts/this.perPage);
      },
      nextPage() {
        return this.currentPage + 1;
      },
      prevPage() {
        return this.currentPage - 1;
      }
    },
    methods: {
      hasFirst() {
        return this.rangeStart !== 1
      },
      hasLast() {
        return this.rangeEnd < this.totalPages;
      },
      changePage(page) {
        this.$emit('changePage', page)
      },
      hasPrev() {
        return this.currentPage > 1;
      },
      hasNext() {
        return this.currentPage < this.totalPages;
      }
    }
  }
</script>

<style scoped lang="scss">
  .pagination {
    height: 45px;
    margin: 30px auto;
    text-align: center;
    &__list {
      height: 100%;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
    }
    &__item {
      width: 30px;
      height: 30px;
      font-family: 'Lato-Bold', sans-serif;
      font-size: 13px;
      letter-spacing: 1.39px;
      text-align: center;

      @media (min-width: 576px) {
        width: 45px;
        height: 45px;
      }
    }
    &__link {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      cursor: pointer;
      color: #444A59;
      &.current {
        border-radius: 50%;
        border: 2px solid #444A59;
      }
      &:hover {
        text-decoration: underline;
      }
      .icon {
        width: 8px;
        fill: #444A59;
      }
    }
  }
</style>