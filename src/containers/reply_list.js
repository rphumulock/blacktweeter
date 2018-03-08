/* Firebase */
import firebase from '../config/firebase';
/* React */
import React from 'react';
import Modal from 'react-modal';
import { Collapsible, CollapisbleItem } from 'react-materialize';
/* Custom */
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

class ReplyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    componentWillMount() {
        Modal.setAppElement('body');
    };

    openModal(event) {
        event.preventDefault();
        this.setState({ modalIsOpen: true });
    };

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    };

    closeModal() {
        this.setState({ modalIsOpen: false });
    };

    mapReplies() {
        if (this.props.Replies) {
            return this.props.Replies.map((reply) => {
                return (<Reply key={reply.id_str} Reply={reply} />);
            });
        };
    };

    renderReplies() {
        return (this.props.Replies ? this.mapReplies() : (<div className="tweet-block">There are no replies for this tweet.</div>));
        /*const replies = this.props.Replies;
        if (replies) {
            return replies.map((reply) => {
                return <Reply key={reply.id_str} Reply={reply} />
            });
        } else {
            repliesList = (<div>No Tweets for this Topic.</div>);
        };*/
    };

    renderModal() {
        const repliesList = this.renderReplies();
        return (
            <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} overlayClassName="Overlay" contentLabel="Modal">
                <strong>REPLY LIST</strong>
                <Collapsible popout accordion>
                    {repliesList}
                </Collapsible>
            </Modal>
        );
    }

    render() {
        return (
            <div className="tweet-replies vertical-align">
                <a><i className="material-icons" onClick={this.openModal}>textsms</i></a>
                {this.renderModal()}
            </div>
        );
    };
}

export default ReplyList;