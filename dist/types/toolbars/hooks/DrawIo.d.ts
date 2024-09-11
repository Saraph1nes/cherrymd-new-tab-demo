/**
 * 打开draw.io画图对话框，点击确定后向编辑器插入图片语法
 */
export default class DrawIo extends MenuBase {
    constructor($cherry: any);
    /**
     * 响应点击事件
     * @param {string} selection 被用户选中的文本内容
     * @param {string} shortKey 快捷键参数，本函数不处理这个参数
     * @returns {string} 回填到编辑器光标位置/选中文本区域的内容
     */
    onClick(selection: string, shortKey?: string): string;
}
import MenuBase from "@/toolbars/MenuBase";
