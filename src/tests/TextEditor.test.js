import React from 'react';
import TestRenderer from 'react-test-renderer';
import TextEditor from '../components/TextEditor/TextEditor';

describe('TextEditor', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<TextEditor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
