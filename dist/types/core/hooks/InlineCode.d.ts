export default class InlineCode extends ParagraphBase {
    makeHtml(str: any): any;
    rule(): {
        begin: string;
        end: string;
        content: string;
    };
}
import ParagraphBase from "@/core/ParagraphBase";
