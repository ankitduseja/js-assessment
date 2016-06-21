exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var r=new RegExp("(.)(?=\\1{"+amount+"})","g");
    return str.replace(r, "");
  },

  wordWrap: function(str, cols) {
    var count=1;
    var lines=[];
    var s='';
    for(i in str) {
      if(count>=cols && str[i]===' ') {
        lines.push(s);
        s='';
        count=0;
      } else {
        s+=str[i];
      }
      count++;
    }
    lines.push(s);
    for(i in lines) {
      if(lines[i].length>cols) {
        var suba=lines[i].split(/ (.+)?/);
        if(typeof suba[1]!=='undefined') {
          lines.splice(i,1,suba[0],suba[1]);
        }
      }
    }
    return lines.join('\n');
  },

  reverseString: function(str) {
    var s='';
    for (var i=str.length-1; i>=0; i--)
      s+=str[i];
    return s;
  }
};
