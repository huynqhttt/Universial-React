var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

var TopicStore = Reflux.createStore({
  listenables: [Actions],
  getTopics: function(){
    return  Api.get('topics/defaults')
          .then(function(data){
            this.topics= data.data;
            this.triggerChange();
          }.bind(this))
          .catch(function(err){
            console.log(err);
          });
  },
  triggerChange: function(){
    this.trigger('change', this.topics);
  }
});

module.exports = TopicStore;

