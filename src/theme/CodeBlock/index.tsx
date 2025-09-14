import React, { useState } from 'react';
import type { Props } from '@theme/CodeBlock';
import CodeBlock from '@theme-original/CodeBlock';
import styles from './styles.module.css';

export default function CodeBlockWrapper(props: Props): JSX.Element {
  // State to track if the code should be formatted or shown as raw text.
  // Default is 'true' to show the formatted version first.
  const [isFormatted, setIsFormatted] = useState(true);

  // Function to toggle between formatted and raw modes
  const toggleMode = (): void => {
    setIsFormatted(!isFormatted);
  };

  return (
    <div className={styles.codeBlockWrapper}>
      {/* Our custom toggle button */}
      <button
        type="button"
        className={styles.toggleButton}
        onClick={toggleMode}
      >
        {isFormatted ? 'Show Raw Text' : 'Show Formatted Code'}
      </button>

      {/* Use a ternary operator to switch between the two views.
      */}
      {isFormatted ? (
        // View 1: The original, syntax-highlighted code block
        <div className={styles.codeblockTop}>
          <CodeBlock {...props} />
        </div>
      ) : (
        // View 2: A simple <pre> block for the raw text view.
        // We reuse Docusaurus's 'theme-code-block' class to maintain
        // the same background, padding, and border radius for a seamless transition.
        <div className="">
          <pre className={styles.rawTextPre}>
            <div>{props.children}</div>
          </pre>
        </div>
      )}
    </div>
  );
}