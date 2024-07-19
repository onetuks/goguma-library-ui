<template>
  <div class="book-cover-uploader" :class="{ 'has-cover': hasCover }">
    <input type="file" @change="onFileChange" ref="fileInput" style="display: none;" />
    <div v-if="!hasCover" class="upload-placeholder" @click="triggerFileInput">
      <img src="@/assets/camera-icon.png" alt="Camera Icon" class="camera-icon" />
      <p>도서 표지를 첨부해주세요</p>
    </div>
    <div v-else class="cover-preview">
      <img :src="coverUrl" alt="Book Cover" class="book-cover" />
      <img src="@/assets/TrashCan.png" alt="Remove Cover" class="remove-button" @click="removeCover"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCoverUploader',
  data() {
    return {
      coverUrl: null,
    }
  },
  computed: {
    hasCover() {
      return this.coverUrl !== null;
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.coverUrl = URL.createObjectURL(file);
      }
    },
    removeCover() {
      this.coverUrl = null;
      this.$refs.fileInput.value = null;
    }
  }
}
</script>

<style scoped>
.book-cover-uploader {
  background-color: #DCDCDC; /* 피그마의 gray/1000 */
  padding: 20px;
  text-align: center;
  border: 2px dashed #B4B4B4; /* 피그마의 gray/800 */
  border-radius: 5px;
  cursor: pointer;
  transition: border 0.3s ease;
  width: 360px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-cover-uploader.has-cover {
  border: none;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.camera-icon {
  width: 49.85px;
  height: 36px;
  margin-bottom: 10px;
}

.upload-placeholder p {
  color: #B4B4B4; /* 피그마의 gray/800 */
  margin: 0;
  width: 169px;
  height: 18px;
  font-family: 'NanumSquare', sans-serif;
  text-align: center;
}

.cover-preview {
  position: relative;
  width: 120px;
  height: 180px;
}

.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.remove-button {
  position: absolute;
  bottom: -20px; /* Adjusted to place below the cover */
  left: 50%;
  transform: translateX(-50%);
  width: 39px;
  height: 39px;
  cursor: pointer;
}
</style>
