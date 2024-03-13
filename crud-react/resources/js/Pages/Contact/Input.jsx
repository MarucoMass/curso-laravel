import React from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
const Input = ({ name, data, errors, setData }) => {
    return (
        <div>
            <InputLabel htmlFor={name} value={name} />

            <TextInput
                id={name}
                type={name}
                name={name}
                value={data.name}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={(e) => setData({ name }, e.target.value)}
            />

            <InputError message={errors.name} className="mt-2" />
        </div>
    )
}

export default Input