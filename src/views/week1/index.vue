<template>
  <div class="container">
    <h2 class="title fw-900">這些超酷的應用，都來自 AI工具王</h2>
    <div class="search-area">
      <div class="input-group mb-3">
        <label for="">
          <img src="@/assets/images/icons/search.svg" alt="">
        </label>
        <input type="text" class="form-control keyword" placeholder="輸入關鍵字搜尋">
      </div>
      <div class="d-flex justify-content-between flex-wrap">
        <div class="search-box order-1">
          <button class="btn" type="button">
            篩選
            <img src="@/assets/images/icons/filter.svg" alt="">
          </button>
        </div>
        <div class="search-mid-box d-flex gap-2 order-3 order-md-2 flex-nowrap">
          <div class="search-btn">
            <button class="btn text-gray active" type="button">全部</button>
          </div>
          <div class="search-btn">
            <button class="btn text-gray" type="button">聊天</button>
          </div>
          <div class="search-btn">
            <button class="btn text-gray" type="button">影像辨識</button>
          </div>
          <div class="search-btn">
            <button class="btn text-gray" type="button">翻譯</button>
          </div>
          <div class="search-btn">
            <button class="btn text-gray" type="button">行銷</button>
          </div>
          <div class="search-btn">
            <button class="btn text-gray" type="button">客服</button>
          </div>
          <div class="search-btn">
            <button class="btn text-gray" type="button">生產力</button>
          </div>
        </div>
        <div class="search-box order-2 order-md-3">
          <button class="btn" type="button">
            由新到舊
            <img src="@/assets/images/icons/down-arrow.svg" alt="">
          </button>
        </div>
      </div>
    </div>
    <ul class="hex-card-list">
      <li class="col-12 col-md-6 col-xl-4" v-for="(item, index) in data" :key="index">
        <div class="hex-card">
          <div class="hex-card-img overflow-hidden">
            <img class="w-100" :src="item.img" alt="">
          </div>
          <div class="context">
            <h3 class="hex-card-title">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="box">
            <h4 class="fw-900">AI 模型</h4>
            <div>{{ item.author }}</div>
          </div>
          <div class="box">
            <div>#{{ item.tag }}</div>
            <div><img src="@/assets/images/icons/share.svg" alt=""></div>
          </div>
        </div>
      </li>
    </ul>
    <div class="d-flex justify-content-end">
      <div class="pagination">
        <ul class="pagination">
          <li class="page-item fw-900 active">1</li>
          <li class="page-item fw-900">2</li>
          <li class="page-item fw-900">3</li>
          <li class="page-item fw-900">4</li>
          <li class="page-item fw-900">5</li>
          <li class="page-item fw-900">
            <img src="@/assets/images/icons/right-arrow.svg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

interface Data {
  title: string;
  description: string;
  author: string;
  tag: string;
  img: string;
}
const data = reactive<Data[]>([
  {
    title: 'Chatbot Builder',
    description: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
    author: '卡卡',
    tag: '聊天',
    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool1.png'
  },
  {
    title: 'Image Recognition Platform',
    description: '專業的圖像識別平台，識別圖像、分類、標記等。',
    author: '杰杰',
    tag: '影像辨識',
    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool2.png'
  },
  {
    title: 'Language Translation API',
    description: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
    author: '琪琪',
    tag: '翻譯',
    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool3.png'
  },
  {
    title: 'Sentiment Analysis API',
    description: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
    author: '昊昊',
    tag: '行銷',
    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool4.png'
  },
  {
    title: 'Fraud Detection Platform',
    description: '預防詐騙活動，適用於銀行、金融、電商等。',
    author: '卡卡',
    tag: '客服',
    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool5.png'
  },
  {
    title: 'Voice Assistant SDK',
    description: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
    author: '杰杰',
    tag: '生產力',
    img: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool6.png'
  }
])
</script>
<style lang="scss">
    * {
      font-family: 'Noto Sans TC', sans-serif;
    }
    .title {
      margin: 160px 0 80px 0;
      text-align: center;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-size: 4rem;
    }
    .fw-900 {
      font-weight: 900;
    }
    .search-area {
      border-radius: 16px;
      .keyword {
        background-color: #F2F2F2;
        height: 64px;
        padding-left: 50px;
        border-radius: 16px!important;
      }
    }
    .input-group label {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(30px,-50%);
      z-index: 500;
    }
    .btn {
      border: 1px solid #F2F2F2;
      display: flex;
      align-items: center;
      gap: 5px;
      .active {
        background-color: #F2F2F2;
        color: #000;
      }
    }
    .small-awsome {
      font-size: 12px;
    }
    .text-gray {
      color: #919191
    }
    .hex-card-list {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
    }
    .hex-card {
      border-radius: 16px;
      border: solid 1px #F2F2F2;
      overflow: hidden;
      margin: 0.5rem;
      .hex-card-img img {
        transition: .3s;
        &:hover {
          transform: scale(1.2)
        }
      }
      .context {
        padding: 20px;
        height: 12.5rem;
        .hex-card-title {
          height: 4rem;
          text-align: center;
          font-weight: 900;
        }
        p {
          text-align: left;
        }
      }
      .box {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        border: #F2F2F2;
        h4 {
          font-size: 1rem;
        }
      }
    }
    .page-item {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      .active {
        background-color: #000;
        color: #fff;
      }
    }
    .search-btn {
      white-space: nowrap;
    }
    @media(max-width:768px){
      .search-box {
        margin-bottom: .5rem;
      }
      .search-mid-box {
        width: 100%;
      }
    }

</style>