function* testGenerator(colours) {
    for(let colour of colours){
        yield colour;
    }
}

colours = ['red', 'blue', 'green'];
coloursGenerated = [];

for(let colour of testGenerator(colours)){
    coloursGenerated.push(colour);
}
console.log(coloursGenerated);