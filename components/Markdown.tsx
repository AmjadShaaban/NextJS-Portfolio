import React, { FC } from 'react';
import ReactMarkdown, { MarkdownOptions, MarkdownProps } from 'markdown-to-jsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
}));

const MarkdownListItem: FC<TypographyProps> = props => {
  const classes = useStyles();
  return (
    <li className={classes.listItem}>
      <Typography component='span' {...props} />
    </li>
  );
};
const options: MarkdownOptions = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5'
      }
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' }
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true }
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: MarkdownListItem
    }
  }
};

const Markdown: FC<{
  options: MarkdownOptions;
  props: MarkdownProps;
}> = ({ options, props }) => {
  return <ReactMarkdown options={options} {...props} />;
};
export default Markdown;
