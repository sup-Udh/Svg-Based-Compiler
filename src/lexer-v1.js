function lexerv1(){
    return code.split(/\s+/)
    .filter(function (t) {return t.length > 0})
    .map(function (t) {
        return isNaN(t)
        ?{type: 'word' , value: t}
        : {type: 'number' , value: t}
    })
}
lexerv1();