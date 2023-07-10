/*Задача 1
Ви повинні реалізувати функцію, яка повертає різницю між
найбільшим та найменшим значенням у списку , отриманому як аргумент
функції. Масив, який отримує функція як аргумент, може містити позитивні
та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
Спочатку масив буде поданий у невідсортованому вигляді.*/

const differenceOfLowestAndBiggest = (arr) => {
  if (
    Array.isArray(arr) &&
    arr.every((item) => typeof item === "number" && !isNaN(item))
  ) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
  } else if (arr.length < 2) {
    return 0;
  } else {
    return "Invalid input";
  }
};
differenceOfLowestAndBiggest([5, -10, 8, -3, 0, -2, 1]);

/*Задача2
Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
масиву тільки ті слова, довжина яких перевищує число.*/

const takeLongerWords = (text, num) => {
  if (typeof text === "string" && typeof num === "number" && !isNaN(num)) {
    return text.split(" ").filter((item) => item.length > num);
  } else {
    return "Invalid input";
  }
};
takeLongerWords(
  "I would like to get more information about your company and the projects you usually work on",
  5
);

/*Задача3
Напишіть функцію, яка повертає true, якщо перший переданий
аргумент (рядок) закінчується другим аргументом (також рядком).*/

const compareEndings = (first, second) => {
  if (typeof first === "string" && typeof second === "string") {
    return second === first.slice(-second.length);
  } else {
    return "Invalid input";
  }
};

compareEndings("demon", "mon");

/*Задача 4

Напишіть функцію, яка отримує масив цілих чисел і повертає масив
середніх значень кожного цілого числа та його послідовника, якщо він є.*/

const countAverages = (arr) => {
  if (
    Array.isArray(arr) &&
    arr.every((item) => typeof item === "number" && !isNaN(item))
  ) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.push((arr[i] + arr[i + 1]) / 2);
    }
    return arr2.filter((item) => !isNaN(item));
  } else {
    return "Invalid input";
  }
};
countAverages([1, 3, 5, 1, -10]);

/*Задача5
Створіть функцію, яка приймає рядок і повертає кількість голосних, які
у ній.*/

const calculateVowels = (text) => {
  if (typeof text === "string") {
    const vowels = /[aeiou]/gi;
    const matches = text.match(vowels);
    return matches ? matches.length : 0;
  } else {
    return "Invalid input";
  }
};
calculateVowels("Celebration");

// 5.2
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.

const removeABC = (text) => {
  if (typeof text === "string") {
    const abc = /[abc]/gi;
    const removed = text.replaceAll(abc, "");
    return removed === text ? null : removed;
  } else {
    return "Invalid input";
  }
};
removeABC("This might be a bit hard");

//   Задача6
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
// (Set не використовувати:))
const findUniqueElements = (arr1, arr2) => {
  if (
    Array.isArray(arr1) &&
    arr1.every((item) => typeof item === "number" && !isNaN(item)) &&
    Array.isArray(arr2) &&
    arr2.every((item) => typeof item === "number" && !isNaN(item))
  ) {
    let results = [];
    arr1.concat(arr2).forEach((element) => {
      if (!results.includes(element)) {
        results.push(element);
      }
    });
    return results.sort((a, b) => a - b);
  } else {
    return "Invalid input";
  }
};
findUniqueElements([1, 2, 3], [100, 2, 1, 10]);

//   Задача7
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
const swapObjects = (obj) => {
  if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      result[value] = key;
    }
    return result;
  } else {
    return "Invalid input";
  }
};
const Test = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
console.log(swapObjects(Test));

//   Задача8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.

const calculateFranchise = (obj, sum) => {
  if (
    Object.keys(obj).length > 0 &&
    Object.values(obj).every(
      (value) => typeof value === "number" && !isNaN(value)
    )
  ) {
    let total = 0;
    for (const key in obj) {
      total += obj[key];
    }
    return total > sum ? total - sum : "Invalid input";
  } else {
    return "Invalid input";
  }
};

const stolen = {
  skate: 200,
  baseball: 200,
  cap: 1,
};
calculateFranchise(stolen, 400);

//   Задача9
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h).
const doesBrickFit = (a, b, c, w, h, ...args) => {
  if (
    [a, b, c, w, h, ...args].some(
      (item) => typeof item !== "number" || isNaN(item)
    )
  ) {
    return "Invalid input";
  }

  if ((a <= w && b <= h) || (a <= h && b <= w)) {
    return true;
  }
  if ((b <= w && c <= h) || (b <= h && c <= w)) {
    return true;
  }
  if ((a <= w && c <= h) || (a <= h && c <= w)) {
    return true;
  }
  return false;
};

doesBrickFit(1, 2, 2, 1, 1);

//   Задача10
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

const extractFileName = (path) => {
  if (typeof path === "string") {
    return path.split("\\").pop().split(".").slice(0, -1).join(".");
  } else {
    return "Invalid input";
  }
};

extractFileName("c:\\WebServers\\homefff\\testsite\\www\\myfile.txt");

//   Задача11
// Дано два рядки. Чи можна перший рядок отримати з другого циклічним
// зрушенням?

const isCycled = (str1, str2) => {
  if (typeof str1 === "string" && typeof str2 === "string") {
    if (str1.length !== str2.length) {
      return false;
    }
    return str2.concat(str2).includes(str1);
  } else {
    return "Invalid input";
  }
};
isCycled("abcd", "cdab");

//   Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

const splitArray = (arr) => {
  if (
    Array.isArray(arr) &&
    arr.every(
      (item) => typeof item === "number" && !isNaN(item) && arr.length % 2 === 0
    )
  ) {
    const sorted = arr.sort((x, y) => x - y);
    const b = [];
    const c = [];

    while (sorted.length > 0) {
      const smallest = sorted.shift();
      const closest = sorted.shift();
      b.push(smallest);
      c.push(closest);
    }
    return [b, c];
  } else {
    return "Invalid input";
  }
};
splitArray([8, 3, 5, 1, 9, 2, 7, 6]);

//   Задача13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.
const transformString = (text) => {
  if (typeof text !== "string") {
    return "Invalid input";
  }
  let result = "";

  text.split(" ").forEach((word, index) => {
    let newWord = word.toLowerCase();

    if (index === 0) {
      newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      newWord = newWord.replace(
        /https?:\/\/[^\s]+/gi,
        "[посилання заборонено]"
      );

      newWord = newWord.replace(/\S+@\S+\.\S+/gi, "[контакти заборонені]");
    }

    if (newWord.length > 3 && /^[0-9]+$/.test(newWord)) {
      newWord = "";
    }

    result += newWord + " ";
  });

  result = result.trim();

  if (result.length > text.length) {
    const interval = setInterval(() => {
      alert("Чи потрібна вам допомога?");
    }, 5000);

    setTimeout(() => {
      clearInterval(interval);
    }, 30000);
  }

  return result;
};

transformString(
  "You can contact me at https://linkedin.com. Or send mail at stepan@gmail.com."
);

// Задача14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

const checkParentheses = (text) => {
  if (typeof text === "string") {
    const stack = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  } else {
    return "Invalid input";
  }
};

const text = "(Text with balance)";
const outputElement = document.getElementById("output");

/*if (checkParentheses(text)) {
  outputElement.textContent = text;
} else {
  outputElement.textContent = "Wrong parentheses balance";
}
outputElement.addEventListener("selectstart", function (event) {
  event.preventDefault();
});
window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});*/

// Задача15
// Написати функцію, яка генерує пароль для користувача. Вимоги:
// довжина від 6 до 20 символів повинен бути рівно один символ підкреслення,
// хоча б дві великі літери, не більше 5 цифр, будь-які дві цифри поспіль
// неприпустимі.
function generatePassword() {
  const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const validDigits = "0123456789";

  let password = "";

  const underscoreIndex = Math.floor(Math.random() * (19 - 5 + 1)) + 5; // Генеруємо випадковий індекс для підкреслення

  for (let i = 0; i < 2; i++) {
    const randomChar =
      validChars[Math.floor(Math.random() * validChars.length)];
    password += randomChar;
  }

  password =
    password.slice(0, underscoreIndex) + "_" + password.slice(underscoreIndex);

  while (password.length < 6) {
    const randomChar =
      validChars[Math.floor(Math.random() * validChars.length)];
    password += randomChar;
  }

  let digitCount = 0;
  while (digitCount < 5) {
    const randomDigit =
      validDigits[Math.floor(Math.random() * validDigits.length)];
    const prevChar = password[password.length - 1];
    if (!validDigits.includes(prevChar) && !validDigits.includes(randomDigit)) {
      password += randomDigit;
      digitCount++;
    }
  }

  return password;
}

console.log(generatePassword());

// Задача16
// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

const rearrangeArray = (arr) => {
  if (
    Array.isArray(arr) &&
    arr.every((item) => typeof item === "number" && !isNaN(item))
  ) {
    const sorted = [...arr].sort((a, b) => a - b);
    const result = [];

    let left = 0;
    let right = sorted.length - 1;

    while (sorted.length > 1) {
      result[left] = sorted[0];
      sorted.shift();
      result[right] = sorted[0];
      sorted.shift();

      left++;
      right--;
    }

    if (left === right) {
      result[left] = sorted[0];
    }

    return result;
  } else {
    return "Invalid input";
  }
};

console.log(rearrangeArray([7, 2, 5, 1, 9, 3, 6, 8, 4]));

// Задача17
// Напишіть функцію, яка приймає рядок та повертає новий рядок,
// відсортований за частотою появи символів. Символи з більшою частотою
// повинні йти раніше за символи з меншою частотою. Використовуйте методи
// роботи з рядками, об'єктами та сортуванням для вирішення задачі.

const sortByFrequency = (text) => {
  if (typeof text === "string") {
    const charCount = {};
    const sortedText = text.split("").sort();

    for (let char of sortedText) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    sortedText.sort((a, b) => {
      if (charCount[a] === charCount[b]) {
        return a.localeCompare(b);
      } else {
        return charCount[b] - charCount[a];
      }
    });

    return sortedText.join("");
  } else {
    return "Invalid input";
  }
};

console.log(sortByFrequency("abccvfdsasfghhisesayjllabbcc"));

// Задача18
// Дано два рядки. Напишіть функцію, яка знаходить найбільший
// загальний підрядок у цих рядках. Підрядка може містити лише послідовні
// символи (без перепусток). Використовуйте методи роботи з рядками та
// алгоритми пошуку для вирішення задачі.
const longestCommonSubstring = (text1, text2) => {
  if (typeof text1 === "string" && typeof text2 === "string") {
    const m = text1.length;
    const n = text2.length;
    let maxLength = 0;
    let endIndex = 0;

    const dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          if (dp[i][j] > maxLength) {
            maxLength = dp[i][j];
            endIndex = i - 1;
          }
        }
      }
    }

    return text1.substr(endIndex - maxLength + 1, maxLength);
  } else {
    return "Invalid input";
  }
};

console.log(longestCommonSubstring("abcdef", "bcde"));

// Задача19
// Напишіть функцію, яка приймає рядок та число зсуву та повертає
// зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у
// вихідному рядку має бути замінена на літеру, що знаходиться на заданій
// кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками
// та масивами для вирішення задачі.

const caesarCode = (text, key) => {
  if (typeof text !== "string" || typeof key !== "number" || isNaN(key)) {
    return "Invalid input";
  } else {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercaseString = text.toLowerCase();
    let result = "";

    for (let i = 0; i < lowercaseString.length; i++) {
      if (lowercaseString[i] === " ") {
        result += " ";
        continue;
      }

      let newIndex =
        (alphabet.indexOf(lowercaseString[i]) + key) % alphabet.length;

      if (newIndex < 0) {
        newIndex = alphabet.length + newIndex;
      }

      if (text[i] === text[i].toUpperCase()) {
        result += alphabet[newIndex].toUpperCase();
      } else {
        result += alphabet[newIndex];
      }
    }

    return result;
  }
};

console.log(caesarCode("Hello, World!", 5));

// Задача20
// Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони
// анаграмами (чи мають однакові символи у різному порядку). Функція
// повинна повернути true, якщо рядки є анаграмами, і false інакше.
// Використовуйте методи роботи з рядками для вирішення задачі.
const isAnagram = (text1, text2) => {
  if (typeof text1 === "string" && typeof text2 === "string") {
    const sortedText1 = text1.toLowerCase().split("").sort().join("");
    const sortedText2 = text2.toLowerCase().split("").sort().join("");

    return sortedText1 === sortedText2;
  } else {
    return "Invalid input";
  }
};

console.log(isAnagram("listen", "silent"));

// Задача21
// Створіть об'єкт "Університет" з методами для додавання студента,
// видалення студента, отримання інформації про студента за його
// ідентифікатором та отримання списку студентів певного курсу. Реалізуйте
// також функцію, яка дає змогу отримати список студентів певного факультету.
// Використовуйте об'єкти та їх методи для вирішення задачі.
const University = {
  students: [],

  addStudent(student) {
    this.students.push(student);
  },

  removeStudent(id) {
    this.students = this.students.filter((student) => student.id !== id);
  },

  getStudentInfo(id) {
    const student = this.students.find((student) => student.id === id);
    return student ? student : "Student not found";
  },

  getStudentsByCourse(course) {
    return this.students.filter((student) => student.course === course);
  },

  getStudentsByFaculty(faculty) {
    return this.students.filter((student) => student.faculty === faculty);
  },
};

University.addStudent({
  id: 1,
  name: "Viktor S.",
  course: 3,
  faculty: "Engineering",
});
University.addStudent({
  id: 2,
  name: "Taras K.",
  course: 2,
  faculty: "Computer Science",
});
University.addStudent({
  id: 3,
  name: "Dmytro D.",
  course: 4,
  faculty: "Business Analys",
});

console.log(University.students);
console.log(University.getStudentInfo(2));
console.log(University.getStudentsByCourse(3));
console.log(University.getStudentsByFaculty("Engineering"));

University.removeStudent(1);

// Задача22
// Напишіть програму, яка аналізує текст та виводить статистику про
// кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка
// визначає слова, що найчастіше зустрічаються в тексті. Використовуйте
// методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі.

const analyzeText = (text) => {
  if (typeof text !== "string") {
    return "Invalid input";
  } else {
    const wordRegex = /[a-zA-Zа-яА-Я]+/g;
    const sentenceRegex = /[.!?]+/g;

    const wordCount = (text.match(wordRegex) || []).length;
    const sentenceCount = (text.match(sentenceRegex) || []).length;
    const characterCount = text.length;

    const words = text.match(wordRegex) || [];
    const wordFrequency = {};

    words.forEach((word) => {
      const lowercaseWord = word.toLowerCase();
      if (wordFrequency[lowercaseWord]) {
        wordFrequency[lowercaseWord]++;
      } else {
        wordFrequency[lowercaseWord] = 1;
      }
    });

    const mostFrequentWords = [];
    let maxFrequency = 0;

    for (const word in wordFrequency) {
      if (wordFrequency[word] > maxFrequency) {
        maxFrequency = wordFrequency[word];
        mostFrequentWords.length = 0;
        mostFrequentWords.push(word);
      } else if (wordFrequency[word] === maxFrequency) {
        mostFrequentWords.push(word);
      }
    }

    return {
      wordCount,
      sentenceCount,
      characterCount,
      mostFrequentWords,
    };
  }
};

const textExample =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium nulla et nisl eleifend congue. Fusce pellentesque eros sed felis finibus, in pulvinar erat tristique. Morbi vel ligula lacinia, mattis odio vitae, fermentum odio. Sed non sapien nunc. Sed id risus nec urna aliquet tincidunt. Sed nec posuere felis. Aliquam consectetur urna sit amet odio scelerisque, sit amet convallis est lacinia. Aliquam ullamcorper felis ut purus vestibulum, in sollicitudin lectus tristique.";

const analysisResult = analyzeText(textExample);
console.log("Word count:", analysisResult.wordCount);
console.log("Sentence count:", analysisResult.sentenceCount);
console.log("Character count:", analysisResult.characterCount);
console.log("Most frequent words:", analysisResult.mostFrequentWords);
