(function(){this.app={initialize:function(a){this.page=a;return this.bind()},bind:function(){var a;a=this;return document.addEventListener("deviceready",(function(){return a.deviceready()}),false)},deviceready:function(){if(pages[this.page]){return pages[this.page].activate()}}}}).call(this);