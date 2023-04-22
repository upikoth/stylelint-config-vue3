# Stylelint-config-vue3

## Установка

До установки нужно добавить .npmrc, который содержит ссылку на registry.

```
@upikoth:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${UPIKOTH_PACKAGES_READ}
```

Также в env переменных должен быть токен, дающий доступ к registry UPIKOTH_PACKAGES_READ

Добавление UPIKOTH_PACKAGES_READ:

```
export UPIKOTH_PACKAGES_READ=значение переменной в zsh.rc.
```

При установке этой библиотеки нужные плагины, а также сам eslint будут установлены автоматически.

```sh
npm install @upikoth/stylelint-config-vue3
```
