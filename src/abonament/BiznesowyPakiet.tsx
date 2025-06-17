import { useState } from "react";
import { Card } from "react-bootstrap";

const BiznesowyPakiet = ({ title, emoji, description, details, price }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Card style={{ width: '18rem', cursor: 'pointer' }} className="shadow-sm border" onClick={() => setExpanded(!expanded)}>
            <Card.Body>
                <Card.Title className="text-danger">{emoji} {title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {expanded && (
                    <div className="mt-3 text-muted small">
                        {details}
                       
                    </div>
                     
                )}
                {price && (
                    <h6 className="text-danger mt-3">{price}</h6>
                )}
            </Card.Body>
        </Card>
    );
};
export default BiznesowyPakiet;