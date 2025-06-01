'use client';
const FilterError = ({ error }) => <div id='error'>
    <h2>An Error Occurred!</h2>
    <p>{error?.message || String(error)}</p>
</div>;

export default FilterError;