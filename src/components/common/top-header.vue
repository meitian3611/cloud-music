<script setup lang="ts">
import { reactive, ref } from 'vue'

import topHook from './top-hook' // 将代码逻辑给抽离，方便维护
const { data, listNavClick, subListClick } = topHook() // 引入hook逻辑并调用
</script>

<template>
  <div class="top-header">
    <div class="top-header-content">
      <h1 class="logo"></h1>
      <ul class="nav-content">
        <li
          :class="index == data.listIndex ? 'active' : ''"
          v-for="(item, index) in data.topList"
          :key="index"
        >
          <span @click="listNavClick(item, index)">
            <a :href="item.path" class="text-btn">
              <em>{{ item.name }}</em>
              <sub class="coricon"></sub>
            </a>
          </span>
        </li>
      </ul>
      <div class="nav-search"></div>
      <div class="user-info"></div>
    </div>
    <div class="top-sub">
      <div class="subnav">
        <ul class="subnav-content">
          <li v-for="(item, index) in data.subList" :key="index">
            <a
              :class="index == data.subListIndex ? 'active' : ''"
              @click="subListClick(item, index)"
              :href="item.path"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="navwrap"></div>
  </div>
</template>

<style scoped lang="scss">
.top-header {
  box-sizing: border-box;
//   border-bottom: 1px solid #000;
  width: 100%;
  background-color: #242424;
  &-content {
    width: 1100px;
    height: 100%;
    height: 70px;
    margin: 0 auto;
    .logo {
      float: left;
      width: 176px;
      height: 69px;
      background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e52adade1f4df5e242dac8537a78c78e)
        no-repeat 0;
      background-position: 0 0;
      a {
        float: left;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
      }
    }
    .nav-content {
      float: left;
      li {
        position: relative;
        float: left;
        height: 70px;
        line-height: 70px;
        .text-btn {
          display: block;
          height: 100%;
          font-size: 14px;
          padding: 0 19px;
          color: #ccc;
        }
      }
      .lihover {
        background: #000;
        .text-btn {
          em {
            color: #fff;
          }
        }
      }
      li:hover {
        @extend .lihover;
      }
      li.active {
        @extend .lihover;
        .coricon {
          position: absolute;
          bottom: 0px;
          right: 50%;
          width: 12px;
          height: 7px;
          background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e52adade1f4df5e242dac8537a78c78e);
          background-position: 15px 1px;
        }
      }
    }
  }
  .top-sub {
    width: 100%;
    background: #c20c0c;
  }
  .subnav {
    width: 1100px;
    height: 34px;
    margin: 0 auto;
    &-content {
      float: left;
      width: 100%;
      margin-left: 16%;
      li {
        float: left;
        color: #fff;
        font-size: 12px;
        line-height: 34px;
        padding: 0 20px;
        a {
          padding: 5px 10px;
        }
        a.active {
          background: #9b0909;
          border-radius: 10px;
        }
      }
      li:hover {
        a {
          background: #9b0909;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
