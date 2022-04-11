import { lexer, parser } from './parser.js';
import { transformer } from './transformer.js';
import { generator } from './generator.js';

var Svg= {}
Svg.VERSION = '0.0.1'
Svg.lexer = lexer
Svg.parser = parser
Svg.transformer = transformer
Svg.generator = generator

Svg.compile = function (code) {
  return this.generator(this.transformer(this.parser(this.lexer(code))))
}

// THE COMPLIER CODE GOES HERE_ 
var code = 'Paper 100 Pen 0 Line 50 77 22 27 Line 22 27 78 27 Line 78 27 50 '
var svg = Svg.compile(code)
document.body.innerHTML = svg