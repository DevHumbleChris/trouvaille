<template>
  <DateRangePicker v-model="date" date-range="dateRange" />
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  components: {
    DateRangePicker
  },
  data () {
    return {
      date: null,
      dateRange: {
        startDate: null,
        endDate: null
      }
    }
  }
}
</script>
