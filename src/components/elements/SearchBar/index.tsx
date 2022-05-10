import { ChangeEvent, useState } from 'react';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <label htmlFor="movie">What</label>
            <input
                type="text"
                list="movie-options"
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputValue(e.currentTarget.value);
                }}
            />
            <datalist id="movie-options">
                <option value="Dune" />
                <option value="Dark Waters" />
                <option value="The Artist" />
                <option value="Iron Man" />
                <option value="Iron Main II" />
                <option value="Matrix III" />
            </datalist>
            <p>{inputValue}</p>
        </>
    );
};
