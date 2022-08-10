import React from 'react';
import paperClip from '../../../../assets/images/paperclip-solid.svg';

import './ProjectLink.css';

interface Props {
  link: string;
}

export const ProjectLink = ({ link }: Props) => {
  return (
    <div className="ProjectLink__image-link">
      <img
        src={paperClip}
        className="ProjectLink__image"
        alt="paperclip icon"
      />
      <a href={link} className="ProjectLink__address">
        {link}
      </a>
    </div>
  );
};
