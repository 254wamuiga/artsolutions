export default function Loading() {
    return (
        <div className="min-h-screen pt-28 px-8 md:px-16 animate-pulse">
            <div className="max-w-5xl mx-auto">
                <div className="h-3 w-20 bg-muted rounded mb-10" />
                <div className="h-8 w-3/4 bg-muted rounded mb-4" />
                <div className="h-8 w-1/2 bg-muted rounded mb-10" />
                <div className="aspect-video w-full bg-muted rounded-2xl mb-8" />
                <div className="space-y-3">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                    <div className="h-3 bg-muted rounded w-4/6" />
                </div>
            </div>
        </div>
    );
}
