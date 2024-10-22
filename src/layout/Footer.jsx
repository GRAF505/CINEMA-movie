function Footer() {
    return (
        <footer className="page-footer #26a69a teal lighten-1">
            <div classNameName="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">REPO</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }