var namepattern=/^[a-zA-Z]+[ ][a-zA-Z]+$/;
var phonepattern = /^\d{10}$/;
var emailpattern=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var idpattern=/^\d{6}$/;


function validateForm()

	{

 	 var x=document.forms["form1"]["fullname"];
     if (x.value=="")
	   {
          alert("Please enter the Fullname :");
	      x.focus();
          return false;

	   }
	  else if(x.value.length>20)
	   {
  			   alert("Full name cannot be greater than 20 characters.");
  		   x.value="";
           x.focus();
           return false;
	   }

	  else if ((!namepattern.test(x.value)))
	  {
		   alert("Full name should contain only alphabets.");
		   x.value="";
		   x.focus();
      	   return false;
      }
      
    if((document.form1.gender[0].checked==false)&&(document.form1.gender[1].checked==false))
	 {
	  document.form1.gender[0].focus();
	  alert("Please select a gender.");
	  return false;
	 }

      x=document.form1.contctno;
      if(x.value=="")
      {
      	alert("Please enter the Contact number.");
    	x.value="";
        x.focus();
        return false;
      }
      else if(isNaN(x.value))
      {
      	alert("Contact number should contain only digits.");
        x.value="";
        x.focus();
        return false;
      }
      else if(x.value.length!=10)
      {
        alert("Contact number should contain only 10 digits.(Mobile number)");
        x.value="";
        x.focus();
        return false;
	 }
	 else if(!phonepattern.test(x.value))
	 {
	  alert("Invalid Contact number.");
      x.value="";
	  x.focus();
	  return false;
	 }

	 x=document.form1.email;
	 if(!emailpattern.test(x.value))
	 {
	  alert("Invalid email id.");
	  x.value="";
	  x.focus();
	  return false;
	 }

	 if((document.form1.subjects[0].checked == false )&&(document.form1.subjects[1].checked == false)&&(document.form1.subjects[2].checked	== false)
	 	 &&(document.form1.subjects[3].checked == false )&&(document.form1.subjects[4].checked == false))
	 {
	  document.form1.subjects[0].focus();
	  document.form1.subjects[1].focus();
	  document.form1.subjects[2].focus();
	  document.form1.subjects[3].focus();
	  document.form1.subjects[4].focus();
	  alert('Please select the subjetcs to continue.');
 	  return false;
 	 }


 	}
	 
	function confirmreset()
	 {
	  return confirm("Do you want to reset the form?");
	 }