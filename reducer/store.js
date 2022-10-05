/**
 최초만든이 : Lucas.choi
 생성일 : 2021-11-22
 */

import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './index'

const makeStore = (_) => createStore(rootReducer)
const isProduction = process.env.NEXT_PUBLIC_ENV_NAME == 'production'
export const wrapper = createWrapper(makeStore, { debug: !isProduction })
