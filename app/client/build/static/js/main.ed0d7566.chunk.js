(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/AngleRightWhite.b30c9f00.svg"},29:function(e,t,a){e.exports=a.p+"static/media/RedoCircle.b43f3016.svg"},31:function(e,t,a){e.exports=a(73)},36:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),r=a.n(i),c=(a(36),a(7)),o=a(2),l=a(3),p=a(5),m=a(4),h=a(6),d=a(28),u=a.n(d),g=a(1),f=a(75),v=a(74),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).setImage=function(e){var t=a.refs.canvas,n=t.getContext("2d"),s=new FileReader;s.onload=function(e){var s=new Image;s.onload=function(){var e=a.props.width/s.width;t.width=s.width*e,t.height=s.height*e,n.drawImage(s,0,0,t.width,t.height),"imageRight"!==a.props.canvasMode&&a.updateValue("image_height",t.height),a.renderValidPoints(n,a.props.validPoints,t.width,t.height);var i=a.props.points.referencePt1,r=a.props.points.referencePt2,c=a.props.points.measurePt1,o=a.props.points.measurePt2;a.renderPts(n,i,r,c,o)},s.src=e.target.result},s.readAsDataURL(e)},a.renderValidPoints=function(e,t){if(""===t)return null;e.fillStyle="black";for(var a=0;a<t.length;a++)for(var n=0;n<t[a].length;n++)!1===t[a][n]&&e.fillRect(a,n,1,1)},a.updateValue=function(e,t){a.props.updateValue(Object(c.a)({},e,t))},a.setPoint=function(e){var t=a.props.canvasMode;if("view"===t)return null;var n=a.refs.canvas.getBoundingClientRect(),s=Math.round(e.clientX-n.left),i=Math.round(e.clientY-n.top);if(!a.props.validPoints[s][i])return null;var r=a.props.points,c=t+"Pt1";if(""!==r[c]&&""!==r[c=t+"Pt2"]){var o=t+"Pt1",l=r[c].x,p=r[c].y;a.props.setPoint(o,l,p)}a.props.setPoint(c,s,i)},a.renderPts=function(e,t,a,n,s){e.lineWidth=3,""!==t&&(e.fillStyle="blue",e.fillRect(t.x,t.y,1,1)),""!==a&&(e.fillStyle="blue",e.fillRect(a.x,a.y,1,1),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.strokeStyle="blue",e.stroke()),""!==n&&(e.fillStyle="red",e.fillRect(n.x,n.y,1,1)),""!==s&&(e.fillStyle="red",e.fillRect(s.x,s.y,1,1),e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(s.x,s.y),e.strokeStyle="red",e.stroke())},a.updateValue=a.updateValue.bind(Object(g.a)(a)),a.setPoint=a.setPoint.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setImage(this.props.file)}},{key:"shouldComponentUpdate",value:function(e,t){return e.file!==this.props.file||e.validPoints!==this.props.validPoints||e.points!==this.props.points}},{key:"componentDidUpdate",value:function(){this.setImage(this.props.file)}},{key:"render",value:function(){return s.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:250,onClick:this.setPoint})}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).setPoint=function(e,t,n){a.props.setPoint(e,t,n)},a.changeImage=function(e){a.props.onImageChange(Object(c.a)({},a.props.idName,e.target.files[0])),a.uploadImage(e.target.files[0])},a.uploadImage=function(e){var t=new FormData;t.append("image",e),t.append("session_id",a.props.session);var n=new XMLHttpRequest;n.responseType="json";var s=Object(g.a)(a);n.onreadystatechange=function(){4===this.readyState&&(200===this.status?(s.updateValue({errorLog:""}),s.updateValue(Object(c.a)({},s.props.idName+"Name",this.response.name))):s.updateValue({errorLog:this.response}),s.updateValue({waiting:!1}))},n.open("POST","http://localhost:9000/upload"),n.send(t)},a.updateValue=function(e){a.props.onImageChange(e)},a.clearImage=function(e){a.props.onImageChange(Object(c.a)({},a.props.idName,""))},a.changeImage=a.changeImage.bind(Object(g.a)(a)),a.setPoint=a.setPoint.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return e=""===this.props.image?s.a.createElement("label",{htmlFor:this.props.idName,className:"upload-box clickable d-flex justify-content-center align-items-center",style:{width:this.props.resizeWidth+"px"}},s.a.createElement("div",null,this.props.labelText)):s.a.createElement("span",{className:"canvaspane"},s.a.createElement(b,{width:this.props.resizeWidth,file:this.props.image,canvasMode:this.props.canvasMode,points:this.props.points,validPoints:this.props.validPoints,setPoint:this.setPoint,updateValue:this.updateValue}),s.a.createElement("br",null),s.a.createElement("label",{onClick:this.clearImage,htmlFor:this.props.idName},"Clear Image")),s.a.createElement("span",null,e,s.a.createElement("input",{type:"file",id:this.props.idName,name:this.props.idName,onChange:this.changeImage,className:"inputfile",accept:".jpg,.png"}))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=s.a.createElement("p",null,this.props.loadingMessage);return s.a.createElement(f.a,{component:null},this.props.isLoading&&s.a.createElement(v.a,{classNames:"fade",timeout:300},s.a.createElement("div",{className:"loading"},s.a.createElement("div",{className:"arc"}),s.a.createElement("div",{className:"innerarc"}),s.a.createElement("div",{className:"loading-text"},e))))}}]),t}(n.Component),y=a(9),S=a.n(y),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).getDisparityMaps=function(){a.setState({isLoading:!0});var e=new FormData;e.append("image_left_name",a.props.params.imageLeftName),e.append("image_right_name",a.props.params.imageRightName),e.append("focal_length",a.props.params.focalLength),e.append("sensor_width",a.props.params.sensorWidth),e.append("session_id",a.props.session);var t=new XMLHttpRequest;t.responseType="json";var n=Object(g.a)(a);t.onreadystatechange=function(){4===this.readyState&&(200===this.status?(n.setState({errorLog:""}),n.setState({images:this.response})):n.setState({errorLog:this.response}),n.setState({isLoading:!1}))},t.open("POST","http://localhost:9000/disparity_maps"),t.send(e)},a.getValidPoints=function(){a.setState({isLoading:!0});var e=new FormData;e.append("image_left_name",a.props.params.imageLeftName),e.append("image_right_name",a.props.params.imageRightName),e.append("focal_length",a.props.params.focalLength),e.append("sensor_width",a.props.params.sensorWidth),e.append("min_disparity",a.props.params.minDisparity),e.append("num_disparity",a.props.params.numDisparity),e.append("window_size","9");var t=new XMLHttpRequest;t.responseType="json";var n=Object(g.a)(a);t.onreadystatechange=function(){4===this.readyState&&(200===this.status?(n.props.updateState({errorLog:this.response}),n.setValidPoints(this.response.is_valid,this.response.points),n.props.handleOnclickNext()):this.props.updateState({errorLog:this.response}),n.setState({isLoading:!1}))},t.open("POST","http://localhost:9000/valid_points"),t.send(e)},a.setValidPoints=function(e,t){var n,s,i=parseInt(a.props.imageWidth),r=parseInt(a.props.imageHeight),c=[];for(n=0;n<i;n++)for(c[n]=[],s=0;s<r;s++)c[n][s]=!e;for(n=0;n<t.length;n++){var o=t[n][0],l=t[n][1];c[o][l]=e}a.props.updateState({validPoints:c})},a.onClickHandler=function(){a.getValidPoints()},a.setDisparity=function(e,t){a.props.updateState({minDisparity:parseInt(e),numDisparity:parseInt(t)}),a.getValidPoints()},a.state={images:["","","","","","","","",""],errorLog:"",isLoading:!1,loadingMessage:"Creating disparity maps..."},a.setValidPoints=a.setValidPoints.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDisparityMaps()}},{key:"render",value:function(){var e=this,t={width:this.props.mapWidth+"px",height:this.props.mapHeight+"px"},a=this.state.images.map((function(a,n){return s.a.createElement("div",{className:"col-4 p-3",key:n},"undefined"===typeof a.image_name&&s.a.createElement("div",{className:"disparity-map",style:t}),"undefined"!==typeof a.image_name&&s.a.createElement("div",{className:"disparity-map active",style:t},s.a.createElement("img",{src:"http://localhost:9000/images/"+a.image_name,alt:"Min Disparities: "+a.min_disparity+", # of Disparities: "+a.num_disparity,title:"Min Disparities: "+a.min_disparity+", # of Disparities: "+a.num_disparity,onClick:e.setDisparity.bind(null,a.min_disparity,a.num_disparity)})))}));return s.a.createElement("div",null,s.a.createElement(N,{isLoading:this.state.isLoading,loadingMessage:this.state.loadingMessage}),s.a.createElement("div",{className:"mb-5"},s.a.createElement("span",{className:"clickable d-flex align-items-center",onClick:this.props.handleOnclickBack},s.a.createElement("img",{className:"mr-3",src:S.a,alt:""})," Back")),s.a.createElement("div",{className:"mb-3"},s.a.createElement("p",null,"Click image that appears to be the clearest (Where objects of interest look distinct)")),s.a.createElement("div",{className:"disparity-maps row justify-content-between"},a))}}]),t}(n.Component),k=a(13),O=a.n(k),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).updateParentState=function(e){a.props.updateState(e)},a.handleOnclickNext=function(){var e=a.props.currentStep+1;a.changeCurrentStep(e)},a.handleOnclickBack=function(){var e=a.props.currentStep-1;e=Math.max(0,e),a.changeCurrentStep(e)},a.changeCurrentStep=function(e){a.props.updateState({currentStep:e})},a.setPoint=function(e,t,n){a.props.updateState(Object(c.a)({},e,{x:t,y:n}))},a.updateParentState=a.updateParentState.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=""!==this.props.files.imageLeft&&""!==this.props.files.imageRight;return s.a.createElement("div",{className:"image-panel col d-flex justify-content-center"},s.a.createElement("div",null,s.a.createElement("div",{className:"image-panel__header d-flex"},s.a.createElement(f.a,{component:null},1===this.props.currentStep&&!e&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement("h2",{className:"mr-auto"},"Please upload your matching left and right  images")),1===this.props.currentStep&&e&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement("div",{className:"text-right ml-auto"},s.a.createElement("button",{type:"button",className:"continue btn btn-primary d-flex align-items-center",onClick:this.handleOnclickNext},"Continue ",s.a.createElement("img",{className:"ml-2",src:O.a,alt:">"})))),this.props.currentStep>4&&s.a.createElement(v.a,{classNames:"fade",timeout:0},this.props.unitchanger))),s.a.createElement(f.a,{component:null},3!==this.props.currentStep&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},s.a.createElement(E,{session:this.props.files.session,idName:"imageLeft",image:this.props.files.imageLeft,imageName:this.props.files.imageRightName,labelText:"Click to Upload Left Image",resizeWidth:this.props.resizeWidth,onImageChange:this.updateParentState,canvasMode:this.props.canvasMode,points:this.props.userPoints,validPoints:this.props.validPoints,setPoint:this.setPoint}),s.a.createElement(f.a,{component:null},1===this.props.currentStep&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement("div",{className:"ml-3"},s.a.createElement(E,{session:this.props.files.session,idName:"imageRight",image:this.props.files.imageRight,imageName:this.props.files.imageRightName,labelText:"Click to Upload Right Image",resizeWidth:this.props.resizeWidth,onImageChange:this.updateParentState,canvasMode:"imageRight",points:this.props.userPoints,validPoints:"",setPoint:this.setPoint}))))))),3===this.props.currentStep&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement(P,{session:this.props.files.session,params:this.props.params,imageWidth:this.props.resizeWidth,imageHeight:this.props.resizeHeight,mapWidth:this.props.resizeWidth/2,mapHeight:this.props.resizeHeight/2,updateState:this.props.updateState,handleOnclickNext:this.props.handleOnclickNext,handleOnclickBack:this.props.handleOnclickBack})),""!==this.props.estimatedDistance&&s.a.createElement("div",{className:"parameter-box d-flex justify-content-between align-items-center mb-4"},s.a.createElement("div",null,s.a.createElement("span",{className:"mr-5"},s.a.createElement("strong",{className:"mr-3"},"Estimated Length:")," ",this.props.estimatedDistance," ",this.props.measureUnit)),s.a.createElement("div",null)),this.props.currentStep>3&&s.a.createElement("div",{className:"parameter-box d-flex justify-content-between align-items-center mb-4"},s.a.createElement("div",null,s.a.createElement("span",{className:"mr-5"},s.a.createElement("strong",{className:"mr-3"},"Reference Length:")," ",this.props.referenceLength," ",this.props.referenceUnit)),s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Edit"))),this.props.currentStep>2&&s.a.createElement("div",{className:"parameter-box d-flex justify-content-between align-items-center mb-4"},s.a.createElement("div",null,s.a.createElement("span",{className:"mr-5"},s.a.createElement("strong",{className:"mr-3"},"Focal Length:")," ",this.props.focalLength," mm"),s.a.createElement("span",null,s.a.createElement("strong",{className:"mr-3"},"Sensor Width: ",this.props.sensorWidth," mm"))),s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Edit")))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).changeSetting=function(e,t){a.props.onSettingsChange(Object(c.a)({},e,t))},a.onChangeHandler=function(e){a.props.onSettingsChange(Object(c.a)({},e.target.name,e.target.value))},a.onClickHandler=function(e){a.predictFocal()},a.state={isLoading:!1,loadingMessage:"Predicting Focal Length..."},a.changeSetting=a.changeSetting.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"predictFocal",value:function(){this.setState({isLoading:!0});var e=new FormData;e.append("image_name",this.props.imageName);var t=new XMLHttpRequest,a=this;t.onreadystatechange=function(){4===this.readyState&&(200===this.status?a.changeSetting("focalLength",this.responseText):a.changeSetting("errorLog",this.responseText),a.setState({isLoading:!1}))},t.open("POST","http://localhost:9000/focal_length"),t.send(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(N,{isLoading:this.state.isLoading,loadingMessage:this.state.loadingMessage}),s.a.createElement("label",{htmlFor:"focalLength"},"Focal Length"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",id:"focalLength",name:"focalLength",className:"form-control",onChange:this.onChangeHandler,value:this.props.focalLength}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{className:"input-group-text"},"mm"))),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("span",null,"Don't know the focal length?"),s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.onClickHandler},"Predict for me")),s.a.createElement("hr",null),s.a.createElement("label",{htmlFor:"sensorWidth"},"Sensor Width"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",id:"sensorWidth",name:"sensorWidth",className:"form-control",onChange:this.onChangeHandler,value:this.props.sensorWidth}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{className:"input-group-text"},"mm"))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).getValidPoints=function(e,t){a.setState({isLoading:!0});var n=new FormData;n.append("image_left_name",a.props.params.imageLeftName),n.append("image_right_name",a.props.params.imageRightName),n.append("focal_length",a.props.params.focalLength),n.append("sensor_width",a.props.params.sensorWidth),n.append("min_disparity",e),n.append("num_disparity",t),n.append("window_size","9");var s=new XMLHttpRequest;s.responseType="json";var i=Object(g.a)(a);s.onreadystatechange=function(){4===this.readyState&&(200===this.status?(i.changeSetting("errorLog",""),i.setValidPoints(this.response.is_valid,this.response.points),i.props.nextStep()):i.changeSetting("errorLog",this.response),i.setState({isLoading:!1}))},s.open("POST","http://localhost:9000/valid_points"),s.send(n)},a.setValidPoints=function(e,t){var n,s,i=parseInt(a.props.imageWidth),r=parseInt(a.props.imageHeight),c=[];for(n=0;n<i;n++)for(c[n]=[],s=0;s<r;s++)c[n][s]=!e;for(n=0;n<t.length;n++){var o=t[n][0],l=t[n][1];c[o][l]=e}a.changeSetting("validPoints",c)},a.changeSetting=function(e,t){a.props.onSettingsChange(Object(c.a)({},e,t))},a.onChangeHandler=function(e){a.props.onSettingsChange(Object(c.a)({},e.target.name,e.target.value))},a.onClickHandler=function(){a.getValidPoints()},a.state={isLoading:!1,loadingMessage:"Calculating valid points on image..."},a.changeSetting=a.changeSetting.bind(Object(g.a)(a)),a.setValidPoints=a.setValidPoints.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(N,{isLoading:this.state.isLoading,loadingMessage:this.state.loadingMessage}),s.a.createElement("label",{htmlFor:"numDisparity"},"Number of Disparity"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",id:"numDisparity",name:"numDisparity",className:"form-control",onChange:this.onChangeHandler,value:this.props.params.numDisparity})),s.a.createElement("hr",null),s.a.createElement("label",{htmlFor:"minDisparity"},"Minimum Disparity"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",id:"minDisparity",name:"minDisparity",className:"form-control",onChange:this.onChangeHandler,value:this.props.params.minDisparity})),s.a.createElement("div",{className:"text-right mt-5"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onClickHandler},"Continue \u203a")))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).updateReferenceUnit=function(e){var t=e.target.value;a.props.updateState({referenceUnit:t,measurenit:t})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",{className:"mb-4"},"Reference Length"),s.a.createElement("p",null,"Click on the image to set two points for your reference length"),s.a.createElement("div",{className:"mt-4 mb-5"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.props.clearPoints},"Clear Reference Points")),s.a.createElement("label",{htmlFor:"referenceLength"},"Length of Reference Measurement"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",id:"referenceLength",name:"referenceLength",className:"form-control",onChange:this.props.onChangeHandler,value:this.props.referenceLength})),s.a.createElement("div",{className:"text-left"},s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{type:"radio",id:"unit-mm",className:"custom-control-input",name:"referenceUnit",value:"mm",checked:"mm"===this.props.referenceUnit,onChange:this.updateReferenceUnit}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"unit-mm"},"mm")),s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{type:"radio",id:"unit-cm",className:"custom-control-input",name:"referenceUnit",value:"cm",checked:"cm"===this.props.referenceUnit,onChange:this.updateReferenceUnit}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"unit-cm"},"cm")),s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{type:"radio",id:"unit-m",className:"custom-control-input",name:"referenceUnit",value:"m",checked:"m"===this.props.referenceUnit,onChange:this.updateReferenceUnit}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"unit-m"},"m")),s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{type:"radio",id:"unit-in",className:"custom-control-input",name:"referenceUnit",value:"in",checked:"in"===this.props.referenceUnit,onChange:this.updateReferenceUnit}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"unit-in"},"in")),s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{type:"radio",id:"unit-ft",className:"custom-control-input",name:"referenceUnit",value:"ft",checked:"ft"===this.props.referenceUnit,onChange:this.updateReferenceUnit}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"unit-ft"},"ft"))))}}]),t}(s.a.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).predictLength=function(){a.setState({isLoading:!0});var e=new FormData;e.append("image_left_name",a.props.params.imageLeftName),e.append("image_right_name",a.props.params.imageRightName),e.append("focal_length",a.props.params.focalLength),e.append("sensor_width",a.props.params.sensorWidth),e.append("min_disparity",a.props.params.minDisparity),e.append("num_disparity",a.props.params.numDisparity),e.append("window_size","9");var t="".concat(a.props.params.referencePt1.x,",").concat(a.props.params.referencePt1.y);t+=",".concat(a.props.params.referencePt2.x,",").concat(a.props.params.referencePt2.y);var n="".concat(a.props.params.measurePt1.x,",").concat(a.props.params.measurePt1.y);n+=",".concat(a.props.params.measurePt2.x,",").concat(a.props.params.measurePt2.y),e.append("reference_points",t),e.append("reference_length",a.props.params.referenceLength),e.append("measurement_points",n);var s=new XMLHttpRequest,i=Object(g.a)(a);s.onreadystatechange=function(){4===this.readyState&&(200===this.status&&i.props.updateAppState({estimatedDistance:Math.round(JSON.parse(this.responseText).distance).toString()}),i.setState({isLoading:!1}))},s.open("POST","http://localhost:9000/estimate_distance"),s.send(e)},a.state={isLoading:!1,loadingMessage:"Measuring distance between selected points..."},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(N,{isLoading:this.state.isLoading,loadingMessage:this.state.loadingMessage}),s.a.createElement("h2",{className:"mb-4"},"Points to Measure"),s.a.createElement("p",null,"Click on the image to set two points you would like the measurement of."),s.a.createElement("div",{className:"mt-4 mb-5"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.props.clearPoints},"Clear Measurement Points")),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("span",null,"Predict Measurement"),s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.predictLength},"Measure")))}}]),t}(s.a.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).clearPoints=function(){var e;a.props.updateState((e={},Object(c.a)(e,a.props.canvasMode+"Pt1",""),Object(c.a)(e,a.props.canvasMode+"Pt2",""),e))},a.onChangeHandler=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,s=t.name;a.props.updateState(Object(c.a)({},s,n))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,{component:null},1!==this.props.currentStep&&3!==this.props.currentStep&&6!==this.props.currentStep&&s.a.createElement(v.a,{key:"sidebar",classNames:"slide",timeout:300},s.a.createElement("div",{className:"side-panel d-flex justify-content-center"},s.a.createElement("div",{className:"side-panel__content"},s.a.createElement(f.a,{component:null},2===this.props.currentStep&&s.a.createElement(v.a,{key:"step2",classNames:"fadeSlide",timeout:300},s.a.createElement("div",{className:"side-panel__entry"},s.a.createElement("div",{className:"mb-5"},s.a.createElement("span",{className:"clickable d-flex align-items-center",onClick:this.props.handleOnclickBack},s.a.createElement("img",{className:"mr-3",src:S.a,alt:">"})," Back")),s.a.createElement("h2",{className:"mb-4"},"Camera Settings"),s.a.createElement(j,{imageName:this.props.params.imageLeftName,focalLength:this.props.params.focalLength,sensorWidth:this.props.params.sensorWidth,onSettingsChange:this.props.updateState}),s.a.createElement("div",{className:"text-right mt-5"},s.a.createElement("button",{type:"button",className:"continue ml-auto btn btn-primary d-flex align-items-center",onClick:this.props.handleOnclickNext},"Continue ",s.a.createElement("img",{className:"ml-2",src:O.a,alt:""})))))),s.a.createElement(f.a,{component:null},3===this.props.currentStep&&s.a.createElement(v.a,{key:"step3",classNames:"fadeSlide",timeout:300},s.a.createElement("div",{className:"side-panel__entry"},s.a.createElement("div",{className:"mb-5"},s.a.createElement("span",{className:"clickable d-flex align-items-center",onClick:this.props.handleOnclickBack},s.a.createElement("img",{className:"mr-3",src:S.a,alt:""})," Back")),s.a.createElement(C,{params:this.props.params,onSettingsChange:this.props.updateState,setValidPoints:this.props.updateState,imageWidth:this.props.calculatedParams.image_width,imageHeight:this.props.calculatedParams.image_height,validPoints:this.props.calculatedParams.validPoints,nextStep:this.props.handleOnclickNext,errorLog:""})))),s.a.createElement(f.a,{component:null},4===this.props.currentStep&&s.a.createElement(v.a,{key:"step4",classNames:"fadeSlide",timeout:300},s.a.createElement("div",{className:"side-panel__entry"},s.a.createElement("div",{className:"mb-5"},s.a.createElement("span",{className:"clickable d-flex align-items-center",onClick:this.props.handleOnclickBack},s.a.createElement("img",{className:"mr-3",src:S.a,alt:""})," Back")),s.a.createElement(x,{referenceLength:this.props.referenceLength,clearPoints:this.clearPoints,referenceUnit:this.props.referenceUnit,onChangeHandler:this.onChangeHandler,updateState:this.props.updateState}),s.a.createElement("div",{className:"text-right mt-5"},s.a.createElement("button",{type:"button",className:"continue ml-auto btn btn-primary d-flex align-items-center",onClick:this.props.handleOnclickNext},"Continue ",s.a.createElement("img",{className:"ml-2",src:O.a,alt:""})))))),s.a.createElement(f.a,{component:null},5===this.props.currentStep&&s.a.createElement(v.a,{key:"step5",classNames:"fadeSlide",timeout:300},s.a.createElement("div",{className:"side-panel__entry"},s.a.createElement("div",{className:"mb-5"},s.a.createElement("span",{className:"clickable d-flex align-items-center",onClick:this.props.handleOnclickBack},s.a.createElement("img",{className:"mr-3",src:S.a,alt:""})," Back")),s.a.createElement(_,{params:this.props.params,updateAppState:this.props.updateState,clearPoints:this.clearPoints,nextStep:this.props.handleOnclickNext,errorLog:""}))))))))}}]),t}(n.Component),M=a(29),D=a.n(M),R=(a(72),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).restart=function(){a.setState({imageLeft:"",imageLeftName:"",imageRight:"",imageRightName:"",focalLength:"",sensorWidth:"",minDisparity:32,numDisparity:96,referencePt1:"",referencePt2:"",referenceLength:"",measurePt1:"",measurePt2:"",estimatedDistance:"",measureUnit:"mm",referenceUnit:"mm",canvasMode:"view",image_width:640,image_height:600,validPoints:"",currentStep:1,errorLog:""})},a.handleStateUpdate=function(e){a.setState(e)},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleOnclickBack=function(){var e=a.state.currentStep-1,t=Math.max(1,e),n="view";4===t&&(n="reference"),5===t&&(n="measure"),a.setState({currentStep:t,canvasMode:n})},a.handleOnclickNext=function(){var e=a.state.currentStep+1,t=Math.min(6,e),n="view";4===t&&(n="reference"),5===t&&(n="measure"),a.setState({currentStep:t,canvasMode:n})},a.getMeasurement=function(){var e=a.state.estimatedDistance;if(""===e)return e;var t=a.state.measureUnit,n=a.state.referenceUnit;return e=u()(e).from(n).to(t),e=Math.round(100*e)/100},a.state={session:Date.now(),imageLeft:"",imageLeftName:"",imageRight:"",imageRightName:"",focalLength:"",sensorWidth:"",minDisparity:32,numDisparity:96,referencePt1:"",referencePt2:"",referenceLength:"",measurePt1:"",measurePt2:"",estimatedDistance:"",measureUnit:"mm",referenceUnit:"mm",canvasMode:"view",image_width:640,image_height:600,validPoints:"",currentStep:1,errorLog:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.getMeasurement(),t={session:this.state.session,imageLeft:this.state.imageLeft,imageRight:this.state.imageRight,imageLeftName:this.state.imageLeftName,imageRightName:this.state.imageRightName},a={referencePt1:this.state.referencePt1,referencePt2:this.state.referencePt2,measurePt1:this.state.measurePt1,measurePt2:this.state.measurePt2},n={imageLeftName:this.state.imageLeftName,imageRightName:this.state.imageRightName,focalLength:this.state.focalLength,sensorWidth:this.state.sensorWidth,minDisparity:this.state.minDisparity,numDisparity:this.state.numDisparity,referencePt1:this.state.referencePt1,referencePt2:this.state.referencePt2,referenceLength:this.state.referenceLength,measurePt1:this.state.measurePt1,measurePt2:this.state.measurePt2},i={estimatedDistance:this.state.estimatedDistance,image_width:this.state.image_width,image_height:this.state.image_height,validPoints:this.state.validPoints},r=s.a.createElement("div",{className:"unit-changer d-flex justify-content-start align-items-center mb-3"},s.a.createElement("h5",{className:"text-nowrap mr-4 mb-0"},"Unit of Measure"),s.a.createElement("div",{className:"input-group"},s.a.createElement("select",{className:"custom-select",name:"measureUnit",value:this.state.measureUnit,onChange:this.handleChange},s.a.createElement("option",{value:"mm"},"mm"),s.a.createElement("option",{value:"cm"},"cm"),s.a.createElement("option",{value:"m"},"m"),s.a.createElement("option",{value:"in"},"inches"),s.a.createElement("option",{value:"ft"},"feet"))));return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar fixed-top"},s.a.createElement("div",{className:"navbar-container d-flex justify-content-between align-items-center"},s.a.createElement("span",{className:"navbar-brand clickable mr-auto",onClick:this.restart},s.a.createElement("img",{src:"logo.png",alt:"Stereoscopic Logo"})),this.state.currentStep>1&&s.a.createElement("span",{className:"clickable d-flex justify-content-between align-items-center",onClick:this.restart},s.a.createElement("img",{src:D.a,className:"redo-circle-svg",alt:"redo"})," Start Over")))),s.a.createElement("div",{className:"Main d-flex justify-content-between"},s.a.createElement(L,{files:t,params:n,estimatedDistance:e,measureUnit:this.state.measureUnit,referenceLength:this.state.referenceLength,referenceUnit:this.state.referenceUnit,focalLength:this.state.focalLength,sensorWidth:this.state.sensorWidth,resizeWidth:this.state.image_width,resizeHeight:this.state.image_height,canvasMode:this.state.canvasMode,validPoints:this.state.validPoints,userPoints:a,currentStep:this.state.currentStep,updateState:this.handleStateUpdate,handleOnclickNext:this.handleOnclickNext,handleOnclickBack:this.handleOnclickBack,unitchanger:r}),s.a.createElement(w,{params:n,calculatedParams:i,canvasMode:this.state.canvasMode,currentStep:this.state.currentStep,updateState:this.handleStateUpdate,referenceUnit:this.state.referenceUnit,handleOnclickNext:this.handleOnclickNext,handleOnclickBack:this.handleOnclickBack})))}}]),t}(n.Component));r.a.render(s.a.createElement("div",{id:"loadContainer"},s.a.createElement(R,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/AngleRight.75bf57e0.svg"}},[[31,1,2]]]);
//# sourceMappingURL=main.ed0d7566.chunk.js.map