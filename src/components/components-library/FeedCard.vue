<template>
  <div class="feed-card">
    <div class="card-image">
      <img src="@/assets/picture_test.png" alt="Book Cover" class="book-cover">
    </div>
    <div class="card-content">
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
    username: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
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
      this.userLiked = true;
    },
    decrementLikes() {
      this.likes -= 1;
      this.userLiked = false;
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
  width: 360px;
  height: 532px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.card-image {
  flex: 3;
  position: relative;
}

.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  flex: 2;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
  margin-right: auto;
}

.username {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}

.subscription-button {
  margin-left: 10px;
}

.heart-button {
  margin-left: auto;
}

.card-body {
  flex: 1;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.content {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit the number of lines */
  -webkit-box-orient: vertical;
}

.card-footer {
  text-align: right;
  font-size: 12px;
  color: #888;
}
</style>
