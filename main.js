/**
 * @author:Ge Xin
 * @description: The main file of Plugin
 * @version 1.0.1
 *
 */
 (function(){
	var Main = {
		//==========================Global para
		GB : {
			
		},
		//==========================init
		init : function(){
			
		},
		//==========================对Chrome的一些初始化操作
		action : {
			
		},
		//==========================回调/触发
		handler : {
			
		},
		//=========================工具
		tools : {
			//获取http domain
			getDomain : function(url){
				if (url.indexOf('//') <= -1) {
					console.log('请确定url以http开头');
					return '';
				}
				var urls_1 = url.split('//');
				var urls_2 = urls_1[1].split('/');
				return urls_2[0];
			}
		}
	}
	//*******************************************************
	window.addEventListener("DOMContentLoaded", function(){
        Main.init();
    }, false);
 })();
