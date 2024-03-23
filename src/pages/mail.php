<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/PHPMailer.php';
require '../PHPMailer/Exception.php';
require '../PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreEmpresa = $_POST['nombreEmpresa'];
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $ciudad = $_POST['location'];
    $mensaje = $_POST['message'];
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = "mail.idelek.com.ar";
        $mail->SMTPAuth = true;
        $mail->Username = "test@idelek.com.ar";
        $mail->Password = "IqJW9X.Q1[J)";
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom($email, 'Usuario');
        $mail->addAddress('info@idelek.com.ar');
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto';
        $mail->Body = "
            <p><b>Empresa:</b> $nombreEmpresa</p>
            <p><b>Nombre:</b> $nombre</p>
            <p><b>Email:</b> $email</p>
            <p><b>Teléfono:</b> $telefono</p>
            <p><b>Ciudad:</b> $ciudad</p>
            <p><b>Mensaje:</b> $mensaje</p>
        ";
        $mail->send();
        echo '¡Correo enviado con éxito!';
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/PHPMailer.php';
// require 'PHPMailer/Exception.php';

// $nombreEmpresa = $_GET['nombreEmpresa'];
// $nombre = $GET['name'];
// $email = $GET['email'];
// $telefono = $GET['phone'];
// $ciudad = $GET['location'];
// $mensaje = $GET['message'];

// $mail = new PHPMailer();

// $mail->isSMTP();
// $mail->Host = "mail.idelek.com.ar";
// $mail->SMTPAuth = true;
// $mail->Username = "test@idelek.com.ar";
// $mail->Password = "IqJW9X.Q1[J)";
// $mail->SMTPSecure = 'ssl'; 
// $mail->Port = 465; 

// $mail->setFrom($email, 'Prueba'); 
// $mail->addAddress('info@idelek.com.ar');
// $mail->Subject = "Mensaje web: $mensaje"; 

// $mail->Body = "Nombre de la empresa: $nombreEmpresa \n";
// $mail->Body .= "Nombre: $nombre \n";
// $mail->Body .= "Email: $email \n";
// $mail->Body .= "Teléfono: $telefono \n";
// $mail->Body .= "Ciudad: $ciudad \n";
// $mail->Body .= "Mensaje: $mensaje \n";

// if(!$mail->send()) {
//     echo "Error: " . $mail->ErrorInfo;
// } else {
//     echo "Email enviado";
// }

?>