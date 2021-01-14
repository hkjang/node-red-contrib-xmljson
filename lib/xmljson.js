var convert = require('xml-js');

module.exports = function (RED) {
  function xmljsonFunction(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {
      msg.payload =  convert.xml2json(msg.payload, {compact: true, spaces: 4});
      self.send(msg);
    });
  }
  RED.nodes.registerType('xmljson', xmljsonFunction);
};
