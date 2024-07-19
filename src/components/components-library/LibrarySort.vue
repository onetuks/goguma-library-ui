<template>
    <div class="sort-bar">
      <button class="sort-button" @click="$emit('sort', 'latest')">
        <img :src="require('@/assets/Latest_order.png')" alt="최신순 정렬" />
      </button>
      <button class="sort-button" @click="$emit('sort', 'recommendation')">
        <img :src="require('@/assets/Recommendation_order.png')" alt="추천순 정렬" />
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LibrarySort',
  };
  </script>
  
  <style scoped>
  .sort-bar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .sort-button {
    background: none;
    border: 1px solid var(--border-primary);
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    width: 85px;
    height: 30px;
    padding: 0;
  }
  
  .sort-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  