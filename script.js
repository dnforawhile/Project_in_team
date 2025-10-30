
function goTo(page) {
  window.location.href = page;
}


const params = new URLSearchParams(window.location.search);
const lessonId = params.get("id");


const lessons = {
  1: {
  title: "Вступ у фронтенд",
  content: `
    <p><strong>Фронтенд</strong> - це частина веброзробки, яка відповідає за те, що бачить користувач у браузері. 
    Саме фронтенд визначає кольори, розташування елементів, кнопки, анімації та інтерактивність сайту.</p>

    <h3>Як це працює?</h3>
    <p>Коли ти відкриваєш будь-який сайт, браузер отримує з сервера три основні файли:</p>
    <ul>
      <li><b>HTML</b> - структура сторінки (що саме є на екрані: текст, зображення, кнопки);</li>
      <li><b>CSS</b> - оформлення (кольори, шрифти, розміщення блоків);</li>
      <li><b>JavaScript</b> - логіка (як реагують елементи на дії користувача).</li>
    </ul>

    <p>Браузер «збирає» усе це разом і відображає готову сторінку.</p>

    <h3>Приклад</h3>
    <p>Невеликий приклад взаємодії HTML і CSS:</p>

    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;style&gt;
      h1 { color: purple; text-align: center; }
      button {
        background: #6C3EA0;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Привіт, світ фронтенду!&lt;/h1&gt;
    &lt;button&gt;Натисни мене&lt;/button&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </code></pre>

    <p>Як бачиш, навіть кілька рядків коду вже створюють справжній мінісайт.</p>

    <h3>💡 Що варто запам’ятати</h3>
    <ul>
      <li>Фронтенд = вигляд + взаємодія з користувачем.</li>
      <li>HTML - це «кістяк» сторінки.</li>
      <li>CSS - це «одяг» і стиль.</li>
      <li>JS - це «мозок», який оживляє все навколо.</li>
    </ul>

    <p class="tip">📘 Рекомендуємо: <a href="https://developer.mozilla.org/uk/docs/Learn" target="_blank">MDN Web Docs: Основи фронтенду</a></p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://developer.mozilla.org/uk/docs/Learn" target="_blank">MDN Web Docs — Основи фронтенду</a>
      <a href="https://www.youtube.com/watch?v=nu_pCVPKzTk" target="_blank">YouTube: Основи Frontend розробки</a>
      <a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp — Практичне навчання</a>
    </div>  
  `
},
  2: {
  title: "Основи HTML",
  content: `
    <p><strong>HTML (HyperText Markup Language)</strong> - це мова розмітки, яка визначає структуру вебсторінки.
    Вона складається з тегів, які описують, де знаходиться текст, зображення, посилання, кнопки тощо.</p>

    <h3>🔹 Як побудована HTML-сторінка</h3>
    <p>HTML документ складається з кількох обов’язкових частин:</p>

    <ul>
      <li><code>&lt;!DOCTYPE html&gt;</code> - вказує, що це HTML5 документ;</li>
      <li><code>&lt;html&gt;...&lt;/html&gt;</code> - кореневий тег сторінки;</li>
      <li><code>&lt;head&gt;</code> - технічна інформація (заголовок, кодування, стилі);</li>
      <li><code>&lt;body&gt;</code> - основний вміст сторінки, який бачить користувач.</li>
    </ul>

    <h3>📘 Приклад простої HTML-сторінки</h3>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="uk"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Мій перший сайт&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Привіт, світ!&lt;/h1&gt;
    &lt;p&gt;Це мій перший абзац у HTML.&lt;/p&gt;
    &lt;a href="https://example.com"&gt;Моє перше посилання&lt;/a&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </code></pre>

    <h3>🔹 Типові HTML-теги</h3>
    <ul>
      <li><code>&lt;h1&gt; - &lt;h6&gt;</code> - заголовки різних рівнів;</li>
      <li><code>&lt;p&gt;</code> - абзац тексту;</li>
      <li><code>&lt;a&gt;</code> - посилання на іншу сторінку або сайт;</li>
      <li><code>&lt;img&gt;</code> - зображення;</li>
      <li><code>&lt;ul&gt;</code> і <code>&lt;li&gt;</code> - створюють списки.</li>
    </ul>

    <h3>💡 Атрибути тегів</h3>
    <p>Теги можуть мати атрибути - додаткові параметри.  
    Наприклад: <code>&lt;a href="https://google.com"&gt;</code> або  
    <code>&lt;img src="photo.jpg" alt="Моє фото"&gt;</code></p>

    <h3>🔧 Практика</h3>
    <p>Створи власний HTML-файл (<code>index.html</code>) і додай:</p>
    <ul>
      <li>заголовок <code>&lt;h1&gt;</code> зі своїм іменем;</li>
      <li>абзац про себе (<code>&lt;p&gt;</code>);</li>
      <li>посилання на улюблений сайт (<code>&lt;a&gt;</code>).</li>
    </ul>

    <p class="tip">📚 Порада: вивчай приклади на <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a></p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://developer.mozilla.org/uk/docs/Learn/HTML" target="_blank">MDN Web Docs — HTML</a>
      <a href="https://www.youtube.com/watch?v=UB1O30fR-EE" target="_blank">YouTube: HTML Full Course</a>
      <a href="https://www.w3schools.com/html/" target="_blank">W3Schools — HTML Туторіали</a>
    </div>
  `
},
  3: {
    title: "CSS та стилізація",
    content: `
      <p><strong>CSS (Cascading Style Sheets)</strong> - це мова, яка визначає вигляд елементів сторінки.
      З її допомогою можна змінювати кольори, розміри, розташування і шрифти.</p>

      <p>Наприклад:</p>

      <pre><code>
h1 {
  color: purple;
  text-align: center;
}

p {
  font-size: 18px;
  color: #333;
}
      </code></pre>

      <p>CSS можна підключити у трьох способах: через тег <code>&lt;style&gt;</code>, окремий файл або атрибут <code>style</code>.</p>

      <p class="tip">💡 Порада: тренуйся на сайті <a href="https://www.w3schools.com/css/" target="_blank">W3Schools CSS</a></p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://developer.mozilla.org/uk/docs/Learn/CSS" target="_blank">MDN Web Docs — CSS</a>
      <a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" target="_blank">YouTube: CSS для початківців</a>
      <a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a>
    </div>
    `
  },
   4: {
    title: "Вступ у бекенд",
    content: `
      <p><strong>Бекенд</strong> - це «мозок» будь-якого сайту. Він відповідає за логіку, роботу баз даних, авторизацію користувачів і взаємодію з фронтендом.</p>
      
      <p>Тобто, якщо фронтенд - це те, що бачить користувач, то бекенд - це все, що працює «за лаштунками»: обробка даних, реєстрація, логін, збереження файлів тощо.</p>

      <h3>🧠 Популярні мови бекенду</h3>
      <ul>
        <li><b>Python</b> - простий і потужний (Flask, Django)</li>
        <li><b>JavaScript</b> - через платформу Node.js</li>
        <li><b>PHP</b> - класика веброзробки</li>
        <li><b>Java</b> або <b>C#</b> - для великих систем</li>
      </ul>

      <p class="tip">💡 Порада: спробуй створити простий сервер за допомогою Flask або Node.js.</p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://developer.mozilla.org/uk/docs/Learn/Server-side" target="_blank">MDN Web Docs — Основи бекенду</a>
      <a href="https://www.youtube.com/watch?v=ENrzD9HAZK4" target="_blank">YouTube: Вступ до бекенду</a>
      <a href="https://uk.wikipedia.org/wiki/Back-end" target="_blank">Вікіпедія: Бекенд</a>
    </div>
    `
  },

  5: {
    title: "Основи серверів",
    content: `
      <p><strong>Сервер</strong> - це спеціальний комп’ютер, який зберігає дані і відправляє їх користувачам у відповідь на запити.</p>

      <p>Простими словами:</p>
      <ol>
        <li>Користувач відкриває сайт у браузері.</li>
        <li>Браузер надсилає <b>HTTP-запит</b> на сервер.</li>
        <li>Сервер обробляє запит і відправляє <b>відповідь</b> (HTML, JSON або інші дані).</li>
      </ol>

      <pre><code>GET /user HTTP/1.1
Host: example.com
Accept: application/json
      </code></pre>

      <p>Сервер повертає JSON-відповідь:</p>
      <pre><code>{
  "name": "Alex",
  "role": "student"
}</code></pre>

      <p class="tip">💡 Порада: спробуй безкоштовно підняти тестовий сервер на Replit.</p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://developer.mozilla.org/uk/docs/Learn/Server-side/First_steps" target="_blank">MDN — Як працює сервер</a>
      <a href="https://www.youtube.com/watch?v=KeLiQXqVgMI" target="_blank">YouTube: Як працює сервер</a>
      <a href="https://replit.com/" target="_blank">Replit — Онлайн сервери</a>
    </div>
    `
  },

  6: {
    title: "API та JSON",
    content: `
      <p><strong>API</strong> (<i>Application Programming Interface</i>) - це інтерфейс, через який програми обмінюються даними.</p>
      
      <p>Наприклад, коли фронтенд хоче отримати список користувачів - він надсилає запит на бекенд за адресою:</p>
      <pre><code>GET https://api.example.com/users</code></pre>

      <p>І отримує дані у форматі <b>JSON</b>:</p>
      <pre><code>[
  { "id": 1, "name": "Ivan" },
  { "id": 2, "name": "Olena" }
]</code></pre>

      <p>JSON - це найпопулярніший формат обміну даними у вебі.  
      Його легко зрозуміти і прочитати навіть без досвіду програмування.</p>

      <p class="tip">💡 Порада: потренуйся працювати з API через Reqres або JSONPlaceholder.</p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON" target="_blank">MDN — JSON</a>
      <a href="https://www.youtube.com/watch?v=GZvSYJDk-us" target="_blank">YouTube: Що таке API?</a>
      <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>
    </div>
    `
  },
    7: {
    title: "Вступ у Python та керуючі конструкції",
    content: `
      <p><strong>Python</strong> - це одна з найпопулярніших мов програмування. Вона проста для початківців і використовується у веброзробці, науці, штучному інтелекті та автоматизації.</p>

      <h3>🔹 Змінні та типи даних</h3>
      <p>У Python не потрібно вказувати тип змінної - він визначається автоматично:</p>
      <pre><code>name = "Аліса"
age = 16
is_student = True</code></pre>
      <p>Основні типи даних: <b>int</b> (цілі числа), <b>float</b> (десяткові), <b>str</b> (рядки), <b>bool</b> (істина/хиба).</p>

      <h3>🔹 Умовні оператори</h3>
      <pre><code>age = 18
if age >= 18:
    print("Повнолітній")
else:
    print("Неповнолітній")</code></pre>

      <h3>🔹 Цикли</h3>
      <pre><code>for i in range(5):
    print("Крок", i)

while True:
    print("Безкінечний цикл")
    break</code></pre>

      <p class="tip">💡 Порада: потренуйся у <a href="https://replit.com/~" target="_blank">Replit</a> або <a href="https://www.programiz.com/python/online-compiler/" target="_blank">Programiz Python</a>.</p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://docs.python.org/3/tutorial/index.html" target="_blank">Офіційна документація Python</a>
      <a href="https://www.w3schools.com/python/" target="_blank">W3Schools — Python для початківців</a>
      <a href="https://www.youtube.com/watch?v=kqtD5dpn9C8" target="_blank">YouTube: Python Full Course for Beginners</a>
    </div>
    `
  },

  8: {
    title: "Функції та модулі в Python",
    content: `
      <p><strong>Функції</strong> дозволяють повторно використовувати код. Їх зручно створювати для виконання окремих завдань.</p>

      <h3>🔹 Створення функції</h3>
      <pre><code>def greet(name):
    print("Привіт,", name)

greet("Анна")</code></pre>

      <h3>🔹 Модулі</h3>
      <p>Модулі - це готові файли з корисним кодом, які можна підключати за допомогою <code>import</code>.</p>
      <pre><code>import math
print(math.sqrt(25))</code></pre>

      <h3>🔹 Модуль random</h3>
      <pre><code>import random
print(random.randint(1, 10))</code></pre>

      <p>Цей код виведе випадкове число від 1 до 10.</p>

      <p class="tip">💡 Спробуй створити власний модуль <code>mytools.py</code> і підключити його у головному файлі.</p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://realpython.com/" target="_blank">RealPython — корисні гайди</a>
      <a href="https://www.programiz.com/python-programming/modules" target="_blank">Programiz — Python Modules</a>
      <a href="https://www.youtube.com/watch?v=8ext9G7xspg" target="_blank">YouTube: Python Functions Explained</a>
    </div>
    `
  },

  9: {
    title: "Черепашка та основи ООП",
    content: `
      <p><strong>Модуль turtle</strong> - це проста графічна бібліотека для малювання фігур за допомогою «черепашки».</p>

      <h3>🔹 Приклад використання</h3>
      <pre><code>import turtle

t = turtle.Turtle()
t.color("blue")
t.pensize(3)

for i in range(4):
    t.forward(100)
    t.right(90)

turtle.done()</code></pre>
      <p>Цей код намалює квадрат.</p>

      <h3>🔹 Основи ООП</h3>
      <p>ООП (об’єктно-орієнтоване програмування) дозволяє створювати класи та об’єкти.</p>
      <pre><code>class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name, "гавкає!")

my_dog = Dog("Бім")
my_dog.bark()</code></pre>

      <h3>🔹 Обробка подій у Turtle</h3>
      <pre><code>def move():
    t.forward(50)

turtle.onkey(move, "space")
turtle.listen()
turtle.done()</code></pre>
      <p>Натисни пробіл - і черепашка рухається вперед!</p>

      <p class="tip">💡 Порада: потренуйся на <a href="https://trinket.io/turtle" target="_blank">Trinket Turtle</a>.</p>

    <p class="resources-title">📚 Корисні ресурси</p>
    <div class="resources">
      <a href="https://docs.python.org/3/library/turtle.html" target="_blank">Документація Python Turtle</a>
      <a href="https://realpython.com/python-oop/" target="_blank">RealPython — Основи ООП</a>
      <a href="https://www.youtube.com/watch?v=JeznW_7DlB0" target="_blank">YouTube: Object-Oriented Programming in Python</a>
    </div>
    `
  },
};




if (lessonId && document.getElementById("lesson-title")) {
  const lesson = lessons[lessonId];
  if (lesson) {
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-content").innerHTML = lesson.content;
    
  }
}

// 🔙 back.js
document.addEventListener("DOMContentLoaded", () => {
  // Зчитуємо параметр з URL, наприклад ?course=frontend
  const params = new URLSearchParams(window.location.search);
  const course = params.get("course");

  // Шукаємо кнопку "Назад"
  const backBtn = document.getElementById("backBtn");

  // Якщо кнопка знайдена — змінюємо посилання
  if (backBtn) {
    if (course) {
      backBtn.href = `${course}.html`; // Напр. "frontend.html" або "python.html"
    } else {
      backBtn.href = "index.html"; // Якщо параметр не передано
    }
  }
});





// 🌗 theme.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  console.log("🎯 theme.js loaded");

  if (!toggleBtn) return; // Без кнопки — виходимо

  // Відновлюємо збережену тему
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  // Натискання на кнопку теми
  toggleBtn.addEventListener("click", () => {
    document.body.style.transition = "background-color 0.4s, color 0.4s";

    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";

    // Забираємо ефект плавності після секунди
    setTimeout(() => {
      document.body.style.transition = "none";
    }, 800);
  });
});

