function throttle(func, delay){
    let lastTime = 0
    return function(...args){
        const currentTime = new Date().getTime()
        if(currentTime - lastTime > delay){
            lastTime = currentTime
            func.apply(this, args)
        }
    }
}

//example usage
function updateUI(){
    //update the user interface here
}

const throttledUpdateUI = throttle(updateUI, 500)
window.addEventListener('scroll', throttledUpdateUI)