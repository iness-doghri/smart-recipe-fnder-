function findRecipes()
{
    var egg=document.getElementById("egg").checked ; 
    var cheese=document.getElementById("cheese").checked ; 
    var tomato = document.getElementById("tomato").checked ; 
    if (egg && cheese)
    {
      document.getElementById("result").innerHTML="Omlette " ; 

    }
    else if (tomato)
    {
        document.getElementById("result").innerHTML="tomato salade " ;
    }
    else 
        {
   document.getElementById("result").innerHTML="No recipe found " ; 
}

}