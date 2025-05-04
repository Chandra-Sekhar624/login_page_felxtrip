<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome</title>
</head>
<body>
    <?php
              $a = 100;  //integer
              $b = "100";//string.

              //WAP find out the greater no among them.
              /*
                if(condition){
                    Statement;
                }
                else if(condition){
                    Statement;
                }
                else {
                    Statement;
                }
              */
              if($a>$b){
                echo "Greater no is ".$a;
            }
            else if($b>$a){
                echo "Greater no is ".$b;
            }
            else {
                echo "Both Are Equal";
            }
    ?>

    <h1>Switch Case Example</h1>
    <!--

         switch(condition){
            case no:
            default:
         }
         case no has to match with condition.
     -->
    <?php 
      //  $d = date('D');
       $d = strtolower(date('D')); 
        //returns the first three letters of the day name
       //i.e mon,tue,thu,fri,sat
       echo $d;//Sat

      switch($d){
        case 'mon': echo "Working Days";
                    break;
        case 'tue': echo "Working Days";
                    break;
        case 'wed': echo "Working Days";
                    break;
        case 'thu':echo "Working Days";
                    break;
        case 'fri': echo "Working Days";
                    break;
        case 'sat': echo "Weekend Starts";
                    break;
        case 'sun': echo "Holiday";
                    break;
        default : echo "Something went wrong !";

      }

  //WAP check a number whether it is Odd or Even .
  //Even => which is divisible by 2 .
  //Odd => is only divisible by itself 
  $number =10;
  if($number ==0)
  {
    echo "Zero is neither Even nor odd";
  }else{

    if($number%2 ==0){
        echo $number." =Even";
  }
  else if($number %2!=0){
        echo $number." =Odd";
  }
}

//FAQ: What is the difference between == vs ===
//== is a comparison operator which only focus on value , if bth rhs and lhs are value wise same it returns true ,otherwise false.
//but it doesnot check the datatype at all.

//where as === is a Datacomparison operator , which returns true only 
//when both lhs and rhs are valuewise and datatype wise same, otherwise returns false.

  $p="10";//string
  $q=10;//ineteger

 // echo $p==$q ; //true, only value wise same to returns true.
 // echo $p===$q; //false,nothing. value wise same , but datatype wise different.

  //use of ternery Operator.
  //WAP find out greater no between 2 numbers.
  $a=10; $b=20;
  //(condition) ? true : false
  $big = ($a>$b) ? $a : $b;
  echo $big;

  //Basic Looping
  //WAP print 1st 10 natural numbers. [FAQ:]0-9
  $i=0;
  while($i<10){
    echo "<p>".$i."</p>";
    //$i++;
    //$i=$i+1;
    $i+=1;
  }
   
  for($i=0;$i<10;$i++){
    echo "<p>".$i."</p>";
  }

  $i=0;
  do{
    echo "<p>".$i."</p>";
   $i++;
  }while($i<10);

    ?>
    



</body>
</html>