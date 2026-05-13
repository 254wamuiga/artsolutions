export default function Loading() {
    return (
        <div className="min-h-screen pt-32 px-8 md:px-16 animate-pulse">
            <div className="max-w-7xl mx-auto">
                <div className="h-3 w-24 bg-muted rounded mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-video bg-muted rounded-2xl" />
                    ))}
                </div>
            </div>
        </div>
    );
}
