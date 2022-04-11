import { lexer, parser } from './parser.js';
import { transformer } from './transformer.js';
import { generator } from './generator.js';

var sbn = {}
sbn.VERSION = '0.0.1'
sbn.lexer = lexer
sbn.parser = parser
sbn.transformer = transformer
sbn.generator = generator

sbn.compile = function (code) {
  return this.generator(this.transformer(this.parser(this.lexer(code))))
}

// call sbn compiler
var code = 'Paper 0 Pen 100 Line 0 50 100 50'
var svg = sbn.compile(code)
document.body.innerHTML = svg