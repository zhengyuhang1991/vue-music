<template>
  <transition name="slide">
    <music-list :songs="songs"
                :title="title"
                :bg-image="bgImage"
    ></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {ERR_OK} from 'api/config'
  import {getSingerDetails} from 'api/singer'
  import {createSong, isValidMusic, processSongsUrl} from 'common/js/song'
  import MusicList from 'components/music-list/music-list'

  export default {
    name: `singer-detail`,
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getDetail()
    },
    components: {
      MusicList
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    methods: {
      _getDetail() {
        // 如未获取歌手ID时刷新，则返回上一界面
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetails(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            processSongsUrl(this._normalizeSongs(res.data.list)).then((songs) => {
              this.songs = songs
            })
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
