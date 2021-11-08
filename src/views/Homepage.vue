<template>
  <section class="mx-2">
    <div v-if="pageLoadAnimation" class="mx-auto flex justify-center align-center max-w-xs mt-64 flex-wrap mb-3">
      <FulfillingBouncingCircleSpinner
      :animation-duration="4000"
      :size="90"
      color="#ff1d5e"
      />
    </div>
    <div v-if="pageLoadAnimation" class="text-center text-xl">
      Trouvaille: Home Is Where the Heart
      <FontAwesomeIcon :icon="['fas', 'heart']" class="text-red-600 mx-1" />
      Is.
    </div>
    <Hotels v-else />
  </section>
</template>

<script>
import Hotels from '@/components/Hotels'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Homepage',
  components: {
    Hotels,
    FulfillingBouncingCircleSpinner
  },
  computed: {
    ...mapState([
      'pageLoadAnimation'
    ])
  },
  methods: {
    ...mapMutations([
      'LOADING_SPINNER'
    ])
  },
  mounted () {
    this.LOADING_SPINNER()
  }
}
</script>
