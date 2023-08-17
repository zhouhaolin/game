System.register("chunks:///_virtual/Block.ts",["cc"],(function(s){"use strict";var o,i;return{setters:[function(s){o=s.cclegacy,i=s._decorator}],execute:function(){var t;o._RF.push({},"81c81/RY+xFQrZdaNYWu6SG","Block",void 0);var c=i.ccclass;i.property,s("Block",c("Block")(t=function(){function s(){this.pos=void 0,this.blockPos=void 0,this.type=void 0,this.color=void 0,this.obj=void 0,this.sizeX=7}var o=s.prototype;return o.isEqual=function(s){return this.type==s.type&&this.color==s.color},o.getExplosionList=function(s){for(var o=new Array,i=this.blockPos.x+this.blockPos.y*this.sizeX,t=new Array;;){if(i--,null==(r=s.get(i))||!r.isEqual(this))break;if(r.blockPos.y!=this.blockPos.y)break;t.push(r)}for(i=this.blockPos.x+this.blockPos.y*this.sizeX;;){if(i++,null==(r=s.get(i))||!r.isEqual(this))break;if(r.blockPos.y!=this.blockPos.y)break;t.push(r)}t.push(this),t.length>=3&&(o=o.concat(t));var c=new Array;for(i=this.blockPos.x+this.blockPos.y*this.sizeX;;){if(i+=this.sizeX,null==(r=s.get(i))||!r.isEqual(this))break;if(r.blockPos.x!=this.blockPos.x)break;c.push(r)}for(i=this.blockPos.x+this.blockPos.y*this.sizeX;;){var r;if(i-=this.sizeX,null==(r=s.get(i))||!r.isEqual(this))break;if(r.blockPos.x!=this.blockPos.x)break;c.push(r)}return c.push(this),c.length>=3&&(o=o.concat(c)),o},s}())||t);o._RF.pop()}}}));

System.register("chunks:///_virtual/BlockFactory.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalVar.ts","./ResourceLoader.ts","./ResourcesPathDefine.ts"],(function(e){"use strict";var t,r,n,o,c,a,s,u,i,p,l,f;return{setters:[function(e){t=e.inheritsLoose,r=e.asyncToGenerator,n=e.regeneratorRuntime},function(e){o=e.cclegacy,c=e._decorator,a=e.Component,s=e.Sprite,u=e.SpriteFrame,i=e.Texture2D},function(e){p=e.GlobalVar},function(e){l=e.ResourceLoader},function(e){f=e.ResourcesPathDefine}],execute:function(){var y;o._RF.push({},"e7467MUiY9M0oJIoI/N1pxg","BlockFactory",void 0);var h=c.ccclass;c.property,e("BlockFactory",h("BlockFactory")(y=function(e){function o(){return e.apply(this,arguments)||this}return t(o,e),o.create=function(){var e=r(n().mark((function e(t,r){var o,c,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.insNode(f.BLOCK_PATH);case 2:return(o=e.sent).parent=p.canvas,o.position=r,c=new u,a=new i,e.next=9,l.loadAsset(f.TEXTURES_PATH+"/"+t);case 9:return a.image=e.sent,c.texture=a,o.getComponent(s).spriteFrame=c,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o}(a))||y);o._RF.pop()}}}));

System.register("chunks:///_virtual/ComBase.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n,r,a;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,n=e._decorator,r=e.Node,a=e.Component}],execute:function(){var p;o._RF.push({},"a6557F1J79PZbyQfy+1AGu9","ComBase",void 0);var c=n.ccclass;n.property,e("ComBase",c("ComBase")(p=function(e){function o(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).comMap=new Map,t}t(o,e);var n=o.prototype;return n.addCom=function(e){var t=new r;t.name=e.prototype.name,t.parent=this.node;var o=t.addComponent(e);return this.comMap.set(e.prototype.name,t),o},n.getCom=function(e){var t=this.comMap.get(e.prototype.name);return null!=t?t.getComponent(e):null},n.removeCom=function(e){var t=this.comMap.get(e.prototype.name);null!=t&&t.destroy(),this.comMap.delete(e.prototype.name)},o}(a))||p);o._RF.pop()}}}));

System.register("chunks:///_virtual/DestroyCB.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Functor.ts"],(function(e){"use strict";var t,o,n,r,c,s;return{setters:[function(e){t=e.inheritsLoose,o=e.createForOfIteratorHelperLoose},function(e){n=e.cclegacy,r=e._decorator,c=e.Component},function(e){s=e.Functor}],execute:function(){var u,a;n._RF.push({},"4ef3dh3IIFKL7Vtil8YcLf2","DestroyCB",void 0);var l=r.ccclass;r.property,e("DestroyCB",l("DestroyCB")(((a=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.addCb=function(e,t,o){null==e[n.cbObjSet]&&(e[n.cbObjSet]=new Set),e[n.cbObjSet].has(t)||(e[n.cbObjSet].add(t),null!=e.onDestroy&&null==e._onDestroyReplace?(e._onDestroyReplace=[],e._onDestroyReplace.push(e.onDestroy.bind(t)),e[n.onDestroyName]=s.getNotWatchDestroyFunc(this,"onDestroyFunc",e,t,o)):null==e._onDestroyReplace?(e._onDestroyReplace=[],e[n.onDestroyName]=s.getNotWatchDestroyFunc(this,"onDestroyFunc",e,t,o)):e._onDestroyReplace.push(s.getNotWatchDestroyFunc(t,o,e)))},n.onDestroyFunc=function(e,t,n){if(s.getNotWatchDestroyFunc(t,n,e)(),null!=e._onDestroyReplace)for(var r,c=o(e._onDestroyReplace);!(r=c()).done;){(0,r.value)()}},n}(c)).cbObjSet="_cbObjSet",a.onDestroyName="onDestroy",a.onDestroyReplaceName="_onDestroyReplace",u=a))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/DestroySelf.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,r=e._decorator,s=e.Component}],execute:function(){var n;o._RF.push({},"fdf54Q8oddNkYEz05ZOOq+T","DestroySelf",void 0);var c=r.ccclass;r.property,e("DestroySelf",c("DestroySelf")(n=function(e){function o(){return e.apply(this,arguments)||this}return t(o,e),o.prototype.destroySelf=function(){this.node.destroy()},o}(s))||n);o._RF.pop()}}}));

System.register("chunks:///_virtual/ExplosionFactory.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DestroySelf.ts","./GlobalVar.ts","./ResourceLoader.ts","./ResourcesPathDefine.ts"],(function(e){"use strict";var t,n,r,o,s,c,a,u,i,p;return{setters:[function(e){t=e.inheritsLoose,n=e.asyncToGenerator,r=e.regeneratorRuntime},function(e){o=e.cclegacy,s=e._decorator,c=e.Component},function(e){a=e.DestroySelf},function(e){u=e.GlobalVar},function(e){i=e.ResourceLoader},function(e){p=e.ResourcesPathDefine}],execute:function(){var f;o._RF.push({},"e4bf6g1P95IsJ8JMP2a8h+k","ExplosionFactory",void 0);var l=s.ccclass;s.property,e("ExplosionFactory",l("ExplosionFactory")(f=function(e){function o(){return e.apply(this,arguments)||this}return t(o,e),o.create=function(){var e=n(r().mark((function e(t,n){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.insNode(p.EXPLOSION_PATH+"/"+t);case 2:return(o=e.sent).parent=u.canvas,o.position=n,o.addComponent(a),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o}(c))||f);o._RF.pop()}}}));

System.register("chunks:///_virtual/Functor.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DestroyCB.ts"],(function(t){"use strict";var n,r,o,c;return{setters:[function(t){n=t.construct},function(t){r=t.cclegacy,o=t._decorator},function(t){c=t.DestroyCB}],execute:function(){var e;r._RF.push({},"4ad62pYmNdN/riyUU5QIYMi","Functor",void 0);var i=o.ccclass;o.property,t("Functor",i("Functor")(e=function(){function t(t,n){this.obj=void 0,this.funcName=void 0,this.arg=void 0,this.isDestroy=!1,this.obj=t,this.funcName=n;for(var r=arguments.length,o=new Array(r>2?r-2:0),c=2;c<r;c++)o[c-2]=arguments[c];this.arg=o}var r=t.prototype;return r.onObjDestroy=function(t){this.isDestroy=!0},r.runCbFunc=function(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];null==this.obj||null==this.obj[this.funcName]||this.isDestroy||(t=this.obj)[this.funcName].apply(t,this.arg.concat(r))},t.getFunc=function(r,o){for(var e=arguments.length,i=new Array(e>2?e-2:0),s=2;s<e;s++)i[s-2]=arguments[s];var u=n(t,[r,o].concat(i));return c.addCb(r,u,"onObjDestroy"),u.runCbFunc.bind(u)},t.getNotWatchDestroyFunc=function(r,o){for(var c=arguments.length,e=new Array(c>2?c-2:0),i=2;i<c;i++)e[i-2]=arguments[i];var s=n(t,[r,o].concat(e));return s.runCbFunc.bind(s)},t}())||e);r._RF.pop()}}}));

System.register("chunks:///_virtual/GameInit.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Block.ts","./Functor.ts","./GlobalVar.ts","./RandomUtils.ts","./BlockFactory.ts","./ExplosionFactory.ts"],(function(t){"use strict";var e,o,s,n,a,r,i,c,l,h,u,p,b,k,y,x,f,d,g;return{setters:[function(t){e=t.inheritsLoose,o=t.asyncToGenerator,s=t.regeneratorRuntime,n=t.createForOfIteratorHelperLoose},function(t){a=t.cclegacy,r=t._decorator,i=t.Vec2,c=t.UITransform,l=t.view,h=t.Vec3,u=t.tween,p=t.Component,b=t.NodeEventType},function(t){k=t.Block},function(t){y=t.Functor},function(t){x=t.GlobalVar},function(t){f=t.RandomUtils},function(t){d=t.BlockFactory},function(t){g=t.ExplosionFactory}],execute:function(){var m,v;a._RF.push({},"9a191mVpt9OOaRxMr/p83Ak","GameInit",void 0);var w=r.ccclass;r.property,t("GameInit",w("GameInit")(((v=function(t){function a(){for(var e,o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))||this).sizeX=7,e.sizeY=17,e.size=50,e.startPos=void 0,e.endPos=void 0,e.colorMax=1,e.typeMax=3,e.m_NowSelect=void 0,e.m_BgNode=void 0,e.m_SelectNode=void 0,e.isCanTouch=!0,e.blockMap=new Map,e}e(a,t);var r=a.prototype;return r.createBlock=function(){var t=o(s().mark((function t(e,o){var n,r,i,c,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new k,r=this.getRandomType(e),i=f.randomNum(0,this.colorMax),c=a.data.get(r),l=a.colorData.get(i),n.blockPos=e,n.type=r,n.color=l,n.pos=new h(this.startPos.x+e.x*this.size+o,this.startPos.y+e.y*this.size+o),t.next=11,d.create(c+"_"+l,n.pos);case 11:return n.obj=t.sent,t.abrupt("return",n);case 13:case"end":return t.stop()}}),t,this)})));return function(e,o){return t.apply(this,arguments)}}(),r.getRandomType=function(t){for(var e=t.x-1+t.y*this.sizeX,o=this.blockMap.get(e),s=t.x+(t.y-1)*this.sizeX,n=this.blockMap.get(s);;){var a=f.randomNum(0,this.typeMax);if((null==o||a!=o.type)&&(null==n||a!=n.type))break}return a},r.start=function(){var t=o(s().mark((function t(){var e,o,n,a,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.m_SelectNode=this.node.getChildByName("m_SelectNode"),this.startPos=this.node.getChildByName("start").position,this.endPos=this.node.getChildByName("end").position,e=this.size/2,o=0;case 5:if(!(o<this.sizeX)){t.next=19;break}n=0;case 7:if(!(n<this.sizeY)){t.next=16;break}return a=new h(o,n,0),t.next=11,this.createBlock(a,e);case 11:r=t.sent,this.blockMap.set(this.getMapIndexByPos(new i(r.pos.x,r.pos.y)),r);case 13:n++,t.next=7;break;case 16:o++,t.next=5;break;case 19:this.m_BgNode=this.node.getChildByName("m_BgNode"),this.m_BgNode.on(b.TOUCH_START,y.getFunc(this,"onTouchStart"),this),this.checkExplosion(this.blockMap.get(0),this.blockMap.get(1)),this.m_SelectNode.active=!1;case 23:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.getBlockPosByPos=function(t){var e=0|(t.x-this.startPos.x)/this.size,o=0|(t.y-this.startPos.y)/this.size;return o<0||o>=this.sizeY||e<0||e>=this.sizeX?null:new i(e,o)},r.getMapIndexByPos=function(t){var e=this.getBlockPosByPos(t);return e.x+e.y*this.sizeX},r.onTouchStart=function(t){if(this.isCanTouch&&null!=t.getTouches()&&1==t.getTouches().length){var e=x.canvas.getComponent(c).contentSize,o=l.getCanvasSize(),s=t.getLocation(),n=new i(e.x*s.x/o.x-e.x/2,e.y*s.y/o.y-e.y/2),a=this.getMapIndexByPos(n),r=this.blockMap.get(a);console.log(r),null!=this.m_NowSelect&&(r.blockPos.x-1==this.m_NowSelect.blockPos.x&&r.blockPos.y==this.m_NowSelect.blockPos.y||r.blockPos.x+1==this.m_NowSelect.blockPos.x&&r.blockPos.y==this.m_NowSelect.blockPos.y||r.blockPos.y-1==this.m_NowSelect.blockPos.y&&r.blockPos.x==this.m_NowSelect.blockPos.x||r.blockPos.y+1==this.m_NowSelect.blockPos.y&&r.blockPos.x==this.m_NowSelect.blockPos.x)?this.playChangeStart(this.m_NowSelect,r):(this.m_SelectNode.active=!0,this.m_SelectNode.position=new h(r.pos.x,r.pos.y,0),this.m_NowSelect=r)}},r.playChangeStart=function(t,e){this.m_SelectNode.active=!1,this.isCanTouch=!1,u(t.obj).to(.3,{position:e.pos}).start(),u(e.obj).to(.3,{position:t.pos}).start(),u(this.node).delay(.3).call(y.getFunc(this,"playChangeEnd",t,e,!1)).start()},r.changeBlock=function(t,e){var o=t.type,s=t.color,n=t.obj;t.type=e.type,t.color=e.color,t.obj=e.obj,e.type=o,e.color=s,e.obj=n},r.playChangeEnd=function(){var t=o(s().mark((function t(e,o,n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.changeBlock(e,o),n){t.next=6;break}return t.next=4,this.checkExplosion(e,o);case 4:t.next=8;break;case 6:this.isCanTouch=!0,this.m_NowSelect=null;case 8:case"end":return t.stop()}}),t,this)})));return function(e,o,s){return t.apply(this,arguments)}}(),r.checkExplosion=function(){var t=o(s().mark((function t(e,o){var a,r,i,c,l,h,p,b,k;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=new Array,r=n(this.blockMap.keys());!(i=r()).done;)c=i.value,l=this.blockMap.get(c),(h=l.getExplosionList(this.blockMap)).length>0&&(a=a.concat(h));if(0!=a.length){t.next=7;break}return u(e.obj).to(.3,{position:o.pos}).start(),u(o.obj).to(.3,{position:e.pos}).start(),u(this.node).delay(.3).call(y.getFunc(this,"playChangeEnd",e,o,!0)).start(),t.abrupt("return");case 7:p=n(a);case 8:if((b=p()).done){t.next=17;break}if(null!=(k=b.value).obj){t.next=12;break}return t.abrupt("continue",15);case 12:k.obj.destroy(),k.obj=null,g.create(k.color,k.pos);case 15:t.next=8;break;case 17:return t.next=19,this.playDropStart(a);case 19:case"end":return t.stop()}}),t,this)})));return function(e,o){return t.apply(this,arguments)}}(),r.playDropStart=function(){var t=o(s().mark((function t(e){var o,r,i,c,l,p,b,k,x,g,m,v,w,P;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=e.sort((function(t,e){return e.blockPos.y-t.blockPos.y})),o=n(e);case 2:if((r=o()).done){t.next=37;break}if(null==(i=r.value).obj){t.next=6;break}return t.abrupt("continue",35);case 6:c=i.blockPos.y+1,l=i.blockPos.x,p=c;case 9:if(!(p<this.sizeY)){t.next=18;break}if(b=l+p*this.sizeX,null!=(k=this.blockMap.get(b))&&null==k.obj){t.next=14;break}return t.abrupt("break",18);case 14:c++;case 15:p++,t.next=9;break;case 18:for(x=i.blockPos.y,g=c;g<this.sizeY;g++)k=this.blockMap.get(l+g*this.sizeX),m=this.blockMap.get(l+x*this.sizeX),u(k.obj).to(.3,{position:m.pos}).start(),this.changeBlock(m,k),x++;g=x;case 21:if(!(g<this.sizeY)){t.next=35;break}return i=this.blockMap.get(l+g*this.sizeX),v=a.colorData.get(f.randomNum(0,this.colorMax)),i.type=this.getRandomType(i.blockPos),i.color=v,w=a.data.get(i.type),t.next=29,d.create(w+"_"+v,new h(i.pos.x,i.pos.y+this.size));case 29:P=t.sent,u(P).to(.3,{position:i.pos}).start(),i.obj=P;case 32:g++,t.next=21;break;case 35:t.next=2;break;case 37:u(this.node).delay(.5).call(y.getFunc(this,"nextCheckExplosion")).start();case 38:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r.nextCheckExplosion=function(){var t=o(s().mark((function t(){var e,o,a,r,i,c,l,h,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=new Array,o=n(this.blockMap.keys());!(a=o()).done;)r=a.value,i=this.blockMap.get(r),(c=i.getExplosionList(this.blockMap)).length>0&&(e=e.concat(c));if(0!=e.length){t.next=7;break}return this.isCanTouch=!0,this.m_NowSelect=null,this.m_SelectNode.active=!1,t.abrupt("return");case 7:l=n(e);case 8:if((h=l()).done){t.next=17;break}if(null!=(u=h.value).obj){t.next=12;break}return t.abrupt("continue",15);case 12:u.obj.destroy(),u.obj=null,g.create(u.color,u.pos);case 15:t.next=8;break;case 17:return t.next=19,this.playDropStart(e);case 19:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),a}(p)).colorData=new Map([[0,"blue"],[1,"green"],[2,"pink"],[3,"red"]]),v.data=new Map([[0,"bean"],[1,"lollipop"],[2,"jelly"],[3,"swirl"]]),m=v))||m);a._RF.pop()}}}));

System.register("chunks:///_virtual/GlobalVar.ts",["cc"],(function(a){"use strict";var c,r;return{setters:[function(a){c=a.cclegacy,r=a._decorator}],execute:function(){var e,t;c._RF.push({},"c2646QVE4lBJJmRNeOwB7oZ","GlobalVar",void 0);var o=r.ccclass;r.property,a("GlobalVar",o("GlobalVar")(((t=function(){}).isTest=!1,t.isWX=!1,t.canvas=void 0,t.gamePanel=void 0,e=t))||e);c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Main.ts","./Block.ts","./ComBase.ts","./ResourcesObjBase.ts","./DestroyCB.ts","./DestroySelf.ts","./Functor.ts","./GlobalVar.ts","./ResourceLoader.ts","./ResourcesPathDefine.ts","./BlockFactory.ts","./ExplosionFactory.ts","./GameInit.ts","./RandomUtils.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalVar.ts","./GameInit.ts"],(function(t){"use strict";var n,r,e,o,a,i,s,c;return{setters:[function(t){n=t.inheritsLoose,r=t.asyncToGenerator,e=t.regeneratorRuntime},function(t){o=t.cclegacy,a=t._decorator,i=t.Component},function(t){s=t.GlobalVar},function(t){c=t.GameInit}],execute:function(){var u;o._RF.push({},"18c4a64339JrrgosB8sg3U6","Main",void 0);var p=a.ccclass;a.property,t("Main",p("Main")(u=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){var t=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.canvas=this.node,this.addComponent(c);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),o}(i))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/RandomUtils.ts",["cc"],(function(n){"use strict";var r,t;return{setters:[function(n){r=n.cclegacy,t=n._decorator}],execute:function(){var o;r._RF.push({},"17a86qeuI1PrLxlNSOjE1Yf","RandomUtils",void 0);var a=t.ccclass;t.property,n("RandomUtils",a("RandomUtils")(o=function(){function n(){}return n.randomNum=function(n,r){return Math.floor(Math.random()*(r-n)+n)},n.randomBoundary=function(r,t,o,a){return n.randomBool()?n.randomNum(r,t):n.randomNum(o,a)},n.randomString=function(n){return Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g,"").substr(0,n)},n.randomBool=function(){return 1==n.randomNum(0,2)},n}())||o);r._RF.pop()}}}));

System.register("chunks:///_virtual/ResourceLoader.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResourcesObjBase.ts","./DestroyCB.ts"],(function(e){"use strict";var t,s,r,a,n,o,u,c;return{setters:[function(e){t=e.asyncToGenerator,s=e.regeneratorRuntime},function(e){r=e.cclegacy,a=e._decorator,n=e.loader,o=e.instantiate},function(e){u=e.ResourcesObjBase},function(e){c=e.DestroyCB}],execute:function(){var p,i;r._RF.push({},"dd8918OsFNOFpqHnlz+Gtd/","ResourceLoader",void 0);var f=a.ccclass;a.property,e("ResourceLoader",f("ResourceLoader")(((i=function(){function e(){}return e.loadAsset=function(){var r=t(s().mark((function t(r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,s){var a=e.pathAssetMap.get(r);if(null!=a)return e.assetRefMap.set(r,e.assetRefMap.get(r)+1),t(a);n.loadRes(r,(function(s,a){return null==a||(a.addRef(),e.pathAssetMap.set(r,a),e.assetRefMap.set(r,1)),t(a)}))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return r.apply(this,arguments)}}(),e.releaseAsses=function(t){if(e.assetRefMap.has(t)){var s=e.assetRefMap.get(t);if(s-=1,e.assetRefMap.set(t,s),0==s){var r=e.pathAssetMap.get(t);r.decRef(),e.pathAssetMap.delete(t),e.assetRefMap.delete(t),n.release(r)}}},e.insNode=function(){var r=t(s().mark((function t(r){var a,n=this;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadAsset(r);case 2:return a=t.sent,t.next=5,new Promise((function(t,s){var p=o(a);e.objPathMap.set(p,r);var i=p.addComponent(u);return c.addCb(i,n,"_destroyNode"),t(p)}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return r.apply(this,arguments)}}(),e._destroyNode=function(t){var s=t.node;if(e.objPathMap.has(s)){var r=e.objPathMap.get(s);e.objPathMap.delete(s),e.releaseAsses(r)}},e}()).pathAssetMap=new Map,i.objPathMap=new Map,i.assetRefMap=new Map,p=i))||p);r._RF.pop()}}}));

System.register("chunks:///_virtual/ResourcesObjBase.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ComBase.ts"],(function(e){"use strict";var s,r,t,c;return{setters:[function(e){s=e.inheritsLoose},function(e){r=e.cclegacy,t=e._decorator},function(e){c=e.ComBase}],execute:function(){var o;r._RF.push({},"77560cDN6JE/J5X1NsDRzAM","ResourcesObjBase",void 0);var u=t.ccclass;t.property,e("ResourcesObjBase",u("ResourcesObjBase")(o=function(e){function r(){return e.apply(this,arguments)||this}return s(r,e),r}(c))||o);r._RF.pop()}}}));

System.register("chunks:///_virtual/ResourcesPathDefine.ts",["cc"],(function(e){"use strict";var s,t;return{setters:[function(e){s=e.cclegacy,t=e._decorator}],execute:function(){var c,r;s._RF.push({},"f9900aWiAtAUKF115UUfwUf","ResourcesPathDefine",void 0);var o=t.ccclass;t.property,e("ResourcesPathDefine",o("ResourcesPathDefine")(((r=function(){}).EXPLOSION_PATH="prefabs/explosion",r.BLOCK_PATH="prefabs/block",r.TEXTURES_PATH="textures",c=r))||c);s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});