import React from 'react';
import { createRoot } from 'react-dom/client';
import { FullFileBrowser } from '../src';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <div>
        <FullFileBrowser files={[]} />
    </div>
);
