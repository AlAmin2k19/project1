function All_Counts()
 {
var TextVar = document.getElementById('User_Enter').value;
if (TextVar.length==0) {
 document.getElementById('User_Enter').focus();
 alert("Sorry cannot be empty");
 }
else { 
document.getElementById('word_string').innerHTML = "YOUR INPUTED SENTENCE IS: <br />" 
+ "<font color='red'>" +TextVar + ".</font>";
document.getElementById('vowels').innerHTML = "<font color='green'>Number of Vowels :</font> " 
 + vowel_count(TextVar);
document.getElementById('consonants').innerHTML = " <font color='green'>Number of Consonants :</font> " 
 + consonants_count(TextVar);
 document.getElementById('space').innerHTML = " <font color='green'>Number of space :</font> " 
 +space_count(TextVar);
 document.getElementById('digit').innerHTML = " <font color='green'>Number of digit :</font> " 
 +digit_count(TextVar);
 
 }
}
function clear_now()
{
 document.getElementById('User_Enter').value="";
 document.getElementById('word_string').innerHTML="";
 document.getElementById('vowels').innerHTML="";
 document.getElementById('consonants').innerHTML="";
 document.getElementById('space').innerHTML="";
 document.getElementById('digit').innerHTML="";
 document.getElementById('User_Enter').focus();
} 
 
function vowel_count(str1)
{
 var vowel_list = 'aeiouAEIOU';
 var vcount = 0;
 
 for(var x = 0; x <str1.length ; x++)
 {
if (vowel_list.indexOf(str1[x]) !== -1)
{
 vcount += 1;
}
 
 }
 return vcount;
}
function consonants_count(str1)
{
 var consonant_list = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
 var c_count = 0;
 
 for(var x = 0; x <str1.length ; x++)
 {
if (consonant_list.indexOf(str1[x]) !== -1)
{
 c_count += 1;
}
 
 }
 return c_count;
}
function space_count(str1)
{
    var space_list = ' ';
    var s_count = 0;
    
    for(var x = 0; x <str1.length ; x++)
    {
   if (space_list.indexOf(str1[x]) !== -1)
   {
    s_count += 1;
   }
    
    }
    return s_count;
   }
   function digit_count(str1)
{
    var digit_list = '0123456789';
    var s_count = 0;
    
    for(var x = 0; x <str1.length ; x++)
    {
   if (digit_list.indexOf(str1[x]) !== -1)
   {
    s_count += 1;
   }
    
    }
    return s_count;
   }
   

