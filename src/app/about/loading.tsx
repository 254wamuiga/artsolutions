export default function Loading() {
    return (
        <div className="min-h-screen pt-32 px-8 md:px-24 pb-32 max-w-5xl mx-auto animate-pulse">
            <div className="h-3 w-24 bg-muted rounded mb-6" />
            <div className="h-14 w-3/4 bg-muted rounded mb-24" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-4">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                    <div className="h-3 bg-muted rounded w-4/6" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-3/4" />
                </div>
                <div className="space-y-4">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                </div>
            </div>
        </div>
    );
}
