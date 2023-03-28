for(let i = 0; i < 13; i++){ 
    let a = ((2 + i) + (2**i) - 2);
    if(a<4000) {
        document.write(a + ",<br>");
    } else {
        document.write(a + "<br>");
    }
}