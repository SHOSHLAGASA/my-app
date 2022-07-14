const Header = ({title}) => {
return (
    <header>
        <h1>{title}</h1>
    </header>
)
}

Header.defaultProps = {
    title: 'Tickets to Shtetl Band', 
}
export default Header