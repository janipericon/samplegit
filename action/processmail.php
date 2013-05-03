<?php

$fullname = $_REQUEST['fullname'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$companyaddress = $_REQUEST['companyaddress'];
$message = $_REQUEST['message'];

	$body = "<table width='500' border='0' cellpadding='0' cellspacing='0'><tr>
					<td width='159'>Name</td>
					<td width='27'>:</td>
					<td width='314'>".$fullname."</td>
					</tr>
					<tr>
					<td width='159'>Emai</td>
					<td width='27'>:</td>
					<td width='314'>".$email."</td>
					</tr>
					<tr>
					<td width='159'>Company</td>
					<td width='27'>:</td>
					<td width='314'>".$company."</td>
					</tr>				
					<tr>
					<td width='159'>Company Address</td>
					<td width='27'>:</td>
					<td width='314'>".$companyaddress."</td>
					</tr>					
					<tr>
					<td width='159'>message</td>
					<td width='27'>:</td>
					<td width='314'>".$message."</td>
					</tr>";

for($i=0;$i<=10;$i++)
{
	if($_POST["category"][$i] !='' && $_POST["item"][$i] && $_POST["quantity"][$i])
	{
		$category =  $_POST["category"][$i];
		$item =  $_POST["item"][$i];
		$quantity =  $_POST["quantity"][$i];	
		$j=$i+1;
		$body .="<tr><td width='159'>#$j $item($category)</td>
		<td width='27'>:</td>
		<td width='314'>".$quantity."</td>
		</tr>";	
	}
	
}


$body .="</table>";
	
	$to ='enquiry@huphengfresh.com.sg';
 	//$to = 'Enquiries<bala@wishbone.com.sg>';
	$subject = 'Hupheng Enquiries Form / ' . $cname;
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'Cc: <bala@wishbone.com.sg>' . "\r\n";
 	$headers .= 'From: Hupheng Enquiry Form <'.$email.'>' . "\r\n";			
	$headers .= 'X-Mailer: PHP/' . phpversion();
	
	if (mail($to, $subject, $body, $headers))
	{
 		echo "success";
		
	}
	else
	{
		echo "error";
	}
 

?>