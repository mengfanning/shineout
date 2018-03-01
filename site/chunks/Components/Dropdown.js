/**
 * 此文件根据 scripts/components-page.tpl 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'
import locate from 'doc/locate'

import cn from 'doc/pages/components/Dropdown/cn.md'
import en from 'doc/pages/components/Dropdown/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Base'),
    component: require('doc/pages/components/Dropdown/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Dropdown/example-1-base.js'),
  },
  {
    title: locate('hover 触发', 'Hover'),
    component: require('doc/pages/components/Dropdown/example-2-hover.js').default,
    rawText: require('!raw-loader!doc/pages/components/Dropdown/example-2-hover.js'),
  },
  {
    title: locate('弹出位置 position', 'Position'),
    component: require('doc/pages/components/Dropdown/example-3-position.js').default,
    rawText: require('!raw-loader!doc/pages/components/Dropdown/example-3-position.js'),
  },
  {
    title: locate('选项多列平铺', 'Multiple columns'),
    component: require('doc/pages/components/Dropdown/example-4-items.js').default,
    rawText: require('!raw-loader!doc/pages/components/Dropdown/example-4-items.js'),
  },
  {
    title: locate('Button事件', 'Button event'),
    component: require('doc/pages/components/Dropdown/example-5-split.js').default,
    rawText: require('!raw-loader!doc/pages/components/Dropdown/example-5-split.js'),
  },
  {
    title: locate('禁用', 'Disabled'),
    component: require('doc/pages/components/Dropdown/example-6-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Dropdown/example-6-disabled.js'),
  },
]

export default navable(props => <MarkDown {...props} source={source} examples={examples} />)