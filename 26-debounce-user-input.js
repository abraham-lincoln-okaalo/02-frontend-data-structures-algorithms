function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeOut(() => {
            func.apply(this, args)
        }, delay)
    }
}

//example usage
const inputField = document.querySelector('#inputField')

function handleInput(){
    //Handle user input here
}

const debouncedInputHandler = debounce(handleInput, 500)
inputField.addEventListener('input', debouncedInputHandler)