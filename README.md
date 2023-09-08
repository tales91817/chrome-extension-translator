# README

> 此專案是一款翻譯 App，可翻譯多國語言，並可將該 App 嵌入 Google Chrome Extension 做使用。

## 功能

- [x] 翻譯工具
- [x] 可翻譯單字或句子

## 畫面

![主介面](https://upload.cc/i1/2023/09/08/tbmERp.png)

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

### 取得專案

```bash
git clone https://github.com/tales91817/chrome-extension-translator
```

### 移動到專案內

> 打開 Google Chrome，並且在網址列輸入"chrome://extensions/"

### 建立套件

```bash
npm run build
```

### 建立/引入套件

- 回到瀏覽器，點選「載入未封裝項目」![操作畫面](https://upload.cc/i1/2023/09/08/egKVEU.jpg)
- 進入到專案的根目錄，選取 build 資料夾，進入後選取 manifest.json
- 載入成功後會看到擴充軟件出現 My Translator 的套件，允許該套件可以出現在擴充套件清單中 ![操作畫面](https://upload.cc/i1/2023/09/08/qiha2H.jpg)
- 回到主畫面點擊擴充功能清單就可以發現 My Translator 的套件，點擊後就會出現該畫面，表示成功引入 ![操作畫面](https://upload.cc/i1/2023/09/08/W7OpRV.jpg)

### 運行專案

```bash
npm start
```

### 開啟專案

```bash
http://localhost:3000/
```

## 資料夾說明

- components - 模組放置處
- assets - 靜態資源放置處
  - icons - 圖示放置處

## 專案技術

- HTML/CSS/JavaScript
- React.js
- Axios

## 第三方服務

- Rapid API

## 聯絡作者

可以透過以下方式與我聯絡

- [部落格](https://medium.com/@tales91817)
- [Instagram](https://www.instagram.com/lulumi_wei/)
