// ClassName

let value = document.getElementById('demo')
console.log(value);

function colors(){
    if(value.className == 'heading'){
        value.className = 'heading-1'
    }
    else
    {
        value.className = 'heading'
    }
}

// click()