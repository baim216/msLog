"use strict";

var MagicSquareLog = function (param) {
	this.init();
};

MagicSquareLog.prototype = {
	constructor: MagicSquareLog,
	//初始化
	init: function () {
		var main = document.createElement("div");
		main.setAttribute("class", "ms-log-main");

		main.innerHTML = "<div class='ms-log-wrap'>" +
			"<h1 class='ms-log-title'>" +
			"MagicSquareLog" +
			"<span class='ms-log-close'>-</span>" +
			"<span class='ms-log-clear'>&times;</span>" +
			"</h1>" +
			"<div class='ms-log-body'></div>" +
			"</div>" +
			"<span class='ms-log-open'>+</span>";

		document.body.appendChild(main);

		this.setEle();
		this.addEvent();
	},
	//设置element引用
	setEle:function () {
		this.wrapEle = document.querySelector(".ms-log-wrap");
		this.bodyEle = document.querySelector(".ms-log-body");
		this.closeBtn = document.querySelector(".ms-log-close");
		this.openBtn = document.querySelector(".ms-log-open");
		this.clearBtn = document.querySelector(".ms-log-clear");
	},
	//添加按钮事件
	addEvent:function () {
		var t = this;
		this.closeBtn.onclick = function () {
			t.close();
		};
		this.openBtn.onclick = function (){
			t.open();
		};
		this.clearBtn.onclick = function () {
			t.clear();
		};
	},
	//将log转换为文本
	getText: function () {
		var arg = arguments[0];
		var len = arg.length;
		var text = "";
		for (var i = 0; i < len; i++) {
			var argItem = arg[i];
			if (typeof argItem === "object") {
				text += JSON.stringify(argItem) + " ";
			} else {
				text += argItem + " ";
			}
		}
		return text;
	},
	//打印
	print: function (text, type) {
		var newType = !type ? "" : type;
		var printHtml = document.createElement("p");
		printHtml.setAttribute("class", newType);
		printHtml.innerText = text;
		this.bodyEle.appendChild(printHtml);
	},
	//普通日志
	log: function () {
		var html = this.getText(arguments);
		this.print(html);
	},
	//报警日志
	error: function () {
		var html = this.getText(arguments);
		this.print(html, "error");
	},
	//清空
	clear: function () {
		while ( this.bodyEle.firstChild ) {
			this.bodyEle.removeChild( this.bodyEle.firstChild );
		}
	},
	//关闭
	close: function () {
		this.wrapEle.style.display = "none";
	},
	//打开
	open: function () {
		this.wrapEle.style.display = "block";
	}
};