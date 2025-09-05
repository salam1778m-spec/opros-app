// Данные для мужского опросника
const maleQuizData = [
    {
        id: 'has_children',
        type: 'radio',
        question: 'Есть ли у Вас родные дети?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'plan_children',
        type: 'radio',
        question: 'Планируете ли Вы в дальнейшем зачать ребенка?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'visit_sauna',
        type: 'radio',
        question: 'Посещаете ли вы регулярно бани, сауны и другие места с повышенной температурой окружающей среды?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'sex_start_age',
        type: 'number',
        question: 'Возраст начала половой жизни (полных лет)?',
        required: true,
        min: 12,
        max: 50
    },
    {
        id: 'unprotected_sex',
        type: 'radio',
        question: 'Были ли у вас в течение последних 12 месяцев половые контакты без использования презерватива?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'plan_conception',
        type: 'radio',
        question: 'Планируете ли Вы с супругой (партнёршей) зачатие ребенка в течение ближайших 12 месяцев?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'infertility_problem',
        type: 'radio',
        question: 'Было ли так, что у партнерши не наступала беременность более чем через 12 месяцев регулярной половой жизни без предохранения?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'partner_miscarriage',
        type: 'radio',
        question: 'Наступали ли у Ваших половых партнерш замершие беременности или самопроизвольные аборты?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'urination_problems',
        type: 'radio',
        question: 'Учащенное, болезненное или затрудненное мочеиспускание, выделения из мочеиспускательного канала?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'nocturia',
        type: 'radio',
        question: 'Регулярная, не связанная с приемом большого количества жидкости необходимость просыпаться ночью, чтобы помочиться?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'pelvic_pain',
        type: 'radio',
        question: 'Боли внизу живота (в промежности, в области мошонки, в половом члене)?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'genital_issues',
        type: 'radio',
        question: 'Беспокоящие состояния со стороны половых органов (изменение формы, высыпания, отделяемое из мочеиспускательного канала)?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'cryptorchidism',
        type: 'radio',
        question: 'Крипторхизм?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'hypospadias',
        type: 'radio',
        question: 'Гипоспадия?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'phimosis',
        type: 'radio',
        question: 'Фимоз?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'testicular_cysts',
        type: 'radio',
        question: 'Кисты или опухоли яичек или придатков яичка?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'prostatitis',
        type: 'radio',
        question: 'Простатит?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'epididymitis',
        type: 'radio',
        question: 'Эпидидимит?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'std_history',
        type: 'radio',
        question: 'Инфекции, передаваемые половым путем?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'urological_surgery',
        type: 'radio',
        question: 'Перенесенные урологические операции?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'mumps',
        type: 'radio',
        question: 'Эпидемический паротит (свинка)?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'autoimmune_diseases',
        type: 'radio',
        question: 'Аутоиммунные или ревматические заболевания, требующие приема глюкокортикоидов и/или цитостатиков?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'cancer_treatment',
        type: 'radio',
        question: 'Онкологические заболевания любой локализации, требующие химио- или лучевой терапии?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'diabetes',
        type: 'radio',
        question: 'Сахарный диабет I или II типа?',
        options: ['да', 'нет'],
        required: true
    },
    {
        id: 'other_diseases',
        type: 'radio',
        question: 'Заболевания других органов и систем (сердца и сосудов, легких, желудочно-кишечного тракта, почек, мочевого пузыря, щитовидной железы, нервной системы, аллергические состояния)?',
        options: ['да', 'нет'],
        required: true
    }
];

// Данные для женского опросника (базовый набор)
const femaleQuizData = [
    // ... (базовые вопросы для женщин, которые уже были)
];

// Загружаем опросник в контейнер при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем выбор пола в начало формы
    addGenderSelection();
});

function addGenderSelection() {
    const quizContainer = document.getElementById('quizContainer');
    const genderHtml = `
        <div class="quiz-question">
            <label>Ваш пол? <span style="color: #FFAFAC;">*</span></label>
            <div class="radio-group">
                <input type="radio" id="gender-male" name="gender" value="male" required>
                <label for="gender-male">Мужской</label>
            </div>
            <div class="radio-group">
                <input type="radio" id="gender-female" name="gender" value="female" required>
                <label for="gender-female">Женский</label>
            </div>
        </div>
    `;
    quizContainer.innerHTML = genderHtml;
    
    // Добавляем обработчик изменения пола
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener('change', function() {
            renderGenderSpecificQuestions(this.value);
        });
    });
}

function renderGenderSpecificQuestions(gender) {
    const quizContainer = document.getElementById('quizContainer');
    
    // Сохраняем выбор пола
    const genderSelection = quizContainer.querySelector('.quiz-question');
    
    // Очищаем остальные вопросы
    const questionsToRemove = quizContainer.querySelectorAll('.quiz-question:not(:first-child)');
    questionsToRemove.forEach(q => q.remove());
    
    // Добавляем соответствующие вопросы в зависимости от пола
    const quizData = gender === 'male' ? maleQuizData : femaleQuizData;
    
    quizData.forEach((questionData, index) => {
        const questionEl = document.createElement('div');
        questionEl.classList.add('quiz-question');

        // Создаем label для вопроса
        const label = document.createElement('label');
        label.textContent = questionData.question;
        if (questionData.required) {
            label.innerHTML += ' <span style="color: #FFAFAC;">*</span>';
        }
        questionEl.appendChild(label);

        // Создаем поле ввода в зависимости от типа
        switch (questionData.type) {
            case 'radio':
                questionData.options.forEach(option => {
                    const radioWrapper = document.createElement('div');
                    radioWrapper.classList.add('radio-group');

                    const radioInput = document.createElement('input');
                    radioInput.type = 'radio';
                    radioInput.name = questionData.id;
                    radioInput.value = option;
                    radioInput.id = `${questionData.id}-${option}`;
                    if (questionData.required) radioInput.required = true;

                    const radioLabel = document.createElement('label');
                    radioLabel.htmlFor = `${questionData.id}-${option}`;
                    radioLabel.textContent = option;

                    radioWrapper.appendChild(radioInput);
                    radioWrapper.appendChild(radioLabel);
                    questionEl.appendChild(radioWrapper);
                });
                break;

            case 'checkbox':
                questionData.options.forEach(option => {
                    const checkboxWrapper = document.createElement('div');
                    checkboxWrapper.classList.add('checkbox-group');

                    const checkboxInput = document.createElement('input');
                    checkboxInput.type = 'checkbox';
                    checkboxInput.name = questionData.id;
                    checkboxInput.value = option;
                    checkboxInput.id = `${questionData.id}-${option}`;

                    const checkboxLabel = document.createElement('label');
                    checkboxLabel.htmlFor = `${questionData.id}-${option}`;
                    checkboxLabel.textContent = option;

                    checkboxWrapper.appendChild(checkboxInput);
                    checkboxWrapper.appendChild(checkboxLabel);
                    questionEl.appendChild(checkboxWrapper);
                });
                break;

            case 'text':
            case 'number':
                const input = document.createElement('input');
                input.type = questionData.type;
                input.name = questionData.id;
                input.id = questionData.id;
                if (questionData.required) input.required = true;
                if (questionData.min) input.min = questionData.min;
                if (questionData.max) input.max = questionData.max;
                if (questionData.placeholder) input.placeholder = questionData.placeholder;
                questionEl.appendChild(input);
                break;

            case 'textarea':
                const textarea = document.createElement('textarea');
                textarea.name = questionData.id;
                textarea.id = questionData.id;
                textarea.rows = 4;
                if (questionData.required) textarea.required = true;
                if (questionData.placeholder) textarea.placeholder = questionData.placeholder;
                questionEl.appendChild(textarea);
                break;
        }

        quizContainer.appendChild(questionEl);
    });
}

function scrollToForm() {
    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
}

// Функция для показа страницы благодарности
function showThankYouPage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('thankYouPage').style.display = 'block';
    window.scrollTo(0, 0);
}

// Функция для возврата на главную страницу
function showMainPage() {
    document.getElementById('thankYouPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    window.scrollTo(0, 0);
    // Сброс формы
    document.getElementById('healthForm').reset();
    // Перезагрузка вопросов
    addGenderSelection();
}

// Обработчик отправки формы
function handleFormSubmit(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Собираем все данные формы
    const form = event.target;
    const formData = new FormData(form);

    // Собираем данные в объект для удобства (в реальности здесь будет отправка на сервер)
    const formValues = {};
    for (let [key, value] of formData.entries()) {
        // Для чекбоксов с одним именем нужно собирать значения в массив
        if (formValues[key]) {
            if (!Array.isArray(formValues[key])) {
                formValues[key] = [formValues[key]];
            }
            formValues[key].push(value);
        } else {
            formValues[key] = value;
        }
    }

    // В реальном проекте здесь будет fetch запрос на ваш сервер
    console.log('Данные анкеты:', formValues);

    // Показываем страницу благодарности
    showThankYouPage();

    // Если бы была отправка на сервер:
    // fetch('your-server-endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formValues)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   showThankYouPage();
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
    // });
}
