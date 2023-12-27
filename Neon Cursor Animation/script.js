function setupCanvas(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

setupCanvas();

window.onresize = setupCanvas;

const pointer = {
    // poniter is in the center
    x : window.innerWidth/2,
    y: window.innerHeight/2
}

//passing event object
function updatePoinerPosition(e){
    pointer.x = e.clientX;
    pointer.y = e.clientY;
}

window.onclick = updatePoinerPosition;
window.onmousemove = updatePoinerPosition;

const ctx = canvas.getContext("2d");

const params = {
    spring : 0.6,
    pointCount : 50
}

const trail = new Array(params.pointCount);
//this array is holding the property of differents points

for(let i =0 ; i < trail.length ; i++){
    trail[i] = {
        x : pointer.x,
        y : pointer.y,
        dy : 0, //delay y
        dx: 0 //delay x
    }
}

function draw(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);

    trail.forEach(( p , idx) =>{
        const prev = idx === 0 ? pointer : trail[idx-1]; 
        //if index is 0 then delay zero if not then previous point delay
        const spring = idx === 0 ? 0.4 * params.spring : params.spring;

        p.dx = (prev.x - p.x) * spring ;
        p.dy = (prev.y - p.y) * spring;

        p.x += p.dx;
        p.y += p.dy;

        // ctx.fillStyle = "red";
        // ctx.fillStyle = `hsl(${(idx * 360) /trail.length -30}, 100% ,50%)`; //for ranbow
        ctx.fillStyle = `hsl(${(idx * 80) /trail.length -30}, 100% ,50%)`;
        ctx.beginPath();
        // ctx.arc(p.x , p.y , 10 ,  0   , Math.PI *2);
        ctx.arc(p.x , p.y , 10 - idx / 5,  0   , Math.PI *2);
        ctx.fill();
                        //radius angle
    });


    requestAnimationFrame(draw); // to run the function 60 times(fps)
}
draw();