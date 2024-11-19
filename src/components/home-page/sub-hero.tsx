

const partners = ["/companies/heala.svg", "/companies/luminous.png", "/companies/gigbanc.png"];

export default function SubHero(){
    return (
        <section className="space-y-10 max-w-screen-xl mx-auto px-5">
            <div className="flex items-center justify-center gap-20 py-10">
                {partners.map(partner => (
                    <img key={partner} src={partner} alt="Partner" className="w-36"/>
                ))}
            </div>
            '
            <div className="text-center max-w-screen-md mx-auto">
                <h3 className="text-4xl font-bold">
                    Everything you need is right at your fingertips
                </h3>
                <p className="md:text-xl mt-5 text-dark dark:text-light">
                    Lexend is designed to make your work life easier and more efficient.
                </p>
            </div>

            <div className="p-16 rounded-3xl bg-secondary dark:bg-secondary-dark flex items-center justify-center gap-56">
                <div className="text-center">
                    <h1 className="text-primary dark:text-primary-dark text-4xl md:text-6xl font-bold">280+</h1>
                    <p className="text-dark dark:text-light">Track of Leads</p>
                </div>
                <div className="text-center">
                    <h1 className="text-primary dark:text-primary-dark text-4xl md:text-6xl font-bold">90%</h1>
                    <p className="text-dark dark:text-light">Satisfied users</p>
                </div>
                <div className="text-center">
                    <h1 className="text-primary dark:text-primary-dark text-4xl md:text-6xl font-bold">10.2k</h1>
                    <p className="text-dark dark:text-light">Team collaborations</p>
                </div>
            </div>
        </section>
    )
}