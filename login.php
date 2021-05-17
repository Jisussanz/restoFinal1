<?php
  $user = $_POST['user'];
  $pass = $_POST['pass'];
  $bd = ['user'=>'admin','pass'=>'1234'];
  if ($bd['user']== $user && $bd['pass']==$pass) {
    header('location:index1.html');
  }elseif ($bd['user']!=$user) {
    print('Error! Usuario incorrecto');
  }elseif ($bd['pass']!=$pass) {
    print('Error! Contraseña Incorrecta');
  }else {
    print('Error! Revise los datos ingresados');
  }
 ?>
