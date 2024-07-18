<template>
    <div class="top-bar">
      <button class="button review-button">작성 서평</button>
      <button class="button review-pick-button">서평 Pick</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListTopbar',
  };
  </script>
  
  <style scoped>
  .top-bar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .button {
    padding: 10px 20px;
    border: 1px solid var(--border-primary);
    border-radius: 5px;
    background-color: var(--background-primary);
    color: #000000;
    cursor: pointer;
    margin: 0 10px;
  }
  
  .button:hover {
    background-color: var(--surface-fourth);
  }
  
  .review-button {
    /* 추가적인 스타일이 필요하면 여기에 추가 */
  }
  
  .review-pick-button {
    /* 추가적인 스타일이 필요하면 여기에 추가 */
  }
  </style>