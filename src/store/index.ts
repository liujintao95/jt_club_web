import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import chat from './modules/chat'
import type { ChatState } from './modules/chat'
import type { CommonStore } from './vuex_ts'

// 定义根级State类型
export type RootState = {
    chat: ChatState
}

// 把多个模块聚合在一起
export const modules = {
    chat: chat,
}

export const key: InjectionKey<Store<RootState>> = Symbol()
export const store = createStore<RootState>({
    modules
}) as CommonStore
// 定义自己的 `useStore` 组合式函数
export function useStore(): CommonStore {
    return baseUseStore(key);
}