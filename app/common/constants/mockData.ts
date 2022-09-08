import type { MockData } from '../types';

const mockText: string[] = [
  '“Магии не место в науке” - не используй магические константы',
  '“Змея не верблюд и не Паскаль” - не смешивай подходы написания  переменных',
  '“Абвгдеёж” - Давай переменным человеко читаемые названия',
  '“Это птица? Это самолет?” - Типизируй переменные и компоненты',
  '“Paper Please” - Хороший код  в документации не нуждается, но любой документированный код - отличный код',
  '“Еще по одной” - не плоди сущности  без необходимости',
  '“На моем устройстве работает” - следи за количеством обновления экрана ',
  '“Большая дружелюбная кнопка” - не оставляй элементы управления без обработки, если кнопка есть, пользователь на нее нажмет',
  '“Правило - есть правило” - не отключай правило линтера на проекте',
  'Я пытался(” - не сиди весь день над сложной задачей, решение которой не можешь придумать ',
  '“Ну естеееественно” - внимательно читай документацию, учи основы языка',
  '“Я буду долго гнать велосипед” - не усложняй простое решение. Следуй принципу KISS',
  '“У нас тут правочки подъехали” - делай решение задачи  расширяемым',
  '“Can’t catch this” - обрабатывай исключения',
];

const mockList: MockData[] = Array.from(
  { length: mockText.length },
  (_, k) => ({
    id: `${k}_${Date.now()}`,
    completed: k % 2 === 0,
    text: mockText[k],
  }),
);

export { mockList };