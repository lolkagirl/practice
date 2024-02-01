var currentAreaIndex = 1;
var areas = document.querySelectorAll('.text-area');

function showNextArea() {
    if (currentAreaIndex < areas.length) {
        areas[currentAreaIndex - 1].classList.add('hidden');
        areas[currentAreaIndex].classList.remove('hidden');
        currentAreaIndex++;
    } else {
        // Если достигнут конец, возвращаемся к началу
        currentAreaIndex = 1;
        // Показываем первую область, а остальные скрываем
        for (var i = 0; i < areas.length; i++) {
            if (i === 0) {
                areas[i].classList.remove('hidden');
            } else {
                areas[i].classList.add('hidden');
            }
        }
    }
}

function showPreviousArea() {
    if (currentAreaIndex > 1) {
        areas[currentAreaIndex - 1].classList.add('hidden');
        areas[currentAreaIndex - 2].classList.remove('hidden');
        currentAreaIndex--;
    } else {
        // Если достигнут начало, переходим к концу
        currentAreaIndex = areas.length;
        // Показываем последнюю область, а остальные скрываем
        for (var i = 0; i < areas.length; i++) {
            if (i === areas.length - 1) {
                areas[i].classList.remove('hidden');
            } else {
                areas[i].classList.add('hidden');
            }
        }
    }
}