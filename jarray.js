/*

jQuery插件jarray主要是扩展JavaScript数组的方法

两个数组合并,删除数组中重复元素
jQuery.uniq([1,2]) // return [1,2]
jQuery.uniq([1,2], []) // return [1,2]
jQuery.uniq([1,2], [2]) // return [1,2]
jQuery.uniq([1,2], [2,3]) // return [1,2,3]

两个数组相减
jQuery.sub([1,2]) // return [1]
jQuery.sub([1,2], []) // return [1]
jQuery.sub([1,2], [2]) // return [1]
jQuery.sub([1,2], [2,3]) // return [1]

*/

( function($) {
  $.extend({
    uniq: function(first, second) {
      if ( typeof(second) == 'undefined' || second.length < 1) {
        return first;
      }
      
      $.each(second, function(i, n) {
        if ( $.inArray(n, first) == -1 ) {
          first.push(n);
        }
      });
      return first;
    },
    
    sub: function(first, second) {
      if ( typeof(second) == 'undefined' || second.length < 1) {
        return first;
      }
      
      var new_arr = [];
      $.each(first, function(i, n) {
        if ( $.inArray(n, second) == -1 ) {
          new_arr.push(n);
        }
      });
      return new_arr;  
    }
  });
})(jQuery);
