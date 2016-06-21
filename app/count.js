exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var t;
    function countUp() {
      console.log(start);
      start++;
      if(start<=end) {
        t=setTimeout(countUp,100);
      }
    }
    countUp();
    var o={};
    o.cancel=function() {
      if(t) {
        clearTimeout(t);
      }
    }
    return o;
  }
};
