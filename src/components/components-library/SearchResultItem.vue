<template>
  <div class="search-result-item">
    <img :src="book.coverImage" alt="Book Cover" class="book-cover" />
    <div class="book-info">
      <h2 class="book-title">{{ book.title }}</h2>
      <p class="book-author">{{ book.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    book: Object
  }
};
</script>

<style scoped>
.search-result-item {
  display: flex;
  align-items: center;
  width: 360px;
  height: 145px;
  padding: 10px;
  background-color: var(--surface-primary);
  border-radius: 5px;
  margin-bottom: 10px;
}

.book-cover {
  width: 70px;
  height: 105px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}

.book-info {
  flex: 1;
}

.book-title {
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
  color: var(--text-tertiary);
  margin: 0;
  font-size: 16px;
}

.book-author {
  font-family: 'NanumSquare', sans-serif;
  color: var(--text-tertiary);
  margin: 5px 0 0;
  font-size: 14px;
}
</style>
