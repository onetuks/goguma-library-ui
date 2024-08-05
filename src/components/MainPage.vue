<template>
    <div class="main-page">
      <header>
        <h1>메인화면</h1>
        <div class="search-container">
          <input type="text" placeholder="플레이스홀더" class="search-input" />
          <img src="@/assets/search-icon.png" alt="Search Icon" class="search-icon">
        </div>
      </header>
  
      <section class="weekly-recommendation">
        <h2 class="section-title">
          <img src="@/assets/Clover.png" alt="Clover" class="clover-icon" />
          금주추천
          <img src="@/assets/Clover.png" alt="Clover" class="clover-icon" />
        </h2>
        <p class="description">이번주 추천 도서로 서평을 작성하면 n/a 포인트를 더 받을 수 있어요</p>
        <div class="recommended-books">
          <RecommendedBook v-for="(book, index) in recommendedBooks" :key="index" :bookImage="book.image" :bookTitle="book.title" />
        </div>
        <div class="book-description">
          <h3>{{ bookTitle }}</h3>
          <p>{{ bookDescription }}</p>
        </div>
      </section>
  
      <section class="additional-info">
        <div class="info-item">
          <img src="@/assets/Daily_Check.png" alt="출석체크" />
          <p>출석체크</p>
        </div>
        <div class="info-item">
          <img src="@/assets/Independent_Book.png" alt="독립출판이란?" />
          <p>독립출판이란?</p>
        </div>
        <div class="info-item">
          <img src="@/assets/All_Map.png" alt="전국 책방지도" />
          <p>전국 책방지도</p>
        </div>
      </section>
  
      <section class="review-section">
        <h2>추천 서평</h2>
        <!-- todo: 서평 목록 컴포넌트를 여기에 추가 -->
      </section>
  
      <section class="interest-recommendation">
        <h2>관심추천</h2>
        <!-- todo: 관심 추천 도서 목록 컴포넌트를 여기에 추가 -->
      </section>
  
      <NavBar />
    </div>
  </template>
  
  <script>
  import NavBar from './components/components-library/NavBar.vue';
  import RecommendedBook from './components/components-library/RecommendedBook.vue';
  
  export default {
    name: 'MainPage',
    components: {
      NavBar,
      RecommendedBook
    },
    data() {
      return {
        recommendedBooks: [
          { image: '@/assets/book1.png', title: '책 제목 1' },
          { image: '@/assets/book2.png', title: '책 제목 2' },
          { image: '@/assets/book3.png', title: '책 제목 3' }
        ],
        bookTitle: '책 제목',
        bookDescription: '책 소개 텍스트가 여기에 들어갑니다. 책 소개 텍스트가 여기에 들어갑니다.'
      };
    }
  };
  </script>
  
  <style scoped>
  .main-page {
    font-family: 'NanumSquare', sans-serif;
    color: var(--text-secondary);
    background-color: var(--surface-secondary);
    max-width: 390px;
    margin: 0 auto;
    overflow-y: auto; /* 스크롤 가능하도록 설정 */
    height: 100vh; /* 전체 높이 설정 */
  }
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .search-container {
    position: relative;
    width: 100%;
    max-width: 360px;
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-tertiary);
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
  
  .weekly-recommendation {
    text-align: center;
    padding: 20px;
    background-color: var(--surface-secondary);
    border: 1px solid var(--border-tertiary);
    border-radius: 15px;
    margin: 20px 0;
  }
  
  .section-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .clover-icon {
    width: 20px;
    height: 20px;
  }
  
  .description {
    margin-top: 10px;
  }
  
  .recommended-books {
    display: flex;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
    margin-top: 20px;
    width: 100%;
    height: 318px;
  }
  
  .recommended-books > div {
    flex: 0 0 120px; /* 각 책의 너비를 조절 */
  }
  
  .book-description {
    margin-top: 20px;
    text-align: center;
  }
  
  .additional-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  
  .info-item {
    text-align: center;
  }
  
  .info-item img {
    width: 112px;
    height: 160px;
    margin-bottom: 10px;
  }
  
  .review-section, .interest-recommendation {
    padding: 20px;
    text-align: center;
    margin: 20px 0;
    background-color: var(--surface-secondary);
    border: 1px solid var(--border-tertiary);
    border-radius: 15px;
  }
  
  .NavBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  </style>
  