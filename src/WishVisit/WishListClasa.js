import React, { Component } from 'react';
import Axios from 'axios';
import {SessionContext} from '../Login';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './WishVisit.css';


class WishListClasa extends Component {

    static contextType=SessionContext;

    state = {
        user:'',
        deleted: false,
        updated: false,
        comments: [],
        commentsList: '',
        showModal: false,
    }

    componentDidMount() {
        const commen = this.props.comments;
        this.setState({comments: commen})

    // console.log("props.comment:", this.props.comments);
    }


    handleDelete = async () => {
        const res = await Axios(`http://localhost:3004/wishList?iduser=${this.context.user.id}&idchurch=${this.props.churchId}`);
        
        const churchId = res.data[0].id;
        // console.log("Sters:",churchId);
        
        await Axios.delete(`http://localhost:3004/wishList/${churchId}`)
        this.setState({
            deleted: true
        })
    }
        
    handleAdd =  () => {

        this.handleSubmit = async (e) => {
            e.preventDefault();
            
            // console.log("commentsList:", this.state.commentsList);
    
             const comm = this.state.comments;
             comm.push(this.state.commentsList);
            //  console.log("In handleSubmit, inainte de a seta state:", comm);
             this.setState({
                 comments: comm
             });
            //  console.log("this.state.comments in handleSubmit:", this.state.comments);
             
             const res = await Axios(`http://localhost:3004/wishList?iduser=${this.context.user.id}&idchurch=${this.props.churchId}`);
             
             const wishListID = res.data[0].id;
            //  console.log("wishListID", wishListID);
             
             const info = {
                 iduser: this.context.user.id,
                 idchurch: this.props.churchId,
                 comments: this.state.comments
                };    
                // console.log("inainte de put:", this.state.comments);
                
                await Axios.put(`http://localhost:3004/wishList/${wishListID}`, info)
                .then(res => res.data)
                .then(
                    this.setState({
                        commentsList: ''
                    })
                )
                
            }
            
            this.handleInput = (e) => {
                this.setState({commentsList: e.currentTarget.value});
        
            }
    }
    
    handleShowModal = () => {
        this.setState({showModal: true});
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
        
    }
    
    handleOnClickAdd = () => {
        this.handleAdd();
        this.handleShowModal();
    }
    
    render() {
        if (this.state.deleted) {
            return null;
        }

        return(
            <>
            <div style={{marginTop: "20px"}}> 
                <div className="container-list">
                    <Row>
                        <h5>{ this.props.churchNameList }</h5>
                    </Row>
                    <Row>
                        <p>{this.props.location}</p>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                        <img  src={this.props.image1List} alt="" width="100px" />
                        </Col>
                        <Col xs={6} md={4}>
                        <Button className="btn" variant="success" onClick={ this.handleOnClickAdd } >Adauga comentarii</Button> 
                        </Col>
                        <Col xs={6} md={4}>
                        <Button className="btn" variant="danger" onClick={ this.handleDelete } >Sterge</Button> 
                        </Col>
                    </Row>
                    <Row className="padding-row">
                        <h5>Lista comentariilor facute de tine:</h5>
                    </Row>
                    <Row>
                        <ul>
                            {this.state.comments.map( elem => <li className="list-style" key={elem} >{elem}</li>)}
                        </ul>
                    </Row>
                </div>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleCloseModal} >
                {/*onEntered={this.focusInput} onHide={this.handleCloseModal}*/}
                <Modal.Header closeButton>
                <Modal.Title>Adauga comentariile tale:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comentariul introdus va aparea in lista si va fi pastrat pana stergeti preferinta.</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={this.handleInput} value={this.state.commentsList} />
                        </Form.Group>
                        <Button type="submit" className="btn float-right" variant="primary" onClick={this.handleCloseModal}>Salveaza</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            </>
        );
    }
}

export default WishListClasa;