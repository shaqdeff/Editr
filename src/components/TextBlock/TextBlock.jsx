import React from 'react';
import ContentEditable from 'react-contenteditable';
import { getCursorCoordinates, setCursorToEnd } from '../../helpers/cursorSet';
import './TextBlock.css';

const CMD_KEY = '/';

class TextBlock extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.openSelectMenuHandler = this.openSelectMenuHandler.bind(this);
    this.closeSelectMenuHandler = this.closeSelectMenuHandler.bind(this);
    this.tagSelectionHandler = this.tagSelectionHandler.bind(this);
    this.contentEditable = React.createRef();
    this.state = {
      htmlBackup: null,
      html: '',
      tag: 'p',
      previousKey: '',
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
    };
  }

  componentDidMount() {
    this.setState({ html: this.props.html, tag: this.props.tag });
  }

  componentDidUpdate(prevProps, prevState) {
    const htmlChanged = prevState.html !== this.state.html;
    const tagChanged = prevState.tag !== this.state.tag;
    if (htmlChanged || tagChanged) {
      this.props.updatePage({
        id: this.props.id,
        html: this.state.html,
        tag: this.state.tag,
      });
    }
  }

  onChangeHandler(e) {
    this.setState({ html: e.target.value });
  }

  onKeyDownHandler(e) {
    if (e.key === CMD_KEY) {
      this.setState({ htmlBackup: this.state.html });
    }
    if (e.key === 'Enter') {
      if (this.state.previousKey !== 'Shift' && !this.state.selectMenuIsOpen) {
        e.preventDefault();
        this.props.addBlock({
          id: this.props.id,
          ref: this.contentEditable.current,
        });
      }
    }
    if (e.key === 'Backspace' && !this.state.html) {
      e.preventDefault();
      this.props.deleteBlock({
        id: this.props.id,
        ref: this.contentEditable.current,
      });
    }
    this.setState({ previousKey: e.key });
  }

  onKeyUpHandler(e) {
    if (e.key === CMD_KEY) {
      this.openSelectMenuHandler();
    }
  }

  openSelectMenuHandler() {
    const { x, y } = getCursorCoordinates();
    this.setState({
      selectMenuIsOpen: true,
      selectMenuPosition: { x, y },
    });
    document.addEventListener('click', this.closeSelectMenuHandler);
  }

  closeSelectMenuHandler() {
    this.setState({
      htmlBackup: null,
      selectMenuIsOpen: false,
      selectMenuPosition: { x: null, y: null },
    });
    document.removeEventListener('click', this.closeSelectMenuHandler);
  }

  tagSelectionHandler(tag) {
    this.setState({ tag: tag, html: this.state.htmlBackup }, () => {
      setCursorToEnd(this.contentEditable.current);
      this.closeSelectMenuHandler();
    });
  }

  render() {
    return (
      <>
        <ContentEditable
          className="text-block"
          innerRef={this.contentEditable}
          html={this.state.html}
          tagName={this.state.tag}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyUp={this.onKeyUpHandler}
          placeholder={'Type / for blocks, @ to link docs or people'}
        />
      </>
    );
  }
}

export default TextBlock;
