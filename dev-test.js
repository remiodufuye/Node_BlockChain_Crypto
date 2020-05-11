

const Block = require('./block')
const nodeBlock = Block.mineBlock(Block.genesis(),'nodecoin');
console.log(nodeBlock.toString());