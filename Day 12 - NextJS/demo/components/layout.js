export default function Layout({ children }) {
    return (
        <div className="container">
            <p>This is layout content - on top</p>
            {children}
            <p>This is layout content - on bottom</p>
        </div>
    );
}