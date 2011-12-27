<?php
   /* 这边如果写成     $info = array('no1'=>'bsd', 'no2'=>'wuddy', 'no3'=>'xie'); */
   /* 同样要把html文件中必成     var show_info = eval('[' + ret + ']'); 都是返回一个对象 */
    $info = array(array('no1'=>'bsd', 'no2'=>'wuddy', 'no3'=>'xie'));
    $userinfo = json_encode($info);
    echo $userinfo;
?>