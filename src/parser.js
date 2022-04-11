function parser (tokens) {
    var AST = {
      type: 'Drawing',
      body: []
    }
    // extract a token at a time as current_token. Loop until we are out of tokens.
    while (tokens.length > 0){
      var current_token = tokens.shift()
  
      // Since number token does not do anything by it self, we only analyze syntax when we find a word.
      if (current_token.type === 'word') {
        switch (current_token.value) {
          case 'Paper' :
            var expression = {
              type: 'CallExpression',
              name: 'Paper',
              arguments: []
            }
            // if current token is CallExpression of type Paper, next token should be color argument
            var argument = tokens.shift()
            if(argument.type === 'number') {
              expression.arguments.push({  // add argument information to expression object
                type: 'NumberLiteral',
                value: argument.value
              })
              AST.body.push(expression)    // push the expression object to body of our AST
            } else {
              throw 'Paper command must be followed by a number.'
            }
            break
          case 'Pen' :
            // If pen do the Following
            console.log("user - pen lol")
          case 'Line':
        //  if Line do the following
        console.log("line  :)))")
        }
      }
    }
    return AST
  }

  parser();