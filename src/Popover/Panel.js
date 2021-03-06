import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { PureComponent } from '../component'
import { getPosition } from '../utils/dom/popover'
import { isFunc } from '../utils/is'
import { popoverClass } from '../styles'
import { docSize } from '../utils/dom/document'
import isDOMElement from '../utils/dom/isDOMElement'

const emptyEvent = e => e.stopPropagation()

class Panel extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { show: props.defaultVisible || false }
    this.isRendered = false

    this.placeholderRef = this.placeholderRef.bind(this)
    this.clickAway = this.clickAway.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.setShow = this.setShow.bind(this)

    this.element = document.createElement('div')
  }

  componentDidMount() {
    super.componentDidMount()

    this.parentElement = this.placeholder.parentElement
    if (this.props.trigger === 'hover') {
      this.parentElement.addEventListener('mouseenter', this.handleShow)
      this.parentElement.addEventListener('mouseleave', this.handleHide)
      this.element.addEventListener('mouseenter', this.handleShow)
      this.element.addEventListener('mouseleave', this.handleHide)
    } else {
      this.parentElement.addEventListener('click', this.handleShow)
    }
    this.container = this.getContainer()
    this.container.appendChild(this.element)

    if (this.props.visible) this.forceUpdate()
  }

  componentWillUnmount() {
    super.componentWillUnmount()

    this.parentElement.removeEventListener('mouseenter', this.handleShow)
    this.parentElement.removeEventListener('mouseleave', this.handleHide)
    this.parentElement.removeEventListener('click', this.handleShow)

    document.removeEventListener('click', this.clickAway)
    this.container.removeChild(this.element)
  }

  setShow(show) {
    const { onVisibleChange, mouseEnterDelay, mouseLeaveDelay, trigger } = this.props
    const delay = show ? mouseEnterDelay : mouseLeaveDelay
    this.delayTimeout = setTimeout(
      () => {
        if (onVisibleChange) onVisibleChange(show)
        this.setState({ show })
        if (show && this.props.onOpen) this.props.onOpen()
        if (!show && this.props.onClose) this.props.onClose()
      },
      trigger === 'hover' ? delay : 0
    )
  }

  getPositionStr() {
    let { position } = this.props
    const { priorityDirection } = this.props
    if (position) return position

    const rect = this.parentElement.getBoundingClientRect()
    const horizontalPoint = rect.left + rect.width / 2
    const verticalPoint = rect.top + rect.height / 2
    const windowHeight = docSize.height
    const windowWidth = docSize.width

    if (priorityDirection === 'horizontal') {
      if (horizontalPoint > windowWidth / 2) position = 'left'
      else position = 'right'

      if (verticalPoint > windowHeight * 0.6) {
        position += '-bottom'
      } else if (verticalPoint < windowHeight * 0.4) {
        position += '-top'
      }
    } else {
      if (verticalPoint > windowHeight / 2) position = 'top'
      else position = 'bottom'

      if (horizontalPoint > windowWidth * 0.6) {
        position += '-right'
      } else if (horizontalPoint < windowWidth * 0.4) {
        position += '-left'
      }
    }
    // if (rect.top + rect.height / 2 > windowHeight / 2) {
    //   position = 'top'
    // } else {
    //   position = 'bottom'
    // }

    // if (centerPoint > windowWidth * 0.6) position += '-right'
    // else if (centerPoint < windowWidth * 0.3) position += '-left'

    return position
  }

  getContainer() {
    const { getPopupContainer } = this.props
    let container
    if (getPopupContainer) container = getPopupContainer()
    if (container && isDOMElement(container)) {
      const child = document.createElement('div')
      child.setAttribute('style', ' position: absolute; top: 0px; left: 0px; width: 100% ')
      return container.appendChild(child)
    }
    return document.body
  }

  updatePosition(position) {
    const pos = getPosition(position, this.parentElement, this.container)
    // eslint-disable-next-line
    Object.keys(pos).forEach(attr => {
      this.element.style[attr] = pos[attr]
    })
  }

  placeholderRef(el) {
    this.placeholder = el
  }

  clickAway(e) {
    if (this.parentElement.contains(e.target)) return
    if (this.element.contains(e.target)) return
    this.handleHide(0)
  }

  bindScrollDismiss(show) {
    const { scrollDismiss } = this.props
    if (!scrollDismiss) return
    let target = document
    if (typeof scrollDismiss === 'function') target = scrollDismiss()
    const method = show ? target.addEventListener : target.removeEventListener
    method.call(target, 'scroll', this.handleHide)
  }

  handleShow() {
    if (this.delayTimeout) clearTimeout(this.delayTimeout)
    if (this.state.show) return
    this.bindScrollDismiss(true)
    document.addEventListener('mousedown', this.clickAway)
    this.setShow(true)
  }

  handleHide() {
    if (this.delayTimeout) clearTimeout(this.delayTimeout)
    document.removeEventListener('mousedown', this.clickAway)
    this.bindScrollDismiss(false)
    this.setShow(false)
  }

  render() {
    const { background, border, children, type, visible } = this.props
    const show = typeof visible === 'boolean' ? visible : this.state.show

    if ((!this.isRendered && !show) || !this.parentElement) {
      return <noscript ref={this.placeholderRef} />
    }

    this.isRendered = true

    const colorStyle = { background, borderColor: border }
    const innerStyle = Object.assign({}, this.props.style, { background })
    const position = this.getPositionStr()
    this.element.className = classnames(popoverClass('_', position, type), this.props.className)
    // eslint-disable-next-line
    const style = this.element.style
    this.updatePosition(position)
    style.display = show ? 'block' : 'none'
    if (background) style.background = background
    if (border) style.borderColor = border

    return ReactDOM.createPortal(
      [
        <div key="arrow" className={popoverClass('arrow')} style={colorStyle} />,
        <div key="content" onClick={emptyEvent} className={popoverClass('content')} style={innerStyle}>
          {isFunc(children) ? children(this.handleHide) : children}
        </div>,
      ],
      this.element
    )
  }
}

Panel.propTypes = {
  background: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.any,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  position: PropTypes.string,
  style: PropTypes.object,
  trigger: PropTypes.oneOf(['click', 'hover']),
  type: PropTypes.string,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  defaultVisible: PropTypes.bool,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  className: PropTypes.string,
  priorityDirection: PropTypes.string,
  getPopupContainer: PropTypes.func,
  scrollDismiss: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

Panel.defaultProps = {
  background: '',
  trigger: 'hover',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 500,
  priorityDirection: 'vertical',
}

export default Panel
