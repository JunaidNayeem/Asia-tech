import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class VideoModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false
        }
    }
    
    openModal = () => {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cUN3NOR-iPA' onClose={() => this.setState({isOpen: false})} />
                <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
            </>
        )
    }
}

export default VideoModal;
