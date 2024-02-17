<?php
// if($_SERVER['REQUEST_METHOD'] != 'POST' ){
//     header("Location: index.html" );
// }

// require 'phpmailer/PHPMailer.php';
// require 'phpmailer/Exception.php';

// use PHPMailer\PHPMailer\PHPMailer;

// $nombreEmpresa = $_POST ['nombreEmpresa'];
// $nombre = $_POST ['name'];
// $email = $_POST ['email'];
// $telefono = $_POST ['phone'];
// $ciudad = $_POST ['location'];
// $mensaje = $_POST ['message'];

// $body = <<<HTML
//     <h1>Contacto desde la página web</h1>
//     <p>De: $nombre $apellido / $email</p>
//     <p>Numero de teléfono: $telefono y ciudad: $ciudad</p>
//     <h2>Mensaje</h2>
//     $mensaje
// HTML;

// $mailer = new PHPMailer();
// $mailer->setFrom( $email, "$nombre $apellido" );
// $mailer->addAddress('dademaria10@gmail.com','Sitio web');
// $mailer->Subject = "Mensaje web: $mensaje";
// $mailer->msgHTML($body);
// $mailer->AltBody = strip_tags($body);
// $mailer->CharSet = 'UTF-8';


// $rta = $mailer->send( );


// Configuración de PHPMailer
require_once "class.phpmailer.php";
require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;

// Recibir datos del formulario
$nombreEmpresa = $_POST['nombreEmpresa'];
$nombre = $_POST['name'];
$email = $_POST['email'];
$telefono = $_POST['phone'];
$ciudad = $_POST['location'];
$mensaje = $_POST['message'];

$mail = new PHPMailer(); // Crea un objeto PHPMailer

// Configuraciones de SMTP (modifica con los datos de tu servidor)
$mail->isSMTP();
$mail->Host = "mail.idelek.com.ar"; // Reemplaza con tu servidor SMTP
$mail->SMTPAuth = true;
$mail->Username = "test@idelek.com.ar"; // Reemplaza con tu usuario SMTP
$mail->Password = "IqJW9X.Q1[J)"; // Reemplaza con tu contraseña SMTP
$mail->SMTPSecure = 'ssl'; // O 'tls' según tu servidor
$mail->Port = 465; // O 587 según tu servidor

// Configuración del mensaje
$mail->setFrom('test@idelek.com.ar', 'Prueba'); // Remitente
$mail->addAddress($email); // Destinatario
$mail->Subject = "Mensaje web: $mensaje"; // Asunto

// Contenido del mensaje
$mail->Body = "Nombre de la empresa: $nombreEmpresa \n";
$mail->Body .= "Nombre: $nombre \n";
$mail->Body .= "Email: $email \n";
$mail->Body .= "Teléfono: $telefono \n";
$mail->Body .= "Ciudad: $ciudad \n";
$mail->Body .= "Mensaje: $mensaje \n";

// Enviar el email
if(!$mail->send()) {
    echo "Error al enviar el email: " . $mail->ErrorInfo;
} else {
    echo "Email enviado exitosamente!";
// }
?>
