/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 复制内容到剪贴板
 * @returns null
 */
export function copyToClip(str: any): void;
/**
 * 复制文本内容到剪贴板
 * @param {string} str 复制文本
 */
export function copyByInput(str: string): void;
/**
 * 复制文本
 * @param {string} str 复制文本
 * @returns
 */
export function copyTextByClipboard(str: string): Promise<void>;
