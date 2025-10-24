
function goTo(page) {
  window.location.href = page;
}


// ===== Визначення сторінки уроку =====
const params = new URLSearchParams(window.location.search);
const lessonId = params.get("id");

// Список уроків для фронтенду
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

    <p class="tip">📚 Порада: вивчай приклади на <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a> або <a href="https://developer.mozilla.org/uk/docs/Learn/HTML" target="_blank">MDN HTML Basics</a>.</p>
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

      <p class="tip">💡 Порада: спробуй створити простий сервер за допомогою <a href="https://flask.palletsprojects.com/" target="_blank">Flask</a> або <a href="https://nodejs.org/en" target="_blank">Node.js</a>.</p>
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

      <p class="tip">💡 Порада: спробуй безкоштовно підняти тестовий сервер на сайті <a href="https://replit.com" target="_blank">Replit</a>.</p>
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

      <p class="tip">💡 Порада: потренуйся працювати з API через сайт <a href="https://reqres.in/" target="_blank">Reqres</a> або <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>.</p>
    `
  },
  
  


};



// Підстановка контенту у сторінку
if (lessonId && document.getElementById("lesson-title")) {
  const lesson = lessons[lessonId];
  if (lesson) {
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-content").innerHTML = lesson.content;
    
  }
}



