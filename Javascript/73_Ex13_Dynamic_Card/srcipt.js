
let card = ""

function createCard(title, cName, views, monthsOld, duration, thumbLink) {
   
     if (views >= 1000000){
        views = (views / 1000000).toFixed(1);
        views+="M";
    }
    else if(views >= 1000){
        views=(views/1000).toFixed(1);
        views+="K"
    }
    card += `
 <div class="card ">
        <div class="image ">
            <img src="${thumbLink}" alt="">
            <div class="timestamp">${duration}</div>
        </div>
        <div class="card-content">
            <div class="title">${title}</div>
            <div class="stats">
                ${cName} &nbsp;&bull;&nbsp; ${views} view &nbsp;&bull;&nbsp; ${monthsOld} months ago
            </div>
            
        </div>
    </div>
 `;
    document.body.innerHTML = card;

}


let link = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ";




createCard("Introduction to Backend | Sigma Web Dev Video #2",
    "CodeWithHarry", 1001, 7, "31:22", link);
    
    createCard(
        'Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 
        'CodeWithHarry', 
        7230000, 
        2, 
        '31:20',
        'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw'
    );
    
    createCard(
        'Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3', 
        'CodeWithHarry', 
        231000,
        2, 
        '11:12' ,
        'https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q'
    );
    createCard(
        'Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4', 
        'CodeWithHarry', 
        196000,
        2, 
        '19:34',
        'https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXT49aypaXDTfq5Y813UJXZZcVXA'
    );
    createCard(
        'Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5', 
        'CodeWithHarry', 
        191000,
        2, 
        '18:20',
        'https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCImJKujntN4XOIJVBfI5R8dzszzg'
    );
    
