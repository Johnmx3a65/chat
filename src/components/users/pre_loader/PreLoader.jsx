import preLoader from "../../../assets/images/Spin-1s-200px.svg";

const PreLoader = (props) => {
    return <img style={props.style || {}} src={preLoader} alt={'preloader'}/>;
}

export default PreLoader;