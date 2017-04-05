<?php

$data = file_get_contents('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101%2C-73.89188969999998&destinations=40.6905615%2C-73.9976592&key=AIzaSyB6ky0s6kmaxH15hsxsNHKuZeI6n_OG2eA');

echo $data;

?>