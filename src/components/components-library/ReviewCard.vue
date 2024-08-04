<template>
    <div class="review-card">
      <h3 class="review-title">{{ review.title }}</h3>
      <p class="review-content">{{ review.content }}</p>
      <div class="review-footer">
        <span class="review-author">{{ review.author }}</span>
        <span class="review-date">{{ review.date }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReviewCard',
    props: {
      review: Object
    }
  };
  </script>
  
  <style scoped>
  .review-card {
    background-color: var(--surface-primary);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    max-width: 360px;
    width: 100%;
  }
  
  .review-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .review-content {
    font-size: 14px;
    color: var(--text-primary);
    margin-bottom: 10px;
  }
  
  .review-footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--text-secondary);
  }
  </style>
  