 
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'mhassaanfarooqi190@gmail.com'; // Replace with your email address
    $subject = 'Contact Form Submission';
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Send the email
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        http_response_code(200);
        echo 'Email sent successfully.';
    } else {
        http_response_code(500);
        echo 'Email sending failed.';
    }
} else {
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>
