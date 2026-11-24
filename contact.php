<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupération des données
    $nom = htmlspecialchars(trim($_POST["nom"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $sujet = htmlspecialchars(trim($_POST["sujet"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Ton adresse e-mail
    $destinataire = "tonadresse@gmail.com";

    // Sujet du mail
    $objet = "Nouveau message depuis votre portfolio";

    // Contenu
    $contenu = "
    Vous avez reçu un nouveau message.

    ----------------------------

    Nom : $nom

    Email : $email

    Sujet : $sujet

    Message :

    $message

    ----------------------------
    ";

    // En-têtes
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if(mail($destinataire, $objet, $contenu, $headers)){

        echo "
        <script>

            alert('Votre message a été envoyé avec succès.');

            window.location='contact.html';

        </script>
        ";

    }else{

        echo "
        <script>

            alert('Erreur lors de l\\'envoi.');

            history.back();

        </script>
        ";

    }

}

?>