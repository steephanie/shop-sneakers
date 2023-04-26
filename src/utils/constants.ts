import { Platform } from 'react-native'

import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper'

export const statusBarHeight =
  Platform.OS === 'ios' ? 0 : `${getStatusBarHeight()}px`

export const bottomSpaceHeight = `${getBottomSpace() + 24}px`
