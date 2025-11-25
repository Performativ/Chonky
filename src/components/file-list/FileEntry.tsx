import React, { useState } from 'react';
import type { Nullable } from 'tsdef';

import { selectFileData, selectIsFileSelected } from '../../redux/selectors';
import { useParamSelector } from '../../redux/store';
import type { FileEntryProps } from '../../types/file-list.types';
import { FileViewMode } from '../../types/file-view.types';
import { FileHelper } from '../../util/file-helper';
import { makeGlobalChonkyStyles } from '../../util/styles';
import {
    ClickableWrapper,
    type ClickableWrapperProps,
} from '../internal/ClickableWrapper';
import { CompactEntry } from './CompactEntry';
import { useFileClickHandlers } from './FileEntry-hooks';
import { GridEntry } from './GridEntry';
import { ListEntry } from './ListEntry';

export interface SmartFileEntryProps {
    fileId: Nullable<string>;
    displayIndex: number;
    fileViewMode: FileViewMode;
}

export const SmartFileEntry: React.FC<SmartFileEntryProps> = React.memo(
    ({ fileId, displayIndex, fileViewMode }) => {
        const classes = useStyles();

        // Basic properties
        const file = useParamSelector(selectFileData, fileId) ?? null;
        const selected = useParamSelector(selectIsFileSelected, fileId);

        // Clickable wrapper properties
        const fileClickHandlers = useFileClickHandlers(file, displayIndex);
        const [focused, setFocused] = useState(false);
        const clickableWrapperProps: ClickableWrapperProps = {
            wrapperTag: 'div',
            passthroughProps: { className: classes.fileEntryClickableWrapper },
            ...(FileHelper.isClickable(file) ? fileClickHandlers : undefined),
            setFocused,
        };

        // File entry properties
        const fileEntryProps: Omit<FileEntryProps, 'dndState'> = {
            file,
            selected,
            focused,
        };

        let EntryComponent: React.FC<FileEntryProps>;
        if (fileViewMode === FileViewMode.List) EntryComponent = ListEntry;
        else if (fileViewMode === FileViewMode.Compact) EntryComponent = CompactEntry;
        else EntryComponent = GridEntry;

        return (
            <ClickableWrapper {...clickableWrapperProps}>
                <EntryComponent {...fileEntryProps} />
            </ClickableWrapper>
        );
    }
);
SmartFileEntry.displayName = 'SmartFileEntry';

const useStyles = makeGlobalChonkyStyles(() => ({
    fileEntryClickableWrapper: {
        // We disable default browser outline because Chonky provides its own outline
        // (which doesn't compromise accessibility, hopefully)
        outline: 'none !important',
        position: 'relative',
        height: '100%',
    },
}));
