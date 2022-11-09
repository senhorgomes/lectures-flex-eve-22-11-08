import { useState } from 'react';

const hello = () => {
    const [value, setValue] = useState(0);
    return value
}