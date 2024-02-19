# tailwindcss-line-clamp-no-ellipsis

這是一個不帶[刪節號](https://zh.wikipedia.org/zh-tw/省略号#)（`...`，或稱為「省略號」）的文字段落截斷 Tailwind 插件。

此插件發想於 tailwind 的 [tailwindlabs/tailwindcss-line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp/tree/master) 插件，此插件後來合併至 tailwind 核心套件。

大多數情況下，我們希望將文字段落以特定行數截斷，並在最後添加刪節號「...」。但有時我們**只**希望截斷文字段落，而**不帶**刪節號。

## 範例

|              | 原始                                         | 帶刪節號                                               | 不帶刪節號                                                   |
| ------------ | -------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| Html         | `<div>...</div>`                             | `<div class="line-clamp-2">...</div>`                  | `<div class="line-clamp-no-ellipsis-2">...</div>`            |
| 結果（英文） | ![en original](./src/images/en-original.png) | ![en with ellipsis](./src/images/en-with-ellipsis.png) | ![en without ellipsis](./src/images/en-without-ellipsis.png) |
| 結果（中文） | ![ch original](./src/images/ch-original.png) | ![ch with ellipsis](./src/images/ch-with-ellipsis.png) | ![ch without ellipsis](./src/images/ch-without-ellipsis.png) |
| 結果（日文） | ![jp original](./src/images/jp-original.png) | ![jp original](./src/images/jp-with-ellipsis.png)      | ![jp without ellipsis](./src/images/jp-without-ellipsis.png) |

## 安裝

安裝插件：

```sh
npm install tailwindcss-line-clamp-no-ellipsis
```

於 `tailwind.config.js` 設定檔中，加入插件：

```js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-line-clamp-no-ellipsis'),
    // ...
  ],
  // ...
}
```

## 使用方式

使用 CSS class 名稱 `line-clamp-no-ellipsis-{截斷行數}`，截斷行數填入欲截斷的行數：

```html
<div class="line-clamp-no-ellipsis-2">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum illum modi nobis nisi similique quasi obcaecati, ipsa eos quaerat.
</div>
```

欲解除文字段落的截斷，使用`line-clamp-no-ellipsis-none`：

```html
<div class="line-clamp-no-ellipsis-2 md:line-clamp-no-ellipsis-none">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum illum modi nobis nisi similique quasi obcaecati, ipsa eos quaerat.
</div>
```

插件提供的截斷選項為 1～6 行，所產生的 CSS 如下：

| Class                         | CSS                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| `line-clamp-no-ellipsis-1`    | `overflow: hidden;` <br> `max-height: calc(1lh * 1);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-2`    | `overflow: hidden;` <br> `max-height: calc(1lh * 2);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-3`    | `overflow: hidden;` <br> `max-height: calc(1lh * 3);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-4`    | `overflow: hidden;` <br> `max-height: calc(1lh * 4);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-5`    | `overflow: hidden;` <br> `max-height: calc(1lh * 5);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-6`    | `overflow: hidden;` <br> `max-height: calc(1lh * 6);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-none` | `overflow: unset;` <br> `max-height: unset;`                                            |

## 客製化

若要使用 6 行以上的截斷，請在 `tailwind.config.js` 設定檔中，於 `lineClamp` 鍵底下，新增更多的行數選項，如下所示：

```js
module.exports = {
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
      }
    }
  },
}
```

加入後，即可馬上使用！

```html
<div class="line-clamp-no-ellipsis-7">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum illum modi nobis nisi similique quasi obcaecati, ipsa eos quaerat.
</div>
```
