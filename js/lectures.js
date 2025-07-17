function openForm(topic) {
    document.getElementById('lectureInput').value = topic;
    document.getElementById('contactForm').classList.remove('hidden');
}

function closeForm() {
    document.getElementById('contactForm').classList.add('hidden');
}
