const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search () {
    const inputValue = input.value;
    const li = document.getElementsByTagName("li");
    for(i = 0; i < li.length; i++){
        if(li[i].innerHTML.toLowerCase().includes(inputValue)){ //if the inputted letters are in the words on our list, we keep displaying the words
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none"; //when a list item doesnt include anythign from the user's input we set its display style to none so it disappears. 
        }
    }
}