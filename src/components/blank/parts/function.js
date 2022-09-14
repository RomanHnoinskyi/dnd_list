 function chekspas (n) {
    return  Math.floor(Math.random()*20)+1 + n
    // return alert(ran)
}
 function push( n, text) {
    alert(`${text}  ${chekspas(n)}`)
}

export {chekspas, push}