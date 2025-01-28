document.getElementById('click').onclick = function()
{
    let validationCheck = true;
    
     let testPassword = document.getElementById('password').value;

    if(testPassword.length < 8)
    {
        document.getElementById('outputLength').innerHTML = "Password must be at least 8 characters long.";
        validationCheck = false;
    }
    else
    {
        document.getElementById('outputLength').innerHTML = "";
    }

    let tracker = 0;
    for(let i = 0; testPassword.length > i; i++)
    {
        let current = testPassword.charAt(i);
        let specialChar = "!@#$%^&*()_+=-{}[]|\\\";:?></";
        if(!specialChar.includes(current))
        {
          tracker++;
        }
    }
    if (tracker == testPassword.length)
    {
          document.getElementById('outputSpecial').innerHTML = "Password must include at least one special character (!,@,#, ect.).";
          validationCheck = false;
    }
    else
    {
          document.getElementById('outputSpecial').innerHTML = "";
    }

    let search = testPassword.search(" ");
    if(search != -1){
        document.getElementById('outputSpace').innerHTML = "Password must not contain spaces.";
        validationCheck = false;
    }
    else
    {
        document.getElementById('outputSpace').innerHTML = "";

    }


    // -------------------- 4. Upper Case Letter --------------------
    let upperPass = false;
    
    for (let i = 0; i < testPassword.length; i++) 
     {
          if (testPassword.charAt(i) != testPassword.charAt(i).toLowerCase())
          {
               upperPass = true;
          } 

     }

     if (upperPass == false)
     {
          document.getElementById('outputUpper').innerHTML = "Password must include at least one uppercase letter.";
          validationCheck = false;
     }
     else
     {
          document.getElementById('outputUpper').innerHTML = "";
     }


     // -------------------- 5. Lower Case Letter --------------------
     let lowerPass = false;

     for (let i = 0; i < testPassword.length; i++)
     {
          if ( testPassword.charAt(i) != testPassword.charAt(i).toUpperCase())
          {
               lowerPass = true;
          }

     }

     if (lowerPass == false)
     {
          document.getElementById('outputLower').innerHTML = "Password must include at least one lowercase letter.";
          validationCheck = false;
     }
     else
     {
          document.getElementById('outputLower').innerHTML = "";
     }


     // -------------------- 6. Digit --------------------
     let numPass = 0;
     for (let i = 0; i < 10; i++)
     {
          if(testPassword.includes(i))
          {
               numPass ++;
               break;
          }
     }

     if (numPass === 0)
     {
          document.getElementById('outputDigit').innerHTML = "Password must include at least one numeric digit.";
          validationCheck = false;
     }
     else
     {
          document.getElementById('outputDigit').innerHTML = "";
     }


     // -------------------- Validation Confirmation --------------------
     if(validationCheck === true)
     {
          document.getElementById('isValid').innerHTML = "Password is valid!";
          document.getElementById('isValid').style.color = "green";
     }
     else
     {
          document.getElementById('isValid').innerHTML = "Password is invalid:"
          document.getElementById('isValid').style.color = "red";
     }

}