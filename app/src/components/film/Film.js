import React, { Component } from 'react'
import { Modal, Button, Panel, FormGroup, Thumbnail, Col, Row } from  'react-bootstrap';
import NoRoom from '../../images/no-room.jpg';

class Film extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        }
    };

    close = () => {
        this.setState({ showModal: false });
    };

    open = () => {
        this.setState({ showModal: true });
    };

    render() {
        const { film } = this.props;

        return(
            <div>
                <Panel
                    onClick={ this.open }
                    className="tile"
                >
                    <FormGroup>
                        { film.poster ? (
                            <Thumbnail src={ film.poster }/>
                        ) : (
                            <Thumbnail src={NoRoom}/>
                        )}
                    </FormGroup>

                    <FormGroup className="film-title">
                        { film.title }
                    </FormGroup>

                    <div className="plug">
                        <button>View more</button>
                    </div>
                </Panel>

                <Modal
                    show={ this.state.showModal }
                    onHide={ this.close }
                    >

                    <Modal.Header closeButton>
                        <Modal.Title>{ film.title }</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col xs={12}>
                                { film.poster ? (
                                    <Thumbnail src={ film.poster }/>
                                ) : (
                                    <Thumbnail src={NoRoom}/>
                                )}
                            </Col>

                            <Col xs={12}>
                                <label>Title: </label>
                                <span>{ film.title }</span>
                            </Col>

                            <Col xs={12}>
                                <label>Year: </label>
                                <span>{ film.year }</span>
                            </Col>

                            <Col xs={12}>
                                <label>Rating: </label>
                                <span>{ film.imdbRating }</span>
                            </Col>

                            <Col xs={12}>
                                <label>IMDB votes: </label>
                                <span>{ film.imdbVotes }</span>
                            </Col>

                            <Col xs={12}>
                                <label>Language: </label>
                                <span>{ film.language }</span>
                            </Col>

                            {
                                film.genres !== undefined && film.genres.length > 0 &&

                                <Col xs={12}>
                                    <label>Genres: </label>
                                    {
                                        film.genres.map((item) => (
                                            <span key={ item.name }>
                                            { item.name },
                                        </span>
                                        ))
                                    }
                                </Col>
                            }

                            <Col xs={12}>
                                <label>Released: </label>
                                <span>{ film.released }</span>
                            </Col>

                            <Col xs={12}>
                                <label>Run-time: </label>
                                <span>{ film.runtime }</span>
                            </Col>

                            <Col xs={12}>
                                <label>Year: </label>
                                <span>{ film.year }</span>
                            </Col>

                            <Col xs={12}>
                                <label>Plot: </label>
                                <span>{ film.plot }</span>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ this.close }>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

export default Film;