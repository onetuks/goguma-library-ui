<template>
  <div class="book-card">
    <div class="background">
      <img src="@/assets/picture_test.png" alt="Book Cover" class="book-cover">
    </div>
    <div class="info">
      <div class="title">책 제목</div>
      <div class="publisher">출판사</div>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  width: 175px;
  height: 299px;
  border: 1px solid var(--border-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background {
  width: 155px;
  height: 230px;
  background-color: var(--surface-tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-cover {
  width: 150px;
  height: 230px;
}

.info {
  width: 155px;
}

.title, .publisher {
  text-align: center;
  font-family: 'Nanum Square';
  font-weight: bold;
}

.title {
  font-size: 16px;
  color: var(--text-fourth);
}

.publisher {
  font-size: 14px;
  color: #000000;
}

</style>
