<template>
  <view class="content">
    <qn-button />
    <QnButton />
    <a-button />
    <image class="logo" src="/static/logo.png" />
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $uni-color-primary;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
