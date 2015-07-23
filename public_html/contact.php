<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Suntalee';
    $to = 'contact@suntalee.com';
    $subject = 'Enquiry';
    $human = $_POST['human'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit'] && $human == '4') {
        if (mail ($to, $subject, $body, $from)) {
      echo '<h1>Your message has been sent!</h1>';
  } else {
      echo '<h1>Something went wrong, go back and try again!</h1>';
  }
    } else if ($_POST['submit'] && $human != '4') {
  echo '<h1>You answered the anti-spam question incorrectly!</h1>';
    }
?>
