<template>
<div class="modal-wrap">
  <h1 class="tit-h1 d-flex">
    {{ headerTitle }}
    <div class="ml-auto align-self-center">
      <v-icon x-small class="svg-close20" @click="$emit('hide')"></v-icon>
    </div>
  </h1>
  <div class="modal-box">
    <div>
      모달 컨텐츠
    </div>
    <template v-if="footerSubmit">
      <div class="text-right">
        <v-btn
          outlined small class="btn-point"
          @click="$emit('submit')"
          >{{ footerHideTitle }}</v-btn>
      </div>
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: 'DialogDefault',
  props: {
    footerSubmit: {
      type: Boolean,
      default: true,
    },
    headerTitle: {
      type: String,
      default: '제목',
    },
    footerSubmitTitle: {
      type: String,
      default: '저장',
    },
  },
  data: () => ({
      footerHideTitle: '저장',
      defaultBodyContent: 'body slot 영역을 작성해주세요.',
  }),
}
</script>

<style>

</style>