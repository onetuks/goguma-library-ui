<template>
    <div class="feed-card" :style="{ backgroundImage: 'url(@/assets/picture_test.png)' }">
      <div class="card-header">
        <img src="@/assets/profile_picture.png" alt="Profile" class="profile-picture">
        <div class="user-info">
          <span class="username">{{ username }}</span>
          <SubscriptionButton :initialSubscriptionStatus="false" />
        </div>
        <HeartButton 
          :likes="likes"
          :userLiked="userLiked"
          @like="incrementLikes"
          @unlike="decrementLikes"
        />
      </div>
      <div class="card-body">
        <h2 class="title">{{ title }}</h2>
        <p class="content">{{ content }}</p>
      </div>
      <div class="card-footer">
        <span class="date">{{ formatDate(date) }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import SubscriptionButton from './SubscriptionButton.vue';
  import HeartButton from './FeedHeart.vue';
  
  export default {
    name: 'FeedCard',
    components: {
      SubscriptionButton,
      HeartButton
    },
    props: {
      username: String,
      title: String,
      content: String,
      date: String,
      initialLikes: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        userLiked: false,
        likes: this.initialLikes
      }
    },
    methods: {
      incrementLikes() {
        this.likes += 1;
      },
      decrementLikes() {
        this.likes -= 1;
      },
      formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .feed-card {
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    padding: 20px;
    color: white;
    width: 300px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .username {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .content {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .card-footer {
    text-align: left;
    font-size: 14px;
    color: #DCDCDC; /* 피그마의 gray/1000 */
  }
  </style>
  