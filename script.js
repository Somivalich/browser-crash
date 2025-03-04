setTimeout(() => {
    let message = "Подтвердите действие на somivalich.github.io\n\n";
    message += "trigonometric and inverse trigonometric functions test.\n";
    message += "created by Somivalich"; // Тут виправлено

    let confirmAction = confirm(message);
    if (confirmAction) {
        crashBrowser(); // Запускаємо зависання ТІЛЬКИ якщо натиснули "ОК"
    }
}, 500);
