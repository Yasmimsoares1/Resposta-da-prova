const Devolucoes = []

const livro1 = {
    Titulo1: "É assim que começa",
    Autor1: 'Collen Houver',
    Atrasado1: true
}

const livro2 = {
    Titulo: 'É assim que acaba',
    Autor: 'Collen Houver',
    Atrasado: false
}

const livro3 = {
    Titulo: 'Verity',
    Autor: 'Collen Houver',
    Atrasado: true
}

Devolucoes.splice({Titulo1, Autor1, Atrasado1})
//const Devolucoes = Object.keys(livro1)
//console.log ('', Devolucoes)
console.log(Devolucoes)