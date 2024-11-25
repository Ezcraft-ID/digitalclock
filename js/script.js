function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = now.getSeconds();
    const dayIndex = now.getDay();
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;

    const separator = document.getElementById('separator');
    separator.classList.toggle('hidden', seconds % 2 === 0);

    days.forEach((day, index) => {
        document.getElementById(day).classList.remove('active');
        if (index === dayIndex) {
            document.getElementById(day).classList.add('active');
        }
    });
}

setInterval(updateClock, 1000);