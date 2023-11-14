<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["name"];
  $correo = $_POST["email"];
  $telefono = $_POST["phone"];
  $mensaje = $_POST["message"];

  $destinatario = "jluisrobles@unicesar.edu.co"; // Reemplaza con tu dirección de correo electrónico

  $asunto = "Mensaje de contacto del formulario";
  $contenido = "Nombre: $nombre\nCorreo: $correo\nTeléfono: $telefono\nMensaje: $mensaje";

  // Envía el correo
  mail($destinatario, $asunto, $contenido);

  // Redirige al usuario a una página de confirmación o muestra un mensaje de éxito
  header("Location: index.html");
  exit();
} 
?>

<?php
// $name = $_POST['name'];
// $mail = $_POST['mail'];
// $phone = $_POST['phone'];
// $message = $_POST['message'];

// $header = 'From: ' . $mail . " \r\n";
// $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
// $header .= "Mime-Version: 1.0 \r\n";
// $header .= "Content-Type: text/plain";

// $message = "Este mensaje fue enviado por: " . $name . " \r\n";
// $message .= "Su e-mail es: " . $mail . " \r\n";
// $message .= "Teléfono de contacto: " . $phone . " \r\n";
// $message .= "Mensaje: " . $_POST['message'] . " \r\n";
// $message .= "Enviado el: " . date('d/m/Y', time());

// $para = 'jluisrobles@unicesar.edu.co';
// $asunto = 'Mensaje de... (Escribe como quieres que se vea el remitente de tu correo)';

// mail($para, $asunto, utf8_decode($message), $header);

// header("Location:index.html");
?>

