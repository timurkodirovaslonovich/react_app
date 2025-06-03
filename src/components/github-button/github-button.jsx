import React from 'react';

import GitHubButton from 'react-github-btn';

import './github-button.css';

const GithubButton = () => (
  <div className="github-button">
    <GitHubButton
      data-icon="octicon-follow"
      data-size="large"
      href="https://github.com/timurkodirovaslonovich"
      aria-label="Follow timurkodirovaslonovich on GitHub"
    >
      Follow
    </GitHubButton>

    <GitHubButton
      data-icon="octicon-star"
      data-size="large"
      href="https://github.com/timurkodirovaslonovich"
      aria-label="Star timurkodirovaslonovich/robobee on GitHub"
    >
      Star
    </GitHubButton>

    <GitHubButton
      data-icon="octicon-repo-forked"
      data-size="large"
      href="https://github.com/timurkodirovaslonovich"
      aria-label="Fork timurkodirovaslonovich/robobee on GitHub"
    >
      Fork
    </GitHubButton>
  </div>
);

export default GithubButton;
