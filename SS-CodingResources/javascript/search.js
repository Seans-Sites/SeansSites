document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent.toLowerCase();
            if (itemText.includes(filter)) {
                items[i].classList.remove('hidden');
            } else {
                items[i].classList.add('hidden');
            }
        }
    });
});
