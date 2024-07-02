<script setup lang="ts">
import { reactive, ref } from 'vue'

import topHook from './top-hook' // 将导航栏代码逻辑给抽离，方便维护
const { data, listNavClick, subListClick } = topHook() // 引入导航栏hook逻辑并调用

// 搜索输入框-默认文字，点击后清空
let inputTextInfo = '音乐/视频/电台/用户'
let inputText = ref<string>(inputTextInfo)

//
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
      <div class="nav-search">
        <div class="search-box">
          <input
            type="text"
            @focus="inputText = ''"
            @blur="inputText = inputTextInfo"
            class="search-input"
            :placeholder="inputText"
          />
        </div>
      </div>
      <div class="user-info"></div>
    </div>
    <div class="top-sub" :class="data.listIndex > 0 ? 'subLine' : ''">
      <div class="subnav" v-show="data.listIndex === 0">
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
          left: 50%;
          transform: translate(-50%, 0);
          width: 12px;
          height: 7px;
          background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e52adade1f4df5e242dac8537a78c78e);
          background-position: 15px 1px;
        }
      }
    }
    .nav-search {
      float: left;
      margin-top: 20px;
      .search-box {
        position: relative;
        .search-input {
          box-sizing: border-box;
          width: 158px;
          height: 32px;
          line-height: 32px;
          border: 1px solid #fff;
          border-radius: 32px;
          color: #333;
          font-size: 12px;
          padding-left: 20px;
          padding-right: 5px;
        }
      }
    }
  }
  .top-sub {
    width: 100%;
    background: #c20c0c;
  }
  .subLine {
    height: 5px;
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
