import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import MessageBox from './MessageBox';
import VideoPlayer from '../VideoPlayer';
import Button from '../common/Button'

function StreamPlay({streamKey, playBackId, onButtonClick}) {
    return (
        <>
        <Container>
            <Row>
                < MessageBox message={streamKey} />
                < VideoPlayer playbackId={playBackId} />
                <div className="text-center">
                    <Button color="#FE6C59" hoverColor="#F08C99" text={"Load Stream"} onClick={onButtonClick} />
                </div>
            </Row>
        </Container>
    </>
    )
}

export default StreamPlay
