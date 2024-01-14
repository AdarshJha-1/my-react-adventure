const Header = () => {
    return(
    <header>
        <nav className="w-full h-16 bg-slate-900 flex justify-between items-center px-4 py-1">
            <div className="rounded-full bg-red-700 overflow-hidden">
                <img className="w-12" src="https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.17044360120951185.jpg" alt="logo" />
            </div>
            <div className="w-1/2 flex items-center justify-end gap-7">
                <input className="w-3/6 h-10" type="text" />
                <button className="w-1/5 h-12 bg-slate-950 hover:bg-black    text-white font-semibold rounded-3xl">Sign-up</button>
                <button className="w-1/5 h-12 bg-slate-950 text-white font-semibold rounded-3xl">Login</button>
            </div>
        </nav>
    </header>
    )
}

export default Header