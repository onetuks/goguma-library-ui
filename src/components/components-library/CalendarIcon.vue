<template>
  <div :class="iconClasses">{{ day }}</div>
</template>

<script>
export default {
  props: ['day', 'type'],
  computed: {
    iconClasses() {
      return {
        'calendar-icon': true,
        'not-checked': this.type === 'notChecked',
        'checked': this.type === 'checked',
        'today-not-checked': this.type === 'todayNotChecked',
        'today-checked': this.type === 'todayChecked',
        'not-in-month': this.type === 'notInMonth',
        'weekday': this.type === 'weekday',
      }
    }
  }
}
</script>

<style scoped>
.calendar-icon {
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Square';
}

/* 각 상태에 따른 스타일 적용 */
.not-checked {
  background-color: var(--surface-fourth);
  color: var(--text-fourth);
}

.checked {
  background-color: var(--surface-secondary);
  color: var(--text-secondary);
}

.today-not-checked {
  background-color: var(--surface-fourth);
  border: 1px solid var(--border-tertiary);
  color: var(--text-fourth);
}

.today-checked {
  background-color: var(--surface-secondary);
  border: 1px solid var(--border-tertiary);
  color: var(--text-secondary);
}

.not-in-month {
  background-color: var(--surface-tertiary);
  color: var(--text-fifth);
}

.weekday {
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
}
</style>
