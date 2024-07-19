<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div v-for="(day, index) in daysOfWeek" :key="index" class="calendar-day-header">
        {{ day }}
      </div>
    </div>
    <div class="calendar-body">
      <CalendarView
        :cell-styling="cellStyling"
        :show-header="false"
        :show-arrows="false"
        :start-of-week="0"
      />
    </div>
  </div>
</template>

<script>
import { CalendarView } from 'vue-simple-calendar';

export default {
  components: {
    CalendarView
  },
  data() {
    return {
      daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      cellStyling(date) {
        const today = new Date();
        const cellStyle = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'NanumSquare, sans-serif',
          border: '1px solid var(--border-primary)',
          boxSizing: 'border-box',
          width: '46px',
          height: '46px',
          backgroundColor: 'var(--surface-fourth)',
          color: 'var(--text-primary)'
        };

        if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
          cellStyle.color = 'var(--text-fourth)';
          cellStyle.border = '1px solid var(--border-tertiary)';
        } else if (date.toISOString().substring(0, 10) === '2024-01-01') {
          cellStyle.backgroundColor = 'var(--surface-secondary)';
          cellStyle.color = 'var(--text-secondary)';
        } else if (date.getMonth() !== today.getMonth()) {
          cellStyle.backgroundColor = 'var(--surface-tertiary)';
          cellStyle.color = 'var(--text-fifth)';
        }

        return cellStyle;
      }
    };
  }
};
</script>

<style scoped>
.calendar-container {
  width: 358px;
  height: 358px;
  display: grid;
  grid-template-rows: 46px auto;
}

.calendar-header {
  display: flex;
  width: 100%;
}

.calendar-day-header {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-primary);
  box-sizing: border-box;
  width: 46px;
  height: 46px;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 46px);
  grid-template-rows: repeat(auto-fill, 46px);
  gap: 0;
  width: 100%;
}
</style>
