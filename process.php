<?php

$errors = [];
$data = [];

if (empty($_POST['email'])) {
    //error message
    $errors['email'] = 'Email is required.';
}


if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else { 
    $data['success'] = true;

    //success message
    $data['message'] = 'Success!';


    //put email to file
    $email = $_POST['email'];  
    $file=fopen('email.txt','a+');
     fputs($file,$_POST['email']."\n");
     fclose($file);
}

echo json_encode($data);

?>