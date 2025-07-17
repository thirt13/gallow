<?php
$success = false;
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $lecture = htmlspecialchars($_POST['lecture'] ?? '');
    $message = "Jméno: $name\nE-mail: $email\nPřednáška: $lecture";
    // In real application you could send email here
    // mail('info@example.com', 'Poptávka přednášky', $message);
    $success = true;
}
?>
<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<title>Přednášky pro základní školy</title>
<link rel="stylesheet" href="css/lectures.css">
</head>
<body>
<h1>Přednášky pro základní školy</h1>
<?php if ($success): ?>
<p class="success">Děkujeme za Vaši poptávku!</p>
<?php endif; ?>
<section class="lectures">
    <article>
        <h2>Kritické myšlení</h2>
        <p>Žáci se naučí rozpoznat argumentační fauly a pracovat s informacemi.</p>
        <button onclick="openForm('Kritické myšlení')">Mám zájem</button>
    </article>
    <article>
        <h2>Umění prezentace</h2>
        <p>Praktické tipy jak zaujmout publikum a prezentovat své myšlenky.</p>
        <button onclick="openForm('Umění prezentace')">Mám zájem</button>
    </article>
    <article>
        <h2>Umělá inteligence</h2>
        <p>Seznámení s principy moderní AI a jejího využití ve světě.</p>
        <button onclick="openForm('Umělá inteligence')">Mám zájem</button>
    </article>
</section>
<div id="contactForm" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeForm()">&times;</span>
        <form method="post">
            <input type="hidden" name="lecture" id="lectureInput">
            <label for="name">Jméno:</label>
            <input type="text" name="name" id="name" required>
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" required>
            <button type="submit">Odeslat</button>
        </form>
    </div>
</div>
<script src="js/lectures.js"></script>
</body>
</html>
