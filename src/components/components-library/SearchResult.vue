<template>
  <div>
    <input v-model="searchQuery" placeholder="도서명을 입력하세요" @input="searchBooks" />
    <button @click="searchBooks">검색</button>
    <div v-if="searchResults.length">
      <h3>검색 결과:</h3>
      <ul>
        <li v-for="(book, index) in searchResults" :key="index">
          <SearchResultItem :book="book" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="no-results">검색 결과가 없습니다.</p>
    </div>
 </div>
</template>

<script>
import SearchResultItem from './SearchResultItem.vue';

export default {
  name: 'BookSearch',
  components: {
    SearchResultItem
  },
  data() {
    return {
      searchQuery: '',
      books: [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverImage: '@/assets/picture_test.png' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', coverImage: '@/assets/picture_test.png' },
        { title: '1984', author: 'George Orwell', coverImage: '@/assets/picture_test.png' },
        { title: 'Pride and Prejudice', author: 'Jane Austen', coverImage: '@/assets/picture_test.png' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverImage: '@/assets/picture_test.png' }
        // 추가적인 도서 데이터를 여기에 넣으세요.
      ],
      searchResults: []
    }
  },
  methods: {
    searchBooks() {
      this.searchResults = this.books.filter(book => {
        return book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>
input {
  padding: 10px;
  font-size: 16px;
  margin-right: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.no-results {
  font-family: 'NanumSquare', sans-serif;
  color: var(--text-tertiary);
}
</style>
