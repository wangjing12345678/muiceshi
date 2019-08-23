var http_post = function(url, data, result_function) {
	$.ajax({
		type : 'POST',
		url : url,
		data : data,
		dataType:'json',
		contentType : 'application/x-www-form-urlencoded',
		success : function(result) {
			result_function(result);
		},
	});
}
var http_get = function(url,result_function) {
	$.ajax({
		type : 'GET',
		url : url,
		success : function(result) {
			result_function(result);
		},
	});
}

// 转换成json数据
$.fn.serializeJson=function(){
    var serializeObj={};
    var array=this.serializeArray();
    // var str=this.serialize();
    $(array).each(function(){ // 遍历数组的每个元素
        if(serializeObj[this.name]){ // 判断对象中是否已经存在 name，如果存在name
            if($.isArray(serializeObj[this.name])){
                serializeObj[this.name].push(this.value); // 追加一个值 hobby : ['音乐','体育']
            }else{
                // 将元素变为 数组 ，hobby : ['音乐','体育']
                serializeObj[this.name]=[serializeObj[this.name],this.value];
            }
        }else{
            serializeObj[this.name]=this.value; // 如果元素name不存在，添加一个属性 name:value
        }
    });
    return serializeObj;
};