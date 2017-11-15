(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    
   
    
    onTargetLoad: function(aWin, doc){
      var url = aWin.location.href;
      switch (url) {
        case 'http://studio.static.enterplorer.com/public/cases/4011/4005/4005.html':
        	var btn = doc.querySelectorAll('BUTTON')[0];
          var h2Value = doc.querySelectorAll('input')[0].value;
          var h2 = doc.getElementById('demo-h2');
          btn.addEventListener("click",function(e){
            h2.innerHTML = h2Value;
          });  
          break;
        case 'http://studio.static.enterplorer.com/public/cases/4011/4004/4004.html':
          aWin.showModalDialog = function(){
            aWin.open("http://studio.static.enterplorer.com/public/cases/4011/4004/modal.html");
          };
          break;
        case 'http://studio.static.enterplorer.com/public/cases/4011/4007/4007.html':
          aWin.top.alertDemo = aWin.alertDemo;
          break;
        case 'http://studio.static.enterplorer.com/public/cases/4011/4014/4014.html':
          aWin.loadDoc = function() {
            var xhttp;

            if (aWin.XMLHttpRequest) {
              // code for modern browsers
              xhttp = new XMLHttpRequest();
              } else {
              // code for IE6, IE5
              xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhttp.onreadystatechange = function() {
              if (xhttp.readyState == 4 && xhttp.status == 200) {
                doc.getElementById("changedP").innerHTML = xhttp.responseText;
              }
            };
            xhttp.open("GET", "http://studio.static.enterplorer.com/public/cases/4011/4014/ajax_info.txt", true);
            xhttp.send();
          }
          break;
        case 'http://studio.static.enterplorer.com/public/cases/4011/4011/index.html':
          	
          aWin.show = function(){
            var input = doc.createElement('input');
            input.type = 'text';
            input.name = 'txtName';
            input.value = '云适配';
            var span = doc.getElementById('insert');
            span.appendChild(input);	
          }

          break;
        case 'http://studio.static.enterplorer.com/public/cases/4011/4012/index.html' :
          
          aWin.showById = function(){
            var div = doc.getElementsByName('insertByName');
            div[0].innerHTML = '云适配';
          }

          aWin.showByName = function(){

            var div = doc.getElementById('insertById');
            div.innerHTML = '云适配';
          }
					break;
        case 'http://studio.static.enterplorer.com/public/cases/4011/4016/index.html' :
          aWin.top.alertDemo = aWin.alertDemo;
          break;
        default:
          break;
      }
		  
      
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
			if (doc.location.href.indexOf('swfupload') !== -1) {
        var fakeFormId;

        (function () {
          var addFileInput = function addFileInput(originId, id, target) {
            var placeHolder = doc.getElementById(originId);
            if (placeHolder) {
              var file = doc.createElement('input');
              file.type = 'file';
              file.id = id;
              file.name = id;
              file.onchange = function () {

                fileName.value = this.files[0].name;

                var cb = target.setting.file_dialog_complete_handler;
                cb && cb.call(target);
              };

              var fileName = doc.createElement('input');
              var upload = doc.createElement('input');

              fileName.name = 'Filename';
              upload.name = 'Upload';
              upload.value = 'Submit Query';

              var form = doc.createElement('form');
              form.id = fakeFormId;

              form.appendChild(file);
              form.appendChild(fileName);
              form.appendChild(upload);


              placeHolder.parentNode.appendChild(form);
              placeHolder.parentNode.removeChild(placeHolder);
            }
          };

          fakeFormId = 'ysp_fake_form';


          aWin.SWFUpload = function (setting) {
            this.setting = setting;

            var elemId = this.setting.button_placeholder_id;
            if (elemId) {
              addFileInput(elemId, 'Filedata', this);
            }

            this.fakeFormId = fakeFormId;

            aWin.swfUploadLoaded && aWin.swfUploadLoaded();

            console.log('upload overrided!');
          };

        })();
      }
    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    } 
    
    
  });

})(window, ysp);
