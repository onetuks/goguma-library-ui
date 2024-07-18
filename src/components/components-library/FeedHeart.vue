<template>
    <div class="heart-container">
      <button @click="toggleHeart">
        <img :src="isLiked ? fillHeartImg : unfillHeartImg" alt="Heart Icon" class="heart-icon" />
      </button>
      <span>{{ likes }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeartButton',
    props: {
      likes: {
        type: Number,
        default: 0
      },
      userLiked: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isLiked: this.userLiked,
        fillHeartImg: require('@/assets/Heart_fill2.png'),
        unfillHeartImg: require('@/assets/Heart_Unfill.png')
      }
    },
    methods: {
      toggleHeart() {
        this.isLiked = !this.isLiked;
        this.isLiked ? this.$emit('like') : this.$emit('unlike');
      }
    }
  }
  </script>
  
  <style scoped>
  .heart-container {
    display: flex;
    align-items: center;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .heart-icon {
    width: 24px;
    height: 24px;
  }
  </style>
  