##Model 组件使用规范 ###参数
visible{boolean} 设置 Model 弹框的显示隐藏
默认值：false
可选参数：true | false

type{string} 设置 Model 弹框的大小
默认值：simple
可选参数:simple(正常) | small(小号) | large(大号)

maskClosable{string} 设置是否可通过点击阴影区域关闭弹出框
注意：此参数需要与 onClose()事件函数一起使用
默认值：true
可选参数:true | false

###事件
onClose(){function} 设置关闭弹框的回调函数

=============================================================
##Model.Head 组件使用规范 ###参数
title{string} 设置标题 title 文本内容
默认值：null

###事件
onClose(){function} 设置关闭弹框的回调函数

=============================================================
##Model.Body 组件使用规范 ###参数

###事件

==========================================================
##Model.Foot 组件使用规范 ###参数

###事件
onClose(){function} 设置关闭弹框的回调函数

onSubmit(){function} 设置确认操作执行的回调函数
