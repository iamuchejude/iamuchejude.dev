import { css } from 'frontity';
import { externalLinksStyle, questStyle } from './styles';

export const externalLinks = {
  name: 'external-links',
  priority: 1,
  test: ({ node }) =>
    node.component === 'a' && String(node.props?.href).startsWith('http'),
  processor: ({ node }) => ({
    ...node,
    props: {
      ...node.props,
      css: css`
        ${node.props.css}
        ${externalLinksStyle}
      `,
    },
  }),
};

export const quest = {
  name: 'quest',
  priority: 1,
  test: ({ node }) =>
    node.component === 'figure' &&
    String(node.props?.className).includes(' quest'),
  processor: ({ node }) => ({
    ...node,
    props: {
      ...node.props,
      css: css`
        ${node.props.css}
        ${questStyle}
      `,
    },
  }),
};
