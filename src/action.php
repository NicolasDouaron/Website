<?php
if (isset($_POST)) {

  $to = "nicolas.doudouu@gmail.com";

  $from = 'nicolas.doudouu@gmail.com';
//  Création de la variable $htmlContent dans le template pour le mail
    $message = 
    "<p>Nom : " . $_POST["nom"] . "</p>".
    "<p>Email : " . $_POST["email"] . "</p>".
    "<p>Sujet : " . $_POST["subject"] . "</p>".
    "<p>Message : " . $_POST["message"] . "</p>";

// Send email
    if(send_mail($to, $from, "Mail de contact", $message)){
        header('location: /');
    }else{
        echo 'Erreur à l\'envoi du message : '.error_get_last()["message"];
    }
    die();
}else{
    echo "Erreur à l'envoi du message : ";
}

function send_mail($to,$from,$subject,$msg){
  
  $headers ="MIME-Version: 1.0 
";
  $headers.="from: $from  $subject  
";
  $headers.="Content-type: text/html;charset=utf-8 
";
  $headers.="X-Priority: 3
";
  $headers.="X-Mailer: smail-PHP ".phpversion()."
";
  $msg    ='
  <div style="text-align:left">
  <h2>'.$subject.'</h2>
  '.$msg.'
  </div>
  ';

  if( mail($to,$subject,$msg,$headers) ){
      return true;
  }else{
      return false;
  }
}