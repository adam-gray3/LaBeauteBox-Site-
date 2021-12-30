<?php
  if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['number'])){
    $name = $_POST['name'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $to = 'asg-dev@outlook.com';
    $subject = 'Website Form Submission';
    $body = '<html>
              <body>
                <h2>Form Submission</h2>
                <p>Name: '.$name'</p>
                <p>Email: '$email'</p>
              </body>
            </html>';

    //headers
    $headers = "From: ".$name."<".$email.">\r\n";
    $headers = "Reply-To: ".$email."\r\n";
    $headers = "MIME-Version: 1.0\r\n";
    $headers = "Contnet-Type: text/html; charset=utf-8";

    //sending email
    $send = mail($to, $subject, $body, $headers);


  }
?>
