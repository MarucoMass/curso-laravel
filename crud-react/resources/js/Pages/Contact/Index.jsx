import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const Index = ({ auth, contacts }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Contactos</h2>
                    <Link href={route('contact.create')}>Crear contacto</Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-transparent overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-center">

                            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Contactos:</h5>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        View all
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {
                                            contacts.map((contact) => (
                                                <li key={contact.id} className="py-3 sm:py-4">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <img className="size-14 rounded-full" src={`/storage/${contact.avatar}`} alt="" />
                                                        </div>
                                                        <div className="flex-1 min-w-0 ms-4">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                {contact.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                {contact.phone}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                {contact.visibility}
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center gap-x-4 text-base font-semibold text-gray-900 dark:text-white">
                                                            <Link
                                                                className='text-blue-600'
                                                                href={route('contact.edit', [contact])}
                                                            >
                                                                Editar
                                                            </Link>
                                                            <Link
                                                                className='text-red-600'
                                                                href={route('contact.destroy', [contact])}
                                                                method='delete'
                                                            >
                                                                Eliminar
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index