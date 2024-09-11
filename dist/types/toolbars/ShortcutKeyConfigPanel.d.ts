export default class ShortcutKeyConfigPanel {
    /**
     *
     * @param {Partial<import('@/Cherry').default> & {$currentMenuOptions?:import('../../types/menus').CustomMenuConfig}} $cherry
     */
    constructor($cherry: Partial<import('@/Cherry').default> & {
        $currentMenuOptions?: import('../../types/menus').CustomMenuConfig;
    });
    $cherry: Partial<import("@/Cherry").default> & {
        $currentMenuOptions?: import('../../types/menus').CustomMenuConfig;
    };
    shortcutUlClassName: string;
    shortcutUlId: string;
    shortcutConfigPanelKbdClassName: string;
    shortcutKeyboardKeyClassName: string;
    handleDbClick: (e: MouseEvent) => void;
    init(): void;
    dom: HTMLDivElement;
    generateShortcutKeyConfigPanelHtmlStr(): string;
    /**
     * 显示快捷键配置面板
     */
    show(): void;
    hide(): void;
    isShow(): boolean;
    isHide(): boolean;
    /**
     * 展示/隐藏快捷键配置面板
     * @param {HTMLElement} settingsDom
     */
    toggle(settingsDom: HTMLElement): void;
}
