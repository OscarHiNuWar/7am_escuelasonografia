<?php

if($_POST['name_control']==""){
	echo "<div class='respuesta-nombre'>Necesitamos su nombre</div>";
	
	} 
	
if($_POST['tel_control']==""){
	echo "<div>Necesitamos su teléfono</div>";
	
	}
if($_POST['mail_control']==""){
	echo "<div>Necesitamos su mail</div>";
	
	}
	
else{
//$suma = $_POST['tel_control'] + $_POST['name_control'];

//Aca deberia ir el mail de la empresa
    $mailempresa= "";

/*echo $mensaje = 'Nombre: '.$_POST['name_control'].'<br>Telefono: '.$_POST['tel_control'].'<br>E-mail: '.$_POST['email_control'].'';*/

/*echo*/ $mensaje =
'<table width="400" border="0" cellpadding="0" cellspacing="0">
	
  <tr>
    <td width="68"><strong>Curso:</strong></td>
    <td width="132">&quot;'.$_POST['doppler'].'&quot;</td>
  </tr>
  <tr>
    <td width="68"><strong>Nombre:</strong></td>
    <td width="132">&quot;'.$_POST['name_control'].'&quot;</td>
  </tr>
  <tr>
    <td><strong>Telefon:</strong></td>
    <td>&quot;'.$_POST['tel_control'].'&quot;</td>
  </tr>
  <tr>
    <td><strong>E-mail:</strong></td>
    <td>&quot;'.$_POST['email_control'].'&quot;</td>
  </tr>
</table>

';

$asunto = "Solicitud de Información Escuela";

$cabeceras  = "MIME-Version: 1.0\n";
$cabeceras .= "Content-type: text/html; charset=utf-8\n";
$cabeceras .= "To: ".$_POST['name_control']." <jairo.cuesta@agencia7am.com>\n";
$cabeceras .= "From: Escuela Sonografia SD <no-replay@escueladesonografiadesantodomingo.com>\n";
 
//var_dump($_POST);

mail($_POST['email'] , $asunto, $mensaje, $cabeceras);
/*echo ' <script> window.location="gracias.php"; </script>';*/

}
?>