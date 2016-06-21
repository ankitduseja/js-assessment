exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: url
      })
      .done(function(d) {
        var ppl=[];
        for(p of d.people) ppl.push(p.name);
        resolve(ppl.sort());
      })
      .fail(function() {
        reject(Error('Call Failed'));
      })
    });
  }
};
