<template>
    <div class="nav-bar">
      <div class="nav-item-container">
        <div v-for="(button, index) in buttons" :key="index" class="nav-item-wrapper">
          <button 
            @click="selectButton(index)"
            :class="{ selected: selectedIndex === index }"
          >
            <img
              :src="selectedIndex === index ? button.activeIcon : button.inactiveIcon" 
              :alt="button.label" 
              :style="{ width: button.width + 'px', height: button.height + 'px' }"
            />
          </button>
          <div v-if="index < buttons.length - 1" class="separator"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        selectedIndex: 0,
        buttons: [
          { label: 'Home', inactiveIcon: require('@/assets/home.png'), activeIcon: require('@/assets/home_fill.png'), width: 25, height: 23 },
          { label: 'Menu', inactiveIcon: require('@/assets/menu.png'), activeIcon: require('@/assets/menu_fill.png'), width: 25, height: 15 },
          { label: 'Add', inactiveIcon: require('@/assets/add.png'), activeIcon: require('@/assets/add.png'), width: 26, height: 26 },
          { label: 'Books', inactiveIcon: require('@/assets/books.png'), activeIcon: require('@/assets/books_fill.png'), width: 25, height: 21.4 },
          { label: 'My Page', inactiveIcon: require('@/assets/my_page.png'), activeIcon: require('@/assets/my_page_fill.png'), width: 25, height: 25 },
        ]
      }
    },
    methods: {
      selectButton(index) {
        this.selectedIndex = index;
        // 이곳에서 해당 버튼 클릭 시 특정 동작을 정의할 수 있습니다.
      }
    }
  }
  </script>
  
  <style scoped>
  .nav-bar {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 390px;
    height: 69px;
    background-color: var(--surface-fourth);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -1px 5px rgba(0,0,0,0.1);
    border-top: 1px solid var(--button-fifth);
  }
  
  .nav-item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .nav-item-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 77.6px;
    height: 35px;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  button.selected img {
    /* 선택된 버튼의 이미지를 강조할 수 있는 스타일을 여기에 추가할 수 있습니다 */
  }
  
  .separator {
    width: 1px;
    height: 100%; /* 구분선 높이 전체 영역 */
    background-color: var(--button-fifth); /* button/fifth 색상 */
  }
  
  button img {
    display: block;
  }
  </style>
  
  