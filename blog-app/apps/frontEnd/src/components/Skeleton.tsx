export function BlogSkeleton() {
    return (
        <div role="status" className=" p-4  animate-pulse  md:p-6 ">
            <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-y-1">
                    <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-36 mb-2.5"></div>
                    <div className="w-96 h-3 bg-gray-200 rounded-full "></div>
                    <div className="w-72 h-3 bg-gray-200 rounded-full "></div>
                    <div className="w-32 h-3 bg-gray-200 rounded-full "></div>
                    <div className="w-44 h-3 bg-gray-200 rounded-full "></div>
                    <div className="w-64 h-3 bg-gray-200 rounded-full "></div>
                    <div className="w-32 h-3 bg-gray-200 rounded-full "></div>
                </div>
                <div className="flex h-[120px]  flex-col">
                    <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-36 mb-1"></div>
                    <div className="flex flex-col gap-y-1">
                        <div className="w-24 h-1.5 bg-gray-200 rounded-full "></div>
                        <div className="w-32 h-1.5 bg-gray-200 rounded-full "></div>
                        <div className="w-28 h-1.5 bg-gray-200 rounded-full "></div>

                    </div>
                </div>
            </div>

            <span className="sr-only">Loading...</span>
        </div>
    )
}
export function BlogsSkeleton() {
    return (
        <div role="status" className="mt-2  min-w-[500px] animate-pulse">
            <div className="flex gap-3"> <Circle></Circle>
                <div>
                    <div className="h-3 bg-gray-300 rounded-md  w-60 mb-[3px]"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-48 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded-md w-32"></div>

                </div>
            </div>
            <div className="mt-2">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[450px]  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[450px]  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[364px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[450px]  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[250px]  mb-2.5"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    function Circle() {
        return <div className="bg-gray-200 rounded-full w-7 h-7"></div>
    }
}