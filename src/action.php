<?php
if (isset($_POST)) {

  $to = "nicolas.doudouu@gmail.com";

// Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
    $headers .= 'From: Portfolio <nicolas.doudouu@gmail.com>' . "\r\n";
//    $headers .= 'Cc: welcome@example.com' . "\r\n";
//    $headers .= 'Bcc: welcome2@example.com' . "\r\n";

//  Création de la variable $htmlContent dans le template pour le mail
    $message = 
    "<p>Nom : " . $_POST["nom"] . "</p>".
    "<p>Email : " . $_POST["email"] . "</p>".
    "<p>Sujet : " . $_POST["subject"] . "</p>".
    "<p>Message : " . $_POST["message"] . "</p>";

// Send email
    if(mail($to, "Mail de contact", $message, $headers)){
        echo 'OK';
    }else{
        echo 'Erreur à l\'envoi du message : '.error_get_last()["message"];
    }
    die();
}else{
    echo "Erreur à l'envoi du message : ";
}