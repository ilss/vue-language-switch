## 国际化切换功能

```
npm i
npm run dev
```

> 依赖库

```
vue-i18n
element-ui
```

> 调用

```
<sedu-language-switch cName="views-main-el-header-el-dropdown"
                      :my18n="this.$i18n" />
```

> 参数

```
props: {
    cName: {
      type: String,
      default: ''
    },
    myStyle: {
      type: String,
      default: ''
    },
    // i18n对象
    my18n: {
      type: Object,
      required: true
    },
    // cookies 存取的key
    cookies: {
      type: String,
      default: null
    },
    // cookies 时效
    expires: {
      type: Number,
      default: null
    }
  }
```

> vue-i18n 语言文件配置

```
src/
  ∟ lang/
    ∟ en/
        ∟ views/
          ∟ main.js
            ...
        ∟ index.js  //子语言包主入口 import子目录下的子文件


  ∟ index.js //全局配置在这里
    ---
      const i18n = new VueI18n({
        locale: 'zh', // set locale
        messages: {
          zh: {
            type: 'zh',
            label: '简体中文',
            ...ZhLocale,
            ...ElementZhLocale
          },
          en: {
            type: 'en',
            label: 'English',
            ...EnLocale,
            ...ElementEnLocale
          },
          de: {
            type: 'de',
            label: 'German',
            ...DeLocale,
            ...ElementDeLocale
          }
        }
      })
    ---
```
