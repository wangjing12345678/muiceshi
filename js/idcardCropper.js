var flag = '';
var pic_a = '';
var pic_b = '';
alert("pop")
console.log("opop")

			
			    //弹出框水平垂直居中
			(window.onresize = function () {
			    var win_height = $(window).height();
			    var win_width = $(window).width();
			    if (win_width <= 768){
			        $(".tailoring-content").css({
			            "top": (win_height - $(".tailoring-content").outerHeight())/2,
			            "left": 0
			        });
			    }else{
			        $(".tailoring-content").css({
			            "top": (win_height - $(".tailoring-content").outerHeight())/2,
			            "left": (win_width - $(".tailoring-content").outerWidth())/2
			        });
			    }
			})();
			
			//图像上传
			
			function selectImg(file,name) {
				flag = name
			    //弹出图片裁剪框
			    $(".tailoring-container").toggle();
			
			    if (!file.files || !file.files[0]){
			        return;
			    }
			    var reader = new FileReader();
			    reader.onload = function (evt) {
			        var replaceSrc = evt.target.result;
			        //更换cropper的图片
			        $('#tailoringImg').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
			    }
			
			    reader.readAsDataURL(file.files[0]);
			}
			//cropper图片裁剪
			$('#tailoringImg').cropper({
			    // aspectRatio: 1/1,
			    preview: '.previewImg',//预览视图
			    guides: false,  //裁剪框的虚线(九宫格)
			    autoCropArea: 0.5,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
			    movable: false, //是否允许移动图片
			    dragCrop: true,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
			    movable: true,  //是否允许移动剪裁框
			    resizable: true,  //是否允许改变裁剪框的大小
			    zoomable: true,  //是否允许缩放图片大小
			    mouseWheelZoom: false,  //是否允许通过鼠标滚轮来缩放图片
			    touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
			    rotatable: true,  //是否允许旋转图片
			    crop: function(e) {
			        // 输出结果数据裁剪图像。
			    }
			});
			//旋转
			$(".cropper-rotate-btn").on("click",function () {
			    $('#tailoringImg').cropper("rotate", 45);
			});
			//复位
			$(".cropper-reset-btn").on("click",function () {
			    $('#tailoringImg').cropper("reset");
			});
			//换向
			var flagX = true;
			$(".cropper-scaleX-btn").on("click",function () {
			    if(flagX){
			        $('#tailoringImg').cropper("scaleX", -1);
			        flagX = false;
			    }else{
			        $('#tailoringImg').cropper("scaleX", 1);
			        flagX = true;
			    }
			    flagX != flagX;
			});
			
			//裁剪后的处理
			$("#sureCut").on("click",function () {
				if(flag == 'front'){
					 if ($("#tailoringImg").attr("src") == null ){
						 console.log("ppp")
					    return false;
					}else{
						
					    var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
					    var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
					    $("#frontImg").prop("src",base64url);//显示为图片的形式
					    console.log(pic_a&&pic_b)
						pic_a = base64url
						var content = {'pic_a':pic_a,'pic_b':base64url},
						// if(pic_a&&pic_b){
						// 	http_post(HTTP_URL.UPLOAD_PIC,{content:JSON.stringify(content)},function(res){
						// 		console.log(res)
						// 	})
						// }
						
						
						// $(".document_otherSide").html(`
						// 	<label title="上传图片" for="chooseImg_otherSide" class=" choose-btn" id="replaceImg">
						// 		<input type="file" accept="image/jpg,image/jpeg,image/png" name="file" id="chooseImg_otherSide" class="hidden" onchange="selectImg(this,'otherSide')" >
						// 		<img src="image/otherSide.png" alt="" id="otherSideImg">
						// 		<div>点击上传国徽面</div>
						// 	</label>
						// `)

					    //关闭裁剪框
					    closeTailor();
						flag = ''
					}
				}else{
					 if ($("#tailoringImg").attr("src") == null ){
					    return false;
					}else{
						console.log(pic_a&&pic_b)
					    var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
					    var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
					    $("#otherSideImg").prop("src",base64url);//显示为图片的形式
					    console.log(base64url)
						pic_b = base64url
						var content = {'pic_a':pic_a,'pic_b':base64url},
						// if(pic_a&&pic_b){
						// 	http_post(HTTP_URL.UPLOAD_PIC,{content:JSON.stringify(content)},function(res){
						// 		console.log(res)
						// 	})
						// }
						// http_post(HTTP_URL.UPLOAD_PIC,{content:JSON.stringify(content)},function(res){
						// 	console.log(res)
						// })
						
						
								
					    //关闭裁剪框
					    closeTailor();
						flag = ''
					}
				}
				
			   
			});
			//关闭裁剪框
			function closeTailor() {
			    $(".tailoring-container").toggle();
			}