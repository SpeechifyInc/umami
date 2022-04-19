import React from 'react';

import classNames from 'classnames';

import styles from './Footer.module.css';

export default function Footer() {
  return <footer className={classNames(styles.footer, 'row')}></footer>;
}
