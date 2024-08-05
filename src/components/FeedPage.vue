<template>
  <div class="feed-page">
    <header>
      <h1>피드</h1>
      <nav class="tabs">
        <button :class="{ active: currentTab === 'latest' }" @click="setTab('latest')">최신 서평</button>
        <button :class="{ active: currentTab === 'best' }" @click="setTab('best')">베스트 서평</button>
      </nav>
    </header>

    <div class="feed-cards">
      <FeedCard v-for="(feed, index) in feeds" :key="index" :username="feed.username" :title="feed.title" :content="feed.content" :date="feed.date" :initialLikes="feed.likes" />
    </div>

    <NavBar />
  </div>
</template>

<script>
import NavBar from './components-library/NavBar.vue'; // 수정된 경로
import FeedCard from './components-library/FeedCard.vue'; // 수정된 경로

export default {
  name: 'FeedPage',
  components: {
    NavBar,
    FeedCard
  },
  data() {
    return {
      currentTab: 'latest',
      feeds: [
        { username: '치킨인더콘', title: '제목이 들어가는 영역', content: '본문 미리보기가 들어갑니다', date: 'YYYY.MM.DD', likes: 1 },
        { username: '치킨인더콘', title: '제목이 들어가는 영역', content: '본문 미리보기가 들어갑니다', date: 'YYYY.MM.DD', likes: 1 },
        { username: '치킨인더콘', title: '제목이 들어가는 영역', content: '본문 미리보기가 들어갑니다', date: 'YYYY.MM.DD', likes: 1 }
      ]
    };
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
      // 탭 변경에 따라 다른 피드 데이터를 가져오는 로직을 추가할 수 있습니다.
    }
  }
};
</script>

<style scoped>
.feed-page {
  font-family: 'NanumSquare', sans-serif;
  color: var(--text-secondary);
  background-color: var(--surface-secondary);
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

.tabs {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  margin-top: 10px;
}

button {
  flex: 1;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'NanumSquare', sans-serif;
}

button.active {
  color: var(--text-secondary);
  border-bottom: 2px solid var(--text-secondary);
}

.feed-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.NavBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
