function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour clock, so 0 should be 12

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
