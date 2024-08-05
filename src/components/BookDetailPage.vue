<template>
    <div class="book-detail-page">
      <header>
        <div class="header-top">
          <img src="@/assets/back-icon.png" alt="Back Icon" class="back-icon">
          <h1>도서 정보</h1>
          <div></div> <!-- 오른쪽 여백을 위한 빈 div -->
        </div>
        <div class="category">
          독립출판물 &gt; 에세이 &gt; 우리는 여전히
        </div>
      </header>
  
      <div class="book-cover">
        <img :src="book.coverImage" alt="Book Cover" />
      </div>
      <HeartButton :likes="book.likes" :userLiked="book.userLiked" @like="incrementLikes" @unlike="decrementLikes" />
      <div class="book-info">
        <h2 class="book-title">{{ book.title }}</h2>
        <h3 class="book-author">{{ book.author }}</h3>
        <p class="book-description">{{ book.description }}</p>
      </div>
  
      <div class="review-sorting">
        <button :class="{ active: currentSort === 'latest' }" @click="setSort('latest')">최신순</button>
        <button :class="{ active: currentSort === 'recommended' }" @click="setSort('recommended')">추천순</button>
      </div>
  
      <div class="reviews" v-if="reviews.length > 0">
        <ReviewCard v-for="(review, index) in sortedReviews" :key="index" :review="review" />
      </div>
      <div v-else class="no-reviews">
        <p>작성된 서평이 없습니다.</p>
      </div>
  
      <button class="load-more" @click="loadMoreReviews">더보기</button>
  
      <WriteReview v-if="reviews.length > 0" :empty="false" />
      <WriteReview v-else :empty="true" />
  
      <NavBar />
    </div>
  </template>
  
  <script>
  import NavBar from './components-library/NavBar.vue';
  import HeartButton from './components-library/FeedHeart.vue';
  import ReviewCard from './components-library/ReviewCard.vue';
  import WriteReview from './components-library/WriteReview.vue';
  
  export default {
    name: 'BookDetailPage',
    components: {
      NavBar,
      HeartButton,
      ReviewCard,
      WriteReview
    },
    data() {
      return {
        book: {
          title: '어쩌다 우리가 만나서 어쩌다 이런 사랑을 하고',
          author: '곽다영',
          description: '한 사람에 대한 이야기를 기록하기 시작했다. 사랑이라 믿었던 것을 스스로 고만두고, 또다시 찾고, 배신 당하고, 다시 찾고, 또다시 배신당하고, 또다시 찾는 이가 있다. 이것을 사랑이라 불러도 될까.',
          coverImage: '@/assets/book-cover.png',
          likes: 1,
          userLiked: false
        },
        currentSort: 'latest',
        reviews: [
          { title: '제목이 들어갑니다', content: '서평이 들어가는 영역입니다.', author: '김현경', date: 'YYYY.MM.DD' },
          // 추가적인 리뷰 데이터를 여기에 넣으세요.
        ]
      };
    },
    computed: {
      sortedReviews() {
        return this.reviews.slice().sort((a, b) => {
          if (this.currentSort === 'latest') {
            return new Date(b.date) - new Date(a.date);
          } else if (this.currentSort === 'recommended') {
            return b.likes - a.likes;
          }
          return 0;
        });
      }
    },
    methods: {
      incrementLikes() {
        this.book.likes += 1;
        this.book.userLiked = true;
      },
      decrementLikes() {
        this.book.likes -= 1;
        this.book.userLiked = false;
      },
      setSort(sort) {
        this.currentSort = sort;
      },
      loadMoreReviews() {
        // 더 많은 리뷰를 불러오는 로직을 여기에 작성하세요.
      }
    }
  };
  </script>
  
  <style scoped>
  .book-detail-page {
    font-family: 'NanumSquare', sans-serif;
    color: var(--text-secondary);
    background-color: var(--background-primary);
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
  
  .category {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-top: 10px;
  }
  
  .book-cover {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .book-cover img {
    max-width: 100%;
    border-radius: 10px;
  }
  
  .heart-button {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  
  .book-info {
    text-align: center;
    padding: 0 20px;
  }
  
  .book-title {
    font-size: 18px;
    color: var(--text-secondary);
  }
  
  .book-author {
    font-size: 16px;
    color: var(--text-secondary);
  }
  
  .book-description {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-top: 10px;
  }
  
  .review-sorting {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .review-sorting button {
    flex: 1;
    padding: 10px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    font-family: 'NanumSquare', sans-serif;
  }
  
  .review-sorting button.active {
    color: var(--text-secondary);
    border-bottom: 2px solid var(--text-secondary);
  }
  
  .reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  
  .no-reviews {
    text-align: center;
    color: var(--text-primary);
    margin-top: 20px;
  }
  
  .load-more {
    background-color: var(--button-fifth);
    color: var(--text-secondary);
    border: 1px solid var(--border-primary);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    display: block;
    margin: 20px auto;
  }
  
  .NavBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  </style>
  