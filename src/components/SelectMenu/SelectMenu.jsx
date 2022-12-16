import React from 'react';
import { RxText } from 'react-icons/rx';
import { matchSorter } from 'match-sorter';
import './SelectMenu.css';

const MENU_HEIGHT = 30;
const allowedTags = [
  {
    id: 'heading1',
    tag: 'h1',
    label: 'Heading 1',
  },
  {
    id: 'heading2',
    tag: 'h2',
    label: 'Heading 2',
  },
];

class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.state = {
      command: '',
      items: allowedTags,
      selectedItem: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    const command = this.state.command;
    if (prevState.command !== command) {
      const items = matchSorter(allowedTags, command, { keys: ['tag'] });
      this.setState({ items: items });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler);
  }

  keyDownHandler(e) {
    const items = this.state.items;
    const selected = this.state.selectedItem;
    const command = this.state.command;

    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        this.props.onSelect(items[selected].tag);
        break;
      case 'Backspace':
        if (!command) this.props.close();
        this.setState({ command: command.substring(0, command.length - 1) });
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevSelected = selected === 0 ? items.length - 1 : selected - 1;
        this.setState({ selectedItem: prevSelected });
        break;
      case 'ArrowDown':
      case 'Tab':
        e.preventDefault();
        const nextSelected = selected === items.length - 1 ? 0 : selected + 1;
        this.setState({ selectedItem: nextSelected });
        break;
      case 'Control':
      case 'Shift':
        e.preventDefault();
        break;
      case 'Alt':
        e.preventDefault();
        this.props.close();
        break;
      case 'Command':
      case 'Meta':
        e.preventDefault();
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault();
        this.props.close();
        break;
      case 'Escape':
        e.preventDefault();
        this.props.close();
        break;
      default:
        this.setState({ command: this.state.command + e.key });
        break;
    }
  }

  render() {
    const x = this.props.position.x;
    const y = this.props.position.y - MENU_HEIGHT;
    const positionAttributes = { top: y, left: x };

    return (
      <div className="select-popup" style={positionAttributes}>
        <div className="items">
          {this.state.items.map((item, key) => {
            const selectedItem = this.state.selectedItem;
            const isSelected = this.state.items.indexOf(item) === selectedItem;
            return (
              <div
                className={isSelected ? 'selected' : null}
                key={key}
                role="button"
                tabIndex="0"
                onClick={() => this.props.onSelect(item.tag)}>
                <RxText style={{ fontSize: '24px', color: '#707070' }} />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SelectMenu;
