function Title(props) {
    const { text, onMouseEnter} = props;

    return <span id="title" onMouseEnter={onMouseEnter}>{text}</span>;
}

export default Title;