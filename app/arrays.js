exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined') {
      return arr.indexOf(item);
    } else {
      return false;
    }
  },

  sum: function(arr) {
    if(typeof arr!=='undefined') {
      return arr.reduce((previousVal, currentVal) => previousVal+currentVal, 0);
    } else {
      return false;
    }
  },

  remove: function(arr, item) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined') {
      return arr.filter((e) => e!==item);
    } else {
      return false;
    }
  },

  removeWithoutCopy: function(arr, item) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined') {
      for (var i=0;i<arr.length;i++) {
        if(arr[i]===item) {
          arr.splice(i--,1);
        }
      }
      return arr;
    } else {
      return false;
    }
  },

  append: function(arr, item) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined') {
      arr.push(item);
      return arr;
    } else {
      return false;
    }
  },

  truncate: function(arr) {
    if(typeof arr !== 'undefined') {
      arr.splice(arr.length-1);
      return arr;
    } else {
      return false;
    }
  },

  prepend: function(arr, item) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined') {
      arr.unshift(item);
      return arr;
    } else {
      return false;
    }
  },

  curtail: function(arr) {
    if(typeof arr !== 'undefined') {
      arr.shift(0);
      return arr;
    } else {
      return false;
    }
  },

  concat: function(arr1, arr2) {
    if(typeof arr1 !== 'undefined' && typeof arr2 !== 'undefined') {
      return arr1.concat(arr2);
    } else {
      return false;
    }
  },

  insert: function(arr, item, index) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined' && typeof index==='number') {
      arr.splice(index,0,item);
      return arr;
    } else {
      return false;
    }
  },

  count: function(arr, item) {
    if(typeof arr !== 'undefined' && typeof item !== 'undefined') {
      return arr.reduce((count,v) => count + (v===item),0);
    } else {
      return false;
    }
  },

  duplicates: function(arr) {
    var index=arr.map((e)=>{
      return {e,c:0}
    });
    var obj=index.reduce((o,nextVal)=>{
      o[nextVal.e]=(o[nextVal.e] || 0) + 1;
      return o;
    },{});
    var output=[];
    var keys=Object.keys(obj);
    for(i in keys) {
      if(obj[keys[i]]>1) output.push(parseInt(keys[i],10));
    }
    return output;
  },

  square: function(arr) {
    if(typeof arr !== 'undefined') {
      return arr.map((v) => v*v);
    } else {
      return false;
    }
  },

  findAllOccurrences: function(arr, target) {
    var o=[];
    for(i in arr) {
      if(arr[i]===target) o.push(i);
    }
    return o;
  }
};
