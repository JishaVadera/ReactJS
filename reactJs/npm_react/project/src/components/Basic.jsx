import Card from 'react-bootstrap/Card'

function Basic() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img class='h-48' variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>Hellow</Card.Title>
                <Card.Text class='pt-2 pb-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default Basic