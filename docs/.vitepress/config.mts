import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/tailwindcss-line-clamp-no-ellipsis/',
  title: 'tailwindcss-line-clamp-no-ellipsis',
  description: 'A Tailwind CSS plugin for line clamp without ellipsis.',
  cleanUrls: true,

  locales: {
    // "root" = default locale, served at "/" — English is the default
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'GitHub', link: 'https://github.com/kazettique/tailwindcss-line-clamp-no-ellipsis' },
          { text: 'npm', link: 'https://www.npmjs.com/package/tailwindcss-line-clamp-no-ellipsis' },
        ],
        outline: { label: 'On this page' },
        sidebar: false,
      },
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      description: '不帶刪節號（...）的文字截斷 Tailwind CSS 插件。',
      themeConfig: {
        nav: [
          { text: 'GitHub', link: 'https://github.com/kazettique/tailwindcss-line-clamp-no-ellipsis' },
          { text: 'npm', link: 'https://www.npmjs.com/package/tailwindcss-line-clamp-no-ellipsis' },
        ],
        outline: { label: '本頁目錄' },
        sidebar: false,
        docFooter: { prev: '上一頁', next: '下一頁' },
        darkModeSwitchLabel: '深色模式',
        sidebarMenuLabel: '目錄',
        returnToTopLabel: '回到頂部',
        langMenuLabel: '切換語言',
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      description: '省略記号なしのラインクランプ Tailwind CSS プラグイン。',
      themeConfig: {
        nav: [
          { text: 'GitHub', link: 'https://github.com/kazettique/tailwindcss-line-clamp-no-ellipsis' },
          { text: 'npm', link: 'https://www.npmjs.com/package/tailwindcss-line-clamp-no-ellipsis' },
        ],
        outline: { label: 'このページの目次' },
        sidebar: false,
        docFooter: { prev: '前のページ', next: '次のページ' },
        darkModeSwitchLabel: 'ダークモード',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップへ戻る',
        langMenuLabel: '言語を切り替える',
      },
    },
  },

  themeConfig: {
    langMenuLabel: 'Language',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kazettique/tailwindcss-line-clamp-no-ellipsis' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © kazettique',
    },
  },
})
