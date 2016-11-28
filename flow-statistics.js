"use strict";
var fs = require('fs');
var path = require('path');

module.exports = function(RED) {
  
  function FlowStatistics(config) {
    RED.nodes.createNode(this, config);
      
    this.on('input', function(msg) {
      
      //var msg1 = {"topic":"statistics"};
      var flow_stat = {};
      var nodes = 0;
      
      RED.nodes.eachNode(function(n) {
        if (typeof flow_stat[n.type] === "undefined") {
          flow_stat[n.type] = 1;
        } else {
          flow_stat[n.type]++;
        }
        if (n.type !== "tab") {
          nodes++;
        }
    });
    
    flow_stat.node_total = nodes;
    
    msg.payload = flow_stat;
     
    this.send(msg);
      
    });
  }
  RED.nodes.registerType("flow-statistics",FlowStatistics);    
}
