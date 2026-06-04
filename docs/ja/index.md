---
layout: doc
---

# tailwindcss-line-clamp-no-ellipsis

省略記号（`...`）なしでテキストを行数制限する Tailwind CSS プラグインです。

このプラグインは [tailwindlabs/tailwindcss-line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp/tree/master) にインスパイアされ、後に Tailwind CSS のコア機能として統合されました。

通常、テキストを特定の行数で切り詰める際、末尾に省略記号「...」を付けます。しかし、省略記号**なし**でテキストをクリップしたい場合もあります。このプラグインはその用途に応えます。

## デモ

|                | オリジナル                              | 省略記号あり                                      | 省略記号なし                                            |
| -------------- | --------------------------------------- | ------------------------------------------------- | ------------------------------------------------------- |
| Html           | `<div>...</div>`                        | `<div class="line-clamp-2">...</div>`             | `<div class="line-clamp-no-ellipsis-2">...</div>`       |
| 結果（英語）   | ![en original](/images/en-original.png) | ![en with ellipsis](/images/en-with-ellipsis.png) | ![en without ellipsis](/images/en-without-ellipsis.png) |
| 結果（中国語） | ![ch original](/images/ch-original.png) | ![ch with ellipsis](/images/ch-with-ellipsis.png) | ![ch without ellipsis](/images/ch-without-ellipsis.png) |
| 結果（日本語） | ![jp original](/images/jp-original.png) | ![jp with ellipsis](/images/jp-with-ellipsis.png) | ![jp without ellipsis](/images/jp-without-ellipsis.png) |

## インストール

プラグインをインストールします：

```sh
npm install tailwindcss-line-clamp-no-ellipsis
```

`tailwind.config.js` にプラグインを追加します：

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

## 使い方

`line-clamp-no-ellipsis-{行数}` クラスを使って、切り詰める行数を指定します：

```html
&lt;div class="line-clamp-no-ellipsis-2"&gt;
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum illum modi nobis nisi similique quasi obcaecati, ipsa eos quaerat.
&lt;/div&gt;
```

行数制限を解除するには `line-clamp-no-ellipsis-none` を使用します：

```html
&lt;div class="line-clamp-no-ellipsis-2 md:line-clamp-no-ellipsis-none"&gt;
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum illum modi nobis nisi similique quasi obcaecati, ipsa eos quaerat.
&lt;/div&gt;
```

プラグインは 1〜6 行の制限を提供します。生成される CSS は以下の通りです：

| クラス                        | CSS                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| `line-clamp-no-ellipsis-1`    | `overflow: hidden;` <br> `max-height: calc(1lh * 1);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-2`    | `overflow: hidden;` <br> `max-height: calc(1lh * 2);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-3`    | `overflow: hidden;` <br> `max-height: calc(1lh * 3);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-4`    | `overflow: hidden;` <br> `max-height: calc(1lh * 4);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-5`    | `overflow: hidden;` <br> `max-height: calc(1lh * 5);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-6`    | `overflow: hidden;` <br> `max-height: calc(1lh * 6);` <br> `overflow-wrap: break-word;` |
| `line-clamp-no-ellipsis-none` | `overflow: unset;` <br> `max-height: unset;`                                            |

## カスタマイズ

6 行以上の制限を使用する場合は、`tailwind.config.js` の `lineClamp` キーにカスタム設定を追加します：

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

設定後、すぐに使用できます：

```html
&lt;div class="line-clamp-no-ellipsis-7"&gt;   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum illum modi nobis nisi similique quasi obcaecati, ipsa eos quaerat.
&lt;/div&gt;
```
