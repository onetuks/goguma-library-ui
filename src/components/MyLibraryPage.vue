<template>
    <div class="my-library-page">
      <header>
        <img src="@/assets/back-icon.png" alt="Back Icon" class="back-icon" @click="goBack" />
        <h1>나의 서재</h1>
      </header>
  
      <div class="statistics-section">
        <img src="@/assets/statistics-graph.png" alt="Statistics Graph" class="statistics-graph" />
      </div>
  
      <section class="section">
        <div class="section-header">
          <img src="@/assets/clover-icon.png" alt="Clover Icon" class="clover-icon" />
          <h2>작성한 서평</h2>
          <img src="@/assets/clover-icon.png" alt="Clover Icon" class="clover-icon" />
        </div>
        <div class="reviews">
          <SearchResultItem v-for="(review, index) in reviews" :key="index" :book="review" />
        </div>
        <button class="more-button">더보기</button>
      </section>
  
      <section class="section">
        <div class="section-header">
          <img src="@/assets/clover-icon.png" alt="Clover Icon" class="clover-icon" />
          <h2>북 Pick</h2>
          <img src="@/assets/clover-icon.png" alt="Clover Icon" class="clover-icon" />
        </div>
        <div class="favorable-books">
          <FavorableBook v-for="(book, index) in favorableBooks" :key="index" :book="book" />
        </div>
        <button class="more-button">더보기</button>
      </section>
  
      <section class="section">
        <div class="section-header">
          <img src="@/assets/clover-icon.png" alt="Clover Icon" class="clover-icon" />
          <h2>서평 Pick</h2>
          <img src="@/assets/clover-icon.png" alt="Clover Icon" class="clover-icon" />
        </div>
        <div class="reviews">
          <SearchResultItem v-for="(review, index) in pickedReviews" :key="index" :book="review" />
        </div>
        <button class="more-button">더보기</button>
      </section>
  
      <NavBar />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import NavBar from './components-library/NavBar.vue';
  import SearchResultItem from './components-library/SearchResultItem.vue';
  import FavorableBook from './components-library/FavorableBook.vue';
  
  export default {
    name: 'MyLibraryPage',
    components: {
      NavBar,
      SearchResultItem,
      FavorableBook
    },
    setup() {
      const reviews = ref([
        { title: '책 제목 1', author: '김현경', coverImage: '@/assets/book-cover1.png' },
        { title: '책 제목 2', author: '이인규', coverImage: '@/assets/book-cover2.png' },
        { title: '책 제목 3', author: '이공이', coverImage: '@/assets/book-cover3.png' }
      ]);
  
      const favorableBooks = ref([
        { title: '책 제목 4', author: '작가 4', coverImage: '@/assets/book-cover4.png' },
        { title: '책 제목 5', author: '작가 5', coverImage: '@/assets/book-cover5.png' },
        { title: '책 제목 6', author: '작가 6', coverImage: '@/assets/book-cover6.png' }
      ]);
  
      const pickedReviews = ref([
        { title: '책 제목 7', author: '작가 7', coverImage: '@/assets/book-cover7.png' },
        { title: '책 제목 8', author: '작가 8', coverImage: '@/assets/book-cover8.png' },
        { title: '책 제목 9', author: '작가 9', coverImage: '@/assets/book-cover9.png' }
      ]);
  
      const goBack = () => {
        window.history.back();
      };
  
      return {
        reviews,
        favorableBooks,
        pickedReviews,
        goBack
      };
    }
  };
  </script>
  
  <style scoped>
  .my-library-page {
    font-family: 'NanumSquare', sans-serif;
    color: #000000;
    background-color: var(--background-primary);
    max-width: 390px;
    margin: 0 auto;
    padding-bottom: 60px; /* NavBar 공간 확보 */
    overflow-y: auto;
    height: 100vh;
  }
  
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    height: 50px;
    background-color: var(--background-primary);
    position: relative;
  }
  
  .back-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    left: 20px;
  }
  
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .statistics-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 390px;
  }
  
  .statistics-graph {
    width: 390px;
    height: 390px;
  }
  
  .section {
    margin-bottom: 20px;
  }
  
  .section-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    background-color: var(--background-primary);
  }
  
  .clover-icon {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: var(--text-tertiary);
  }
  
  .reviews, .favorable-books {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    margin: 0 auto;
  }
  
  .more-button {
    width: 360px;
    height: 40px;
    padding: 10px;
    background-color: var(--button-fifth);
    color: #000000;
    border: 1px solid var(--border-primary);
    border-radius: 5px;
    cursor: pointer;
    font-family: 'NanumSquare', sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
  }
  </style>
  