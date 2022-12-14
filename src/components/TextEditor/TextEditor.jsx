import React from 'react';
import uid from '../../helpers/uid';
import TextBlock from '../TextBlock/TextBlock';
import { setCursorToEnd } from '../../helpers/cursorSet';
import '../../index.css';

const initialBlock = { id: uid(), html: '', tag: 'p' };

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updatePageHandler = this.updatePageHandler.bind(this);
    this.addBlockHandler = this.addBlockHandler.bind(this);
    this.deleteBlockHandler = this.deleteBlockHandler.bind(this);
    this.state = { blocks: [initialBlock] };
  }

  updatePageHandler(updatedBlock) {
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html,
    };
    this.setState({ blocks: updatedBlocks });
  }

  addBlockHandler(currentBlock) {
    const newBlock = { id: uid(), html: '', tag: 'p' };
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    this.setState({ blocks: updatedBlocks }, () => {
      currentBlock.ref.nextElementSibling.focus();
    });
  }

  deleteBlockHandler(currentBlock) {
    // Only delete the block, if there is a preceding one
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const blocks = this.state.blocks;
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      this.setState({ blocks: updatedBlocks }, () => {
        setCursorToEnd(previousBlock);
        previousBlock.focus();
      });
    }
  }

  render() {
    return (
      <div className="Page">
        {this.state.blocks.map((block, key) => {
          return (
            <TextBlock
              key={key}
              id={block.id}
              tag={block.tag}
              html={block.html}
              updatePage={this.updatePageHandler}
              addBlock={this.addBlockHandler}
              deleteBlock={this.deleteBlockHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default TextEditor;
