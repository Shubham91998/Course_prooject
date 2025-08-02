import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

/**
 * Props:
 * - logo: string (optional, for company/partner logo)
 * - title: string
 * - subtitle: string (optional)
 * - description: string
 * - domain: string (optional, for research/tech domain)
 * - duration: string (optional)
 * - location: string (optional)
 * - type: string (optional, e.g. Remote/Onsite/Hybrid)
 * - skills: array of strings (optional)
 * - stipend: string (optional)
 * - buttonText: string (default: 'Apply Now')
 * - onButtonClick: function (optional)
 */
const OpportunityCard = ({
  logo,
  title,
  subtitle,
  description,
  domain,
  duration,
  location,
  type,
  skills = [],
  stipend,
  buttonText = "Apply Now",
  onButtonClick,
}) => (
  <Card className="h-100 shadow-sm border-0 opportunity-card position-relative overflow-hidden">
    <Card.Body className="text-center d-flex flex-column align-items-center">
      {logo && (
        <div className="mb-2 d-flex justify-content-center align-items-center" style={{height:60}}>
          <img src={logo} alt={title} style={{height:40, maxWidth:100, objectFit:'contain'}} />
        </div>
      )}
      {domain && (
        <Badge bg="primary" className="mb-2 text-uppercase" style={{letterSpacing:1}}>{domain}</Badge>
      )}
      {type && (
        <Badge bg={type === "Remote" ? "info" : type === "Onsite" ? "success" : "warning"} className="mb-2 text-uppercase ms-1" style={{letterSpacing:1}}>{type}</Badge>
      )}
      <Card.Title className="mb-1 fs-5 fw-bold">{title}</Card.Title>
      {subtitle && <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>}
      <Card.Text className="mb-2">{description}</Card.Text>
      {(duration || location) && (
        <div className="mb-2">
          {duration && <Badge bg="secondary" className="me-1">{duration}</Badge>}
          {location && <Badge bg="light" text="dark">{location}</Badge>}
        </div>
      )}
      {skills.length > 0 && (
        <div className="mb-2">
          {skills.map((skill, idx) => (
            <Badge key={idx} bg="primary" className="me-1 mb-1" style={{background:'#6366f1'}}>{skill}</Badge>
          ))}
        </div>
      )}
      {stipend && <div className="mb-2 fw-semibold text-blue-600">{stipend}</div>}
      <Button variant="primary" className="w-100 rounded-pill fw-bold py-2 mt-auto" style={{background:"linear-gradient(90deg,#6366f1,#60a5fa)"}} onClick={onButtonClick}>{buttonText}</Button>
    </Card.Body>
  </Card>
);

export default OpportunityCard;
