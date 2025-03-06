# humanology_2.0

Свод правил и рекомендаций для проекта.

Задачки брать из [доски задач](https://github.com/users/ooonikpro/projects/6).

## Настройки IDE

Для **VSCode** и **WebStorm** использовать плагин [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

Для **WebStorm** использовать настройки auto в разделе `Languages & Frameworks/TypeScript/Vue`.

**ВКЛЮЧИТЬ eslint и prettier по сохранению файла по конфигу проекта!**.

## Установка проекта

```sh
yarn
```

### Запуск проекта

```sh
yarn dev
```

### Билд проекта

```sh
yarn build
```

## Основные правила проекта

### Нейминг
1) Для констант использовать `SCREAMING_SNAKE_CASE`.
2) Для переменных, функций и параметров (props) компонентов использовать `camelCase`.
3) Для классов и компонентов использовать `PascalCase`.
4) Для типов, интерфейсов использовать `PascalCase` + постфикс `Type` (например `MySomeType`).
5) Для енамов использовать `PascalCase` + постфикс `Enum` (например `MySomeEnum`).
6) Для css-классов использовать `kebab-case` + правила [BEM](https://ru.bem.info/methodology/quick-start/). **Название css-класса должно содержать название компонента к которому этот класс относится.**

### FSD
При разработке придерживаться правил описанных в [FSD](https://feature-sliced.design/ru/docs/get-started/overview#concepts).
#### Summary
1) Нижние слои должны использоваться в верхних слоях, но не наоборот.
2) Слайсы не должны использовать друг друга т.е. содержать импортов друг на друга.
3) Для более удобного импортирования и соблюдения правил FSD использовать **index.ts** для слайсов и сегментов.
4) **Внутри слайсов и сегментов использовать только относительные импорты!**.

### Git
1) Перед созданием ветки от `main` всегда выполняй
    ```sh
    git fetch --all && git rebase origin/main
    ```
2) Ветки именуются исходя из номера задачи. Обычно это `issue-№`, где `№` - это номер issue из гитхаб проекта.
3) Любой коммит должен содержать номер ветки и описание выполненных работ. Например `issue-№: добавил/исправил/удалил что-то`.

### Vue
Рекомендуется ознакомиться с [общими советами по оформлению кода](https://ru.vuejs.org/style-guide/) от фреймворка.
#### Summary
1) Для однофайловых компонентов используем такой порядок оформления:
    ```vue
    <script lang="ts" setup>YOUR CODE</script>
    <template>YOUR CODE</template>
    <style lang="scss" scoped>YOUR CODE</style>
    ```
2) В секции `script` соблюдать порядок импортов! Импорты от `vue` должны быть всегда первыми!
3) Для пропсов компонента используем синтаксис `defineProps`.
    ```vue
   <script lang="ts" setup>
       const props = defineProps<YourPropsType>();
   </script>
   ```
   В секции `template` использовать значения обязательно использовать как `props.myValue`. Например:
    ```vue
   <script lang="ts" setup>
       const props = defineProps<{ name: string; secondName: string; }>();
   </script>
   <template>
       <p>{{ props.name }} {{ props.secondName }}</p>
   </template>
   ```
   При необходимости дефолтных значений `props` использовать деструктуризацию. Например:
    ```vue
   <script lang="ts" setup>
       const { myDefaultValue = 'myDefaultValue', ...props } = defineProps<{ myDefaultValue?: string; someObject: ObjectType }>();
   </script>
   <template>
       <div>
           <p>{{ myDefaultValue }}</p> 
           <SomeComponent :data="props.someObject"/>
       </div>
   </template>
    ```
4) Для слотов используем короткий синтаксис без директивы `v-slot`.
    ```vue
   <template>
       <ComponentWithSlots>
           <template #slotName> <!--- Используем через решетку без директивы `v-slot` --->
               <SomeComponent/>
           </template>
       </ComponentWithSlots>
   </template>
    ```
### Работа с svg-иконками
Если нужна иконка - используй компонент `UiSvg`.

Все svg-иконки добавлять/изменять/удалять в `public/icons` **ТОЛЬКО С ЗАПУЩЕННЫМ ПРОЕКТОМ** (`yarn dev`).

Vite отслеживает изменения в этой директории и при добавлении/удалении/изменении генерируется `@types/iconName.ts` файл с именами иконок для лучшего DX при использовании `UiSvg`.

Если иконка нуждается в перекрашивании при помощи стилей, то в этом случае необходимо заменить цвет внутри иконки на значение `currentColor`.
Таким образом иконка будет перекрашиваться в цвет текста. Поэтому используй css-свойство `color` для тега в котором используется иконка.
