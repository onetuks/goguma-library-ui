<template>
  <div id="app">
    <h1>서점 웹사이트</h1>

    <SubscriptionButton :initialSubscriptionStatus="false" />
    
    <BookCoverUploader/>

    <HeartButton 
      :initialLikes="totalLikes"
      :userLiked="userLiked"
      @like="incrementLikes"
      @unlike="decrementLikes"
    />

    <BookSearch/>

    <FeedCard
      username="John Doe"
      title="Lorem Ipsum"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      date="2024-07-08"
      :initialLikes="5"
    />

    <RecommendedBook bookTitle="추천 도서 제목"/>

    <LibrarySort @sort="sortBooks" />

    <FavorableBook/>

    <ReviewPreview/>

    <WriteReview/>

    <ListTopbar/>
      <!-- todo : 서평 리스트 <BookList @selectBook="book => selectedBook = book"/> --> 
      <!-- todo: 서평 pick <BookDetail :book="selectedBook"/> -->

    <CalendarView/>

    <!-- 메인 페이지의 다른 내용들 -->

    <NavBar/>
  </div>
</template>

<script>

import SubscriptionButton from './components/components-library/SubscriptionButton.vue';
import BookCoverUploader from './components/components-library/BookcoverUploader.vue';
import HeartButton from './components/components-library/FeedHeart.vue';
import BookSearch from './components/components-library/SearchResult.vue';
import FeedCard from './components/components-library/FeedCard.vue';
import NavBar from './components/components-library/NavBar.vue';
import CalendarView from './components/components-library/CalendarView.vue';
// import WriteReview from './components/components-library/WriteReview.vue';
import ReviewPreview from './components/components-library/ReviewPreview.vue';
import FavorableBook from './components/components-library/FavorableBook.vue';
import ListTopbar from './components/components-library/ListTopbar.vue';
// import BookList from './components/components-library/BookList.vue';
// import BookDetail from './components/components-library/BookDetail.vue';
import RecommendedBook from './components/components-library/RecommendedBook.vue';
import LibrarySort from './components/components-library/LibrarySort.vue';







export default {
  name: 'App',
  components: {
    SubscriptionButton,
    BookCoverUploader,
    HeartButton,
    BookSearch,
    FeedCard,
    NavBar,
    CalendarView,
    // WriteReview,
    ReviewPreview,
    FavorableBook,
    // BookList,
    // BookDetail,
    ListTopbar,
    RecommendedBook,
    LibrarySort,
  },
  data() {
    return {
      userLiked: false,
      otherUserLikes: 0,
      selectedBook: null,
      sortOption: 'latest',
      books: [
        { id: 1, title: '책 제목 1', author: '저자 1', date: '2019-08-12', recommendations: 5 },
        { id: 2, title: '책 제목 2', author: '저자 2', date: '2019-08-11', recommendations: 10 },
        { id: 3, title: '책 제목 3', author: '저자 3', date: '2020-07-25', recommendations: 8 }
      ],
    }
  },
  computed: {
    totalLikes() {
      return this.otherUserLikes;
    },
    sortedBooks() {
      return this.books.slice().sort((a, b) => {
        if (this.sortOption === 'latest') {
          return new Date(b.date) - new Date(a.date);
        } else if (this.sortOption === 'recommendation') {
          return b.recommendations - a.recommendations;
        }
        return 0;
      });
    }
  },
  methods: {
    incrementLikes() {
      this.otherUserLikes += 1;
    },
    decrementLikes() {
      this.otherUserLikes -= 1;
    },
    sortBooks(option) {
      this.sortOption = option;
    }
  }
};
</script>

<style>

@import './styles/colors.css'; /* 색상 변수 정의 CSS 파일 */

body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: var(--background-primary);
  color: var(--text-primary);
}

header {
  background-color: var(--surface-primary);
  padding: 20px;
  border-bottom: 1px solid var(--border-primary);
  margin-bottom: 20px;
}

h1 {
  color: var(--text-secondary);
}

:root {
  --ivory-100: #756357;
  --ivory-200: #99897D;
  --ivory-300: #B0A797;
  --ivory-400: #CEC7B7;
  --ivory-500: #E1DDCB;
  --ivory-600: #E8E6D5;
  --ivory-700: #E9E8DF;
  --ivory-800: #F4F3EC;
  --ivory-900: #FEFDF6;

  --gray-100: #282828;
  --gray-200: #3C3C3C;
  --gray-300: #505050;
  --gray-400: #646464;
  --gray-500: #787878;
  --gray-600: #8C8C8C;
  --gray-700: #A0A0A0;
  --gray-800: #B4B4B4;
  --gray-900: #C8C8C8;
  --gray-1000: #DCDCDC;

  --red-brown-100: #2A0A0A;
  --red-brown-200: #341414;
  --red-brown-300: #481C15;
  --red-brown-400: #5C3029;
  --red-brown-500: #6A3E37;
  --red-brown-600: #7E524B;
  --red-brown-700: #92665F;
  --red-brown-800: #A67A73;
  --red-brown-900: #BA8E87;
  --red-brown-1000: #CEA29B;

  --green-100: #001F0E;
  --green-200: #092918;
  --green-300: #153524;
  --green-400: #1D4831;
  --green-500: #1F5B3A;
  --green-600: #216B43;
  --green-700: #267B4D;
  --green-800: #218850;
  --green-900: #229958;
  --green-1000: #36AD6C;

  --black: #000000;
  --white: #FFFFFF;

  /* 사용자 지정 색상 정의 */
  --surface-fourth: var(--ivory-700);
  --button-fifth: var(--white);
}

</style>
