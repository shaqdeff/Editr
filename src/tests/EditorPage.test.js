import React from 'react';
import TestRenderer from 'react-test-renderer';
import EditorPage from '../components/EditorPage/EditorPage';

describe('EditorPage', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<EditorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
