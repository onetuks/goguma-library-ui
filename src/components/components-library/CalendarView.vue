<template>
    <div class="calendar">
      <!-- 요일 헤더 -->
      <div class="weekdays">
        <CalendarIcon v-for="(day, index) in weekdays" :key="index" :day="day" type="weekday" />
      </div>
      <!-- 날짜 아이콘 -->
      <div class="days">
        <CalendarIcon
          v-for="(day, index) in days"
          :key="index"
          :day="day.date.getDate()"
          :type="getDayType(day)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isToday,
    isSameMonth,
  } from 'date-fns';
  import CalendarIcon from './CalendarIcon.vue';
  
  export default {
    components: {
      CalendarIcon,
    },
    props: {
      year: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        weekdays: ['일', '월', '화', '수', '목', '금', '토'],
        days: [],
        today: new Date(),
      };
    },
    created() {
      this.generateCalendar();
    },
    methods: {
      generateCalendar() {
        const start = startOfWeek(startOfMonth(new Date(this.year, this.month - 1)));
        const end = endOfWeek(endOfMonth(new Date(this.year, this.month - 1)));
        this.days = eachDayOfInterval({ start, end }).map(date => ({
          date,
          checked: false // 데이터베이스의 출석 체크 상태를 여기서 연동할 수 있습니다.
        }));
      },
      getDayType(day) {
        if (!isSameMonth(day.date, new Date(this.year, this.month - 1))) return 'notInMonth';
        if (isToday(day.date)) {
          return day.checked ? 'todayChecked' : 'todayNotChecked';
        }
        return day.checked ? 'checked' : 'notChecked';
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar {
    width: 358px;
    height: 358px;
    display: grid;
    grid-template-columns: repeat(7, 46px);
    grid-template-rows: 46px repeat(6, 46px);
    gap: 1px;
  }
  
  .weekdays, .days {
    display: contents;
  }
  </style>
  