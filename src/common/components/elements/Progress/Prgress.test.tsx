import { render } from '@testing-library/react';

import { Progress } from '.';

test('Progress test', async () => {
    const { unmount } = render(<Progress />);
    unmount();
});
