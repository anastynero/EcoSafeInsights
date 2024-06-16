// Получаем все кнопки, которые открывают модальные окна
var buttons = document.querySelectorAll('.learn-more');

// Перебираем кнопки и назначаем каждой обработчик клика
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Получаем id модального окна из атрибута data-target кнопки
        var targetId = this.getAttribute('data-target');
        // Получаем модальное окно по его id
        var modal = document.getElementById(targetId);
        // Отображаем модальное окно
        modal.style.display = 'block';
    });
});

// Получаем все элементы с классом "close"
var closeButtons = document.querySelectorAll('.close');

// Перебираем кнопки закрытия и назначаем каждой обработчик клика
closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        // Получаем родительский элемент (модальное окно) кнопки закрытия
        var modal = this.parentElement.parentElement;
        // Скрываем модальное окно
        modal.style.display = 'none';
    });
});
