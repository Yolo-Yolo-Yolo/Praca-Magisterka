import React, {Component} from 'react';
import LoaderGif from '../../assets/img/loader.gif'

class Loading extends Component {

    render() { 

        return ( 
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#F8F8F8AD',
              }}>
                <div style={{
                    left: '50%',
                    top: '30%',
                    position: 'absolute',
                    }}>
                    <img src={LoaderGif} alt='Loading' />
                </div>
            </div>
         );
    }
}

export default Loading;