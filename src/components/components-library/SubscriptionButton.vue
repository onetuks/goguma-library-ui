<template>
    <button :class="['subscription-button', { subscribed: isSubscribed }]" @click="toggleSubscription">
      {{ isSubscribed ? '구독중' : '구독' }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'SubscriptionButton',
    props: {
      initialSubscriptionStatus: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isSubscribed: this.initialSubscriptionStatus
      }
    },
    methods: {
      toggleSubscription() {
        this.isSubscribed = !this.isSubscribed;
      }
    }
  }
  </script>
  
  <style scoped>
  .subscription-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    color: #756357; /* 피그마의 ivory/100 */
    border: 2px solid #E8E6D5; /* 피그마의 ivory/600 */
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .subscription-button.subscribed {
    background-color: #756357; /* 피그마의 ivory/100 */
    color: white;
  }
  
  .subscription-button:not(.subscribed):hover {
    background-color: #E8E6D5; /* 피그마의 ivory/600 */
    color: #756357; /* 피그마의 ivory/100 */
  }
  </style>
  
  