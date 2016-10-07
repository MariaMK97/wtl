<!DOCTYPE html>
<html>
    <head>
        <title>
            php example
        </title>
    </head>
   <body>
       <?php
       if($_POST){
           $n1=$_POST['n1'];
           $n2=$_POST['n2'];
           if(!empty($n1)&&!empty($n2)){
               for($i=$n1;$i<=$n2;$i++){
                   $k=2;
                   $flag=0;
            while($k<$i){
                if( $i % $k == 0 )
{
                    $flag=1;
                    break;
}
if($flag==0)
    echo $i."<br>";
}
            }
        }
           }
        else {
             echo "<span>Something is Missing!</span>";
               header('Refresh:2,url=mobile.php');
        }
        
       }
       else{
           ?>
       
        <form method="post" action="mobile.php">
            
            <input type="number" value="n1" name="n1"/>Number 1<br>
            <input type="number" value="n2" name="n2"/>Number 2<br>
            <input type="submit" id="submit" class="form-button" value="Submit Form" >
        </form>
       <?php        
       }
       ?>
       </body></html>
<?php
