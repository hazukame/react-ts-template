import hihi from '../assets/hihi.jpg';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="text-center max-w-4xl mx-auto">
                <img src={hihi} alt="hihi" className="mx-auto mb-8 max-w-md w-full rounded-lg" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={{ color: '#ffffff' }}>
                    React + TypeScript
                </h1>
                <p className="text-base sm:text-lg md:text-xl" style={{ color: '#ffffff' }}>
                    Clean starter template with Tailwind CSS
                </p>
            </div>
        </div>
    );
}
