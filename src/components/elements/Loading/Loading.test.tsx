import { render } from '@testing-library/react';

import { Loading } from '.';

test('Loading test', async () => {
    const { unmount } = render(<Loading state />);
    unmount();
});
