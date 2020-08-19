import React from 'react';
import { EaseIn, Text } from 'pk-ui-web';
import YouTube from 'react-youtube';
import styles from './styles';

const Create = () => (
  <EaseIn>
    <div style={styles.container}>
      <Text override={styles.header} bold>
        {`In order to create Icons, you would need to use Adobe XD. This
        can be found `}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://creativecloud.adobe.com/apps/download/xd?promoid=35SVBVP4&mv=other"
          download
        >
          here.
        </a>
      </Text>
      <Text bold override={styles.bottom}>
        Once downloaded, the following tutorial will give
        an indepth in-site and a step by step process of
        how to create icons
      </Text>
      <YouTube
        videoId="vszN2KgNHt4"
        opts={styles.youtube}
      />
    </div>
  </EaseIn>
);

export default Create;
