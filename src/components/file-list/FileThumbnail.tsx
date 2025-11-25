/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React from 'react';
import type { Nullable } from 'tsdef';

import { makeGlobalChonkyStyles } from '../../util/styles';
import classNames from 'classnames';

export interface FileThumbnailProps {
    className: string;
    thumbnailUrl: Nullable<string>;
}

export const FileThumbnail: React.FC<FileThumbnailProps> = (props) => {
    const { className, thumbnailUrl } = props;

    const thumbnailStyle: React.CSSProperties = thumbnailUrl
        ? { backgroundImage: `url('${thumbnailUrl}')` }
        : {};

    const classes = useStyles();
    return (
        <div
            className={classNames([className, classes.fileThumbnail])}
            style={thumbnailStyle}
        />
    );
};
FileThumbnail.displayName = 'FileThumbnail';

const useStyles = makeGlobalChonkyStyles(() => ({
    fileThumbnail: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
    },
}));
