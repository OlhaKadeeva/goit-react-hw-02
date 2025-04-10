# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- Проект створено за допомогою Vite.
- Напишемо застосунок для збору відгуків про кав'ярню Sip Happens Café.
- Застосунок повинен відображати кількість зібраних відгуків для кожної категорії: good, neutral, bad. Застосунок повинен зберігати статистику відгуків між оновленням сторінки.
- Компоненти рендеряться всередині компонента App.

Крок 1

У компоненті App створи стан для зберігання типів відгуків. Нехай це буде об'єкт з одноіменними властивостями:
{
good: 0,
neutral: 0,
bad: 0
}
Оголоси компоненти Feedback та Options і використовуй їх в App для відображення опцій та фідбека. Для цього передай необхідні значення їм через пропси.

Крок 2

Додай обробник стану, щоб при кліках по кнопках в компоненті Options змінювався стан компонента App.
Оголоси функцію updateFeedback(feedbackType), яка приймає один параметр - тип фідбеку, тобто ім'я властивості зі стану, рядки “good”, “bad” або “neutral”.

const updateFeedback = feedbackType => {
 // Тут використовуй сеттер, щоб оновити стан
}

Передай функцію updateFeedback як пропс в компонент Options і викликай її при кліках по кнопках, передаючи тип фідбеку (рядки “good”, “bad” або “neutral”) як аргумент.
Після цього кроку при кліках по кнопках в компоненті Options буде оновлюватися інтерфейс.

Крок 3

Зроби так, щоб компонент Feedback рендерився тільки після того, як було зібрано хоча б один відгук. Загальна кількість відгуків - це просто сума станів:

const totalFeedback = good + neutral + bad;

Оскільки стан зберігається в компоненті App, то і обчислення totalFeedback буде правильно виконувати в цьому компоненті, і передавати вже обчислене значення пропсами іншим компонентам, а також використовувати в App для умовного рендерингу.
Повідомлення про відсутність статистики перенеси в компонент Notification і відобрази його в App. Для цього використовуй умовний рендеринг в компоненті App.

Крок 4

Додай кнопку Reset для скидання зібраних відгуків у компонент Options. При кліку на неї стан, що відповідає за відгуки, повинен обнулитися. Кнопка Reset видима тільки в разі наявності хоча б одного відгуку, так само, як і компонент Feedback.
Для умовного рендерингу використовуй попередньо обчислене значення totalFeedback з компонента App і передавай його як пропс в Options.

Крок 5

Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше статистики про зібрані відгуки. Додай відображення загальної кількості зібраних відгуків з усіх категорій та відсоток позитивних відгуків. Це всі обчислювані значення, які не потрібно зберігати в стані. Передай ці значення через пропси в відповідні компоненти.
Загальна кількість відгуків - це просто сума станів:

totalFeedback = good + neutral + bad

Для підрахунку відсотка позитивних відгуків можна використовувати наступну формулу:

Math.round((good / totalFeedback) \* 100)

Зверни увагу, що для значень totalFeedback і positiveFeedback не потрібно створювати окремі властивості в стані, оскільки це дані, що легко обчислюються на основі існуючого стану. Це не тільки оптимізує використання пам'яті та ресурсів, але й зменшує ризик виникнення помилок, пов'язаних із не синхронізованим станом даних.

Після цього кроку інтерфейс застосунку буде завершений.
