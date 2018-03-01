import React from 'react';
import firebase from '../config/firebase';
import Modal from 'react-modal';

import Reply from './reply';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'auto',
        height: '500px'
    }
};

class Replies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.renderReplies = this.renderReplies.bind(this);
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }

    openModal(event) {
        event.preventDefault();
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    renderReplies(Replies) {
        if (Replies) {
            const repliesList = Replies.map((reply) => {
                return <Reply key={reply.id_str} Reply={reply} />
            });
            return (repliesList);
        } else {
            return (<div>No Tweets for this Topic.</div>);
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <a href="#"><i className="material-icons" onClick={this.openModal}>textsms</i></a>
                    <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                        {this.renderReplies(this.props.Replies)}
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Replies;