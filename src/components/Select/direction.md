##Select 组件使用规范 ###参数
open{boolean} 控制 options 下拉的显示与隐藏
默认值：false
可选参数:true | false

defaultValue{string} 默认选中的值

###事件
onSelect | 选择 option 下拉项时触发的回调，参数 value 为选中的 option 的 value 值
onSelect(value){function}

onAdd(当使用<Select.Add/>组件时可使用该函数) | 执行当点击新增 option 下拉项时触发的回调,无参数
onAdd(){function}
====================================================================
##Select.Search 组件使用规范 ###参数

###事件
onRequest() | 当触发 onSearch 输入搜索匹配任务之后执行的回调函数，可进行后端接口的请求
onRequest(){function}

====================================================================

##Select.Add 组件使用规范 ###参数
text{string} 设置新增字样
默认值:“新增”

hide{boolean} 控制点击完该行是否隐藏 option 下拉部分
默认值:false
可选参数:true | false

###事件

=======================================================================
Select.Option ======> 通用型 Select 下拉框内容
Select.Search ======> Select 搜索功能下拉项
Select.Add ======> Select 添加功能下拉项
