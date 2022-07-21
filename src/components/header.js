const Header = (props) => {
return (
    <header>
        <h1>{props.title}</h1>
    </header>
)
}

// Header.defaultProps = {
//     title: 'Tickets to Shtetl Band', 
// }
export default Header