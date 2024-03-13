import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Input from './Input';
import PrimaryButton from '@/Components/PrimaryButton';
const Edit = ({ auth, contact }) => {

    const initialValues = {
        name: contact.name,
        phone: contact.phone,
        avatar: null,
        visibility: contact.visibility
    }

    const { data, errors, setData, post } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();

        post(route('contact.update', contact));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar contacto</h2>
                    <Link href={route('contact.index')}>Contactos</Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 ">
                            <form onSubmit={submit} className="flex flex-col gap-y-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone" value="Teléfono" />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('phone', e.target.value)}
                                    />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="avatar" value="Avatar" />

                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('avatar', e.target.files[0])}
                                    />

                                    <InputError message={errors.avatar} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="visibility" value="Visibilidad" />

                                    <select
                                        name="visibility"
                                        id="visibility"
                                        defaultValue={contact.visibility}
                                        onChange={(e) => setData('visibility', e.target.value)}
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                        <option value="public">Público</option>
                                        <option value="private">Privado</option>
                                    </select>

                                    <InputError message={errors.avatar} className="mt-2" />
                                </div>

                                <PrimaryButton className='w-fit'>
                                    Editar contacto
                                </PrimaryButton>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Edit;