// IPO Pattern- Input Process Output

// Constants and Variables (State)
 let skills; 

// Cached Element References
 const $button = $("button");
 const $ul = $("ul");
 const $input = $("input");


// Event Listeners
    $button.on('click', handleAddSkill);
    $ul.on('click', handleDelete);

// Functions

init();
function init(){
    skills = [];
    render();
}

function handleAddSkill(){
    // store the value from the input tag inside a local variable
        const skill = $input.val();
    // check to make sure we have skill data
        if(skill){
            //create the UI for a skill
            const $skill = $(`<li><span>X</span> ${skill}</li>`);
            // push the skill UI into the skills list
            skills.push($skill);
            // clear the input tag's value
            $input.val("");
            // call render()
            render(); 
        } else return;
}

function handleDelete(){

    $ul.on('click', 'li', function() {
        $(this).fadeOut(300, function() {
            $(this).remove();
        });
    });
    render();

}

function render(){ 
  // take the list of skills in the skills array and add them to the UL tag
  if(!skills.length){
    $ul.css("margin-bottom", "30px");
  } else{
    $ul.css("margin-bottom", "0px");
  }

  $ul.html(skills);
 
}