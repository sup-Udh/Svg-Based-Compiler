function lexer (code) {
    var code = "Paper 100"
    var lol =  code.split(/\s+/)
            .filter(function (t) { return t.length > 0 })
            .map(function (t) {

              return isNaN(t)
                      ? {type: 'word', value: t}
                      : {type: 'number', value: t}
            })
            console.log(lol)
            
  }
  lexer();