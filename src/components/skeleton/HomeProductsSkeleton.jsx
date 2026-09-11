import React from 'react'

function HomeProductsSkeleton() {
    return (
        <>
            <div className="mx-20 my-12 ">
                <div className="h-12 w-80 px-20 animate-pulse rounded bg-slate-400" />
                <div className="h-5 w-2/4 my-5 px-20 animate-pulse rounded bg-slate-400" />
            </div>
            <div className='grid grid-cols-4 gap-x-10 mx-20'>
                {
                    Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-[1.75rem] bg-gray-200"
                        >
                            <div className="aspect-[3/4] animate-pulse bg-slate-300" />
                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="h-8 w-full px-20 animate-pulse rounded bg-slate-400" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-96 mt-10 mb-14 mx-auto">
                <div className="h-12 w-44 mx-auto px-20 animate-pulse rounded-2xl bg-slate-400" />
            </div>
        </>
    )
}

export default HomeProductsSkeleton
