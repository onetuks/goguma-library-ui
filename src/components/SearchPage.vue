<template>
  <div class="search-page">
    <header>
      <div class="header-top">
        <img src="@/assets/back-icon.png" alt="Back Icon" class="back-icon">
        <h1>도서 검색</h1>
        <div></div> <!-- 오른쪽 여백을 위한 빈 div -->
      </div>
      <div class="search-container">
        <input type="text" placeholder="플레이스홀더" class="search-input" v-model="query" @input="searchBooks" />
        <img src="@/assets/search-icon.png" alt="Search Icon" class="search-icon">
      </div>
    </header>

    <div class="search-results">
      <SearchResultItem v-for="(book, index) in filteredBooks" :key="index" :book="book" />
    </div>

    <div v-if="filteredBooks.length === 0" class="no-results">
      <p>찾으시는 책이 없으신가요?</p>
      <button class="register-book-button">도서등록하기</button>
    </div>

    <NavBar />
  </div>
</template>

<script>
import NavBar from './components-library/NavBar.vue';
import SearchResultItem from './components-library/SearchResultItem.vue';

export default {
  name: 'SearchPage',
  components: {
    NavBar,
    SearchResultItem
  },
  data() {
    return {
      query: '',
      books: [
        { title: '어쩌다 우리가 만나서 어쩌다 이런 사랑을 하고', author: '김현경', coverImage: '@/assets/book1.png' },
        { title: '안녕, 둔촌주공아파트 vol.2', author: '이인규', coverImage: '@/assets/book2.png' },
        { title: '이제야, 그렇지만 또 이제라도', author: '김예랑', coverImage: '@/assets/book3.png' }
        // 추가적인 도서 데이터를 여기에 넣으세요.
      ]
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.title.includes(this.query));
    }
  },
  methods: {
    searchBooks() {
      // 검색 기능을 구현합니다.
    }
  }
};
</script>

<style scoped>
.search-page {
  font-family: 'NanumSquare', sans-serif;
  color: var(--text-secondary);
  background-color: var(--surface-primary);
  max-width: 390px;
  margin: 0 auto;
  padding-bottom: 60px; /* NavBar 공간 확보 */
  overflow-y: auto;
  height: 100vh;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 360px;
}

.back-icon {
  width: 20px;
  height: 20px;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 360px;
  margin-top: 10px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-primary);
  border-radius: 5px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.search-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.no-results {
  text-align: center;
  color: var(--text-primary);
  margin-top: 20px;
}

.register-book-button {
  background-color: var(--button-fifth);
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.NavBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
