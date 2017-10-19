const {mapState, mapGetters} = require('vuex');
export default {

  methods:{
    toNext(){
      this.$store.dispatch('toNext');
      this.$router.push('/question');
    }
  },
  computed: {
    ...mapState(['currentLevel'])
  }
}
