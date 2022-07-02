<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$success = mail("furchinchillas@gmail.com", $data['title'], $data['message'],"From: info@fur-chins.ru \r\n");

if (!$success) {
  http_response_code(500);
}
