<?php
   /* ������д��     $info = array('no1'=>'bsd', 'no2'=>'wuddy', 'no3'=>'xie'); */
   /* ͬ��Ҫ��html�ļ��бس�     var show_info = eval('[' + ret + ']'); ���Ƿ���һ������ */
    $info = array(array('no1'=>'bsd', 'no2'=>'wuddy', 'no3'=>'xie'));
    $userinfo = json_encode($info);
    echo $userinfo;
?>