import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        console.log(location.state )
        if( location.state === undefined ){
            history.push("/React-Movie-app/");
        }
    }
    render(){
        const { location } = this.props;
        const { poster, summary, title, year, genres } = location.state;
        if(location.state){
            return <div className="detail">
                    <img className="detail__poster" src={poster} alt={title} title={title} />
                    <h3 className="detail__title">{title}</h3>
                    <p className="detail__year">{year}</p>
                    <ul className="detail__genres">
                        { genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ) )}
                    </ul>
                    <p className="detail__summary">{summary}</p>

                </div>;
        }else{
            return null;
        }
    }
}

export default Detail;