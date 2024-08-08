<template>
    <div class="book-review-page">
      <header>
        <img src="@/assets/back-icon.png" alt="Back Icon" class="back-icon" @click="goBack" />
        <h1>작성</h1>
      </header>
  
      <div class="book-cover-section">
        <div class="book-cover-gradient">
          <img src="@/assets/book-cover.png" alt="Book Cover" class="book-cover" />
        </div>
      </div>
  
      <div class="category-section">
        독립출판물 > 시집 > 엄마방 아빠방
      </div>
  
      <div class="review-form">
        <div class="form-group">
          <label for="review-title" class="bold-label">서평 제목</label>
          <input id="review-title" v-model="reviewTitle" placeholder="제목 작성시 25자 이하로 작성해주세요" maxlength="25" />
        </div>
        <div class="form-group">
          <label for="review-content" class="bold-label">서평 내용</label>
          <textarea id="review-content" v-model="reviewContent" placeholder="본문 작성시 1000자 이하로 작성해주세요" maxlength="1000"></textarea>
        </div>
        <button @click="submitReview">등록하기</button>
      </div>
  
      <NavBar />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import NavBar from './components-library/NavBar.vue';
  
  export default {
    name: 'BookReviewPage',
    components: {
      NavBar
    },
    setup() {
      const reviewTitle = ref('');
      const reviewContent = ref('');
  
      const goBack = () => {
        window.history.back();
      };
  
      const submitReview = () => {
        // Submit review logic
        console.log('Review Submitted:', reviewTitle.value, reviewContent.value);
      };
  
      // 그라데이션 효과를 위해 주로 사용되는 색상을 추출하는 로직 (예시)
      onMounted(() => {
        // book-cover.png 이미지에서 주로 사용되는 색상을 추출하는 로직을 추가하세요.
      });
  
      return {
        reviewTitle,
        reviewContent,
        goBack,
        submitReview
      };
    }
  };
  </script>
  
  <style scoped>
  .book-review-page {
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
    height: 44px;
    background-color: var(--border-primary);
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
  
  .book-cover-section {
    width: 100%;
    height: 390px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .book-cover-gradient {
    width: 100%;
    height: 390px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
  }
  
  .book-cover {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
  
  .category-section {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--border-primary);
    color: #000000;
  }
  
  .review-form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 360px;
  }
  
  .bold-label {
    font-weight: bold;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #000000;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-primary);
    border-radius: 5px;
    font-family: 'NanumSquare', sans-serif;
    font-size: 14px;
    color: #000000;
  }
  
  input {
    height: 72px;
  }
  
  textarea {
    height: 752px;
    resize: none;
  }
  
  button {
    width: 330px;
    height: 50px;
    padding: 15px;
    background-color: var(--button-fifth);
    color: #000000;
    border: 1px solid var(--border-primary);
    border-radius: 5px;
    cursor: pointer;
    font-family: 'NanumSquare', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  