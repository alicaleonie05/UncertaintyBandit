<?php
print('save_data is opened!');
if (isset($_POST['postresult']) && isset($_POST['postfile'])) {

    $data = $_POST['postresult'];
    $filename = $_POST['postfile'];
    // Check if the file exists
    if (!file_exists($filename)) {
        // If the file doesn't exist, create it and write the data
        file_put_contents($filename, $data);
        print('file did not exist');
        echo 'File created and data saved successfully.';
    } else {
        // If the file exists, append the data
        file_put_contents($filename, $data, FILE_APPEND);
        echo 'Data appended to the existing file.';
    }
} else {
    echo 'Error: POST data missing.';
}
?>
