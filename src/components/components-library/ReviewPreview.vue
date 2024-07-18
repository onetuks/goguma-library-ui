<template>
  <div class="review-preview">
    <div class="image-container">
      <img src="@/assets/picture_test.png" alt="Book Cover" class="book-cover">
    </div>
    <div class="info-container">
      <div class="title-author-container">
        <div class="title">책 제목 책 제목 책 제목 책 제목</div>
        <div class="author">김현경</div>
      </div>
      <div class="review-title">서평 제목</div>
      <div class="review-content">서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용 서평 내용...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewPreview'
}
</script>

<style scoped>
.review-preview {
  width: 360px;
  height: 140px;
  display: flex;
  align-items: center;
  font-family: 'NanumSquare', sans-serif;
  background-color: var(--surface-tertiary);
  border: 2px solid var(--border-primary);
  border-radius: 5px;
  padding: 10px;
}

.image-container {
  width: 80px;
}

.book-cover {
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
}

.info-container {
  margin-left: 10px;
  flex: 1;
}

.title-author-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 20px;
  margin-bottom: 5px;
}

.title {
  color: var(--text-fourth);
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: bold;
}

.author {
  color: var(--text-fourth);
  text-align: right;
  width: 80px;
  font-size: 14px;
}

.review-title {
  width: 250px;
  height: 16px;
  color: var(--text-fourth);
  margin-bottom: 5px;
  font-size: 14px;
}

.review-content {
  width: 250px;
  height: 64px;
  color: var(--text-fourth);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
}
</style>
