(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1699:function(n,t){n.exports={content:["section",["p","文件上传"],["h2","何时使用"],["p","需要上传文件时。"]],meta:{category:"Pro Components",subtitle:"上传",type:"Data Entry",title:"Upload",cols:1,filename:"components-pro/upload/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Upload 属性说明如下："],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","accept"],["td","接受上传的文件类型 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"},"input accept Attribute"]],["td","string"],["td"]],["tr",["td","action"],["td","上传的地址"],["td","string"],["td",["code","''"]]],["tr",["td","data"],["td","上传所需参数或返回上传参数的方法"],["td","object","|","fucntion(file)"],["td"]],["tr",["td","headers"],["td","设置上传的请求头部，IE10 以上有效"],["td",["code","object"]],["td"]],["tr",["td","multiple"],["td","是否支持多选，IE10 以上有效"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","name"],["td",["code","<input>"],"元素的 name 字段"],["td","string"],["td",["code","'file'"]]],["tr",["td","uploadImmediately"],["td","是否选择文件后立即上传（若为否，组件自身会提供上传按钮）"],["td",["code","boolean"]],["td",["code","true"]]],["tr",["td","fileListMaxLength"],["td","同时上传文件的最大数量"],["td",["code","number"]],["td",["code","0"],"，表示无限制"]],["tr",["td","defaultFileList"],["td","默认显示的文件列表"],["td",["code","object[]"]],["td","-"]],["tr",["td","uploadFileList"],["td","显示设定的文件列表（可控）"],["td",["code","object[]"]],["td","-"]],["tr",["td","withCredentials"],["td","上传请求时是否携带 cookie"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","appendUpload"],["td","是否以追加形式添加文件至列表中"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","partialUpload"],["td","只上传文件状态不是",["code","success"],"的文件"],["td",["code","boolean"]],["td",["code","true"]]],["tr",["td","beforeUpload"],["td","上传文件之前的钩子，参数为上传的文件，可对文件在上传之前进行校验操作若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。"],["td",["code","(file, fileList) => boolean | Promise"]],["td","-"]],["tr",["td","showPreviewImage"],["td","是否显示图片预览"],["td",["code","boolean"]],["td",["code","true"]]],["tr",["td","showUploadBtn"],["td","是否显示上传按钮"],["td",["code","boolean"]],["td",["code","true"]]],["tr",["td","showUploadList"],["td","是否显示上传列表"],["td",["code","boolean"]],["td",["code","true"]]],["tr",["td","previewImageWidth"],["td","预览图片 Img 元素的宽度"],["td",["code","number"]],["td",["code","100"]]],["tr",["td","onFileChange"],["td","input 元素内部文件变化的回调"],["td",["code","(fileList: UploadFile[]) => void"]],["td","无"]],["tr",["td","onRemoveFile"],["td","点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。"],["td","function(file): boolean"],["td","Promise"],["td","无"]],["tr",["td","onUploadProgress"],["td","上传进度变化的回调"],["td",["code","(percent: number, file: UploadFile) => void"]],["td","无"]],["tr",["td","onUploadSuccess"],["td","上传成功的回调"],["td",["code","(response: any, file: UploadFile) => void"]],["td","无"]],["tr",["td","onUploadError"],["td","上传出错的回调"],["td",["code","(error: Error, response: any, file: UploadFile) => void"]],["td","无"]]]],["p","更多属性请参考 ",["a",{title:null,href:"/components-pro/core/#ViewComponent"},"ViewComponent"],"。"],["h3","UploadFile 类型接口："],["pre",{lang:"ts",highlighted:'<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UploadFile</span> <span class="token punctuation">{</span>\n  uid<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  size<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n  name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  filename<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  lastModified<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  lastModifiedDate<span class="token operator">?</span><span class="token punctuation">:</span> Date<span class="token punctuation">;</span>\n  url<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  status<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string">\'error\'</span> <span class="token operator">|</span> <span class="token string">\'success\'</span> <span class="token operator">|</span> <span class="token string">\'uploading\'</span> <span class="token operator">|</span> <span class="token string">\'done\'</span><span class="token punctuation">;</span>\n  percent<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n  thumbUrl<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  originFileObj<span class="token operator">?</span><span class="token punctuation">:</span> File<span class="token punctuation">;</span>\n  response<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n  error<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n  linkProps<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n  type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  msClose<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","export interface UploadFile {\n  uid: string;\n  size: number;\n  name: string;\n  filename?: string;\n  lastModified?: string;\n  lastModifiedDate?: Date;\n  url?: string;\n  status?: 'error' | 'success' | 'uploading' | 'done';\n  percent?: number;\n  thumbUrl?: string;\n  originFileObj?: File;\n  response?: any;\n  error?: any;\n  linkProps?: any;\n  type: string;\n  msClose?: boolean;\n}"]]]}}}]);