import { LoaderCircle } from 'lucide-react';

const PageLoading = () => {
    return (
        <div className="flex items-center justify-center h-[400px]">
            <p className="sr-only">Loading Page</p>
            <LoaderCircle size={42} className="animate-spin"/>
        </div>
    )
}

export default PageLoading
